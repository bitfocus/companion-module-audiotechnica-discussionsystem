const constants = require('./constants')

module.exports = {
	initVariables() {
		let variables = []

		variables.push({ variableId: 'model', name: 'Model' })

		let model = this.MODELS.find((model) => model.id == this.config.model);

		if (model) { //push model specific variables
			if (model.variables.includes('input_gain_level')) {
				for (let i = 0; i < model.input_channels.length; i++) {
					variables.push({ variableId: `${model.input_channels[i].variableId}_mic_gain`, name: `${model.input_channels[i].label} Mic Gain`})
					variables.push({ variableId: `${model.input_channels[i].variableId}_line_gain`, name: `${model.input_channels[i].label} Line Gain`})
					variables.push({ variableId: `${model.input_channels[i].variableId}_level`, name: `${model.input_channels[i].label} Level`})
					variables.push({ variableId: `${model.input_channels[i].variableId}_mute`, name: `${model.input_channels[i].label} Mute`})
				}
			}

			if (model.variables.includes('preset_number')) {
				variables.push({ variableId: `preset_number`, name: `Current Preset Number`});
			}
		}

		this.setVariableDefinitions(variables);

		this.setVariableValues({
			model: model.label,
		});
	},

	checkVariables() {
		try {
			let model = this.MODELS.find((model) => model.id == this.config.model);

			if (model) {
				if (model.variables.includes('input_gain_level')) {
					let variableObj = {};
					
					for (let i = 0; i < this.DATA.input_gain_level.length; i++) {
						let inputGainLevelObj = this.DATA.input_gain_level[i];
						let modelChannelObj = model.input_channels.find((CHANNEL) => CHANNEL.id == inputGainLevelObj.id);
	
						variableObj[`${modelChannelObj.variableId}_mic_gain`] = inputGainLevelObj.mic_gain_label;
						variableObj[`${modelChannelObj.variableId}_line_gain`] = inputGainLevelObj.line_gain_label;
						variableObj[`${modelChannelObj.variableId}_level`] = inputGainLevelObj.level_label;
						variableObj[`${modelChannelObj.variableId}_mute`] = (inputGainLevelObj.mute == true ? 'On' : 'Off')
					}
					this.setVariableValues(variableObj);
				}

				if (model.variables.includes('preset_number')) {
					let variableObj = {};
					variableObj[`preset_number`] = this.DATA.preset_number;
					this.setVariableValues(variableObj);
				}
			}
		}
		catch(error) {
			this.log('error', `Error checking variables: ${error.toString()}`)
		}
	}
}