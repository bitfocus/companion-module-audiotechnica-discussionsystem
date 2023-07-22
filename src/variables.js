const constants = require('./constants')

module.exports = {
	initVariables() {
		let variables = []

		variables.push({ variableId: 'model', name: 'Model' })

		let model = this.MODELS.find((model) => model.id == this.config.model);

		if (model) { //push model specific variables
			if (model.variables.includes('gcust')) {
			}

			if (model.variables.includes('gminp')) {
			}

			if (model.variables.includes('gxinp')) {
			}

			if (model.variables.includes('giinp')) {
			}

			if (model.variables.includes('gaout')) {
			}

			if (model.variables.includes('ggpio')) {
			}

			if (model.variables.includes('gintc')) {
			}

			if (model.variables.includes('ggpst')) {
			}

			if (model.variables.includes('gcgpi')) {
			}

			if (model.variables.includes('gcvui')) {
			}

			if (model.variables.includes('recst')) {
				variables.push({ variableId: `rec_status`, name: `Recording Status`});
				variables.push({ variableId: `rec_elapsed`, name: `Recording Time Elapsed`});
				variables.push({ variableId: `rec_remaining`, name: `Recording Time Remaining`});
			}

			if (model.variables.includes('glvmt')) {
			}

			if (model.variables.includes('confm')) {
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
				if (model.variables.includes('gcust')) {
				}
	
				if (model.variables.includes('gminp')) {
				}
	
				if (model.variables.includes('gxinp')) {
				}
	
				if (model.variables.includes('giinp')) {
				}
	
				if (model.variables.includes('gaout')) {
				}
	
				if (model.variables.includes('ggpio')) {
				}
	
				if (model.variables.includes('gintc')) {
				}
	
				if (model.variables.includes('ggpst')) {
				}
	
				if (model.variables.includes('gcgpi')) {
				}
	
				if (model.variables.includes('gcvui')) {
				}
	
				if (model.variables.includes('recst')) {
					let variableObj = {};

					variableObj[`rec_status`] = this.DATA.recst.status;
					variableObj[`rec_elapsed`] = this.DATA.recst.elapsed;
					variableObj[`rec_remaining`] = this.DATA.recst.remaining;

					this.setVariableValues(variableObj);
				}
	
				if (model.variables.includes('glvmt')) {
				}
	
				if (model.variables.includes('confm')) {
				}
			}
		}
		catch(error) {
			this.log('error', `Error checking variables: ${error.toString()}`)
		}
	}
}