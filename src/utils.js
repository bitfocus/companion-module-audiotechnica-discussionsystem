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
			case 'gminp':
				self.DATA.gminp = {
					input1_type: params[0] || '',
					input1_mixtofloor: params[1] || '',
					input1_mixtolanguage: params[2] || '',

					input1_mic_phantompower: params[3] || '',
					input1_mic_gain: params[4] || '',
					input1_mic_level: params[5] || '',
					input1_mic_lowcut: params[6] || '',
					input1_mic_eq1_frequency: params[7] || '',
					input1_mic_eq1_gain: params[8] || '',
					input1_mic_eq1_q: params[9] || '',
					input1_mic_eq1_filtertype: params[10] || '',
					input1_mic_eq2_frequency: params[11] || '',
					input1_mic_eq2_gain: params[12] || '',
					input1_mic_eq2_q: params[13] || '',
					input1_mic_eq2_filtertype: params[14] || '',
					input1_mic_eq3_frequency: params[15] || '',
					input1_mic_eq3_gain: params[16] || '',
					input1_mic_eq3_q: params[17] || '',
					input1_mic_eq3_filtertype: params[18] || '',

					input1_line_phantompower: params[19] || '',
					input1_line_gain: params[20] || '',
					input1_line_level: params[21] || '',
					input1_line_lowcut: params[22] || '',
					input1_line_eq1_frequency: params[23] || '',
					input1_line_eq1_gain: params[24] || '',
					input1_line_eq1_q: params[25] || '',
					input1_line_eq1_filtertype: params[26] || '',
					input1_line_eq2_frequency: params[27] || '',
					input1_line_eq2_gain: params[28] || '',
					input1_line_eq2_q: params[29] || '',
					input1_line_eq2_filtertype: params[30] || '',
					input1_line_eq3_frequency: params[31] || '',
					input1_line_eq3_gain: params[32] || '',
					input1_line_eq3_q: params[33] || '',
					input1_line_eq3_filtertype: params[34] || '',

					input2_type: params[35] || '',
					input2_mixtofloor: params[36] || '',
					input2_mixtolanguage: params[37] || '',

					input2_mic_phantompower: params[38] || '',
					input2_mic_gain: params[39] || '',
					input2_mic_level: params[40] || '',
					input2_mic_lowcut: params[41] || '',
					input2_mic_eq1_frequency: params[42] || '',
					input2_mic_eq1_gain: params[43] || '',
					input2_mic_eq1_q: params[44] || '',
					input2_mic_eq1_filtertype: params[45] || '',
					input2_mic_eq2_frequency: params[46] || '',
					input2_mic_eq2_gain: params[47] || '',
					input2_mic_eq2_q: params[48] || '',
					input2_mic_eq2_filtertype: params[49] || '',
					input2_mic_eq3_frequency: params[50] || '',
					input2_mic_eq3_gain: params[51] || '',
					input2_mic_eq3_q: params[52] || '',
					input2_mic_eq3_filtertype: params[53] || '',

					input2_line_phantompower: params[54] || '',
					input2_line_gain: params[55] || '',
					input2_line_level: params[56] || '',
					input2_line_lowcut: params[57] || '',
					input2_line_eq1_frequency: params[58] || '',
					input2_line_eq1_gain: params[59] || '',
					input2_line_eq1_q: params[60] || '',
					input2_line_eq1_filtertype: params[61] || '',
					input2_line_eq2_frequency: params[62] || '',
					input2_line_eq2_gain: params[63] || '',
					input2_line_eq2_q: params[64] || '',
					input2_line_eq2_filtertype: params[65] || '',
					input2_line_eq3_frequency: params[66] || '',
					input2_line_eq3_gain: params[67] || '',
					input2_line_eq3_q: params[68] || '',
					input2_line_eq3_filtertype: params[69] || '',

					input1_canbemuted: params[70] || '',
					input2_canbemuted: params[71] || '',

					dante1_phantompower: params[72] || '',
					dante1_gain: params[73] || '',
					dante1_level: params[74] || '',
					dante1_lowcut: params[75] || '',
					dante1_eq1_frequency: params[76] || '',
					dante1_eq1_gain: params[77] || '',
					dante1_eq1_q: params[78] || '',
					dante1_eq1_filtertype: params[79] || '',
					dante1_eq2_frequency: params[80] || '',
					dante1_eq2_gain: params[81] || '',
					dante1_eq2_q: params[82] || '',
					dante1_eq2_filtertype: params[83] || '',
					dante1_eq3_frequency: params[84] || '',
					dante1_eq3_gain: params[85] || '',
					dante1_eq3_q: params[86] || '',
					dante1_eq3_filtertype: params[87] || '',

					dante2_phantompower: params[88] || '',
					dante2_gain: params[89] || '',
					dante2_level: params[90] || '',
					dante2_lowcut: params[91] || '',
					dante2_eq1_frequency: params[92] || '',
					dante2_eq1_gain: params[93] || '',
					dante2_eq1_q: params[94] || '',
					dante2_eq1_filtertype: params[95] || '',
					dante2_eq2_frequency: params[96] || '',
					dante2_eq2_gain: params[97] || '',
					dante2_eq2_q: params[98] || '',
					dante2_eq2_filtertype: params[99] || '',
					dante2_eq3_frequency: params[100] || '',
					dante2_eq3_gain: params[101] || '',
					dante2_eq3_q: params[102] || '',
					dante2_eq3_filtertype: params[103] || '',
				};
				break;
			case 'gxinp':
				self.DATA.gxinp = {
					level: params[0] || '',
					nominal_level: params[1] || '',
					mix_to_floor: params[2] || '',
					mix_to_language1: params[3] || '',
					mix_to_language2: params[4] || '',
					low_cut_switch: params[5] || '',
					eq1_freqency: params[6] || '',
					eq1_gain: params[7] || '',
					eq1_q: params[8] || '',
					eq1_filter_type: params[9] || '',
					eq2_freqency: params[10] || '',
					eq2_gain: params[11] || '',
					eq2_q: params[12] || '',
					eq2_filter_type: params[13] || '',
					eq3_freqency: params[14] || '',
					eq3_gain: params[15] || '',
					eq3_q: params[16] || '',
					eq3_filter_type: params[17] || '',
					input_type: params[18] || '',
				};
				break;
			case 'giinp':
				self.DATA.giinp = {
					intreturn1_level: params[0] || '',
					intreturn1_nominal_level: params[1] || '',
					intreturn1_low_cut_switch: params[2] || '',
					intreturn1_eq1_freqency: params[3] || '',
					intreturn1_eq1_gain: params[4] || '',
					intreturn1_eq1_q: params[5] || '',
					intreturn1_eq1_filter_type: params[6] || '',
					intreturn1_eq2_freqency: params[7] || '',
					intreturn1_eq2_gain: params[8] || '',
					intreturn1_eq2_q: params[9] || '',
					intreturn1_eq2_filter_type: params[10] || '',
					intreturn1_eq3_freqency: params[11] || '',
					intreturn1_eq3_gain: params[12] || '',
					intreturn1_eq3_q: params[13] || '',
					intreturn1_eq3_filter_type: params[14] || '',
					
					intreturn2_level: params[15] || '',
					intreturn2_nominal_level: params[16] || '',
					intreturn2_low_cut_switch: params[17] || '',
					intreturn2_eq1_freqency: params[18] || '',
					intreturn2_eq1_gain: params[19] || '',
					intreturn2_eq1_q: params[20] || '',
					intreturn2_eq1_filter_type: params[21] || '',
					intreturn2_eq2_freqency: params[22] || '',
					intreturn2_eq2_gain: params[23] || '',
					intreturn2_eq2_q: params[24] || '',
					intreturn2_eq2_filter_type: params[25] || '',
					intreturn2_eq3_freqency: params[26] || '',
					intreturn2_eq3_gain: params[27] || '',
					intreturn2_eq3_q: params[28] || '',
					intreturn2_eq3_filter_type: params[29] || '',
				};
				break;
			case 'gaout':
				let gaout_kind = params[0];
				let gaout_data = {
					output_level: params[1] || '',
					source_select: params[2] || '',
				};

				if (gaout_kind === '1') { //only output 1 has these params
					gaout_data.max_volume = params[3] || '';
					gaout_data.peq_enable = params[4] || '';
					
					gaout_data.band1_frequency = params[5] || '';
					gaout_data.band1_gain = params[6] || '';
					gaout_data.band1_q = params[7] || '';
					gaout_data.band1_filter_type = params[8] || '';

					gaout_data.band2_frequency = params[9] || '';
					gaout_data.band2_gain = params[10] || '';
					gaout_data.band2_q = params[11] || '';

					gaout_data.band3_frequency = params[12] || '';
					gaout_data.band3_gain = params[13] || '';
					gaout_data.band3_q = params[14] || '';

					gaout_data.band4_frequency = params[15] || '';
					gaout_data.band4_gain = params[16] || '';
					gaout_data.band4_q = params[17] || '';

					gaout_data.band5_frequency = params[18] || '';
					gaout_data.band5_gain = params[19] || '';
					gaout_data.band5_q = params[20] || '';

					gaout_data.band6_frequency = params[21] || '';
					gaout_data.band6_gain = params[22] || '';
					gaout_data.band6_q = params[23] || '';

					gaout_data.band7_frequency = params[24] || '';
					gaout_data.band7_gain = params[25] || '';
					gaout_data.band7_q = params[26] || '';

					gaout_data.band8_frequency = params[27] || '';
					gaout_data.band8_gain = params[28] || '';
					gaout_data.band8_q = params[29] || '';
					gaout_data.band1_filter_type = params[30] || '';

					gaout_data.dynamics_enable = params[31] || '';
					gaout_data.dynamics_comp_threshold = params[32] || '';
					gaout_data.dynamics_limiter_threshold = params[33] || '';
					gaout_data.dynamics_ratio = params[34] || '';
					gaout_data.dynamics_attack_time = params[35] || '';
					gaout_data.dynamics_release_time = params[36] || '';
					gaout_data.dynamics_gain = params[37] || '';
					gaout_data.dynamics_mode = params[38] || '';
					gaout_data.dynamics_sensitivity = params[39] || '';
					gaout_data.dynamics_frequency = params[40] || '';
					gaout_data.dynamics_reduction_meter = params[41] || '';
				}

				self.DATA.gaout[gaout_kind] = gaout_data;
				break;
			case 'ggpio':
				let ggpio_data = {
					serial: params[0] || '',
					gpi0: params[1] || '',
					gpi1: params[2] || '',
					gpi2: params[3] || '',
					gpi3: params[4] || '',
					gpi4: params[5] || '',
					gpi5: params[6] || '',
					gpi6: params[7] || '',
					gpi7: params[8] || '',

					gpo0: params[9] || '',
					gpo1: params[10] || '',
					gpo2: params[11] || '',
					gpo3: params[12] || '',
					gpo4: params[13] || '',
					gpo5: params[14] || '',
					gpo6: params[15] || '',
					gpo7: params[16] || '',
				};

				let ggpio_found = false;

				for (let i = 0; i < self.DATA.ggpio.length; i++) {
					if (self.DATA.ggpio[i].serial === ggpio_data.serial) {
						self.DATA.ggpio[i] = ggpio_data;
						ggpio_found = true;
						break;
					}
				}

				if (!ggpio_found) {
					self.DATA.ggpio.push(ggpio_data);
				}
				break;
			case 'gintc':
				self.DATA.gintc = {
					mode: params[0] || '',
					interlock: params[1] || '',
					group1: params[2] || '',
					group2: params[3] || '',
					group3: params[4] || '',
					easy_mode: params[5] || '',
				};
				break;
			case 'greco':
				self.DATA.greco = {
					rec_file_format: params[0] || '',
					rec_quality: params[1] || '',
					rec_channels_wave: params[2] || '',
					rec_channels_mp3: params[3] || '',
					track1_source: params[4] || '',
					track2_source: params[5] || '',
					track3_source: params[6] || '',
					track4_source: params[7] || '',
					rec_prefix: params[8] || '',
					auto_track: params[9] || '',
				};
				break;
			case 'gconf':
				self.DATA.gconf = {
					conference_mode: params[0] || '',
					auto_mic_off: params[1] || '',
					open_mics: params[2] || '',
					max_queue: params[3] || '',
					priority_cut: params[4] || '',
					free_talk: params[5] || '',
					request_talk: params[6] || '',
					full_remote: params[7] || '',
					mic_hold_time: params[8] || '',
				};
				break;
			case 'recst':
				self.DATA.recst = {
					status: params[0] || '',
					elapsed: params[1] || '',
					remaining: params[2] || '',
				};
				break;
			case 'glvmt':
				let glvmt_data = {
					monitor_point: params[0] || '',
					level: params[1] || '',
				};

				let glvmt_found = false;

				for (let i = 0; i < self.DATA.glvmt.length; i++) {
					if (self.DATA.glvmt[i].monitor_point === glvmt_data.monitor_point) {
						self.DATA.glvmt[i] = glvmt_data;
						glvmt_found = true;
						break;
					}
				}

				if (!glvmt_found) {
					self.DATA.glvmt.push(glvmt_data);
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
					if (model.data_request.includes('gminp')) {
						this.sendCommand('gminp', 'O', '');
					}

					if (model.data_request.includes('gxinp')) {
						this.sendCommand('gminp', 'O', '');
					}

					if (model.data_request.includes('giinp')) {
						this.sendCommand('giinp', 'O', '');
					}

					if (model.data_request.includes('gaout')) {
						this.sendCommand('gaout', 'O', '');
					}

					if (model.data_request.includes('ggpio')) {
						//this.sendCommand('ggpio', 'O', '');
						//need to know serial numbers of units first
					}

					if (model.data_request.includes('gintc')) {
						this.sendCommand('gintc', 'O', '');
					}

					if (model.data_request.includes('greco')) {
						this.sendCommand('greco', 'O', '');
					}

					if (model.data_request.includes('gconf')) {
						this.sendCommand('gconf', 'O', '');
					}

					if (model.data_request.includes('recst')) {
						this.sendCommand('recst', 'O', '');
					}

					if (model.data_request.includes('glvmt')) {
						for (let i = 0; i < this.monitor_points.length; i++) {
							this.sendCommand('glvmt', 'O', this.monitor_points[i].id);
						}
					}
				}

			}, this.config.poll_interval)
		}
	}
}