const { InstanceStatus, TCPHelper } = require('@companion-module/base')

module.exports = {
	buildCommand(cmd, handshake, params) {
		let builtCmd = ''

		builtCmd += cmd
				+ ' '
				+ handshake
				+ ' '
				+ this.CONTROL_MODELID
				+ ' '
				+ this.CONTROL_UNITNUMBER
				+ ' '
				+ this.CONTROL_CONTINUESELECT
				+ ' '
				+ params
				+ ' '
				+ this.CONTROL_END;

		//console.log('builtCmd: ' + builtCmd);
		return builtCmd
	},

	processError(response) {

		let errorReturn = response.split(' ');

		let errorCode = errorReturn[2];

		let errorType = '';

		switch(errorCode) {
			case '01': // Grammar error
				break
			case '02': // Invalid command
				break
			case '03': // Divided Transmission error
				break
			case '04': // Parameter error
				errorType = 'Parameter error';
				break
			case '05': // Transmit timeout
				break
			case '90': // Busy
				break
			case '92': // Busy (Safe Mode)
				break
			case '93': // Busy (Extension)
				break
			case '99': // Other
				break
		}

		this.log('error', `Error: ${response} Error type: ${errorType}`);
	},

	setUpInternalDataArrays() {
		let model = this.MODELS.find((model) => model.id == this.config.model);

		if (model.data_request.includes('input_gain_level')) {
			this.DATA.input_gain_levels = [];
		}
	},

	initTCP() {
		let self = this;
		
		let pipeline = ''

		if (this.socket !== undefined) {
			this.socket.destroy()
			delete this.socket
		}

		if (this.config.port === undefined) {
			this.config.port = 17300
		}

		if (this.config.host) {
			this.socket = new TCPHelper(this.config.host, this.config.port)

			this.socket.on('status_change', (status, message) => {
				this.updateStatus(status, message)
			})

			this.socket.on('error', (err) => {
				this.log('error', 'Network error: ' + err.message)
				this.updateStatus(InstanceStatus.ConnectionFailure)
				clearInterval(this.pollTimer);
				this.socket.destroy()
				this.socket == null
			})

			this.socket.on('connect', () => {
				self.cmdPipe = [];

				this.initPolling()

				this.updateStatus(InstanceStatus.Ok)
			})

			this.socket.on('data', (receivebuffer) => {
				pipeline += receivebuffer.toString('utf8')

				//this whole area needs work because I think ACKs are sent on good response as well as a request for data

				if (pipeline.includes(this.CONTROL_ACK)) { // ACKs are sent when a command is received, no processing is needed
					pipeline = '';
				}
				else if (pipeline.includes(this.CONTROL_NAK)) {// NAKs are sent on error, let's see what error we got
					this.processError(pipeline)
					pipeline = '';
				}
				else if (pipeline.includes(this.CONTROL_END)) { // Every command ends with CR or an ACK if nothing needed
					let pipeline_responses = pipeline.split(this.CONTROL_END);
					for (let i = 0; i < pipeline_responses.length; i++) {
						if (pipeline_responses[i] !== '') {
							this.processResponse(pipeline_responses[i])
						}
					}
					
					pipeline = '';
				}

				self.lastReturnedCommand = self.cmdPipeNext()
			})
		}
	},

	cmdPipeNext() {
		let self = this;

		const return_cmd = self.cmdPipe.shift();

		if(self.cmdPipe.length > 0) {
			let command = self.cmdPipe[0];
			self.runCommand(command.cmd, command.handshake, command.params);
		}

		return return_cmd;
	},

	sendCommand(cmd, handshake, params) {
		let self = this;

		if (cmd !== undefined) {
			self.cmdPipe.push({
				cmd: cmd,
				handshake: handshake,
				params: params
			});

			if(self.cmdPipe.length === 1) {
				self.runCommand(cmd, handshake, params);
			}			
		}
	},

	runCommand(cmd, handshake, params) {
		let self = this;

		if (self.socket !== undefined && self.socket.isConnected) {
			console.log('sending: ' + self.buildCommand(cmd, handshake, params));
			self.socket.send(self.buildCommand(cmd, handshake, params))
			.then((result) => {
				//console.log('send result: ' + result);
			})
			.catch((error) => {
				//console.log('send error: ' + error);
			});
		}
		else {
			self.log('error', 'Network error: Connection to Device not opened.')
			clearInterval(self.pollTimer);
		}
	},

	processResponse(response) {
		let category = 'XXX'
		let args = []
		let params = ''
 
		//args = response.split(' ')
		args = response.match(/\\?.|^$/g).reduce((p, c) => {
			if(c === '"'){
				p.quote ^= 1;
			}else if(!p.quote && c === ' '){
				p.a.push('');
			}else{
				p.a[p.a.length-1] += c.replace(/\\(.)/,"$1");
			}
			return  p;
		}, {a: ['']}).a

		if (args.length >= 1) {
			category = args[0].trim().toLowerCase();
		}		

		if (args.length >= 5) {
			params = args[4];
		}
		
		params = params.split(',');

		let model = this.MODELS.find((model) => model.id == this.config.model);

		let inputChannel = '';

		let model_inputChannelObj;

		let found = false;

		switch (category) {
			case 'g_input_gain_level':
			case 'md_input_gain_level_notice':
				inputChannel = params[0].toString();
				model_inputChannelObj = model.input_channels.find((CHANNEL) => CHANNEL.id == inputChannel);

				let inputGainLevelObj = {
					id: inputChannel,
					mic_gain: this.input_gain_table_mic.find((ROW) => ROW.id == params[1].toString()).id,
					mic_gain_label: this.input_gain_table_mic.find((ROW) => ROW.id == params[1].toString()).label,
					line_gain: this.input_gain_table_line.find((ROW) => ROW.id == params[2].toString()).id,
					line_gain_label: this.input_gain_table_line.find((ROW) => ROW.id == params[2].toString()).label,
					level: this.fader_table.find((ROW) => ROW.id == params[3].toString()).id,
					level_label: this.fader_table.find((ROW) => ROW.id == params[3].toString()).label,
					mute: (params[6].toString() == '1' ? true : false),
				}
				
				found = false;

				for (let i = 0; i < this.DATA.input_gain_levels.length; i++) {
					if (this.DATA.input_gain_levels[i].id == inputChannel) {
						//update in place
						this.DATA.input_gain_levels[i] = inputGainLevelObj;
						found = true;
						break;
					}
				}
				
				if (!found) {
					//add to array
					this.DATA.input_gain_levels.push(inputGainLevelObj);
				}
				break;
		}

		this.checkFeedbacks()
		this.checkVariables()
	},

	initPolling() {
		if (this.pollTimer === undefined && this.config.poll_interval > 0) {
			this.pollTimer = setInterval(() => {
				let model = this.MODELS.find((model) => model.id == this.config.model);

				if (model) {
					//grab specific data requests as per model
					if (model.data_request.includes('input_gain_level')) {
						for (let i = 0; i < model.input_channels.length; i++) {
							this.sendCommand('g_input_gain_level', 'O', `${model.input_channels[i].id}`)
						}
					}
				}

			}, this.config.poll_interval)
		}
	}
}