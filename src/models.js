module.exports = {
	MODELS: 
	[
		{ id: 'atuc-50cu', label: 'ATUC-50CU',
			actions: [
				'sminp',
				'sxinp',
				'siinp',
				'saout',
				'sduin',
				'sgpio',
				'sspkv',
				'sintc',
				'sreco',

				'sconf',
				'srcdu',
				'takof',
				'reqon',
				'reqof',
				'prmit',
				'pundo',
				'scgpo',
				'splay',
				'spllv',

				'recmd',
				'reclv',
				'callp',
				'savep',
				'sdate',

				'srccu'
			],
			feedbacks: [
				'gmimp',
				'gxinp',
				'giinp',
				'gaout',
				'ggpio',
				'gintc',
				'greco',
				'gconf',
				'gconn',
				'ggpio',
			],
			variables: [
				'gcust',
				'gminp',
				'gxinp',
				'giinp',
				'gaout',
				'ggpio',
				'gintc',
				'ggpst',
				'gcgpi',
				'gcvui',
				'recst',
				'glvmt',
				'confm',
			],
			input_channels: [
				{ id: '0', label: 'Mic/Line Input 1', variableId: 'input1'},
				{ id: '1', label: 'Mic/Line Input 2', variableId: 'input2'},
				{ id: '2', label: 'Dante Input 1', variableId: 'dante_input1'},
				{ id: '3', label: 'Dante Input 2', variableId: 'dante_input2'},
			],
			output_channels: [
				{ id: '0', label: 'Analog Out', variableId: 'analogout'},
				{ id: '1', label: 'Auto Mix', variableId: 'automix'},
			],
			data_request: [
				'gminp',
				'gxinp',
				'giinp',
				'gaout',
				'ggpio',
				'gintc',
				'greco',
				'gconf',
				'recst',
				'glvmt',
			]
		}
	]
}