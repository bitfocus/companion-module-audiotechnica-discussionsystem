const { Regex } = require('@companion-module/base')

module.exports = {
	getConfigFields() {
		return [
			{
				type: 'static-text',
				id: 'info',
				width: 12,
				label: 'Information',
				value: 'This module will connect to an Audio-Technica Discussion System, such as the ATUC-50CU.',
			},
			{
				type: 'textinput',
				id: 'host',
				label: 'IP Address',
				width: 6,
				default: '192.168.0.1',
				regex: Regex.IP,
			},
			{
				type: 'dropdown',
				label: 'Model',
				id: 'model',
				default: 'atuc-50cu',
				choices: this.MODELS,
				width: 12
			},
			{
				type: 'number',
				id: 'poll_interval',
				label: 'Polling Interval (ms), set to 0 to disable polling',
				min: 50,
				max: 30000,
				default: 1000,
				width: 3,
			}
		]
	}
}