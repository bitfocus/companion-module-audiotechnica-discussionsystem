const constants = require('./constants')

module.exports = {
	initActions() {
		let self = this;

		let actions = {};

		let model = this.MODELS.find((model) => model.id == this.config.model);

		if (model) {
			if (model.actions.includes('sminp')) {
				actions['sminp'] = {
					name: 'Change Mic/Line Input Settings',
					options: [
						{
							type: 'dropdown',
							label: 'Input 1: Type',
							id: 'input1_type',
							default: '0',
							choices: [
								{ id: '0', label: 'Mic' },
								{ id: '1', label: 'Line +4dBu' },
								{ id: '2', label: 'Line 0dBV' },
							]
						},
						{
							type: 'checkbox',
							label: 'Input 1: Mix to Floor',
							id: 'input1_mix_to_floor',
							default: false
						},
						{
							type: 'checkbox',
							label: 'Input 1: Mix to Language',
							id: 'input1_mix_to_lang',
							default: false
						},
						{
							type: 'checkbox',
							label: 'Input 1: Mic Phantom Power',
							id: 'input1_mic_phantom_power',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Input 1: Mic Gain',
							id: 'input1_mic_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 1: Mic Level',
							id: 'input1_mic_level',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'checkbox',
							label: 'Input 1: Mic Low Cut',
							id: 'input1_mic_lowcut',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Input 1: Mic EQ 1 - Frequency',
							id: 'input1_mic_eq1_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Input 1: Mic EQ 1 - Gain',
							id: 'input1_mic_eq1_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 1: Mic EQ 1 - Q Value',
							id: 'input1_mic_eq1_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Input 1: Mic EQ 1 - Filter Type',
							id: 'input1_mic_eq1_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Input 1: Mic EQ 2 - Frequency',
							id: 'input1_mic_eq2_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Input 1: Mic EQ 2 - Gain',
							id: 'input1_mic_eq2_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 1: Mic EQ 2 - Q Value',
							id: 'input1_mic_eq2_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Input 1: Mic EQ 2 - Filter Type',
							id: 'input1_mic_eq2_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Input 1: Mic EQ 3 - Frequency',
							id: 'input1_mic_eq3_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Input 1: Mic EQ 3 - Gain',
							id: 'input1_mic_eq3_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 1: Mic EQ 3 - Q Value',
							id: 'input1_mic_eq3_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Input 1: Mic EQ 3 - Filter Type',
							id: 'input1_mic_eq3_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'checkbox',
							label: 'Input 1: Line Phantom Power',
							id: 'input1_line_phantom_power',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Input 1: Line Gain',
							id: 'input1_line_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 1: Line Level',
							id: 'input1_line_level',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'checkbox',
							label: 'Input 1: Line Low Cut',
							id: 'input1_line_lowcut',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Input 1: Line EQ 1 - Frequency',
							id: 'input1_line_eq1_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Input 1: Line EQ 1 - Gain',
							id: 'input1_line_eq1_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 1: Line EQ 1 - Q Value',
							id: 'input1_line_eq1_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Input 1: Line EQ 1 - Filter Type',
							id: 'input1_line_eq1_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Input 1: Line EQ 2 - Frequency',
							id: 'input1_line_eq2_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Input 1: Line EQ 2 - Gain',
							id: 'input1_line_eq2_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 1: Line EQ 2 - Q Value',
							id: 'input1_line_eq2_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Input 1: Line EQ 2 - Filter Type',
							id: 'input1_line_eq2_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Input 1: Line EQ 3 - Frequency',
							id: 'input1_line_eq3_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Input 1: Line EQ 3 - Gain',
							id: 'input1_line_eq3_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 1: Line EQ 3 - Q Value',
							id: 'input1_line_eq3_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Input 1: Line EQ 3 - Filter Type',
							id: 'input1_line_eq3_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Input 2: Type',
							id: 'input2_type',
							default: '0',
							choices: [
								{ id: '0', label: 'Mic' },
								{ id: '1', label: 'Line +4dBu' },
								{ id: '2', label: 'Line 0dBV' },
							]
						},
						{
							type: 'checkbox',
							label: 'Input 2: Mix to Floor',
							id: 'input2_mix_to_floor',
							default: false
						},
						{
							type: 'checkbox',
							label: 'Input 2: Mix to Language',
							id: 'input2_mix_to_lang',
							default: false
						},
						{
							type: 'checkbox',
							label: 'Input 2: Mic Phantom Power',
							id: 'input2_mic_phantom_power',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Input 2: Mic Gain',
							id: 'input2_mic_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 2:Mic Level',
							id: 'input2_mic_level',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'checkbox',
							label: 'Input 2: Mic Low Cut',
							id: 'input2_mic_lowcut',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Input 2: Mic EQ 1 - Frequency',
							id: 'input2_mic_eq1_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Input 2: Mic EQ 1 - Gain',
							id: 'input2_mic_eq1_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 2: Mic EQ 1 - Q Value',
							id: 'input2_mic_eq1_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Input 2: Mic EQ 1 - Filter Type',
							id: 'input2_mic_eq1_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Input 2: Mic EQ 2 - Frequency',
							id: 'input2_mic_eq2_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Input 2: Mic EQ 2 - Gain',
							id: 'input2_mic_eq2_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 2: Mic EQ 2 - Q Value',
							id: 'input2_mic_eq2_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Input 2: Mic EQ 2 - Filter Type',
							id: 'input2_mic_eq2_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Input 2: Mic EQ 3 - Frequency',
							id: 'input2_mic_eq3_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Input 2: Mic EQ 3 - Gain',
							id: 'input2_mic_eq3_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 2: Mic EQ 3 - Q Value',
							id: 'input2_mic_eq3_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Input 2: Mic EQ 3 - Filter Type',
							id: 'input2_mic_eq3_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'checkbox',
							label: 'Input 2: Line Phantom Power',
							id: 'input2_line_phantom_power',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Input 2: Line Gain',
							id: 'input2_line_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 2: Line Level',
							id: 'input2_line_level',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'checkbox',
							label: 'Input 2: Line Low Cut',
							id: 'input2_line_lowcut',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Input 2: Line EQ 1 - Frequency',
							id: 'input2_line_eq1_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Input 2: Line EQ 1 - Gain',
							id: 'input2_line_eq1_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 2: Line EQ 1 - Q Value',
							id: 'input2_line_eq1_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Input 2: Line EQ 1 - Filter Type',
							id: 'input2_line_eq1_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Input 2: Line EQ 2 - Frequency',
							id: 'input2_line_eq2_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Input 2: Line EQ 2 - Gain',
							id: 'input2_line_eq2_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 2: Line EQ 2 - Q Value',
							id: 'input2_line_eq2_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Input 2: Line EQ 2 - Filter Type',
							id: 'input2_line_eq2_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Input 2: Line EQ 3 - Frequency',
							id: 'input2_line_eq3_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Input 2: Line EQ 3 - Gain',
							id: 'input2_line_eq3_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Input 2: Line EQ 3 - Q Value',
							id: 'input2_line_eq3_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Input 2: Line EQ 3 - Filter Type',
							id: 'input2_line_eq3_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'checkbox',
							label: 'Input 1: Can Be Muted',
							id: 'input1_mute',
							default: false
						},
						{
							type: 'checkbox',
							label: 'Input 2: Can Be Muted',
							id: 'input2_mute',
							default: false
						},
						{
							type: 'checkbox',
							label: 'Dante 1: Phantom Power',
							id: 'dante1_phantom_power',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Dante 1: Gain',
							id: 'dante1_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Dante 1: Level',
							id: 'dante1_level',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'checkbox',
							label: 'Dante 1: Low Cut',
							id: 'dante1_lowcut',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Dante 1: EQ 1 - Frequency',
							id: 'dante1_eq1_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Dante 1: EQ 1 - Gain',
							id: 'dante1_eq1_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Dante 1: EQ 1 - Q Value',
							id: 'dante1_eq1_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Dante 1: EQ 1 - Filter Type',
							id: 'dante1_eq1_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Dante 1: EQ 2 - Frequency',
							id: 'dante1_eq2_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Dante 1: EQ 2 - Gain',
							id: 'dante1_eq2_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Dante 1: EQ 2 - Q Value',
							id: 'dante1_eq2_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Dante 1: EQ 2 - Filter Type',
							id: 'dante1_eq2_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Dante 1: EQ 3 - Frequency',
							id: 'dante1_eq3_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Dante 1: EQ 3 - Gain',
							id: 'dante1_eq3_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Dante 1: EQ 3 - Q Value',
							id: 'dante1_eq3_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Dante 1: EQ 3 - Filter Type',
							id: 'dante1_eq3_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'checkbox',
							label: 'Dante 2: Phantom Power',
							id: 'dante2_phantom_power',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Dante 2: Gain',
							id: 'dante2_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Dante 2: Level',
							id: 'dante2_level',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'checkbox',
							label: 'Dante 2: Low Cut',
							id: 'dante2_lowcut',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Dante 2: EQ 1 - Frequency',
							id: 'dante2_eq1_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Dante 2: EQ 1 - Gain',
							id: 'dante2_eq1_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Dante 2: EQ 1 - Q Value',
							id: 'dante2_eq1_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Dante 2: EQ 1 - Filter Type',
							id: 'dante2_eq1_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Dante 2: EQ 2 - Frequency',
							id: 'dante2_eq2_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Dante 2: EQ 2 - Gain',
							id: 'dante2_eq2_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Dante 2: EQ 2 - Q Value',
							id: 'dante2_eq2_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Dante 2: EQ 2 - Filter Type',
							id: 'dante2_eq2_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Dante 2: EQ 3 - Frequency',
							id: 'dante2_eq3_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Dante 2: EQ 3 - Gain',
							id: 'dante2_eq3_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Dante 2: EQ 3 - Q Value',
							id: 'dante2_eq3_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Dante 2: EQ 3 - Filter Type',
							id: 'dante2_eq3_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						}
					],
					callback: async (event) => {
						let opt = event.options;
	
						let params = '' 
							+ opt.input1_type + ','
							+ opt.input1_mix_to_floor ? 1 : 0 + ','
							+ opt.input1_mix_to_lang ? 1 : 0 + ','
							+ opt.input1_mic_phantom_power ? 1 : 0 + ','
							+ opt.input1_mic_gain + ','
							+ opt.input1_mic_level + ','
							+ opt.input1_mic_lowcut ? 1 : 0 + ','
							+ opt.input1_mic_eq1_freq + ','
							+ opt.input1_mic_eq1_gain + ','
							+ opt.input1_mic_eq1_q + ','
							+ opt.input1_mic_eq1_filtertype + ','
							+ opt.input1_mic_eq2_freq + ','
							+ opt.input1_mic_eq2_gain + ','
							+ opt.input1_mic_eq2_q + ','
							+ opt.input1_mic_eq2_filtertype + ','
							+ opt.input1_mic_eq3_freq + ','
							+ opt.input1_mic_eq3_gain + ','
							+ opt.input1_mic_eq3_q + ','
							+ opt.input1_mic_eq3_filtertype + ','
							+ opt.input1_line_phantom_power ? 1 : 0 + ','
							+ opt.input1_line_gain + ','
							+ opt.input1_line_level + ','
							+ opt.input1_line_lowcut ? 1 : 0 + ','
							+ opt.input1_line_eq1_freq + ','
							+ opt.input1_line_eq1_gain + ','
							+ opt.input1_line_eq1_q + ','
							+ opt.input1_line_eq1_filtertype + ','
							+ opt.input1_line_eq2_freq + ','
							+ opt.input1_line_eq2_gain + ','
							+ opt.input1_line_eq2_q + ','
							+ opt.input1_line_eq2_filtertype + ','
							+ opt.input1_line_eq3_freq + ','
							+ opt.input1_line_eq3_gain + ','
							+ opt.input1_line_eq3_q + ','
							+ opt.input1_line_eq3_filtertype + ','

							+ opt.input2_type + ','
							+ opt.input2_mix_to_floor ? 1 : 0 + ','
							+ opt.input2_mix_to_lang ? 1 : 0 + ','
							+ opt.input2_mic_phantom_power ? 1 : 0 + ','
							+ opt.input2_mic_gain + ','
							+ opt.input2_mic_level + ','
							+ opt.input2_mic_lowcut ? 1 : 0 + ','
							+ opt.input2_mic_eq1_freq + ','
							+ opt.input2_mic_eq1_gain + ','
							+ opt.input2_mic_eq1_q + ','
							+ opt.input2_mic_eq1_filtertype + ','
							+ opt.input2_mic_eq2_freq + ','
							+ opt.input2_mic_eq2_gain + ','
							+ opt.input2_mic_eq2_q + ','
							+ opt.input2_mic_eq2_filtertype + ','
							+ opt.input2_mic_eq3_freq + ','
							+ opt.input2_mic_eq3_gain + ','
							+ opt.input2_mic_eq3_q + ','
							+ opt.input2_mic_eq3_filtertype + ','
							+ opt.input2_line_phantom_power ? 1 : 0 + ','
							+ opt.input2_line_gain + ','
							+ opt.input2_line_level + ','
							+ opt.input2_line_lowcut ? 1 : 0 + ','
							+ opt.input2_line_eq1_freq + ','
							+ opt.input2_line_eq1_gain + ','
							+ opt.input2_line_eq1_q + ','
							+ opt.input2_line_eq1_filtertype + ','
							+ opt.input2_line_eq2_freq + ','
							+ opt.input2_line_eq2_gain + ','
							+ opt.input2_line_eq2_q + ','
							+ opt.input2_line_eq2_filtertype + ','
							+ opt.input2_line_eq3_freq + ','
							+ opt.input2_line_eq3_gain + ','
							+ opt.input2_line_eq3_q + ','
							+ opt.input2_line_eq3_filtertype + ','

							+ opt.input1_mute ? 1 : 0 + ','
							+ opt.input2_mute ? 1 : 0 + ','

							+ opt.dante1_phantom_power ? 1 : 0 + ','
							+ opt.dante1_gain + ','
							+ opt.dante1_level + ','
							+ opt.dante1_lowcut ? 1 : 0 + ','
							+ opt.dante1_eq1_freq + ','
							+ opt.dante1_eq1_gain + ','
							+ opt.dante1_eq1_q + ','
							+ opt.dante1_eq1_filtertype + ','
							+ opt.dante1_eq2_freq + ','
							+ opt.dante1_eq2_gain + ','
							+ opt.dante1_eq2_q + ','
							+ opt.dante1_eq2_filtertype + ','
							+ opt.dante1_eq3_freq + ','
							+ opt.dante1_eq3_gain + ','
							+ opt.dante1_eq3_q + ','
							+ opt.dante1_eq3_filtertype + ','

							+ opt.dante2_phantom_power ? 1 : 0 + ','
							+ opt.dante2_gain + ','
							+ opt.dante2_level + ','
							+ opt.dante2_lowcut ? 1 : 0 + ','
							+ opt.dante2_eq1_freq + ','
							+ opt.dante2_eq1_gain + ','
							+ opt.dante2_eq1_q + ','
							+ opt.dante2_eq1_filtertype + ','
							+ opt.dante2_eq2_freq + ','
							+ opt.dante2_eq2_gain + ','
							+ opt.dante2_eq2_q + ','
							+ opt.dante2_eq2_filtertype + ','
							+ opt.dante2_eq3_freq + ','
							+ opt.dante2_eq3_gain + ','
							+ opt.dante2_eq3_q + ','
							+ opt.dante2_eq3_filtertype;

						this.sendCommand('sminp', 'S', params)
					},
				}
			}

			if (model.actions.includes('sxinp')) {
				actions['sxinp'] = {
					name: 'Change Aux Input Settings',
					options: [
						{
							type: 'dropdown',
							label: 'Level',
							id: 'level',
							default: constants.fader_table[0].id,
							choices: constants.fader_table
						},
						{
							type: 'dropdown',
							label: 'Nominal Level',
							id: 'nom_level',
							default: '0',
							choices: [
								{ id: '0', label: '0dBV' },
								{ id: '1', label: '-10dBV' },
								{ id: '2', label: '-20dBV' },
							]
						},
						{
							type: 'checkbox',
							label: 'Mix to Floor',
							id: 'mix_to_floor',
							default: false
						},
						{
							type: 'checkbox',
							label: 'Mix to Language 1',
							id: 'mix_to_lang1',
							default: false
						},
						{
							type: 'checkbox',
							label: 'Mix to Language 2',
							id: 'mix_to_lang2',
							default: false
						},
						{
							type: 'checkbox',
							label: 'Low Cut Switch',
							id: 'low_cut',
							default: false
						},
						{
							type: 'dropdown',
							label: 'EQ 1 - Frequency',
							id: 'eq1_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'EQ 1 - Gain',
							id: 'eq1_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'EQ 1 - Q Value',
							id: 'eq1_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'EQ 1 - Filter Type',
							id: 'eq1_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'EQ 2 - Frequency',
							id: 'eq2_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'EQ 2 - Gain',
							id: 'eq2_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'EQ 2 - Q Value',
							id: 'eq2_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'EQ 2 - Filter Type',
							id: 'eq2_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'EQ 3 - Frequency',
							id: 'eq3_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'EQ 3 - Gain',
							id: 'eq3_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'EQ 3 - Q Value',
							id: 'eq3_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'EQ 3 - Filter Type',
							id: 'eq3_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
					],
					callback: async (event) => {
						let opt = event.options;
	
						let params = '' 
							+ opt.level + ','
							+ opt.nom_level + ','
							+ (opt.mix_to_floor ? '1' : '0') + ','
							+ (opt.mix_to_lang1 ? '1' : '0') + ','
							+ (opt.mix_to_lang2 ? '1' : '0') + ','
							+ (opt.low_cut ? '1' : '0') + ','
							+ opt.eq1_freq + ','
							+ opt.eq1_gain + ','
							+ opt.eq1_q + ','
							+ opt.eq1_filtertype + ','
							+ opt.eq2_freq + ','
							+ opt.eq2_gain + ','
							+ opt.eq2_q + ','
							+ opt.eq2_filtertype + ','
							+ opt.eq3_freq + ','
							+ opt.eq3_gain + ','
							+ opt.eq3_q + ','
							+ opt.eq3_filtertype + ',';

						if (self.config.model == 'atuc-50') {
							params += '0';
						}
						else if (self.config.model == 'atuc-ir') {
							params += opt.input_type;
						}						

						this.sendCommand('sxinp', 'S', params)
					},
				}

				if (self.config.model == 'atuc-ir') {
					actions['sinxp']['options'].push(
						{
							type: 'dropdown',
							label: 'Input Type',
							id: 'input_type',
							default: '0',
							choices: [
								{ id: '0', label: 'Analog' },
								{ id: '1', label: 'Dante' }
							]
						}
					);
				}
			}

			if (model.actions.includes('siinp')) {
				actions['siinp'] = {
					name: 'Change Interpretation Input Settings',
					options: [
						{
							type: 'dropdown',
							label: 'Interpretation Return 1: Level',
							id: 'int1_level',
							default: constants.fader_table[0].id,
							choices: constants.fader_table
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 1: Nominal Level',
							id: 'int1_nom_level',
							default: '0',
							choices: [
								{ id: '0', label: '0dBV' },
								{ id: '1', label: '-10dBV' },
								{ id: '2', label: '-20dBV' },
							]
						},
						{
							type: 'checkbox',
							label: 'Interpretation Return 1: Low Cut Switch',
							id: 'int1_low_cut',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 1: EQ 1 - Frequency',
							id: 'int1_eq1_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 1: EQ 1 - Gain',
							id: 'int1_eq1_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 1: EQ 1 - Q Value',
							id: 'int1_eq1_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 1: EQ 1 - Filter Type',
							id: 'int1_eq1_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 1: EQ 2 - Frequency',
							id: 'int1_eq2_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 1: EQ 2 - Gain',
							id: 'int1_eq2_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 1: EQ 2 - Q Value',
							id: 'int1_eq2_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 1: EQ 2 - Filter Type',
							id: 'int1_eq2_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 1: EQ 3 - Frequency',
							id: 'int1_eq3_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 1: EQ 3 - Gain',
							id: 'int1_eq3_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 1: EQ 3 - Q Value',
							id: 'int1_eq3_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 1: EQ 3 - Filter Type',
							id: 'int1_eq3_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 2: Level',
							id: 'int2_level',
							default: constants.fader_table[0].id,
							choices: constants.fader_table
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 2: Nominal Level',
							id: 'int2_nom_level',
							default: '0',
							choices: [
								{ id: '0', label: '0dBV' },
								{ id: '1', label: '-10dBV' },
								{ id: '2', label: '-20dBV' },
							]
						},
						{
							type: 'checkbox',
							label: 'Interpretation Return 2: Low Cut Switch',
							id: 'int2_low_cut',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 2: EQ 1 - Frequency',
							id: 'int2_eq1_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 2: EQ 1 - Gain',
							id: 'int2_eq1_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 2: EQ 1 - Q Value',
							id: 'int2_eq1_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 2: EQ 1 - Filter Type',
							id: 'int2_eq1_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 2: EQ 2 - Frequency',
							id: 'int2_eq2_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 2: EQ 2 - Gain',
							id: 'int2_eq2_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 2: EQ 2 - Q Value',
							id: 'int2_eq2_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 2: EQ 2 - Filter Type',
							id: 'int2_eq2_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 2: EQ 3 - Frequency',
							id: 'int2_eq3_freq',
							default: '0',
							choices: this.frequencies
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 2: EQ 3 - Gain',
							id: 'int2_eq3_gain',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 2: EQ 3 - Q Value',
							id: 'int2_eq3_q',
							default: '0',
							choices: this.q
						},
						{
							type: 'dropdown',
							label: 'Interpretation Return 2: EQ 3 - Filter Type',
							id: 'int2_eq3_filtertype',
							default: '0',
							choices: [
								{ id: '0', label: 'LPF/HPF' },
								{ id: '1', label: 'LSH/HSH' },
								{ id: '2', label: 'PEQ' }
							]
						},
					],
					callback: async (event) => {
						let opt = event.options;
	
						let params = '' 
							+ opt.int1_level + ','
							+ opt.int1_nom_level + ','
							+ (opt.int1_low_cut ? '1' : '0') + ','
							+ opt.int1_eq1_freq + ','
							+ opt.int1_eq1_gain + ','
							+ opt.int1_eq1_q + ','
							+ opt.int1_eq1_filtertype + ','
							+ opt.int1_eq2_freq + ','
							+ opt.int1_eq2_gain + ','
							+ opt.int1_eq2_q + ','
							+ opt.int1_eq2_filtertype + ','
							+ opt.int1_eq3_freq + ','
							+ opt.int1_eq3_gain + ','
							+ opt.int1_eq3_q + ','
							+ opt.int1_eq3_filtertype + ','

							+ opt.int2_level + ','
							+ opt.int2_nom_level + ','
							+ (opt.int2_low_cut ? '1' : '0') + ','
							+ opt.int2_eq1_freq + ','
							+ opt.int2_eq1_gain + ','
							+ opt.int2_eq1_q + ','
							+ opt.int2_eq1_filtertype + ','
							+ opt.int2_eq2_freq + ','
							+ opt.int2_eq2_gain + ','
							+ opt.int2_eq2_q + ','
							+ opt.int2_eq2_filtertype + ','
							+ opt.int2_eq3_freq + ','
							+ opt.int2_eq3_gain + ','
							+ opt.int2_eq3_q + ','
							+ opt.int2_eq3_filtertype;					

						this.sendCommand('siinp', 'S', params)
					},
				}
			}

			if (model.actions.includes('saout')) {
				actions['saout'] = {
					name: 'Change Audio Output Settings',
					options: [
						{
							type: 'dropdown',
							label: 'Output Channel',
							id: 'output',
							default: '1',
							choices: [
								{ id: '1', label: 'Output 1' },
								{ id: '2', label: 'Output 2' },
								{ id: '3', label: 'Output 3' },
								{ id: '4', label: 'Output 4' },
							]
						},
						{
							type: 'dropdown',
							label: 'Output Level',
							id: 'output_level',
							default: '0',
							choices: this.fader_table
						},
						{
							type: 'dropdown',
							label: 'Output Source Select',
							id: 'output_source',
							default: '0',
							choices: constants.sources
						},
						{
							type: 'dropdown',
							label: 'Maximum Volume',
							id: 'max_volume',
							default: '0',
							choices: this.fader_table,
							isVisible: (opt) => opt.output == '1' 
						}
					],
					callback: async (event) => {
						let opt = event.options;
	
						let params = '' 
							+ opt.output + ','
							+ opt.output_level + ','
							+ opt.output_source;

						if (opt.output == '1') {
							params += ','
							+ opt.max_volume + ',';

							for (let i = 1; i <= 8; i++) {
								params += opt[`band${i}_freq`] + ','
									+ opt[`band${i}_gain`] + ','
									+ opt[`band${i}_q`] + ',';

								if (i == 1 || i == 8) {
									params += opt[`band${i}_filtertype`] + ',';
								}
							}

							params += opt.output1_dynamics ? '1' : '0' + ','
								+ opt.output1_comp_threshold + ','
								+ opt.output1_limiter_threshold + ','
								+ opt.output1_comp_ratio + ','
								+ opt.output1_attack_time + ','
								+ opt.output1_release_time + ','
								+ opt.output1_gain + ','
								+ opt.output1_mode + ','
								+ opt.output1_sensitivity + ','
								+ opt.output1_center_frequency + ','
								+ opt.output1_reduction;
						}

						this.sendCommand('siinp', 'S', params);
					},
				}

				//Output 1 options only
				for (let i = 1; i <= 8; i++) {
					actions.saout.options.push(
						{
							type: 'dropdown',
							label: `Band ${i}: Frequency`,
							id: `band${i}_freq`,
							default: '0',
							choices: this.frequencies,
							isVisible: (opt) => opt.output == '1' 
						},
						{
							type: 'dropdown',
							label: `Band ${i}: Gain`,
							id: `band${i}_gain`,
							default: '0',
							choices: this.fader_table,
							isVisible: (opt) => opt.output == '1' 
						},
						{
							type: 'dropdown',
							label: `Band ${i}: Q Value`,
							id: `band${i}_q`,
							default: '0',
							choices: this.q,
							isVisible: (opt) => opt.output == '1' 
						}
					)

					if (i == 1 || i == 8) {
						actions.saout.options.push(
							{
								type: 'dropdown',
								label: `Band ${i}: Filter Type`,
								id: `band${i}_filtertype`,
								default: '0',
								choices: [
									{ id: '0', label: 'LPF/HPF' },
									{ id: '1', label: 'LSH/HSH' },
									{ id: '2', label: 'PEQ' }
								],
								isVisible: (opt) => opt.output == '1' 
							}
						)
					}
				}

				actions.saout.options.push(
					{
						type: 'checkbox',
						label: 'Output 1: Enable Dynamics',
						id: 'output1_dynamics',
						default: false,
						isVisible: (opt) => opt.output == '1'
					},
					{
						type: 'dropdown',
						label: 'Dynamics: Output 1: Comp Threshold',
						id: 'output1_comp_threshold',
						default: '0',
						choices: this.threshold,
						isVisible: (opt) => opt.output1_dynamics == true && opt.output == '1'
					},
					{
						type: 'dropdown',
						label: 'Dynamics: Output 1: Limiter Threshold',
						id: 'output1_limiter_threshold',
						default: '0',
						choices: this.threshold,
						isVisible: (opt) => opt.output1_dynamics == true && opt.output == '1'
					},
					{
						type: 'dropdown',
						label: 'Dynamics: Output 1: Comp Ratio',
						id: 'output1_comp_ratio',
						default: '0',
						choices: this.ratio,
						isVisible: (opt) => opt.output1_dynamics == true && opt.output == '1'
					},
					{
						type: 'dropdown',
						label: 'Dynamics: Output 1: Attack Time',
						id: 'output1_attack_time',
						default: '0',
						choices: this.attack_time,
						isVisible: (opt) => opt.output1_dynamics == true && opt.output == '1'
					},
					{
						type: 'dropdown',
						label: 'Dynamics: Output 1: Release Time',
						id: 'output1_release_time',
						default: '100',
						choices: this.release_time,
						isVisible: (opt) => opt.output1_dynamics == true && opt.output == '1'
					},
					{
						type: 'dropdown',
						label: 'Dynamics: Output 1: Gain',
						id: 'output1_gain',
						default: '0',
						choices: this.fader_table,
						isVisible: (opt) => opt.output1_dynamics == true && opt.output == '1'
					},
					{
						type: 'dropdown',
						label: 'Dynamics: Output 1: Mode',
						id: 'output1_mode',
						default: '0',
						choices: [
							{ id: '0', label: 'Comp' },
							{ id: '1', label: 'DeEsser' }
						],
						isVisible: (opt) => opt.output1_dynamics == true && opt.output == '1'
					},
					{
						type: 'dropdown',
						label: 'Dynamics: Output 1: Sensitivity',
						id: 'output1_sensitivity',
						default: '0',
						choices: [
							{ id: '0', label: 'Soft' },
							{ id: '1', label: 'Medium' },
							{ id: '2', label: 'Hard' }
						],
						isVisible: (opt) => opt.output1_dynamics == true && opt.output == '1'
					},
					{
						type: 'dropdown',
						label: 'Dynamics: Output 1: Center Frequency',
						id: 'output1_center_frequency',
						default: '0',
						choices: this.center_frequencies,
						isVisible: (opt) => opt.output1_dynamics == true && opt.output == '1'
					},
					{
						type: 'dropdown',
						label: 'Dynamics: Output 1: Reduction',
						id: 'output1_reduction',
						default: '0',
						choices: [
							{ id: '0', label: 'Soft' },
							{ id: '1', label: 'Medium' },
							{ id: '2', label: 'Hard' }
						],
						isVisible: (opt) => opt.output1_dynamics == true && opt.output == '1'
					}
				)
			}

			if (model.actions.includes('sduin')) {
				actions['sduin'] = {
					name: 'DU Individual Setting Change Request',
					options: [
						{
							type: 'textinput',
							label: 'Serial Number / Device ID',
							id: 'device_id',
							default: '00000000',
						},
						{
							type: 'textinput',
							label: 'Delegate Name',
							id: 'delegate_name',
							default: ''
						},
						{
							type: 'dropdown',
							label: 'Priority',
							id: 'priority',
							default: '0',
							choices: [
								{ id: '0', label: 'Off' },
								{ id: '1', label: 'On' },
							]
						},
						{
							type: 'dropdown',
							label: 'Can Cut/Mute',
							id: 'can_cut_mute',
							default: '0',
							choices: [
								{ id: '0', label: 'Off' },
								{ id: '1', label: 'On' },
							]
						},
						{
							type: 'dropdown',
							label: 'Can be Cut/Muted',
							id: 'can_be_cut_muted',
							default: '0',
							choices: [
								{ id: '0', label: 'Off' },
								{ id: '1', label: 'On' },
							]
						},
						{
							type: 'dropdown',
							label: 'Auto Assign - Group 0',
							id: 'auto_assign_group_0',
							default: '0',
							choices: [
								{ id: '0', label: 'Not Assigned' },
								{ id: '1', label: 'Assigned' },
							]
						},
						{
							type: 'dropdown',
							label: 'Auto Assign - Group 1',
							id: 'auto_assign_group_1',
							default: '0',
							choices: [
								{ id: '0', label: 'Not Assigned' },
								{ id: '1', label: 'Assigned' },
							]
						},
						{
							type: 'dropdown',
							label: 'Auto Assign - Group 2',
							id: 'auto_assign_group_2',
							default: '0',
							choices: [
								{ id: '0', label: 'Not Assigned' },
								{ id: '1', label: 'Assigned' },
							]
						},
						{
							type: 'dropdown',
							label: 'Auto Assign - Group 3',
							id: 'auto_assign_group_3',
							default: '0',
							choices: [
								{ id: '0', label: 'Not Assigned' },
								{ id: '1', label: 'Assigned' },
							]
						},
						{
							type: 'dropdown',
							label: 'Mic on Trigger Mode',
							id: 'mic_on_trigger_mode',
							default: '0',
							choices: [
								{ id: '0', label: 'Button' },
								{ id: '1', label: 'Voice' },
								{ id: '1', label: 'Push To Talk' },
							]
						},
						{
							type: 'checkbox',
							label: 'Phantom Power',
							id: 'phantom_power',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Gain',
							id: 'gain',
							default: '1',
							choices: constants.gain
						},
						{
							type: 'checkbox',
							label: 'AGC',
							id: 'agc',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Interpretation Language Pattern',
							id: 'interpretation_language_pattern',
							default: '1',
							choices: [
								{ id: '1', label: 'L1 > L2' },
								{ id: '2', label: 'L2 > L1' },
								{ id: '3', label: 'L2 <> L1' },
								{ id: '4', label: 'L1 > L3' },
								{ id: '5', label: 'L3 > L1' },
								{ id: '6', label: 'L3 <> L1' },
								{ id: '7', label: 'L2 > L3' },
								{ id: '8', label: 'L3 > L2' },
								{ id: '9', label: 'L3 <> L2' },
							]
						},
						{
							type: 'checkbox',
							label: 'Speaker Enable/Disable',
							id: 'speaker_enable_disable',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Mode When Talk On',
							id: 'mode_when_talk_on',
							default: '0',
							choices: [
								{ id: '0', label: 'Off' },
								{ id: '1', label: 'On' },
								{ id: '2', label: 'Attenuation' },
							]
						},
						{
							type: 'textinput',
							label: 'Rear LED - Talk On/Queuing Color',
							id: 'rear_led_talk_on_queuing_color',
							default: '000000',
						},
						{
							type: 'textinput',
							label: 'Rear LED - Talk On/Queuing Color (Dimmer)',
							id: 'rear_led_talk_on_queuing_color_dimmer',
							default: '000000',
						},
						{
							type: 'dropdown',
							label: 'Default Monitor Channel',
							id: 'default_monitor_channel',
							default: '0',
							choices: [
								{ id: '0', label: 'Floor' },
								{ id: '1', label: 'Language 1' },
								{ id: '2', label: 'Language 2' },
								{ id: '3', label: 'Language 3' },
							]
						},
						{
							type: 'checkbox',
							label: 'Rear LED Enabled',
							id: 'rear_led_enabled',
							default: false
						},
						{
							type: 'checkbox',
							label: 'Talk On at Boot',
							id: 'talk_on_at_boot',
							default: false
						},
						{
							type: 'dropbox',
							label: 'Unit Type',
							id: 'unit_type',
							default: '0',
							choices: [
								{ id: '0', label: 'ATUC-50DU' },
								{ id: '1', label: 'ATUC-50INT' },
								{ id: '2', label: 'ATUC-50IU' },
								{ id: '3', label: 'ATUC-IRDU' },
								{ id: '4', label: 'ATUC-50DUa' },
							]
						},
						{
							type: 'dropdown',
							label: 'IRDU - Rear LED - Talk On/Queuing Color',
							id: 'irdu_rear_led_talk_on_queuing_color',
							default: '1',
							choices: [
								{ id: '1', label: 'Palette Index 1' },
								{ id: '2', label: 'Palette Index 2' },
								{ id: '3', label: 'Palette Index 3' },
								{ id: '4', label: 'Palette Index 4' },
								{ id: '5', label: 'Palette Index 5' },
								{ id: '6', label: 'Palette Index 6' },
								{ id: '7', label: 'Palette Index 7' },
								{ id: '8', label: 'Palette Index 8' },
								{ id: '9', label: 'Palette Index 9' },
								{ id: '10', label: 'Palette Index 10' },
							],
						},
						{
							type: 'dropdown',
							label: 'IRDU - Rear LED - Talk On/Queuing Color (Dimmer)',
							id: 'irdu_rear_led_talk_on_queuing_color_dimmer',
							default: '1',
							choices: [
								{ id: '1', label: 'Palette Index 1' },
								{ id: '2', label: 'Palette Index 2' },
								{ id: '3', label: 'Palette Index 3' },
								{ id: '4', label: 'Palette Index 4' },
								{ id: '5', label: 'Palette Index 5' },
								{ id: '6', label: 'Palette Index 6' },
								{ id: '7', label: 'Palette Index 7' },
								{ id: '8', label: 'Palette Index 8' },
								{ id: '9', label: 'Palette Index 9' },
								{ id: '10', label: 'Palette Index 10' },
							],
						},
						{
							type: 'checkbox',
							label: 'IRDU - Rear LED Talk Off Dimmer Enabled',
							id: 'irdu_rear_led_talk_off_dimmer_enabled',
							default: false
						},
						{
							type: 'textinput',
							label: 'IRDU - Delegate Name 2',
							id: 'irdu_delegate_name_2',
							default: ''
						},
						{
							type: 'checkbox',
							label: 'IRDU - 2 Speaker Mode',
							id: 'irdu_2_speaker_mode',
							default: false
						},
						{
							type: 'dropdown',
							label: 'IRDU - Multi Function Button Assignment',
							id: 'irdu_multi_function_button_assignment',
							default: '0',
							choices: [
								{ id: '0', label: 'Cut/Mute' },
								{ id: '1', label: 'Permit Next' },
							]
						},
						{
							type: 'dropdown',
							label: 'IRDU - Multi Function Voice Assignment',
							id: 'irdu_multi_function_voice_assignment',
							default: '0',
							choices: [
								{ id: '0', label: 'Cut/Mute' },
								{ id: '1', label: 'Permit Next' },
							]
						},
					],
					callback: (action) => {
					}
				};
			}

			if (model.actions.includes('sgpio')) {
				actions['sgpio'] = {
					name: 'GPIO Setting Change Request',
					options: [
						{
							type: 'textinput',
							label: 'Serial Number / Device ID',
							id: 'serial',
							default: '00000000',
						},
						{
							type: 'dropdown',
							label: 'GPI 0',
							id: 'gpi_0',
							default: '0',
							choices: constants.gpi_choices
						},
						{
							type: 'dropdown',
							label: 'GPI 1',
							id: 'gpi_1',
							default: '0',
							choices: constants.gpi_choices
						},
						{
							type: 'dropdown',
							label: 'GPI 2',
							id: 'gpi_2',
							default: '0',
							choices: constants.gpi_choices
						},
						{
							type: 'dropdown',
							label: 'GPI 3',
							id: 'gpi_3',
							default: '0',
							choices: constants.gpi_choices
						},
						{
							type: 'dropdown',
							label: 'GPI 4',
							id: 'gpi_4',
							default: '0',
							choices: constants.gpi_choices
						},
						{
							type: 'dropdown',
							label: 'GPI 5',
							id: 'gpi_5',
							default: '0',
							choices: constants.gpi_choices
						},
						{
							type: 'dropdown',
							label: 'GPI 6',
							id: 'gpi_6',
							default: '0',
							choices: constants.gpi_choices
						},
						{
							type: 'dropdown',
							label: 'GPI 7',
							id: 'gpi_7',
							default: '0',
							choices: constants.gpi_choices
						},
						{
							type: 'dropdown',
							label: 'GPO 0',
							id: 'gpo_0',
							default: '0',
							choices: constants.gpo_choices
						},
						{
							type: 'dropdown',
							label: 'GPI 1',
							id: 'gpo_1',
							default: '0',
							choices: constants.gpo_choices
						},
						{
							type: 'dropdown',
							label: 'GPI 2',
							id: 'gpo_2',
							default: '0',
							choices: constants.gpo_choices
						},
						{
							type: 'dropdown',
							label: 'GPI 3',
							id: 'gpo_3',
							default: '0',
							choices: constants.gpo_choices
						},
						{
							type: 'dropdown',
							label: 'GPI 4',
							id: 'gpo_4',
							default: '0',
							choices: constants.gpo_choices
						},
						{
							type: 'dropdown',
							label: 'GPI 5',
							id: 'gpo_5',
							default: '0',
							choices: constants.gpo_choices
						},
						{
							type: 'dropdown',
							label: 'GPI 6',
							id: 'gpo_6',
							default: '0',
							choices: constants.gpo_choices
						},
						{
							type: 'dropdown',
							label: 'GPI 7',
							id: 'gpo_7',
							default: '0',
							choices: constants.gpo_choices
						},
					],
					callback: (action) => {
						let opt = action.options;

						let params = '';

						params += opt.serial + ',';

						params += opt.gpi_0 + ',';
						params += opt.gpi_1 + ',';
						params += opt.gpi_2 + ',';
						params += opt.gpi_3 + ',';
						params += opt.gpi_4 + ',';
						params += opt.gpi_5 + ',';
						params += opt.gpi_6 + ',';
						params += opt.gpi_7 + ',';

						params += opt.gpo_0 + ',';
						params += opt.gpo_1 + ',';
						params += opt.gpo_2 + ',';
						params += opt.gpo_3 + ',';
						params += opt.gpo_4 + ',';
						params += opt.gpo_5 + ',';
						params += opt.gpo_6 + ',';
						params += opt.gpo_7;

						this.sendCommand('sgpio', 'S', params)
					}
				}
			}

			if (model.actions.includes('sspkv')) {
				actions['sspkv'] = {
					name: 'Speaker Level Change Request',
					options: [
						{
							type: 'number',
							label: 'Level',
							id: 'level',
							default: 0,
							min: 0,
							max: 20,
							required: true
						}
					],
					callback: (action) => {
						let params = action.options.level;

						this.sendCommand('sspkv', 'S', params)
					}
				}
			}

			if (model.actions.includes('sintc')) {
				actions['sintc'] = {
					name: 'INT50 Common Setting Change Request',
					options: [
						{
							type: 'dropdown',
							label: 'Interpretation Mode',
							id: 'interpretation_mode',
							default: '0',
							choices: [
								{ id: '0', label: '2-language standard interpretation' },
								{ id: '1', label: '3-language standard interpretation' },
							]
						},
						{
							type: 'dropdown',
							label: 'Interlock',
							id: 'interlock',
							default: '0',
							choices: [
								{ id: '0', label: 'No Interlock' },
								{ id: '1', label: 'Interlock' },
								{ id: '1', label: 'Combine' },
							]
						},
						{
							type: 'textinput',
							label: 'Group 1 - Language Name',
							id: 'group_1_language_name',
							default: ''
						},
						{
							type: 'textinput',
							label: 'Group 2 - Language Name',
							id: 'group_2_language_name',
							default: ''
						},
						{
							type: 'textinput',
							label: 'Group 3 - Language Name',
							id: 'group_3_language_name',
							default: ''
						},
						{
							type: 'checkbox',
							label: 'Easy Mode',
							id: 'easy_mode',
							default: false
						}
					],
					callback: (action) => {
						let opt = action.options;

						let params = '';

						params += opt.interpretation_mode + ',';
						params += opt.interlock + ',';
						params += opt.group_1_language_name + ',';
						params += opt.group_2_language_name + ',';
						params += opt.group_3_language_name + ',';
						params += opt.easy_mode;

						this.sendCommand('sintc', 'S', params)
					}
				};
			}

			if (model.actions.includes('sreco')) {
				actions['sreco'] = {
					name: 'Recording Setting Change Request',
					options: [
						{
							type: 'dropdown',
							label: 'Record File Format',
							id: 'record_file_format',
							default: '0',
							choices: [
								{ id: '0', label: 'WAVE format' },
								{ id: '1', label: 'MP3 format' },
							]
						},
						{
							type: 'dropdown',
							label: 'Recording Quality (MP3)',
							id: 'recording_quality_mp3',
							default: '192',
							choices: [
								{ id: '64', label: '64kbps' },
								{ id: '128', label: '128kbps' },
								{ id: '192', label: '192kbps' },
								{ id: '256', label: '256kbps' },
								{ id: '320', label: '320kbps' },
							],
							isVisible: (opt) => opt.record_file_format == '1'
						},
						{
							type: 'number',
							label: 'Number of Channels (WAVE)',
							id: 'number_of_channels_wave',
							default: 2,
							min: 1,
							max: 4,
							required: true,
							isVisible: (opt) => opt.record_file_format == '0'
						},
						{
							type: 'number',
							label: 'Number of Channels (MP3)',
							id: 'number_of_channels_mp3',
							default: 2,
							min: 1,
							max: 2,
							required: true,
							isVisible: (opt) => opt.record_file_format == '1'
						},
						{
							type: 'dropdown',
							label: 'Track 1 Source',
							id: 'track_1_source',
							default: '0',
							choices: constants.sources
						},
						{
							type: 'dropdown',
							label: 'Track 2 Source',
							id: 'track_2_source',
							default: '0',
							choices: constants.sources
						},
						{
							type: 'dropdown',
							label: 'Track 3 Source',
							id: 'track_3_source',
							default: '0',
							choices: constants.sources,
							isVisible: (opt) => opt.number_of_channels_wave >= 3
						},
						{
							type: 'dropdown',
							label: 'Track 4 Source',
							id: 'track_4_source',
							default: '0',
							choices: constants.sources,
							isVisible: (opt) => opt.number_of_channels_wave == 4
						},
						{
							type: 'textinput',
							label: 'Rec File Name Prefix',
							id: 'rec_file_name_prefix',
							default: ''
						},
						{
							type: 'dropdown',
							label: 'Auto Track - Automatic Division',
							id: 'auto_track_automatic_division',
							default: '0',
							choices: [
								{ id: '0', label: '0 Minutes' },
								{ id: '15', label: '15 Minutes' },
								{ id: '30', label: '30 Minutes' },
								{ id: '60', label: '60 Minutes' },
								{ id: '120', label: '120 Minutes' },
							],
						}
					],
					callback: (action) => {
						let opt = action.options;

						let params = '';

						params += opt.record_file_format + ',';

						if (opt.record_file_format == '0') { //WAVE
							params += opt.number_of_channels_wave + ',';
						}
						else { //MP3
							params += opt.recording_quality_mp3 + ',';
							params += opt.number_of_channels_mp3 + ',';
						}

						params += opt.track_1_source + ',';
						params += opt.track_2_source + ',';

						if (opt.number_of_channels_wave >= 3) {
							params += opt.track_3_source + ',';
						}

						if (opt.number_of_channels_wave == 4) {
							params += opt.track_4_source + ',';
						}

						params += opt.rec_file_name_prefix + ',';
						params += opt.auto_track_automatic_division;

						this.sendCommand('sreco', 'S', params)
					}
				};
			}

			//Conference Settings
			if (model.actions.includes('sconf')) {
				actions['sconf'] = {
					name: 'Conference Setting Change Request',
					options: [
						{
							type: 'dropdown',
							label: 'Conference Mode',
							id: 'conference_mode',
							default: '0',
							choices: [
								{ id: '0', label: 'Free Talk' },
								{ id: '1', label: 'Request Talk' },
								{ id: '2', label: 'Full Remote' },
							]
						},
						{
							type: 'dropdown',
							label: 'Auto Mic Off',
							id: 'auto_mic_off',
							default: '0',
							choices: [
								{ id: '0', label: '0 Seconds' },
								{ id: '5', label: '5 Seconds' },
								{ id: '10', label: '10 Seconds' },
								{ id: '15', label: '15 Seconds' },
								{ id: '20', label: '20 Seconds' },
								{ id: '25', label: '25 Seconds' },
								{ id: '30', label: '30 Seconds' },
								{ id: '35', label: '35 Seconds' },
								{ id: '40', label: '40 Seconds' },
								{ id: '45', label: '45 Seconds' },
								{ id: '50', label: '50 Seconds' },
								{ id: '55', label: '55 Seconds' },
								{ id: '60', label: '60 Seconds' },
							]
						},
						{
							type: 'number',
							label: 'Number of Open Mics',
							id: 'number_of_open_mics',
							default: 1,
							min: 1,
							max: 10,
							required: true
						},
						{
							type: 'number',
							label: 'Maximum in Queue',
							id: 'maximum_in_queue',
							default: 0,
							min: 0,
							max: 150,
						},
						{
							type: 'checkbox',
							label: 'Priority Cut/Mute',
							id: 'priority_cut_mute',
							default: false
						},
						{
							type: 'dropdown',
							label: 'Override Mode - Free Talk',
							id: 'override_mode_free_talk',
							default: '0',
							choices: [
								{ id: '0', label: 'No Override' },
								{ id: '1', label: 'FIFO' },
								{ id: '2', label: 'LIFO' },
							]
						},
						{
							type: 'dropdown',
							label: 'Override Mode - Request Talk',
							id: 'override_mode_request_talk',
							default: '1',
							choices: [
								{ id: '1', label: 'FIFO' },
								{ id: '2', label: 'LIFO' },
							],
						},
						{
							type: 'dropdown',
							label: 'Override Mode - Full Remote',
							id: 'override_mode_full_remote',
							default: '1',
							choices: [
								{ id: '1', label: 'FIFO' },
								{ id: '2', label: 'LIFO' },
							],
						},
						{
							type: 'dropdown',
							label: 'Mic on Hold Time',
							id: 'mic_on_hold_time',
							default: '2500',
							choices: [
								{ id: '500', label: '500 msec' },
								{ id: '1000', label: '1 sec' },
								{ id: '1500', label: '1.5 sec' },
								{ id: '2000', label: '2 sec' },
								{ id: '2500', label: '2.5 sec' },
								{ id: '3000', label: '3 sec' },
								{ id: '3500', label: '3.5 sec' },
								{ id: '4000', label: '4 sec' },
								{ id: '4500', label: '4.5 sec' },
								{ id: '5000', label: '5 sec' },
								{ id: '5500', label: '5.5 sec' },
								{ id: '6000', label: '6 sec' },
							],
						}
					],
					callback: (action) => {
						let opt = action.options;

						let params = '';

						params += opt.conference_mode + ',';
						params += opt.auto_mic_off + ',';
						params += opt.number_of_open_mics + ',';
						params += opt.maximum_in_queue + ',';
						params += opt.priority_cut_mute + ',';
						params += opt.override_mode_free_talk + ',';
						params += opt.override_mode_request_talk + ',';
						params += opt.override_mode_full_remote + ',';
						params += opt.mic_on_hold_time;

						this.sendCommand('sconf', 'S', params);
					}
				};
			}

			if (model.actions.includes('srcdu')) {
				actions['srcdu'] = {
					name: 'DU Identify Request',
					options: [
						{
							type: 'textinput',
							label: 'Serial Number / Device ID',
							id: 'serial',
							default: '00000000',
						},
						{
							type: 'dropdown',
							label: 'Start/Stop Blinking',
							id: 'start_stop',
							default: '0',
							choices: [
								{ id: '0', label: 'Stop' },
								{ id: '1', label: 'Start' },
							]
						},
						{
							type: 'dropdown',
							label: 'Unit Type',
							id: 'unit_type',
							default: '0',
							choices: [
								{ id: '0', label: 'ATUC-50DU' },
								{ id: '1', label: 'ATUC-50INT' },
								{ id: '2', label: 'ATUC-50IU' },
								{ id: '3', label: 'ATUC-IRDU' },
								{ id: '4', label: 'ATUC-50DUa' },
							]
						}
					],
					callback: (action) => {
						let opt = action.options;

						let params = '';

						params += opt.serial + ',';
						params += opt.start_stop + ',';
						params += opt.unit_type;

						this.sendCommand('srcdu', 'S', params);
					}
				};
			}

			if (model.actions.includes('takof')) {
				actions['takof'] = {
					name: 'Talk Off Request',
					options: [
						{
							type: 'textinput',
							label: 'Serial Number / Device ID',
							id: 'serial',
							default: '00000000',
						},
						{
							type: 'dropdown',
							label: 'Unit Type',
							id: 'unit_type',
							default: '0',
							choices: [
								{ id: '0', label: 'ATUC-50DU' },
								{ id: '1', label: 'ATUC-50INT' },
								{ id: '2', label: 'ATUC-50IU' },
								{ id: '3', label: 'ATUC-IRDU' },
								{ id: '4', label: 'ATUC-50DUa' },
							]
						},
						{
							type: 'dropdown',
							label: '2 Speaker',
							id: 'second_speaker',
							default: '0',
							choices: [
								{ id: '0', label: 'First Talker' },
								{ id: '1', label: 'Second Talker' },
							],
							isVisible: (opt) => opt.unit_type == '3'
						},
					],
					callback: (action) => {
						let opt = action.options;

						let params = '';

						params += opt.serial + ',';
						params += opt.unit_type + ',';

						if (opt.unit_type == '3') {
							params += opt.second_speaker;
						}
						
						this.sendCommand('takof', 'S', params);
					}
				};
			}

			if (model.actions.includes('reqon')) {
				actions['reqon'] = {
					name: 'Request Talk Request',
					options: [
						{
							type: 'textinput',
							label: 'Serial Number / Device ID',
							id: 'serial',
							default: '00000000',
						},
						{
							type: 'dropdown',
							label: 'Unit Type',
							id: 'unit_type',
							default: '0',
							choices: [
								{ id: '0', label: 'ATUC-50DU' },
								{ id: '1', label: 'ATUC-50INT' },
								{ id: '2', label: 'ATUC-50IU' },
								{ id: '3', label: 'ATUC-IRDU' },
								{ id: '4', label: 'ATUC-50DUa' },
							]
						},
						{
							type: 'dropdown',
							label: '2 Speaker',
							id: 'second_speaker',
							default: '0',
							choices: [
								{ id: '0', label: 'First Talker' },
								{ id: '1', label: 'Second Talker' },
							],
							isVisible: (opt) => opt.unit_type == '3'
						},
					],
					callback: (action) => {
						let opt = action.options;

						let params = '';

						params += '1,'; //mode - select/next Selected (required)

						params += opt.serial + ',';
						params += opt.unit_type + ',';
						
						if (opt.unit_type == '3') {
							params += opt.second_speaker;
						}

						this.sendCommand('reqon', 'S', params);
					}
				};
			}

			if (model.actions.includes('reqof')) {
				actions['reqof'] = {
					name: 'Request Talk Deletion Request',
					options: [
						{
							type: 'dropdown',
							label: 'Mode',
							id: 'mode',
							default: '0',
							choices: [
								{ id: '0', label: 'All' },
								{ id: '1', label: 'Selected' },
							]
						},
						{
							type: 'textinput',
							label: 'Serial Number / Device ID',
							id: 'serial',
							default: '00000000',
						},
						{
							type: 'dropdown',
							label: 'Unit Type',
							id: 'unit_type',
							default: '0',
							choices: [
								{ id: '0', label: 'ATUC-50DU' },
								{ id: '1', label: 'ATUC-50INT' },
								{ id: '2', label: 'ATUC-50IU' },
								{ id: '3', label: 'ATUC-IRDU' },
								{ id: '4', label: 'ATUC-50DUa' },
							]
						},
						{
							type: 'dropdown',
							label: '2 Speaker',
							id: 'second_speaker',
							default: '0',
							choices: [
								{ id: '0', label: 'First Talker' },
								{ id: '1', label: 'Second Talker' },
							],
							isVisible: (opt) => opt.unit_type == '3'
						},
					],
					callback: (action) => {
						let opt = action.options;

						let params = '';

						params += opt.mode + ',';

						params += opt.serial + ',';
						params += opt.unit_type + ',';
						
						if (opt.unit_type == '3') {
							params += opt.second_speaker;
						}

						this.sendCommand('reqof', 'S', params);
					}
				};
			}

			if (model.actions.includes('prmit')) {
				actions['prmit'] = {
					name: 'Talk Permission Request',
					options: [
						{
							type: 'dropdown',
							label: 'Mode',
							id: 'mode',
							default: '0',
							choices: [
								{ id: '0', label: 'Next' },
								{ id: '1', label: 'Selected' },
							]
						},
						{
							type: 'textinput',
							label: 'Serial Number / Device ID',
							id: 'serial',
							default: '00000000',
						},
						{
							type: 'dropdown',
							label: 'Unit Type',
							id: 'unit_type',
							default: '0',
							choices: [
								{ id: '0', label: 'ATUC-50DU' },
								{ id: '1', label: 'ATUC-50INT' },
								{ id: '2', label: 'ATUC-50IU' },
								{ id: '3', label: 'ATUC-IRDU' },
								{ id: '4', label: 'ATUC-50DUa' },
							]
						},
						{
							type: 'dropdown',
							label: '2 Speaker',
							id: 'second_speaker',
							default: '0',
							choices: [
								{ id: '0', label: 'First Talker' },
								{ id: '1', label: 'Second Talker' },
							],
							isVisible: (opt) => opt.unit_type == '3'
						},
					],
					callback: (action) => {
						let opt = action.options;

						let params = '';

						params += opt.mode + ',';

						params += opt.serial + ',';
						params += opt.unit_type + ',';
						
						if (opt.unit_type == '3') {
							params += opt.second_speaker;
						}

						this.sendCommand('prmit', 'S', params);
					}
				};
			}

			if (model.actions.includes('pundo')) {
				actions['pundo'] = {
					name: 'Talk Cancel Request',
					options: [],
					callback: (action) => {
						this.sendCommand('pundo', 'S', '');
					}
				};
			}

			if (model.actions.includes('scgpo')) {
				actions['scgpo'] = {
					name: 'GPO Control Request',
					options: [
						{
							type: 'textinput',
							label: 'Serial Number / Device ID',
							id: 'serial',
							default: '00000000',
						},
						{
							type: 'dropdown',
							label: 'GPO 0',
							id: 'gpo_0',
							default: '0',
							choices: [
								{ id: '0', label: 'Off' },
								{ id: '1', label: 'On' },
								{ id: '2', label: 'Flash' },
								{ id: '3', label: 'Blink' },
							]
						},
						{
							type: 'dropdown',
							label: 'GPO 1',
							id: 'gpo_1',
							default: '0',
							choices: [
								{ id: '0', label: 'Off' },
								{ id: '1', label: 'On' },
								{ id: '2', label: 'Flash' },
								{ id: '3', label: 'Blink' },
							]
						},
						{
							type: 'dropdown',
							label: 'GPO 2',
							id: 'gpo_2',
							default: '0',
							choices: [
								{ id: '0', label: 'Off' },
								{ id: '1', label: 'On' },
								{ id: '2', label: 'Flash' },
								{ id: '3', label: 'Blink' },
							]
						},
						{
							type: 'dropdown',
							label: 'GPO 3',
							id: 'gpo_3',
							default: '0',
							choices: [
								{ id: '0', label: 'Off' },
								{ id: '1', label: 'On' },
								{ id: '2', label: 'Flash' },
								{ id: '3', label: 'Blink' },
							]
						},
						{
							type: 'dropdown',
							label: 'GPO 4',
							id: 'gpo_4',
							default: '0',
							choices: [
								{ id: '0', label: 'Off' },
								{ id: '1', label: 'On' },
								{ id: '2', label: 'Flash' },
								{ id: '3', label: 'Blink' },
							]
						},
						{
							type: 'dropdown',
							label: 'GPO 5',
							id: 'gpo_5',
							default: '0',
							choices: [
								{ id: '0', label: 'Off' },
								{ id: '1', label: 'On' },
								{ id: '2', label: 'Flash' },
								{ id: '3', label: 'Blink' },
							]
						},
						{
							type: 'dropdown',
							label: 'GPO 6',
							id: 'gpo_6',
							default: '0',
							choices: [
								{ id: '0', label: 'Off' },
								{ id: '1', label: 'On' },
								{ id: '2', label: 'Flash' },
								{ id: '3', label: 'Blink' },
							]
						},
						{
							type: 'dropdown',
							label: 'GPO 7',
							id: 'gpo_7',
							default: '0',
							choices: [
								{ id: '0', label: 'Off' },
								{ id: '1', label: 'On' },
								{ id: '2', label: 'Flash' },
								{ id: '3', label: 'Blink' },
							]
						}
					],
					callback: (action) => {
						let opt = action.options;

						let params = '';

						params += opt.serial + ',';
						params += opt.gpo_0 + ',';
						params += opt.gpo_1 + ',';
						params += opt.gpo_2 + ',';
						params += opt.gpo_3 + ',';
						params += opt.gpo_4 + ',';
						params += opt.gpo_5 + ',';
						params += opt.gpo_6 + ',';
						params += opt.gpo_7;

						this.sendCommand('scgpo', 'S', params);
					}
				};
			}

			if (model.actions.includes('splay')) {
				actions['splay'] = {
					name: 'SFX Play/Stop Request',
					options: [
						{
							type: 'dropdown',
							label: 'Action',
							id: 'action',
							default: '0',
							choices: [
								{ id: '0', label: 'Stop' },
								{ id: '1', label: 'Start' },
							]
						},
						{
							type: 'dropdown',
							label: 'Kind',
							id: 'kind',
							default: '1',
							choices: [
								{ id: '1', label: 'SFX 1' },
								{ id: '2', label: 'SFX 2' },
								{ id: '3', label: 'SFX 3' },
							],
							isVisible: (opt) => opt.action == '1'
						}
					],
					callback: (action) => {
						let opt = action.options;

						let params = '';

						if (opt.action == '1') { //Start
							params += opt.kind + ',1';
						}
						else { //Stop
							params += ',0'; //this seems wrong but it's what the manual says
						}

						this.sendCommand('splay', 'S', params);
					}
				};
			}

			if (model.actions.includes('spllv')) {
				actions['spllv'] = {
					name: 'SFX Playing Level Change Request',
					options: [
						{
							type: 'dropdown',
							label: 'Level',
							id: 'level',
							default: '0',
							choices: constants.fader_table
						},
					],
					callback: (action) => {
						let opt = action.options;

						let params = '';

						params += opt.level;

						this.sendCommand('spllv', 'S', params);
					}
				};
			}

			if (model.actions.includes('recmd')) {
				actions['recmd'] = {
					name: 'Recording Request',
					options: [
						{
							type: 'dropdown',
							label: 'Action',
							id: 'action',
							default: '0',
							choices: [
								{ id: '0', label: 'Stop' },
								{ id: '1', label: 'Pause' },
								{ id: '2', label: 'Start' },
							]
						}
					],
					callback: (action) => {
						let opt = action.options;

						let params = '';

						params += opt.action;

						this.sendCommand('recmd', 'S', params);
					}
				};
			}

			if (model.actions.includes('reclv')) {
				actions['reclv'] = {
					name: 'Recording Level Change Request',
					options: [
						{
							type: 'dropdown',
							label: 'Level',
							id: 'level',
							default: '0',
							choices: constants.fader_table
						},
					],
					callback: (action) => {
						let opt = action.options;

						let params = '';

						params += opt.level;

						this.sendCommand('reclv', 'S', params);
					}
				};
			}

			if (model.actions.includes('callp')) {
				actions['callp'] = {
					name: 'Preset Call Request',
					options: [
						{
							type: 'dropdown',
							label: 'Bank Number',
							id: 'bank',
							default: 1,
							choices: [
								{ id: 1, label: 'Bank 1'},
								{ id: 2, label: 'Bank 2'},
								{ id: 3, label: 'Bank 3'},
								{ id: 4, label: 'Bank 4'},
								{ id: 5, label: 'Bank 5'},
								{ id: 6, label: 'Bank 6'},
								{ id: 7, label: 'Bank 7'},
								{ id: 8, label: 'Bank 8'},
							]
						},
					],
					callback: async (event) => {
						let params = '';
	
						params += event.options.bank;
	
						this.sendCommand('callp', 'S', params)
					},
				}
			}

			if (model.actions.includes('savep')) {
				actions['savep'] = {
					name: 'Preset Save Request',
					options: [
						{
							type: 'dropdown',
							label: 'Bank Number',
							id: 'bank',
							default: 1,
							choices: [
								{ id: 1, label: 'Bank 1'},
								{ id: 2, label: 'Bank 2'},
								{ id: 3, label: 'Bank 3'},
								{ id: 4, label: 'Bank 4'},
								{ id: 5, label: 'Bank 5'},
								{ id: 6, label: 'Bank 6'},
								{ id: 7, label: 'Bank 7'},
								{ id: 8, label: 'Bank 8'},
							]
						},
					],
					callback: async (event) => {
						let params = '';
	
						params += event.options.bank;
	
						this.sendCommand('savep', 'S', params)
					},
				}
			}

			if (model.actions.includes('sdate')) {
				actions['sdate'] = {
					name: 'Date Setting Request - Send Current Date/Time',
					options: [
					],
					callback: async (event) => {
						let params = '';
	
						let now = new Date();
	
						params += now.getFullYear() + '';
						params += now.getMonth() + 1 + '';
						params += now.getDate() + '';
						params += now.getHours() + '';
						params += now.getMinutes() + '';
						params += now.getSeconds();
	
						this.sendCommand('sdate', 'S', params)
					}
				};
			}

			if (model.actions.includes('srccu')) {
				actions['srccu'] = {
					name: 'CU Identify Request',
					options: [],
					callback: async (event) => {
						this.sendCommand('srccu', 'S', '')
					}
				};
			}
		}
			
		this.setActionDefinitions(actions)
	}
}