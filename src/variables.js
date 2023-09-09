const constants = require('./constants')

module.exports = {
	initVariables() {
		let variables = []

		variables.push({ variableId: 'model', name: 'Model' })

		let model = this.MODELS.find((model) => model.id == this.config.model);

		if (model) { //push model specific variables
			if (model.variables.includes('gcust')) {
				variables.push({ variableId: `gcust_primary_porta_topology`, name: `Primary Port A Topology`});
				variables.push({ variableId: `gcust_primary_porta_du_count`, name: `Primary Port A Connected DUs`});
				variables.push({ variableId: `gcust_primary_porta_int50_count`, name: `Primary Port A Connected INT50s`});
				variables.push({ variableId: `gcust_primary_porta_iu_count`, name: `Primary Port A Connected IUs`});

				variables.push({ variableId: `gcust_primary_portb_topology`, name: `Primary Port B Topology`});
				variables.push({ variableId: `gcust_primary_portb_du_count`, name: `Primary Port B Connected DUs`});
				variables.push({ variableId: `gcust_primary_portb_int50_count`, name: `Primary Port B Connected INT50s`});
				variables.push({ variableId: `gcust_primary_portb_iu_count`, name: `Primary Port B Connected IUs`});

				variables.push({ variableId: `gcust_primary_portc_topology`, name: `Primary Port C Topology`});
				variables.push({ variableId: `gcust_primary_portc_du_count`, name: `Primary Port C Connected DUs`});
				variables.push({ variableId: `gcust_primary_portc_int50_count`, name: `Primary Port C Connected INT50s`});
				variables.push({ variableId: `gcust_primary_portc_iu_count`, name: `Primary Port C Connected IUs`});

				variables.push({ variableId: `gcust_primary_portd_topology`, name: `Primary Port D Topology`});
				variables.push({ variableId: `gcust_primary_portd_du_count`, name: `Primary Port D Connected DUs`});
				variables.push({ variableId: `gcust_primary_portd_int50_count`, name: `Primary Port D Connected INT50s`});
				variables.push({ variableId: `gcust_primary_portd_iu_count`, name: `Primary Port D Connected IUs`});

				variables.push({ variableId: `gcust_extension1_porta_topology`, name: `Extension 1 Port A Topology`});
				variables.push({ variableId: `gcust_extension1_porta_du_count`, name: `Extension 1 Port A Connected DUs`});
				variables.push({ variableId: `gcust_extension1_porta_iu_count`, name: `Extension 1 Port A Connected IUs`});

				variables.push({ variableId: `gcust_extension1_portb_topology`, name: `Extension 1 Port B Topology`});
				variables.push({ variableId: `gcust_extension1_portb_du_count`, name: `Extension 1 Port B Connected DUs`});
				variables.push({ variableId: `gcust_extension1_portb_iu_count`, name: `Extension 1 Port B Connected IUs`});

				variables.push({ variableId: `gcust_extension2_porta_topology`, name: `Extension 2 Port A Topology`});
				variables.push({ variableId: `gcust_extension2_porta_du_count`, name: `Extension 2 Port A Connected DUs`});
				variables.push({ variableId: `gcust_extension2_porta_iu_count`, name: `Extension 2 Port A Connected IUs`});

				variables.push({ variableId: `gcust_extension2_portb_topology`, name: `Extension 2 Port B Topology`});
				variables.push({ variableId: `gcust_extension2_portb_du_count`, name: `Extension 2 Port B Connected DUs`});
				variables.push({ variableId: `gcust_extension2_portb_iu_count`, name: `Extension 2 Port B Connected IUs`});

				variables.push({ variableId: `gcust_extension3_porta_topology`, name: `Extension 3 Port A Topology`});
				variables.push({ variableId: `gcust_extension3_porta_du_count`, name: `Extension 3 Port A Connected DUs`});
				variables.push({ variableId: `gcust_extension3_porta_iu_count`, name: `Extension 3 Port A Connected IUs`});

				variables.push({ variableId: `gcust_extension3_portb_topology`, name: `Extension 3 Port B Topology`});
				variables.push({ variableId: `gcust_extension3_portb_du_count`, name: `Extension 3 Port B Connected DUs`});
				variables.push({ variableId: `gcust_extension3_portb_iu_count`, name: `Extension 3 Port B Connected IUs`});

				variables.push({ variableId: `gcust_connected_irdu`, name: `Number of Connected IRDUs`});

				variables.push({ variableId: `gcust_primary_porta_duas_count`, name: `Primary Port A Connected DUas`});
				variables.push({ variableId: `gcust_primary_portb_duas_count`, name: `Primary Port B Connected DUas`});
				variables.push({ variableId: `gcust_primary_portc_duas_count`, name: `Primary Port C Connected DUas`});
				variables.push({ variableId: `gcust_primary_portd_duas_count`, name: `Primary Port D Connected DUas`});

				variables.push({ variableId: `gcust_extension1_porta_duas_count`, name: `Extension 1 Port A Connected DUas`});
				variables.push({ variableId: `gcust_extension1_portb_duas_count`, name: `Extension 1 Port B Connected DUas`});

				variables.push({ variableId: `gcust_extension2_porta_duas_count`, name: `Extension 2 Port A Connected DUas`});
				variables.push({ variableId: `gcust_extension2_portb_duas_count`, name: `Extension 2 Port B Connected DUas`});
			}

			if (model.variables.includes('gminp')) {
				variables.push({ variableId: `gminp_miclineinput1_type`, name: `Mic/Line Input 1 Type`});
				variables.push({ variableId: `gminp_miclineinput1_mixtofloor`, name: `Mic/Line Input 1 Mix To Floor`});
				variables.push({ variableId: `gminp_miclineinput1_mixtolanguage`, name: `Mic/Line Input 1 Mix to Language`});

				variables.push({ variableId: `gminp_miclineinput1_mic_phantompower`, name: `Mic/Line Input 1 Mic Phantom Power`});
				variables.push({ variableId: `gminp_miclineinput1_mic_gain`, name: `Mic/Line Input 1 Mic Gain`});
				variables.push({ variableId: `gminp_miclineinput1_mic_level`, name: `Mic/Line Input 1 Mic Level`});
				variables.push({ variableId: `gminp_miclineinput1_mic_lowcut`, name: `Mic/Line Input 1 Mic Low Cut`});
				
				variables.push({ variableId: `gminp_miclineinput1_mic_eq1_frequency`, name: `Mic/Line Input 1 Mic EQ 1 Frequency`});
				variables.push({ variableId: `gminp_miclineinput1_mic_eq1_gain`, name: `Mic/Line Input 1 Mic EQ 1 Gain`});
				variables.push({ variableId: `gminp_miclineinput1_mic_eq1_q`, name: `Mic/Line Input 1 Mic EQ 1 Q Value`});
				variables.push({ variableId: `gminp_miclineinput1_mic_eq1_filtertype`, name: `Mic/Line Input 1 Mic EQ 1 Filter Type`});
				
				variables.push({ variableId: `gminp_miclineinput1_mic_eq2_frequency`, name: `Mic/Line Input 1 Mic EQ 2 Frequency`});
				variables.push({ variableId: `gminp_miclineinput1_mic_eq2_gain`, name: `Mic/Line Input 1 Mic EQ 2 Gain`});
				variables.push({ variableId: `gminp_miclineinput1_mic_eq2_q`, name: `Mic/Line Input 1 Mic EQ 2 Q Value`});
				variables.push({ variableId: `gminp_miclineinput1_mic_eq2_filtertype`, name: `Mic/Line Input 1 Mic EQ 2 Filter Type`});
				
				variables.push({ variableId: `gminp_miclineinput1_mic_eq3_frequency`, name: `Mic/Line Input 1 Mic EQ 3 Frequency`});
				variables.push({ variableId: `gminp_miclineinput1_mic_eq3_gain`, name: `Mic/Line Input 1 Mic EQ 3 Gain`});
				variables.push({ variableId: `gminp_miclineinput1_mic_eq3_q`, name: `Mic/Line Input 1 Mic EQ 3 Q Value`});
				variables.push({ variableId: `gminp_miclineinput1_mic_eq3_filtertype`, name: `Mic/Line Input 1 Mic EQ 3 Filter Type`});

				variables.push({ variableId: `gminp_miclineinput1_line_phantompower`, name: `Mic/Line Input 1 Line Phantom Power`});
				variables.push({ variableId: `gminp_miclineinput1_line_gain`, name: `Mic/Line Input 1 Line Gain`});
				variables.push({ variableId: `gminp_miclineinput1_line_level`, name: `Mic/Line Input 1 Line Level`});
				variables.push({ variableId: `gminp_miclineinput1_line_lowcut`, name: `Mic/Line Input 1 Line Low Cut`});
				
				variables.push({ variableId: `gminp_miclineinput1_line_eq1_frequency`, name: `Mic/Line Input 1 Line EQ 1 Frequency`});
				variables.push({ variableId: `gminp_miclineinput1_line_eq1_gain`, name: `Mic/Line Input 1 Line EQ 1 Gain`});
				variables.push({ variableId: `gminp_miclineinput1_line_eq1_q`, name: `Mic/Line Input 1 Line EQ 1 Q Value`});
				variables.push({ variableId: `gminp_miclineinput1_line_eq1_filtertype`, name: `Mic/Line Input 1 Line EQ 1 Filter Type`});
				
				variables.push({ variableId: `gminp_miclineinput1_line_eq2_frequency`, name: `Mic/Line Input 1 Line EQ 2 Frequency`});
				variables.push({ variableId: `gminp_miclineinput1_line_eq2_gain`, name: `Mic/Line Input 1 Line EQ 2 Gain`});
				variables.push({ variableId: `gminp_miclineinput1_line_eq2_q`, name: `Mic/Line Input 1 Line EQ 2 Q Value`});
				variables.push({ variableId: `gminp_miclineinput1_line_eq2_filtertype`, name: `Mic/Line Input 1 Line EQ 2 Filter Type`});
				
				variables.push({ variableId: `gminp_miclineinput1_line_eq3_frequency`, name: `Mic/Line Input 1 Line EQ 3 Frequency`});
				variables.push({ variableId: `gminp_miclineinput1_line_eq3_gain`, name: `Mic/Line Input 1 Line EQ 3 Gain`});
				variables.push({ variableId: `gminp_miclineinput1_line_eq3_q`, name: `Mic/Line Input 1 Line EQ 3 Q Value`});
				variables.push({ variableId: `gminp_miclineinput1_line_eq3_filtertype`, name: `Mic/Line Input 1 Line EQ 3 Filter Type`});

				variables.push({ variableId: `gminp_miclineinput2_type`, name: `Mic/Line Input 2 Type`});
				variables.push({ variableId: `gminp_miclineinput2_mixtofloor`, name: `Mic/Line Input 2 Mix To Floor`});
				variables.push({ variableId: `gminp_miclineinput2_mixtolanguage`, name: `Mic/Line Input 2 Mix to Language`});

				variables.push({ variableId: `gminp_miclineinput2_mic_phantompower`, name: `Mic/Line Input 2 Mic Phantom Power`});
				variables.push({ variableId: `gminp_miclineinput2_mic_gain`, name: `Mic/Line Input 2 Mic Gain`});
				variables.push({ variableId: `gminp_miclineinput2_mic_level`, name: `Mic/Line Input 2 Mic Level`});
				variables.push({ variableId: `gminp_miclineinput2_mic_lowcut`, name: `Mic/Line Input 2 Mic Low Cut`});
				
				variables.push({ variableId: `gminp_miclineinput2_mic_eq1_frequency`, name: `Mic/Line Input 2 Mic EQ 1 Frequency`});
				variables.push({ variableId: `gminp_miclineinput2_mic_eq1_gain`, name: `Mic/Line Input 2 Mic EQ 1 Gain`});
				variables.push({ variableId: `gminp_miclineinput2_mic_eq1_q`, name: `Mic/Line Input 2 Mic EQ 1 Q Value`});
				variables.push({ variableId: `gminp_miclineinput2_mic_eq1_filtertype`, name: `Mic/Line Input 2 Mic EQ 1 Filter Type`});
				
				variables.push({ variableId: `gminp_miclineinput2_mic_eq2_frequency`, name: `Mic/Line Input 2 Mic EQ 2 Frequency`});
				variables.push({ variableId: `gminp_miclineinput2_mic_eq2_gain`, name: `Mic/Line Input 2 Mic EQ 2 Gain`});
				variables.push({ variableId: `gminp_miclineinput2_mic_eq2_q`, name: `Mic/Line Input 2 Mic EQ 2 Q Value`});
				variables.push({ variableId: `gminp_miclineinput2_mic_eq2_filtertype`, name: `Mic/Line Input 2 Mic EQ 2 Filter Type`});
				
				variables.push({ variableId: `gminp_miclineinput2_mic_eq3_frequency`, name: `Mic/Line Input 2 Mic EQ 3 Frequency`});
				variables.push({ variableId: `gminp_miclineinput2_mic_eq3_gain`, name: `Mic/Line Input 2 Mic EQ 3 Gain`});
				variables.push({ variableId: `gminp_miclineinput2_mic_eq3_q`, name: `Mic/Line Input 2 Mic EQ 3 Q Value`});
				variables.push({ variableId: `gminp_miclineinput2_mic_eq3_filtertype`, name: `Mic/Line Input 2 Mic EQ 3 Filter Type`});

				variables.push({ variableId: `gminp_miclineinput2_line_phantompower`, name: `Mic/Line Input 2 Line Phantom Power`});
				variables.push({ variableId: `gminp_miclineinput2_line_gain`, name: `Mic/Line Input 2 Line Gain`});
				variables.push({ variableId: `gminp_miclineinput2_line_level`, name: `Mic/Line Input 2 Line Level`});
				variables.push({ variableId: `gminp_miclineinput2_line_lowcut`, name: `Mic/Line Input 2 Line Low Cut`});
				
				variables.push({ variableId: `gminp_miclineinput2_line_eq1_frequency`, name: `Mic/Line Input 2 Line EQ 1 Frequency`});
				variables.push({ variableId: `gminp_miclineinput2_line_eq1_gain`, name: `Mic/Line Input 2 Line EQ 1 Gain`});
				variables.push({ variableId: `gminp_miclineinput2_line_eq1_q`, name: `Mic/Line Input 2 Line EQ 1 Q Value`});
				variables.push({ variableId: `gminp_miclineinput2_line_eq1_filtertype`, name: `Mic/Line Input 2 Line EQ 1 Filter Type`});
				
				variables.push({ variableId: `gminp_miclineinput2_line_eq2_frequency`, name: `Mic/Line Input 2 Line EQ 2 Frequency`});
				variables.push({ variableId: `gminp_miclineinput2_line_eq2_gain`, name: `Mic/Line Input 2 Line EQ 2 Gain`});
				variables.push({ variableId: `gminp_miclineinput2_line_eq2_q`, name: `Mic/Line Input 2 Line EQ 2 Q Value`});
				variables.push({ variableId: `gminp_miclineinput2_line_eq2_filtertype`, name: `Mic/Line Input 2 Line EQ 2 Filter Type`});
				
				variables.push({ variableId: `gminp_miclineinput2_line_eq3_frequency`, name: `Mic/Line Input 2 Line EQ 3 Frequency`});
				variables.push({ variableId: `gminp_miclineinput2_line_eq3_gain`, name: `Mic/Line Input 2 Line EQ 3 Gain`});
				variables.push({ variableId: `gminp_miclineinput2_line_eq3_q`, name: `Mic/Line Input 2 Line EQ 3 Q Value`});
				variables.push({ variableId: `gminp_miclineinput2_line_eq3_filtertype`, name: `Mic/Line Input 2 Line EQ 3 Filter Type`});

				variables.push({ variableId: `gminp_mute_input1`, name: `Input 1 Can Be Muted`});
				variables.push({ variableId: `gminp_mute_input2`, name: `Input 2 Can Be Muted`});

				variables.push({ variableId: `gminp_danteinput1_phantompower`, name: `Dante Input 1 Phantom Power`});
				variables.push({ variableId: `gminp_danteinput1_gain`, name: `Dante Input 1 Gain`});
				variables.push({ variableId: `gminp_danteinput1_level`, name: `Dante Input 1 Level`});
				variables.push({ variableId: `gminp_danteinput1_lowcut`, name: `Dante Input 1 Low Cut`});
				
				variables.push({ variableId: `gminp_danteinput1_eq1_frequency`, name: `Dante Input 1 EQ 1 Frequency`});
				variables.push({ variableId: `gminp_danteinput1_eq1_gain`, name: `Dante Input 1 EQ 1 Gain`});
				variables.push({ variableId: `gminp_danteinput1_eq1_q`, name: `Dante Input 1 EQ 1 Q Value`});
				variables.push({ variableId: `gminp_danteinput1_eq1_filtertype`, name: `Dante Input 1 EQ 1 Filter Type`});
				
				variables.push({ variableId: `gminp_danteinput1_eq2_frequency`, name: `Dante Input 1 EQ 2 Frequency`});
				variables.push({ variableId: `gminp_danteinput1_eq2_gain`, name: `Dante Input 1 EQ 2 Gain`});
				variables.push({ variableId: `gminp_danteinput1_eq2_q`, name: `Dante Input 1 EQ 2 Q Value`});
				variables.push({ variableId: `gminp_danteinput1_eq2_filtertype`, name: `Dante Input 1 EQ 2 Filter Type`});
				
				variables.push({ variableId: `gminp_danteinput1_eq3_frequency`, name: `Dante Input 1 EQ 3 Frequency`});
				variables.push({ variableId: `gminp_danteinput1_eq3_gain`, name: `Dante Input 1 EQ 3 Gain`});
				variables.push({ variableId: `gminp_danteinput1_eq3_q`, name: `Dante Input 1 EQ 3 Q Value`});
				variables.push({ variableId: `gminp_danteinput1_eq3_filtertype`, name: `Dante Input 1 EQ 3 Filter Type`});

				variables.push({ variableId: `gminp_danteinput2_phantompower`, name: `Dante Input 2 Phantom Power`});
				variables.push({ variableId: `gminp_danteinput2_gain`, name: `Dante Input 2 Gain`});
				variables.push({ variableId: `gminp_danteinput2_level`, name: `Dante Input 2 Level`});
				variables.push({ variableId: `gminp_danteinput2_lowcut`, name: `Dante Input 2 Low Cut`});
				
				variables.push({ variableId: `gminp_danteinput2_eq1_frequency`, name: `Dante Input 2 EQ 1 Frequency`});
				variables.push({ variableId: `gminp_danteinput2_eq1_gain`, name: `Dante Input 2 EQ 1 Gain`});
				variables.push({ variableId: `gminp_danteinput2_eq1_q`, name: `Dante Input 2 EQ 1 Q Value`});
				variables.push({ variableId: `gminp_danteinput2_eq1_filtertype`, name: `Dante Input 2 EQ 1 Filter Type`});
				
				variables.push({ variableId: `gminp_danteinput2_eq2_frequency`, name: `Dante Input 2 EQ 2 Frequency`});
				variables.push({ variableId: `gminp_danteinput2_eq2_gain`, name: `Dante Input 2 EQ 2 Gain`});
				variables.push({ variableId: `gminp_danteinput2_eq2_q`, name: `Dante Input 2 EQ 2 Q Value`});
				variables.push({ variableId: `gminp_danteinput2_eq2_filtertype`, name: `Dante Input 2 EQ 2 Filter Type`});
				
				variables.push({ variableId: `gminp_danteinput2_eq3_frequency`, name: `Dante Input 2 EQ 3 Frequency`});
				variables.push({ variableId: `gminp_danteinput2_eq3_gain`, name: `Dante Input 2 EQ 3 Gain`});
				variables.push({ variableId: `gminp_danteinput2_eq3_q`, name: `Dante Input 2 EQ 3 Q Value`});
				variables.push({ variableId: `gminp_danteinput2_eq3_filtertype`, name: `Dante Input 2 EQ 3 Filter Type`});
			}

			if (model.variables.includes('gxinp')) {
				variables.push({ variableId: `gxinp_aux_level`, name: `Aux Input Level`});
				variables.push({ variableId: `gxinp_aux_nominallevel`, name: `Aux Input Nominal Level`});
				variables.push({ variableId: `gxinp_aux_mixtofloor`, name: `Aux Input Mix To Floor`});
				variables.push({ variableId: `gxinp_aux_mixtolanguage1`, name: `Aux Input Mix to Language 1`});
				variables.push({ variableId: `gxinp_aux_mixtolanguage2`, name: `Aux Input Mix to Language 2`});
				variables.push({ variableId: `gxinp_aux_lowcut`, name: `Aux Input Low Cut`});

				variables.push({ variableId: `gxinp_aux_eq1_frequency`, name: `Aux Input EQ 1 Frequency`});
				variables.push({ variableId: `gxinp_aux_eq1_gain`, name: `Aux Input EQ 1 Gain`});
				variables.push({ variableId: `gxinp_aux_eq1_q`, name: `Aux Input EQ 1 Q Value`});
				variables.push({ variableId: `gxinp_aux_eq1_filtertype`, name: `Aux Input EQ 1 Filter Type`});

				variables.push({ variableId: `gxinp_aux_eq2_frequency`, name: `Aux Input EQ 2 Frequency`});
				variables.push({ variableId: `gxinp_aux_eq2_gain`, name: `Aux Input EQ 2 Gain`});
				variables.push({ variableId: `gxinp_aux_eq2_q`, name: `Aux Input EQ 2 Q Value`});
				variables.push({ variableId: `gxinp_aux_eq2_filtertype`, name: `Aux Input EQ 2 Filter Type`});

				variables.push({ variableId: `gxinp_aux_eq3_frequency`, name: `Aux Input EQ 3 Frequency`});
				variables.push({ variableId: `gxinp_aux_eq3_gain`, name: `Aux Input EQ 3 Gain`});
				variables.push({ variableId: `gxinp_aux_eq3_q`, name: `Aux Input EQ 3 Q Value`});
				variables.push({ variableId: `gxinp_aux_eq3_filtertype`, name: `Aux Input EQ 3 Filter Type`});

				variables.push({ variableId: `gxinp_aux_inputtype`, name: `Aux Input Type`});
			}

			if (model.variables.includes('giinp')) {
				variables.push({ variableId: `giinp_interpretationreturn1_level`, name: `Interpretation Return 1 Level`});
				variables.push({ variableId: `giinp_interpretationreturn1_nominallevel`, name: `Interpretation Return 1 Nominal Level`});
				variables.push({ variableId: `giinp_interpretationreturn1_lowcut`, name: `Interpretation Return 1 Low Cut`});

				variables.push({ variableId: `giinp_interpretationreturn1_eq1_frequency`, name: `Interpretation Return 1 EQ 1 Frequency`});
				variables.push({ variableId: `giinp_interpretationreturn1_eq1_gain`, name: `Interpretation Return 1 EQ 1 Gain`});
				variables.push({ variableId: `giinp_interpretationreturn1_eq1_q`, name: `Interpretation Return 1 EQ 1 Q Value`});
				variables.push({ variableId: `giinp_interpretationreturn1_eq1_filtertype`, name: `Interpretation Return 1 EQ 1 Filter Type`});

				variables.push({ variableId: `giinp_interpretationreturn1_eq2_frequency`, name: `Interpretation Return 1 EQ 2 Frequency`});
				variables.push({ variableId: `giinp_interpretationreturn1_eq2_gain`, name: `Interpretation Return 1 EQ 2 Gain`});
				variables.push({ variableId: `giinp_interpretationreturn1_eq2_q`, name: `Interpretation Return 1 EQ 2 Q Value`});
				variables.push({ variableId: `giinp_interpretationreturn1_eq2_filtertype`, name: `Interpretation Return 1 EQ 2 Filter Type`});

				variables.push({ variableId: `giinp_interpretationreturn1_eq3_frequency`, name: `Interpretation Return 1 EQ 3 Frequency`});
				variables.push({ variableId: `giinp_interpretationreturn1_eq3_gain`, name: `Interpretation Return 1 EQ 3 Gain`});
				variables.push({ variableId: `giinp_interpretationreturn1_eq3_q`, name: `Interpretation Return 1 EQ 3 Q Value`});
				variables.push({ variableId: `giinp_interpretationreturn1_eq3_filtertype`, name: `Interpretation Return 1 EQ 3 Filter Type`});

				variables.push({ variableId: `giinp_interpretationreturn2_level`, name: `Interpretation Return 2 Level`});
				variables.push({ variableId: `giinp_interpretationreturn2_nominallevel`, name: `Interpretation Return 2 Nominal Level`});
				variables.push({ variableId: `giinp_interpretationreturn2_lowcut`, name: `Interpretation Return 2 Low Cut`});

				variables.push({ variableId: `giinp_interpretationreturn2_eq1_frequency`, name: `Interpretation Return 2 EQ 1 Frequency`});
				variables.push({ variableId: `giinp_interpretationreturn2_eq1_gain`, name: `Interpretation Return 2 EQ 1 Gain`});
				variables.push({ variableId: `giinp_interpretationreturn2_eq1_q`, name: `Interpretation Return 2 EQ 1 Q Value`});
				variables.push({ variableId: `giinp_interpretationreturn2_eq1_filtertype`, name: `Interpretation Return 2 EQ 1 Filter Type`});

				variables.push({ variableId: `giinp_interpretationreturn2_eq2_frequency`, name: `Interpretation Return 2 EQ 2 Frequency`});
				variables.push({ variableId: `giinp_interpretationreturn2_eq2_gain`, name: `Interpretation Return 2 EQ 2 Gain`});
				variables.push({ variableId: `giinp_interpretationreturn2_eq2_q`, name: `Interpretation Return 2 EQ 2 Q Value`});
				variables.push({ variableId: `giinp_interpretationreturn2_eq2_filtertype`, name: `Interpretation Return 2 EQ 2 Filter Type`});

				variables.push({ variableId: `giinp_interpretationreturn2_eq3_frequency`, name: `Interpretation Return 2 EQ 3 Frequency`});
				variables.push({ variableId: `giinp_interpretationreturn2_eq3_gain`, name: `Interpretation Return 2 EQ 3 Gain`});
				variables.push({ variableId: `giinp_interpretationreturn2_eq3_q`, name: `Interpretation Return 2 EQ 3 Q Value`});
				variables.push({ variableId: `giinp_interpretationreturn2_eq3_filtertype`, name: `Interpretation Return 2 EQ 3 Filter Type`});
			}

			if (model.variables.includes('gaout')) {
				variables.push({ variableId: `gaout_output1_level`, name: `Output 1 Level`});
				variables.push({ variableId: `gaout_output1_sourceselect`, name: `Output 1 Source Select`});

				variables.push({ variableId: `gaout_output2_level`, name: `Output 2 Level`});
				variables.push({ variableId: `gaout_output2_sourceselect`, name: `Output 2 Source Select`});

				variables.push({ variableId: `gaout_output3_level`, name: `Output 3 Level`});
				variables.push({ variableId: `gaout_output3_sourceselect`, name: `Output 3 Source Select`});

				variables.push({ variableId: `gaout_output4_level`, name: `Output 4 Level`});
				variables.push({ variableId: `gaout_output4_sourceselect`, name: `Output 4 Source Select`});

				variables.push({ variableId: `gaout_output1_maxvolume`, name: `Output 1 Maximum Volume`});
				variables.push({ variableId: `gaout_output1_peqenable`, name: `Output 1 PEQ Enable`});

				variables.push({ variableId: `gaout_output1_eq1_frequency`, name: `Output 1 EQ 1 Frequency`});
				variables.push({ variableId: `gaout_output1_eq1_gain`, name: `Output 1 EQ 1 Gain`});
				variables.push({ variableId: `gaout_output1_eq1_q`, name: `Output 1 EQ 1 Q Value`});
				variables.push({ variableId: `gaout_output1_eq1_filtertype`, name: `Output 1 EQ 1 Filter Type`});

				variables.push({ variableId: `gaout_output1_eq2_frequency`, name: `Output 1 EQ 2 Frequency`});
				variables.push({ variableId: `gaout_output1_eq2_gain`, name: `Output 1 EQ 2 Gain`});
				variables.push({ variableId: `gaout_output1_eq2_q`, name: `Output 1 EQ 2 Q Value`});

				variables.push({ variableId: `gaout_output1_eq3_frequency`, name: `Output 1 EQ 3 Frequency`});
				variables.push({ variableId: `gaout_output1_eq3_gain`, name: `Output 1 EQ 3 Gain`});
				variables.push({ variableId: `gaout_output1_eq3_q`, name: `Output 1 EQ 3 Q Value`});

				variables.push({ variableId: `gaout_output1_eq4_frequency`, name: `Output 1 EQ 4 Frequency`});
				variables.push({ variableId: `gaout_output1_eq4_gain`, name: `Output 1 EQ 4 Gain`});
				variables.push({ variableId: `gaout_output1_eq4_q`, name: `Output 1 EQ 4 Q Value`});

				variables.push({ variableId: `gaout_output1_eq5_frequency`, name: `Output 1 EQ 5 Frequency`});
				variables.push({ variableId: `gaout_output1_eq5_gain`, name: `Output 1 EQ 5 Gain`});
				variables.push({ variableId: `gaout_output1_eq5_q`, name: `Output 1 EQ 5 Q Value`});

				variables.push({ variableId: `gaout_output1_eq6_frequency`, name: `Output 1 EQ 6 Frequency`});
				variables.push({ variableId: `gaout_output1_eq6_gain`, name: `Output 1 EQ 6 Gain`});
				variables.push({ variableId: `gaout_output1_eq6_q`, name: `Output 1 EQ 6 Q Value`});

				variables.push({ variableId: `gaout_output1_eq7_frequency`, name: `Output 1 EQ 7 Frequency`});
				variables.push({ variableId: `gaout_output1_eq7_gain`, name: `Output 1 EQ 7 Gain`});
				variables.push({ variableId: `gaout_output1_eq7_q`, name: `Output 1 EQ 7 Q Value`});

				variables.push({ variableId: `gaout_output1_eq8_frequency`, name: `Output 1 EQ 8 Frequency`});
				variables.push({ variableId: `gaout_output1_eq8_gain`, name: `Output 1 EQ 8 Gain`});
				variables.push({ variableId: `gaout_output1_eq8_q`, name: `Output 1 EQ 8 Q Value`});
				variables.push({ variableId: `gaout_output1_eq8_filtertype`, name: `Output 1 EQ 8 Filter Type`});

				variables.push({ variableId: `gaout_output1_dynamics_enable`, name: `Output 1 Dynamics Enabled`});
				variables.push({ variableId: `gaout_output1_dynamics_compthreshold`, name: `Output 1 Dynamics Comp Threshold`});
				variables.push({ variableId: `gaout_output1_dynamics_limiterthreshold`, name: `Output 1 Dynamics Limiter Threshold`});
				variables.push({ variableId: `gaout_output1_dynamics_ratio`, name: `Output 1 Dynamics Ratio`});
				variables.push({ variableId: `gaout_output1_dynamics_attack`, name: `Output 1 Dynamics Attack`});
				variables.push({ variableId: `gaout_output1_dynamics_release`, name: `Output 1 Dynamics Release`});
				variables.push({ variableId: `gaout_output1_dynamics_gain`, name: `Output 1 Dynamics Gain`});
				variables.push({ variableId: `gaout_output1_dynamics_mode`, name: `Output 1 Dynamics Mode`});
				variables.push({ variableId: `gaout_output1_dynamics_sensitivity`, name: `Output 1 Dynamics Sensitivity`});
				variables.push({ variableId: `gaout_output1_dynamics_frequency`, name: `Output 1 Dynamics Center Frequency`});
				variables.push({ variableId: `gaout_output1_dynamics_reduction`, name: `Output 1 Dynamics Reduction`});
			}

			if (model.variables.includes('ggpio')) {
				if (this.DATA.ggpio) {
					for (let i = 0; i < this.DATA.ggpio.length; i++) {
						let iu = this.DATA.ggpio[i];
						variables.push({ variableId: `ggpio_${iu.serial}_gpi_0`, name: `Serial ${iu.serial} GPI 0`});
						variables.push({ variableId: `ggpio_${iu.serial}_gpi_1`, name: `Serial ${iu.serial} GPI 1`});
						variables.push({ variableId: `ggpio_${iu.serial}_gpi_2`, name: `Serial ${iu.serial} GPI 2`});
						variables.push({ variableId: `ggpio_${iu.serial}_gpi_3`, name: `Serial ${iu.serial} GPI 3`});
						variables.push({ variableId: `ggpio_${iu.serial}_gpi_4`, name: `Serial ${iu.serial} GPI 4`});
						variables.push({ variableId: `ggpio_${iu.serial}_gpi_5`, name: `Serial ${iu.serial} GPI 5`});
						variables.push({ variableId: `ggpio_${iu.serial}_gpi_6`, name: `Serial ${iu.serial} GPI 6`});
						variables.push({ variableId: `ggpio_${iu.serial}_gpi_7`, name: `Serial ${iu.serial} GPI 7`});
	
						variables.push({ variableId: `ggpio_${iu.serial}_gpo_0`, name: `Serial ${iu.serial} GPO 0`});
						variables.push({ variableId: `ggpio_${iu.serial}_gpo_1`, name: `Serial ${iu.serial} GPO 1`});
						variables.push({ variableId: `ggpio_${iu.serial}_gpo_2`, name: `Serial ${iu.serial} GPO 2`});
						variables.push({ variableId: `ggpio_${iu.serial}_gpo_3`, name: `Serial ${iu.serial} GPO 3`});
						variables.push({ variableId: `ggpio_${iu.serial}_gpo_4`, name: `Serial ${iu.serial} GPO 4`});
						variables.push({ variableId: `ggpio_${iu.serial}_gpo_5`, name: `Serial ${iu.serial} GPO 5`});
						variables.push({ variableId: `ggpio_${iu.serial}_gpo_6`, name: `Serial ${iu.serial} GPO 6`});
						variables.push({ variableId: `ggpio_${iu.serial}_gpo_7`, name: `Serial ${iu.serial} GPO 7`});
					}
				}
			}

			if (model.variables.includes('gintc')) {
				variables.push({ variableId: `gintc_interpretationmode`, name: `Interpretation Mode`});
				variables.push({ variableId: `gintc_interlock`, name: `Interlock Setting`});
				variables.push({ variableId: `gintc_language1`, name: `Interpretation Language 1`});
				variables.push({ variableId: `gintc_language2`, name: `Interpretation Language 2`});
				variables.push({ variableId: `gintc_language3`, name: `Interpretation Language 3`});
				variables.push({ variableId: `gintc_easymode`, name: `Easy Mode`});
			}

			if (model.variables.includes('gcvui')) {
				if (this.DATA.gcvui) {
					for (let i = 0; i < this.DATA.gcvui.length; i++) {
						let vu = this.DATA.gcvui[i];
						variables.push({ variableId: `gcvui_${vu.serial}_connect`, name: `Serial ${vu.serial} Connect Status`});
						variables.push({ variableId: `gcvui_${vu.serial}_button0`, name: `Serial ${vu.serial} Button 0`});
						variables.push({ variableId: `gcvui_${vu.serial}_button1`, name: `Serial ${vu.serial} Button 1`});
						variables.push({ variableId: `gcvui_${vu.serial}_button2`, name: `Serial ${vu.serial} Button 2`});
						variables.push({ variableId: `gcvui_${vu.serial}_button3`, name: `Serial ${vu.serial} Button 3`});
						variables.push({ variableId: `gcvui_${vu.serial}_button4`, name: `Serial ${vu.serial} Button 4`});
					}
				}
			}

			if (model.variables.includes('recst')) {
				variables.push({ variableId: `recst_rec_status`, name: `Recording Status`});
				variables.push({ variableId: `recst_rec_elapsed`, name: `Recording Time Elapsed`});
				variables.push({ variableId: `recst_rec_remaining`, name: `Recording Time Remaining`});
			}

			if (model.variables.includes('glvmt')) {
				for (let i = 0; i < constants.monitor_points.length; i++) {
					let point = constants.monitor_points[i];
					variables.push({ variableId: `glvmt_monitorpoint_${point.id}_level`, name: `Monitor Point ${point.label} Level`});
				}
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
				let variableObj = {};
				variableObj['model'] = model.label;

				if (model.variables.includes('gcust')) {
					variableObj[`gcust_primary_porta_topology`] = this.DATA.gcust.primary_porta_topology;
					variableObj[`gcust_primary_porta_du_count`] = this.DATA.gcust.primary_porta_du_count;
					variableObj[`gcust_primary_porta_int50_count`] = this.DATA.gcust.primary_porta_int50_count;
					variableObj[`gcust_primary_porta_iu_count`] = this.DATA.gcust.primary_porta_iu_count;

					variableObj[`gcust_primary_portb_topology`] = this.DATA.gcust.primary_portb_topology;
					variableObj[`gcust_primary_portb_du_count`] = this.DATA.gcust.primary_portb_du_count;
					variableObj[`gcust_primary_portb_int50_count`] = this.DATA.gcust.primary_portb_int50_count;
					variableObj[`gcust_primary_portb_iu_count`] = this.DATA.gcust.primary_portb_iu_count;

					variableObj[`gcust_primary_portc_topology`] = this.DATA.gcust.primary_portc_topology;
					variableObj[`gcust_primary_portc_du_count`] = this.DATA.gcust.primary_portc_du_count;
					variableObj[`gcust_primary_portc_int50_count`] = this.DATA.gcust.primary_portc_int50_count;
					variableObj[`gcust_primary_portc_iu_count`] = this.DATA.gcust.primary_portc_iu_count;

					variableObj[`gcust_primary_portd_topology`] = this.DATA.gcust.primary_portd_topology;
					variableObj[`gcust_primary_portd_du_count`] = this.DATA.gcust.primary_portd_du_count;
					variableObj[`gcust_primary_portd_int50_count`] = this.DATA.gcust.primary_portd_int50_count;
					variableObj[`gcust_primary_portd_iu_count`] = this.DATA.gcust.primary_portd_iu_count;

					variableObj[`gcust_extension1_porta_topology`] = this.DATA.gcust.extension1_porta_topology;
					variableObj[`gcust_extension1_porta_du_count`] = this.DATA.gcust.extension1_porta_du_count;
					variableObj[`gcust_extension1_porta_iu_count`] = this.DATA.gcust.extension1_porta_iu_count;

					variableObj[`gcust_extension1_portb_topology`] = this.DATA.gcust.extension1_portb_topology;
					variableObj[`gcust_extension1_portb_du_count`] = this.DATA.gcust.extension1_portb_du_count;
					variableObj[`gcust_extension1_portb_iu_count`] = this.DATA.gcust.extension1_portb_iu_count;

					variableObj[`gcust_extension2_porta_topology`] = this.DATA.gcust.extension2_porta_topology;
					variableObj[`gcust_extension2_porta_du_count`] = this.DATA.gcust.extension2_porta_du_count;
					variableObj[`gcust_extension2_porta_iu_count`] = this.DATA.gcust.extension2_porta_iu_count;

					variableObj[`gcust_extension2_portb_topology`] = this.DATA.gcust.extension2_portb_topology;
					variableObj[`gcust_extension2_portb_du_count`] = this.DATA.gcust.extension2_portb_du_count;
					variableObj[`gcust_extension2_portb_iu_count`] = this.DATA.gcust.extension2_portb_iu_count;

					variableObj[`gcust_extension3_porta_topology`] = this.DATA.gcust.extension3_porta_topology;
					variableObj[`gcust_extension3_porta_du_count`] = this.DATA.gcust.extension3_porta_du_count;
					variableObj[`gcust_extension3_porta_iu_count`] = this.DATA.gcust.extension3_porta_iu_count;

					variableObj[`gcust_extension3_portb_topology`] = this.DATA.gcust.extension3_portb_topology;
					variableObj[`gcust_extension3_portb_du_count`] = this.DATA.gcust.extension3_portb_du_count;
					variableObj[`gcust_extension3_portb_iu_count`] = this.DATA.gcust.extension3_portb_iu_count;

					variableObj[`gcust_connected_irdu`] = this.DATA.gcust.connected_irdu;

					variableObj[`gcust_primary_porta_duas_count`] = this.DATA.gcust.primary_porta_duas_count;
					variableObj[`gcust_primary_portb_duas_count`] = this.DATA.gcust.primary_portb_duas_count;
					variableObj[`gcust_primary_portc_duas_count`] = this.DATA.gcust.primary_portc_duas_count;
					variableObj[`gcust_primary_portd_duas_count`] = this.DATA.gcust.primary_portd_duas_count;

					variableObj[`gcust_extension1_porta_duas_count`] = this.DATA.gcust.extension1_porta_duas_count;
					variableObj[`gcust_extension1_portb_duas_count`] = this.DATA.gcust.extension1_portb_duas_count;

					variableObj[`gcust_extension2_porta_duas_count`] = this.DATA.gcust.extension2_porta_duas_count;
					variableObj[`gcust_extension2_portb_duas_count`] = this.DATA.gcust.extension2_portb_duas_count;
				}
	
				if (model.variables.includes('gminp')) {
					variableObj[`gminp_miclineinput1_type`] = this.DATA.gminp.miclineinput1_type;
					variableObj[`gminp_miclineinput1_mixtofloor`] = this.DATA.gminp.miclineinput1_mixtofloor;
					variableObj[`gminp_miclineinput1_mixtolanguage`] = this.DATA.gminp.miclineinput1_mixtolanguage;

					variableObj[`gminp_miclineinput1_mic_phantompower`] = this.DATA.gminp.miclineinput1_mic_phantompower;
					variableObj[`gminp_miclineinput1_mic_gain`] = this.DATA.gminp.miclineinput1_mic_gain;
					variableObj[`gminp_miclineinput1_mic_level`] = this.DATA.gminp.miclineinput1_mic_level;
					variableObj[`gminp_miclineinput1_mic_lowcut`] = this.DATA.gminp.miclineinput1_mic_lowcut;

					variableObj[`gminp_miclineinput1_mic_eq1_frequency`] = this.DATA.gminp.miclineinput1_mic_eq1_frequency;
					variableObj[`gminp_miclineinput1_mic_eq1_gain`] = this.DATA.gminp.miclineinput1_mic_eq1_gain;
					variableObj[`gminp_miclineinput1_mic_eq1_q`] = this.DATA.gminp.miclineinput1_mic_eq1_q;
					variableObj[`gminp_miclineinput1_mic_eq1_filtertype`] = this.DATA.gminp.miclineinput1_mic_eq1_filtertype;

					variableObj[`gminp_miclineinput1_mic_eq2_frequency`] = this.DATA.gminp.miclineinput1_mic_eq2_frequency;
					variableObj[`gminp_miclineinput1_mic_eq2_gain`] = this.DATA.gminp.miclineinput1_mic_eq2_gain;
					variableObj[`gminp_miclineinput1_mic_eq2_q`] = this.DATA.gminp.miclineinput1_mic_eq2_q;
					variableObj[`gminp_miclineinput1_mic_eq2_filtertype`] = this.DATA.gminp.miclineinput1_mic_eq2_filtertype;

					variableObj[`gminp_miclineinput1_mic_eq3_frequency`] = this.DATA.gminp.miclineinput1_mic_eq3_frequency;
					variableObj[`gminp_miclineinput1_mic_eq3_gain`] = this.DATA.gminp.miclineinput1_mic_eq3_gain;
					variableObj[`gminp_miclineinput1_mic_eq3_q`] = this.DATA.gminp.miclineinput1_mic_eq3_q;
					variableObj[`gminp_miclineinput1_mic_eq3_filtertype`] = this.DATA.gminp.miclineinput1_mic_eq3_filtertype;

					variableObj[`gminp_miclineinput1_line_phantompower`] = this.DATA.gminp.miclineinput1_line_phantompower;
					variableObj[`gminp_miclineinput1_line_gain`] = this.DATA.gminp.miclineinput1_line_gain;
					variableObj[`gminp_miclineinput1_line_level`] = this.DATA.gminp.miclineinput1_line_level;
					variableObj[`gminp_miclineinput1_line_lowcut`] = this.DATA.gminp.miclineinput1_line_lowcut;

					variableObj[`gminp_miclineinput1_line_eq1_frequency`] = this.DATA.gminp.miclineinput1_line_eq1_frequency;
					variableObj[`gminp_miclineinput1_line_eq1_gain`] = this.DATA.gminp.miclineinput1_line_eq1_gain;
					variableObj[`gminp_miclineinput1_line_eq1_q`] = this.DATA.gminp.miclineinput1_line_eq1_q;
					variableObj[`gminp_miclineinput1_line_eq1_filtertype`] = this.DATA.gminp.miclineinput1_line_eq1_filtertype;

					variableObj[`gminp_miclineinput1_line_eq2_frequency`] = this.DATA.gminp.miclineinput1_line_eq2_frequency;
					variableObj[`gminp_miclineinput1_line_eq2_gain`] = this.DATA.gminp.miclineinput1_line_eq2_gain;
					variableObj[`gminp_miclineinput1_line_eq2_q`] = this.DATA.gminp.miclineinput1_line_eq2_q;
					variableObj[`gminp_miclineinput1_line_eq2_filtertype`] = this.DATA.gminp.miclineinput1_line_eq2_filtertype;

					variableObj[`gminp_miclineinput1_line_eq3_frequency`] = this.DATA.gminp.miclineinput1_line_eq3_frequency;
					variableObj[`gminp_miclineinput1_line_eq3_gain`] = this.DATA.gminp.miclineinput1_line_eq3_gain;
					variableObj[`gminp_miclineinput1_line_eq3_q`] = this.DATA.gminp.miclineinput1_line_eq3_q;
					variableObj[`gminp_miclineinput1_line_eq3_filtertype`] = this.DATA.gminp.miclineinput1_line_eq3_filtertype;

					variableObj[`gminp_miclineinput2_type`] = this.DATA.gminp.miclineinput2_type;
					variableObj[`gminp_miclineinput2_mixtofloor`] = this.DATA.gminp.miclineinput2_mixtofloor;
					variableObj[`gminp_miclineinput2_mixtolanguage`] = this.DATA.gminp.miclineinput2_mixtolanguage;

					variableObj[`gminp_miclineinput2_mic_phantompower`] = this.DATA.gminp.miclineinput2_mic_phantompower;
					variableObj[`gminp_miclineinput2_mic_gain`] = this.DATA.gminp.miclineinput2_mic_gain;
					variableObj[`gminp_miclineinput2_mic_level`] = this.DATA.gminp.miclineinput2_mic_level;
					variableObj[`gminp_miclineinput2_mic_lowcut`] = this.DATA.gminp.miclineinput2_mic_lowcut;

					variableObj[`gminp_miclineinput2_mic_eq1_frequency`] = this.DATA.gminp.miclineinput2_mic_eq1_frequency;
					variableObj[`gminp_miclineinput2_mic_eq1_gain`] = this.DATA.gminp.miclineinput2_mic_eq1_gain;
					variableObj[`gminp_miclineinput2_mic_eq1_q`] = this.DATA.gminp.miclineinput2_mic_eq1_q;
					variableObj[`gminp_miclineinput2_mic_eq1_filtertype`] = this.DATA.gminp.miclineinput2_mic_eq1_filtertype;

					variableObj[`gminp_miclineinput2_mic_eq2_frequency`] = this.DATA.gminp.miclineinput2_mic_eq2_frequency;
					variableObj[`gminp_miclineinput2_mic_eq2_gain`] = this.DATA.gminp.miclineinput2_mic_eq2_gain;
					variableObj[`gminp_miclineinput2_mic_eq2_q`] = this.DATA.gminp.miclineinput2_mic_eq2_q;
					variableObj[`gminp_miclineinput2_mic_eq2_filtertype`] = this.DATA.gminp.miclineinput2_mic_eq2_filtertype;

					variableObj[`gminp_miclineinput2_mic_eq3_frequency`] = this.DATA.gminp.miclineinput2_mic_eq3_frequency;
					variableObj[`gminp_miclineinput2_mic_eq3_gain`] = this.DATA.gminp.miclineinput2_mic_eq3_gain;
					variableObj[`gminp_miclineinput2_mic_eq3_q`] = this.DATA.gminp.miclineinput2_mic_eq3_q;
					variableObj[`gminp_miclineinput2_mic_eq3_filtertype`] = this.DATA.gminp.miclineinput2_mic_eq3_filtertype;

					variableObj[`gminp_miclineinput2_line_phantompower`] = this.DATA.gminp.miclineinput2_line_phantompower;
					variableObj[`gminp_miclineinput2_line_gain`] = this.DATA.gminp.miclineinput2_line_gain;
					variableObj[`gminp_miclineinput2_line_level`] = this.DATA.gminp.miclineinput2_line_level;
					variableObj[`gminp_miclineinput2_line_lowcut`] = this.DATA.gminp.miclineinput2_line_lowcut;

					variableObj[`gminp_miclineinput2_line_eq1_frequency`] = this.DATA.gminp.miclineinput2_line_eq1_frequency;
					variableObj[`gminp_miclineinput2_line_eq1_gain`] = this.DATA.gminp.miclineinput2_line_eq1_gain;
					variableObj[`gminp_miclineinput2_line_eq1_q`] = this.DATA.gminp.miclineinput2_line_eq1_q;
					variableObj[`gminp_miclineinput2_line_eq1_filtertype`] = this.DATA.gminp.miclineinput2_line_eq1_filtertype;

					variableObj[`gminp_miclineinput2_line_eq2_frequency`] = this.DATA.gminp.miclineinput2_line_eq2_frequency;
					variableObj[`gminp_miclineinput2_line_eq2_gain`] = this.DATA.gminp.miclineinput2_line_eq2_gain;
					variableObj[`gminp_miclineinput2_line_eq2_q`] = this.DATA.gminp.miclineinput2_line_eq2_q;
					variableObj[`gminp_miclineinput2_line_eq2_filtertype`] = this.DATA.gminp.miclineinput2_line_eq2_filtertype;

					variableObj[`gminp_miclineinput2_line_eq3_frequency`] = this.DATA.gminp.miclineinput2_line_eq3_frequency;
					variableObj[`gminp_miclineinput2_line_eq3_gain`] = this.DATA.gminp.miclineinput2_line_eq3_gain;
					variableObj[`gminp_miclineinput2_line_eq3_q`] = this.DATA.gminp.miclineinput2_line_eq3_q;
					variableObj[`gminp_miclineinput2_line_eq3_filtertype`] = this.DATA.gminp.miclineinput2_line_eq3_filtertype;

					variableObj[`gminp_mute_input1`] = this.DATA.gminp.mute_input1;
					variableObj[`gminp_mute_input2`] = this.DATA.gminp.mute_input2;

					variableObj[`gminp_danteinput1_phantompower`] = this.DATA.gminp.danteinput1_phantompower;
					variableObj[`gminp_danteinput1_gain`] = this.DATA.gminp.danteinput1_gain;
					variableObj[`gminp_danteinput1_level`] = this.DATA.gminp.danteinput1_level;
					variableObj[`gminp_danteinput1_lowcut`] = this.DATA.gminp.danteinput1_lowcut;

					variableObj[`gminp_danteinput1_eq1_frequency`] = this.DATA.gminp.danteinput1_eq1_frequency;
					variableObj[`gminp_danteinput1_eq1_gain`] = this.DATA.gminp.danteinput1_eq1_gain;
					variableObj[`gminp_danteinput1_eq1_q`] = this.DATA.gminp.danteinput1_eq1_q;
					variableObj[`gminp_danteinput1_eq1_filtertype`] = this.DATA.gminp.danteinput1_eq1_filtertype;

					variableObj[`gminp_danteinput1_eq2_frequency`] = this.DATA.gminp.danteinput1_eq2_frequency;
					variableObj[`gminp_danteinput1_eq2_gain`] = this.DATA.gminp.danteinput1_eq2_gain;
					variableObj[`gminp_danteinput1_eq2_q`] = this.DATA.gminp.danteinput1_eq2_q;
					variableObj[`gminp_danteinput1_eq2_filtertype`] = this.DATA.gminp.danteinput1_eq2_filtertype;

					variableObj[`gminp_danteinput1_eq3_frequency`] = this.DATA.gminp.danteinput1_eq3_frequency;
					variableObj[`gminp_danteinput1_eq3_gain`] = this.DATA.gminp.danteinput1_eq3_gain;
					variableObj[`gminp_danteinput1_eq3_q`] = this.DATA.gminp.danteinput1_eq3_q;
					variableObj[`gminp_danteinput1_eq3_filtertype`] = this.DATA.gminp.danteinput1_eq3_filtertype;

					variableObj[`gminp_danteinput2_phantompower`] = this.DATA.gminp.danteinput2_phantompower;
					variableObj[`gminp_danteinput2_gain`] = this.DATA.gminp.danteinput2_gain;
					variableObj[`gminp_danteinput2_level`] = this.DATA.gminp.danteinput2_level;
					variableObj[`gminp_danteinput2_lowcut`] = this.DATA.gminp.danteinput2_lowcut;

					variableObj[`gminp_danteinput2_eq1_frequency`] = this.DATA.gminp.danteinput2_eq1_frequency;
					variableObj[`gminp_danteinput2_eq1_gain`] = this.DATA.gminp.danteinput2_eq1_gain;
					variableObj[`gminp_danteinput2_eq1_q`] = this.DATA.gminp.danteinput2_eq1_q;
					variableObj[`gminp_danteinput2_eq1_filtertype`] = this.DATA.gminp.danteinput2_eq1_filtertype;

					variableObj[`gminp_danteinput2_eq2_frequency`] = this.DATA.gminp.danteinput2_eq2_frequency;
					variableObj[`gminp_danteinput2_eq2_gain`] = this.DATA.gminp.danteinput2_eq2_gain;
					variableObj[`gminp_danteinput2_eq2_q`] = this.DATA.gminp.danteinput2_eq2_q;
					variableObj[`gminp_danteinput2_eq2_filtertype`] = this.DATA.gminp.danteinput2_eq2_filtertype;

					variableObj[`gminp_danteinput2_eq3_frequency`] = this.DATA.gminp.danteinput2_eq3_frequency;
					variableObj[`gminp_danteinput2_eq3_gain`] = this.DATA.gminp.danteinput2_eq3_gain;
					variableObj[`gminp_danteinput2_eq3_q`] = this.DATA.gminp.danteinput2_eq3_q;
					variableObj[`gminp_danteinput2_eq3_filtertype`] = this.DATA.gminp.danteinput2_eq3_filtertype;
				}
	
				if (model.variables.includes('gxinp')) {
					variableObj[`gxinp_aux_level`] = this.DATA.gxinp.aux_level;
					variableObj[`gxinp_aux_nominallevel`] = this.DATA.gxinp.aux_nominallevel;
					variableObj[`gxinp_aux_mixtofloor`] = this.DATA.gxinp.aux_mixtofloor;
					variableObj[`gxinp_aux_mixtolanguage1`] = this.DATA.gxinp.aux_mixtolanguage1;
					variableObj[`gxinp_aux_mixtolanguage2`] = this.DATA.gxinp.aux_mixtolanguage2;
					variableObj[`gxinp_aux_lowcut`] = this.DATA.gxinp.aux_lowcut;

					variableObj[`gxinp_aux_eq1_frequency`] = this.DATA.gxinp.aux_eq1_frequency;
					variableObj[`gxinp_aux_eq1_gain`] = this.DATA.gxinp.aux_eq1_gain;
					variableObj[`gxinp_aux_eq1_q`] = this.DATA.gxinp.aux_eq1_q;
					variableObj[`gxinp_aux_eq1_filtertype`] = this.DATA.gxinp.aux_eq1_filtertype;

					variableObj[`gxinp_aux_eq2_frequency`] = this.DATA.gxinp.aux_eq2_frequency;
					variableObj[`gxinp_aux_eq2_gain`] = this.DATA.gxinp.aux_eq2_gain;
					variableObj[`gxinp_aux_eq2_q`] = this.DATA.gxinp.aux_eq2_q;
					variableObj[`gxinp_aux_eq2_filtertype`] = this.DATA.gxinp.aux_eq2_filtertype;

					variableObj[`gxinp_aux_eq3_frequency`] = this.DATA.gxinp.aux_eq3_frequency;
					variableObj[`gxinp_aux_eq3_gain`] = this.DATA.gxinp.aux_eq3_gain;
					variableObj[`gxinp_aux_eq3_q`] = this.DATA.gxinp.aux_eq3_q;
					variableObj[`gxinp_aux_eq3_filtertype`] = this.DATA.gxinp.aux_eq3_filtertype;

					variableObj[`gxinp_aux_inputtype`] = this.DATA.gxinp.aux_inputtype;
				}
	
				if (model.variables.includes('giinp')) {
					variableObj[`giinp_interpretationreturn1_level`] = this.DATA.giinp.interpretationreturn1_level;
					variableObj[`giinp_interpretationreturn1_nominallevel`] = this.DATA.giinp.interpretationreturn1_nominallevel;
					variableObj[`giinp_interpretationreturn1_lowcut`] = this.DATA.giinp.interpretationreturn1_lowcut;

					variableObj[`giinp_interpretationreturn1_eq1_frequency`] = this.DATA.giinp.interpretationreturn1_eq1_frequency;
					variableObj[`giinp_interpretationreturn1_eq1_gain`] = this.DATA.giinp.interpretationreturn1_eq1_gain;
					variableObj[`giinp_interpretationreturn1_eq1_q`] = this.DATA.giinp.interpretationreturn1_eq1_q;
					variableObj[`giinp_interpretationreturn1_eq1_filtertype`] = this.DATA.giinp.interpretationreturn1_eq1_filtertype;

					variableObj[`giinp_interpretationreturn1_eq2_frequency`] = this.DATA.giinp.interpretationreturn1_eq2_frequency;
					variableObj[`giinp_interpretationreturn1_eq2_gain`] = this.DATA.giinp.interpretationreturn1_eq2_gain;
					variableObj[`giinp_interpretationreturn1_eq2_q`] = this.DATA.giinp.interpretationreturn1_eq2_q;
					variableObj[`giinp_interpretationreturn1_eq2_filtertype`] = this.DATA.giinp.interpretationreturn1_eq2_filtertype;

					variableObj[`giinp_interpretationreturn1_eq3_frequency`] = this.DATA.giinp.interpretationreturn1_eq3_frequency;
					variableObj[`giinp_interpretationreturn1_eq3_gain`] = this.DATA.giinp.interpretationreturn1_eq3_gain;
					variableObj[`giinp_interpretationreturn1_eq3_q`] = this.DATA.giinp.interpretationreturn1_eq3_q;
					variableObj[`giinp_interpretationreturn1_eq3_filtertype`] = this.DATA.giinp.interpretationreturn1_eq3_filtertype;

					variableObj[`giinp_interpretationreturn2_level`] = this.DATA.giinp.interpretationreturn2_level;
					variableObj[`giinp_interpretationreturn2_nominallevel`] = this.DATA.giinp.interpretationreturn2_nominallevel;
					variableObj[`giinp_interpretationreturn2_lowcut`] = this.DATA.giinp.interpretationreturn2_lowcut;

					variableObj[`giinp_interpretationreturn2_eq1_frequency`] = this.DATA.giinp.interpretationreturn2_eq1_frequency;
					variableObj[`giinp_interpretationreturn2_eq1_gain`] = this.DATA.giinp.interpretationreturn2_eq1_gain;
					variableObj[`giinp_interpretationreturn2_eq1_q`] = this.DATA.giinp.interpretationreturn2_eq1_q;
					variableObj[`giinp_interpretationreturn2_eq1_filtertype`] = this.DATA.giinp.interpretationreturn2_eq1_filtertype;

					variableObj[`giinp_interpretationreturn2_eq2_frequency`] = this.DATA.giinp.interpretationreturn2_eq2_frequency;
					variableObj[`giinp_interpretationreturn2_eq2_gain`] = this.DATA.giinp.interpretationreturn2_eq2_gain;
					variableObj[`giinp_interpretationreturn2_eq2_q`] = this.DATA.giinp.interpretationreturn2_eq2_q;
					variableObj[`giinp_interpretationreturn2_eq2_filtertype`] = this.DATA.giinp.interpretationreturn2_eq2_filtertype;

					variableObj[`giinp_interpretationreturn2_eq3_frequency`] = this.DATA.giinp.interpretationreturn2_eq3_frequency;
					variableObj[`giinp_interpretationreturn2_eq3_gain`] = this.DATA.giinp.interpretationreturn2_eq3_gain;
					variableObj[`giinp_interpretationreturn2_eq3_q`] = this.DATA.giinp.interpretationreturn2_eq3_q;
					variableObj[`giinp_interpretationreturn2_eq3_filtertype`] = this.DATA.giinp.interpretationreturn2_eq3_filtertype;
				}
	
				if (model.variables.includes('gaout')) {
					variableObj[`gaout_output1_level`] = this.DATA.gaout.output1_level;
					variableObj[`gaout_output1_sourceselect`] = this.DATA.gaout.output1_sourceselect;

					variableObj[`gaout_output2_level`] = this.DATA.gaout.output2_level;
					variableObj[`gaout_output2_sourceselect`] = this.DATA.gaout.output2_sourceselect;

					variableObj[`gaout_output3_level`] = this.DATA.gaout.output3_level;
					variableObj[`gaout_output3_sourceselect`] = this.DATA.gaout.output3_sourceselect;

					variableObj[`gaout_output4_level`] = this.DATA.gaout.output4_level;
					variableObj[`gaout_output4_sourceselect`] = this.DATA.gaout.output4_sourceselect;

					variableObj[`gaout_output1_maxvolume`] = this.DATA.gaout.output1_maxvolume;
					variableObj[`gaout_output1_peqenable`] = this.DATA.gaout.output1_peqenable;

					variableObj[`gaout_output1_eq1_frequency`] = this.DATA.gaout.output1_eq1_frequency;
					variableObj[`gaout_output1_eq1_gain`] = this.DATA.gaout.output1_eq1_gain;
					variableObj[`gaout_output1_eq1_q`] = this.DATA.gaout.output1_eq1_q;
					variableObj[`gaout_output1_eq1_filtertype`] = this.DATA.gaout.output1_eq1_filtertype;

					variableObj[`gaout_output1_eq2_frequency`] = this.DATA.gaout.output1_eq2_frequency;
					variableObj[`gaout_output1_eq2_gain`] = this.DATA.gaout.output1_eq2_gain;
					variableObj[`gaout_output1_eq2_q`] = this.DATA.gaout.output1_eq2_q;

					variableObj[`gaout_output1_eq3_frequency`] = this.DATA.gaout.output1_eq3_frequency;
					variableObj[`gaout_output1_eq3_gain`] = this.DATA.gaout.output1_eq3_gain;
					variableObj[`gaout_output1_eq3_q`] = this.DATA.gaout.output1_eq3_q;

					variableObj[`gaout_output1_eq4_frequency`] = this.DATA.gaout.output1_eq4_frequency;
					variableObj[`gaout_output1_eq4_gain`] = this.DATA.gaout.output1_eq4_gain;
					variableObj[`gaout_output1_eq4_q`] = this.DATA.gaout.output1_eq4_q;

					variableObj[`gaout_output1_eq5_frequency`] = this.DATA.gaout.output1_eq5_frequency;
					variableObj[`gaout_output1_eq5_gain`] = this.DATA.gaout.output1_eq5_gain;
					variableObj[`gaout_output1_eq5_q`] = this.DATA.gaout.output1_eq5_q;

					variableObj[`gaout_output1_eq6_frequency`] = this.DATA.gaout.output1_eq6_frequency;
					variableObj[`gaout_output1_eq6_gain`] = this.DATA.gaout.output1_eq6_gain;
					variableObj[`gaout_output1_eq6_q`] = this.DATA.gaout.output1_eq6_q;

					variableObj[`gaout_output1_eq7_frequency`] = this.DATA.gaout.output1_eq7_frequency;
					variableObj[`gaout_output1_eq7_gain`] = this.DATA.gaout.output1_eq7_gain;
					variableObj[`gaout_output1_eq7_q`] = this.DATA.gaout.output1_eq7_q;

					variableObj[`gaout_output1_eq8_frequency`] = this.DATA.gaout.output1_eq8_frequency;
					variableObj[`gaout_output1_eq8_gain`] = this.DATA.gaout.output1_eq8_gain;
					variableObj[`gaout_output1_eq8_q`] = this.DATA.gaout.output1_eq8_q;
					variableObj[`gaout_output1_eq8_filtertype`] = this.DATA.gaout.output1_eq8_filtertype;

					variableObj[`gaout_output1_dynamics_enable`] = this.DATA.gaout.output1_dynamics_enable;
					variableObj[`gaout_output1_dynamics_compthreshold`] = this.DATA.gaout.output1_dynamics_compthreshold;
					variableObj[`gaout_output1_dynamics_limiterthreshold`] = this.DATA.gaout.output1_dynamics_limiterthreshold;
					variableObj[`gaout_output1_dynamics_ratio`] = this.DATA.gaout.output1_dynamics_ratio;
					variableObj[`gaout_output1_dynamics_attack`] = this.DATA.gaout.output1_dynamics_attack;
					variableObj[`gaout_output1_dynamics_release`] = this.DATA.gaout.output1_dynamics_release;
					variableObj[`gaout_output1_dynamics_gain`] = this.DATA.gaout.output1_dynamics_gain;
					variableObj[`gaout_output1_dynamics_mode`] = this.DATA.gaout.output1_dynamics_mode;
					variableObj[`gaout_output1_dynamics_sensitivity`] = this.DATA.gaout.output1_dynamics_sensitivity;
					variableObj[`gaout_output1_dynamics_frequency`] = this.DATA.gaout.output1_dynamics_frequency;
					variableObj[`gaout_output1_dynamics_reduction`] = this.DATA.gaout.output1_dynamics_reduction;
				}
	
				if (model.variables.includes('ggpio')) {
					if (this.DATA.ggpio) {
						for (let i = 0; i < this.DATA.ggpio.length; i++) {
							let iu = this.DATA.ggpio[i];
	
							variableObj[`ggpio_${iu.serial}_gpi_0`] = iu.gpi0;
							variableObj[`ggpio_${iu.serial}_gpi_1`] = iu.gpi1;
							variableObj[`ggpio_${iu.serial}_gpi_2`] = iu.gpi2;
							variableObj[`ggpio_${iu.serial}_gpi_3`] = iu.gpi3;
							variableObj[`ggpio_${iu.serial}_gpi_4`] = iu.gpi4;
							variableObj[`ggpio_${iu.serial}_gpi_5`] = iu.gpi5;
							variableObj[`ggpio_${iu.serial}_gpi_6`] = iu.gpi6;
							variableObj[`ggpio_${iu.serial}_gpi_7`] = iu.gpi7;
	
							variableObj[`ggpio_${iu.serial}_gpo_0`] = iu.gpo0;
							variableObj[`ggpio_${iu.serial}_gpo_1`] = iu.gpo1;
							variableObj[`ggpio_${iu.serial}_gpo_2`] = iu.gpo2;
							variableObj[`ggpio_${iu.serial}_gpo_3`] = iu.gpo3;
							variableObj[`ggpio_${iu.serial}_gpo_4`] = iu.gpo4;
							variableObj[`ggpio_${iu.serial}_gpo_5`] = iu.gpo5;
							variableObj[`ggpio_${iu.serial}_gpo_6`] = iu.gpo6;
							variableObj[`ggpio_${iu.serial}_gpo_7`] = iu.gpo7;
						}
					}
				}
	
				if (model.variables.includes('gintc')) {
					variableObj[`gintc_interpretationmode`] = this.DATA.gintc.interpretationmode;
					variableObj[`gintc_interlock`] = this.DATA.gintc.interlock;
					variableObj[`gintc_language1`] = this.DATA.gintc.language1;
					variableObj[`gintc_language2`] = this.DATA.gintc.language2;
					variableObj[`gintc_language3`] = this.DATA.gintc.language3;
					variableObj[`gintc_easymode`] = this.DATA.gintc.easymode;
				}
	
				if (model.variables.includes('gcvui')) {
					if (this.DATA.gcvui) {
						for (let i = 0; i < this.DATA.gcvui.length; i++) {
							let vu = this.DATA.gcvui[i];
							variableObj[`gcvui_${vu.serial}_connect`] = vu.connect;
							variableObj[`gcvui_${vu.serial}_button0`] = vu.button0;
							variableObj[`gcvui_${vu.serial}_button1`] = vu.button1;
							variableObj[`gcvui_${vu.serial}_button2`] = vu.button2;
							variableObj[`gcvui_${vu.serial}_button3`] = vu.button3;
							variableObj[`gcvui_${vu.serial}_button4`] = vu.button4;
						}
					}
				}
	
				if (model.variables.includes('recst')) {
					variableObj[`recst_rec_status`] = this.DATA.recst.status;
					variableObj[`recst_rec_elapsed`] = this.DATA.recst.elapsed;
					variableObj[`recst_rec_remaining`] = this.DATA.recst.remaining;
				}
	
				if (model.variables.includes('glvmt')) {
					if (this.DATA.glvmt) {
						for (let i = 0; i < this.DATA.glvmt.length; i++) {
							let point = this.DATA.glvmt[i];
							variableObj[`glvmt_monitorpoint_${point.monitor_point}_level`] = point.level;
						}
					}
				}
	
				if (model.variables.includes('confm')) {
				}

				this.setVariableValues(variableObj);
			}
		}
		catch(error) {
			this.log('error', `Error checking variables: ${error.toString()}`)
			console.log(error);
		}
	}
}