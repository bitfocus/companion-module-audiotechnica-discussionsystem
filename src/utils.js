const { InstanceStatus, TCPHelper } = require('@companion-module/base');

const dgram = require('dgram');

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

				this.initPolling();

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
		let self = this;

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

		switch (category) {
			case 'gcust':
				self.DATA.gcust = {
					primary_porta_topology: params[0] || '',
					primary_porta_du_count: params[1] || '',
					primary_porta_int50_count: params[2] || '',
					primary_porta_iu_count: params[3] || '',

					primary_portb_topology: params[4] || '',
					primary_portb_du_count: params[5] || '',
					primary_portb_int50_count: params[6] || '',
					primary_portb_iu_count: params[7] || '',
					
					primary_portc_topology: params[8] || '',
					primary_portc_du_count: params[9] || '',
					primary_portc_int50_count: params[10] || '',
					primary_portc_iu_count: params[11] || '',

					primary_portd_topology: params[12] || '',
					primary_portd_du_count: params[13] || '',
					primary_portd_int50_count: params[14] || '',
					primary_portd_iu_count: params[15] || '',

					extension1_porta_topology: params[16] || '',
					extension1_porta_du_count: params[17] || '',
					extension1_porta_iu_count: params[18] || '',

					extension1_portb_topology: params[19] || '',
					extension1_portb_du_count: params[20] || '',
					extension1_portb_iu_count: params[21] || '',

					extension2_porta_topology: params[22] || '',
					extension2_porta_du_count: params[23] || '',
					extension2_porta_iu_count: params[24] || '',

					extension2_portb_topology: params[25] || '',
					extension2_portb_du_count: params[26] || '',
					extension2_portb_iu_count: params[27] || '',

					extension3_porta_topology: params[28] || '',
					extension3_porta_du_count: params[29] || '',
					extension3_porta_iu_count: params[30] || '',

					extension3_portb_topology: params[31] || '',
					extension3_portb_du_count: params[32] || '',
					extension3_portb_iu_count: params[33] || '',

					connected_irdu: params[34] || '',

					primary_porta_duas_count: params[35] || '',
					primary_portb_duas_count: params[36] || '',
					primary_portc_duas_count: params[37] || '',
					primary_portd_duas_count: params[38] || '',

					extension1_porta_duas_count: params[39] || '',
					extension1_portb_duas_count: params[40] || '',

					extension2_porta_duas_count: params[41] || '',
					extension2_portb_duas_count: params[42] || '',					
				};
				break;
			case 'gminp':
				self.DATA.gminp = {
					miclineinput1_type: params[0] || '',
					miclineinput1_mixtofloor: params[1] || '',
					miclineinput1_mixtolanguage: params[2] || '',

					miclineinput1_mic_phantompower: params[3] || '',
					miclineinput1_mic_gain: params[4] || '',
					miclineinput1_mic_level: params[5] || '',
					miclineinput1_mic_lowcut: params[6] || '',

					miclineinput1_mic_eq1_frequency: params[7] || '',
					miclineinput1_mic_eq1_gain: params[8] || '',
					miclineinput1_mic_eq1_q: params[9] || '',
					miclineinput1_mic_eq1_filtertype: params[10] || '',
					
					miclineinput1_mic_eq2_frequency: params[11] || '',
					miclineinput1_mic_eq2_gain: params[12] || '',
					miclineinput1_mic_eq2_q: params[13] || '',
					miclineinput1_mic_eq2_filtertype: params[14] || '',
					
					miclineinput1_mic_eq3_frequency: params[15] || '',
					miclineinput1_mic_eq3_gain: params[16] || '',
					miclineinput1_mic_eq3_q: params[17] || '',
					miclineinput1_mic_eq3_filtertype: params[18] || '',

					miclineinput1_line_phantompower: params[19] || '',
					miclineinput1_line_gain: params[20] || '',
					miclineinput1_line_level: params[21] || '',
					miclineinput1_line_lowcut: params[22] || '',
					
					miclineinput1_line_eq1_frequency: params[23] || '',
					miclineinput1_line_eq1_gain: params[24] || '',
					miclineinput1_line_eq1_q: params[25] || '',
					miclineinput1_line_eq1_filtertype: params[26] || '',
					
					miclineinput1_line_eq2_frequency: params[27] || '',
					miclineinput1_line_eq2_gain: params[28] || '',
					miclineinput1_line_eq2_q: params[29] || '',
					miclineinput1_line_eq2_filtertype: params[30] || '',
					
					miclineinput1_line_eq3_frequency: params[31] || '',
					miclineinput1_line_eq3_gain: params[32] || '',
					miclineinput1_line_eq3_q: params[33] || '',
					miclineinput1_line_eq3_filtertype: params[34] || '',

					miclineinput2_type: params[35] || '',
					miclineinput2_mixtofloor: params[36] || '',
					miclineinput2_mixtolanguage: params[37] || '',

					miclineinput2_mic_phantompower: params[38] || '',
					miclineinput2_mic_gain: params[39] || '',
					miclineinput2_mic_level: params[40] || '',
					miclineinput2_mic_lowcut: params[41] || '',
					
					miclineinput2_mic_eq1_frequency: params[42] || '',
					miclineinput2_mic_eq1_gain: params[43] || '',
					miclineinput2_mic_eq1_q: params[44] || '',
					miclineinput2_mic_eq1_filtertype: params[45] || '',
					
					miclineinput2_mic_eq2_frequency: params[46] || '',
					miclineinput2_mic_eq2_gain: params[47] || '',
					miclineinput2_mic_eq2_q: params[48] || '',
					miclineinput2_mic_eq2_filtertype: params[49] || '',
					
					miclineinput2_mic_eq3_frequency: params[50] || '',
					miclineinput2_mic_eq3_gain: params[51] || '',
					miclineinput2_mic_eq3_q: params[52] || '',
					miclineinput2_mic_eq3_filtertype: params[53] || '',

					miclineinput2_line_phantompower: params[54] || '',
					miclineinput2_line_gain: params[55] || '',
					miclineinput2_line_level: params[56] || '',
					miclineinput2_line_lowcut: params[57] || '',
					
					miclineinput2_line_eq1_frequency: params[58] || '',
					miclineinput2_line_eq1_gain: params[59] || '',
					miclineinput2_line_eq1_q: params[60] || '',
					miclineinput2_line_eq1_filtertype: params[61] || '',
					
					miclineinput2_line_eq2_frequency: params[62] || '',
					miclineinput2_line_eq2_gain: params[63] || '',
					miclineinput2_line_eq2_q: params[64] || '',
					miclineinput2_line_eq2_filtertype: params[65] || '',
					
					miclineinput2_line_eq3_frequency: params[66] || '',
					miclineinput2_line_eq3_gain: params[67] || '',
					miclineinput2_line_eq3_q: params[68] || '',
					miclineinput2_line_eq3_filtertype: params[69] || '',

					mute_input1: params[70] || '',
					mute_input2: params[71] || '',

					danteinput1_phantompower: params[72] || '',
					danteinput1_gain: params[73] || '',
					danteinput1_level: params[74] || '',
					danteinput1_lowcut: params[75] || '',
					
					danteinput1_eq1_frequency: params[76] || '',
					danteinput1_eq1_gain: params[77] || '',
					danteinput1_eq1_q: params[78] || '',
					danteinput1_eq1_filtertype: params[79] || '',
					
					danteinput1_eq2_frequency: params[80] || '',
					danteinput1_eq2_gain: params[81] || '',
					danteinput1_eq2_q: params[82] || '',
					danteinput1_eq2_filtertype: params[83] || '',
					
					danteinput1_eq3_frequency: params[84] || '',
					danteinput1_eq3_gain: params[85] || '',
					danteinput1_eq3_q: params[86] || '',
					danteinput1_eq3_filtertype: params[87] || '',

					danteinput2_phantompower: params[88] || '',
					danteinput2_gain: params[89] || '',
					danteinput2_level: params[90] || '',
					danteinput2_lowcut: params[91] || '',
					
					danteinput2_eq1_frequency: params[92] || '',
					danteinput2_eq1_gain: params[93] || '',
					danteinput2_eq1_q: params[94] || '',
					danteinput2_eq1_filtertype: params[95] || '',
					
					danteinput2_eq2_frequency: params[96] || '',
					danteinput2_eq2_gain: params[97] || '',
					danteinput2_eq2_q: params[98] || '',
					danteinput2_eq2_filtertype: params[99] || '',
					
					danteinput2_eq3_frequency: params[100] || '',
					danteinput2_eq3_gain: params[101] || '',
					danteinput2_eq3_q: params[102] || '',
					danteinput2_eq3_filtertype: params[103] || '',
				};
				break;
			case 'gxinp':
				self.DATA.gxinp = {
					aux_level: params[0] || '',
					aux_nominallevel: params[1] || '',
					aux_mixtofloor: params[2] || '',
					aux_mixtolanguage1: params[3] || '',
					aux_mixtolanguage2: params[4] || '',
					aux_lowcut: params[5] || '',
					aux_eq1_freqency: params[6] || '',
					aux_eq1_gain: params[7] || '',
					aux_eq1_q: params[8] || '',
					aux_eq1_filtertype: params[9] || '',
					aux_eq2_freqency: params[10] || '',
					aux_eq2_gain: params[11] || '',
					aux_eq2_q: params[12] || '',
					aux_eq2_filtertype: params[13] || '',
					aux_eq3_freqency: params[14] || '',
					aux_eq3_gain: params[15] || '',
					aux_eq3_q: params[16] || '',
					aux_eq3_filtertype: params[17] || '',
					aux_inputtype: params[18] || '',
				};
				break;
			case 'giinp':
				self.DATA.giinp = {
					interpretationreturn1_level: params[0] || '',
					interpretationreturn1_nominallevel: params[1] || '',
					interpretationreturn1_lowcut: params[2] || '',
					interpretationreturn1_eq1_freqency: params[3] || '',
					interpretationreturn1_eq1_gain: params[4] || '',
					interpretationreturn1_eq1_q: params[5] || '',
					interpretationreturn1_eq1_filtertype: params[6] || '',
					interpretationreturn1_eq2_freqency: params[7] || '',
					interpretationreturn1_eq2_gain: params[8] || '',
					interpretationreturn1_eq2_q: params[9] || '',
					interpretationreturn1_eq2_filtertype: params[10] || '',
					interpretationreturn1_eq3_freqency: params[11] || '',
					interpretationreturn1_eq3_gain: params[12] || '',
					interpretationreturn1_eq3_q: params[13] || '',
					interpretationreturn1_eq3_filtertype: params[14] || '',
					
					interpretationreturn2_level: params[15] || '',
					interpretationreturn2_nominallevel: params[16] || '',
					interpretationreturn2_lowcut: params[17] || '',
					interpretationreturn2_eq1_freqency: params[18] || '',
					interpretationreturn2_eq1_gain: params[19] || '',
					interpretationreturn2_eq1_q: params[20] || '',
					interpretationreturn2_eq1_filtertype: params[21] || '',
					interpretationreturn2_eq2_freqency: params[22] || '',
					interpretationreturn2_eq2_gain: params[23] || '',
					interpretationreturn2_eq2_q: params[24] || '',
					interpretationreturn2_eq2_filtertype: params[25] || '',
					interpretationreturn2_eq3_freqency: params[26] || '',
					interpretationreturn2_eq3_gain: params[27] || '',
					interpretationreturn2_eq3_q: params[28] || '',
					interpretationreturn2_eq3_filtertype: params[29] || '',
				};
				break;
			case 'gaout':
				let gaout_kind = params[0];

				self.DATA.gaout['output' + gaout_kind + 'level'] = params[1] || '';
				self.DATA.gaout['output' + gaout_kind + 'sourceselect'] = params[2] || '';

				if (gaout_kind === '1') { //only output 1 has these params
					self.DATA.gaout['output1_maxvolume'] = params[3] || '';
					self.DATA.gaout['output1_maxvolume'] = params[4] || '';

					self.DATA.gaout['output1_eq1_frequency'] = params[5] || '';
					self.DATA.gaout['output1_eq1_gain'] = params[6] || '';
					self.DATA.gaout['output1_eq1_q'] = params[7] || '';
					self.DATA.gaout['output1_eq1_filtertype'] = params[8] || '';

					self.DATA.gaout['output1_eq2_frequency'] = params[9] || '';
					self.DATA.gaout['output1_eq2_gain'] = params[10] || '';
					self.DATA.gaout['output1_eq2_q'] = params[11] || '';

					self.DATA.gaout['output1_eq3_frequency'] = params[12] || '';
					self.DATA.gaout['output1_eq3_gain'] = params[13] || '';
					self.DATA.gaout['output1_eq3_q'] = params[14] || '';

					self.DATA.gaout['output1_eq4_frequency'] = params[15] || '';
					self.DATA.gaout['output1_eq4_gain'] = params[16] || '';
					self.DATA.gaout['output1_eq4_q'] = params[17] || '';

					self.DATA.gaout['output1_eq5_frequency'] = params[18] || '';
					self.DATA.gaout['output1_eq5_gain'] = params[19] || '';
					self.DATA.gaout['output1_eq5_q'] = params[20] || '';

					self.DATA.gaout['output1_eq6_frequency'] = params[21] || '';
					self.DATA.gaout['output1_eq6_gain'] = params[22] || '';
					self.DATA.gaout['output1_eq6_q'] = params[23] || '';

					self.DATA.gaout['output1_eq7_frequency'] = params[24] || '';
					self.DATA.gaout['output1_eq7_gain'] = params[25] || '';
					self.DATA.gaout['output1_eq7_q'] = params[26] || '';

					self.DATA.gaout['output1_eq8_frequency'] = params[27] || '';
					self.DATA.gaout['output1_eq8_gain'] = params[28] || '';
					self.DATA.gaout['output1_eq8_q'] = params[29] || '';
					self.DATA.gaout['output1_eq8_filtertype'] = params[30] || '';

					self.DATA.gaout['output1_dynamics_enable'] = params[31] || '';
					self.DATA.gaout['output1_dynamics_compthreshold'] = params[32] || '';
					self.DATA.gaout['output1_dynamics_limiterthreshold'] = params[33] || '';
					self.DATA.gaout['output1_dynamics_ratio'] = params[34] || '';
					self.DATA.gaout['output1_dynamics_attack'] = params[35] || '';
					self.DATA.gaout['output1_dynamics_release'] = params[36] || '';
					self.DATA.gaout['output1_dynamics_gain'] = params[37] || '';
					self.DATA.gaout['output1_dynamics_mode'] = params[38] || '';
					self.DATA.gaout['output1_dynamics_sensitivity'] = params[39] || '';
					self.DATA.gaout['output1_dynamics_frequency'] = params[40] || '';
					self.DATA.gaout['output1_dynamics_reduction'] = params[41] || '';
				}
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
					interpretationmode: params[0] || '',
					interlock: params[1] || '',
					language1: params[2] || '',
					language2: params[3] || '',
					language3: params[4] || '',
					easymode: params[5] || '',
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
		if (this.pollTimer === undefined && this.config.polling == true) {
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
	},

	initUDP() {
		let self = this;

		//if udp socket is already open, close it
		if (self.udpSocket !== undefined) {
			self.udpSocket.close();
			delete self.udpSocket;
		}

		if (self.config.status_change_listen) {
			self.udpSocket = dgram.createSocket('udp4');

			self.udpSocket.on('error', (err) => {
				self.log('error', 'UDP error: ' + err.message);
				self.updateStatus(InstanceStatus.Error);
				self.udpSocket.close();
				delete self.udpSocket;
			});

			self.udpSocket.on('message', (msg, rinfo) => {
				self.processUDPResponse(msg.toString());
			});

			self.udpSocket.on('listening', () => {
				const address = self.udpSocket.address();
				self.log('debug', `UDP listening for status change messages on ${address.address}:${address.port}`);
				self.udpSocket.addMembership(self.config.multicast_address);
			});

			self.udpSocket.bind(parseInt(self.config.multicast_port), () => {
				//self.udpSocket.addMembership(self.config.multicast_address);
			});
		}
	},

	processUDPResponse(response) {
		let self = this;
		
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

		if (args.length >= 2) {
			category = args[1].trim().toLowerCase();
		}		

		if (args.length >= 6) {
			params = args[5];
		}
		
		params = params.split(',');

		let model = self.MODELS.find((model) => model.id == self.config.model);

		switch (category) {
			default:
				console.log('no match: ' + category)
				break;
		}

		self.checkFeedbacks()
		self.checkVariables()
	},
}