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
							choices: [
								{ id: '0', label: 'Floor' },
								{ id: '1', label: 'Group 0' },
								{ id: '2', label: 'Group 1' },
								{ id: '3', label: 'Group 2' },
								{ id: '4', label: 'Group 3' },
								{ id: '5', label: 'Language 1' },
								{ id: '6', label: 'Language 2' },
								{ id: '7', label: 'Language 3' },
								{ id: '8', label: 'Interpretation Return 1' },
								{ id: '9', label: 'Interpretation Return 2' },
								{ id: '10', label: 'Mic/Line 1' },
								{ id: '11', label: 'Mic/Line 2' },
								{ id: '12', label: 'Mic/Line 1 & 2 Mix' },
							]
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
						}
					],
					callback: (action) => {
					}
				};
			}

			if (model.actions.includes('callp')) {
				actions['call_preset'] = {
					name: 'Call Preset',
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
								{ id: 9, label: 'Bank 9'},
								{ id: 10, label: 'Bank 10'},
								{ id: 11, label: 'Bank 11'},
								{ id: 12, label: 'Bank 12'},
								{ id: 13, label: 'Bank 13'},
								{ id: 14, label: 'Bank 14'},
								{ id: 15, label: 'Bank 15'},
								{ id: 16, label: 'Bank 16'}
							]
						},
					],
					callback: async (event) => {
						let params = '';
	
						params += event.options.bank;
	
						this.sendCommand('call_preset', 'S', params)
					},
				}
			}
		}
			
		this.setActionDefinitions(actions)
	}
}