const { combineRgb } = require('@companion-module/base')

module.exports = {
	initFeedbacks() {
		let feedbacks = {}

		let model = this.MODELS.find((model) => model.id == this.config.model);

		if (model) { //push model specific feedbacks
			if (model.feedbacks.includes('phantompower')) {
				feedbacks['phantom_power'] = {
					type: 'boolean',
					name: 'Phantom Power is On',
					description: 'Show feedback for Phantom Power State',
					options: [
						{
							type: 'dropdown',
							label: 'Input Channel',
							id: 'input',
							default: model.input_channels[0].id,
							choices: model.input_channels
						}
					],
					defaultStyle: {
						color: combineRgb(0, 0, 0),
						bgcolor: combineRgb(255, 0, 0)
					},
					callback: (event) => {
						let opt = event.options
						let inputChannelSettingsObj = this.DATA.input_channel_settings.find((CHANNEL) => CHANNEL.id == opt.input);

						if (inputChannelSettingsObj) {
							if (inputChannelSettingsObj.phantomPower == true) {
								return true;
							}
						}
						
						return false
					},
				}
			}
		}

		this.setFeedbackDefinitions(feedbacks)
	}
}