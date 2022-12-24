topicPub = "iotgateway/write";		// topic to public to
topicSub = "iotgateway";            // topic to subscriber to

// Manu_Auto = "Channel2.Device1.btt_Manu_Auto";
// Start = "Channel2.Device1.btt_Start";
// Stop = "Channel2.Device1.btt_Stop";
// Reset = "Channel2.Device1.btt_Reset";

// Tram1_2B1 = "Channel2.Device1.CB_XL_day";
// Tram1_2B2 = "Channel2.Device1.CB_XL_thu";
// Tram1_2B3 = "Channel2.Device1.CB_apsuat_hutphoi";
// Tram1_2B4 = "Channel2.Device1.CB_XLquay_hutphoi";
// Tram1_2B5 = "Channel2.Device1.CB_XLquay_tram_ke";
// Tram1_2B6 = "Channel2.Device1.Cb_phathienphoi";
// Tram1_2B7 = "Channel2.Device1.CB_phoi_nguoc";// cb trạm kế
// Tram1_2B8 = "Channel2.Device1.CB_phoi_nguoc";
// Tram1_3PV1 = "Channel2.Device1.Solenoid_XLquay_tramke";
// Tram1_3PV2 = "Channel2.Device1.solenoid_XLquay_hut_phoi";
// Tram1_3PV3 = "Channel2.Device1.Solenoid_giachut_hut_phoi";
// Tram1_3PV4 = "Channel2.Device1.Sole_XL_day";
// Tram1_3PV5 = "Channel2.Device1.Sole_XL_thu";

Manu_Auto = "TCP_IP_tram.tramChu.btt_Manu_Auto";
Start = "TCP_IP_tram.tramChu.btt_Start";
Stop = "TCP_IP_tram.tramChu.btt_Stop";
Reset = "TCP_IP_tram.tramChu.btt_Reset";

Tram1_2B1 = "TCP_IP_tram.tramChu.Tram01_CBXLDay";
Tram1_2B2 = "TCP_IP_tram.tramChu.Tram01_CBXLThu";
Tram1_2B3 = "TCP_IP_tram.tramChu.Tram01_CBApSuat";
Tram1_2B4 = "TCP_IP_tram.tramChu.Tram01_CBHTVTHutPhoi";
Tram1_2B5 = "TCP_IP_tram.tramChu.Tram01_CBHTNhaPhoi";
Tram1_2B6 = "TCP_IP_tram.tramChu.Tram01_CBPhoi";
Tram1_2B7 = "TCP_IP_tram.tramChu.Tram01_CBTram";
Tram1_2B8 = "TCP_IP_tram.tramChu.Tram01_CBPhoiNguoc";
Tram1_3PV1 = "TCP_IP_tram.tramChu.Tram01_HTNhaPhoi";
Tram1_3PV2 = "TCP_IP_tram.tramChu.Tram01_HTSangHutPhoi";
Tram1_3PV3 = "TCP_IP_tram.tramChu.Tram01_HutPhoi";
Tram1_3PV4 = "TCP_IP_tram.tramChu.Tram01_XLDay";
Tram1_3PV5 = "TCP_IP_tram.tramChu.Tram01_XLThu";
Tram1_Reset = "TCP_IP_tram.tramChu.Tram01_Reset";
Tram1_Start = "TCP_IP_tram.tramChu.Tram01_Start";

// Tram1_2B2
// Tram1_2B2


payload_start = `[{"id":"${Start}","v":true}]`;
payload_reset = `[{"id":"${Reset}","v":true}]`;
payload_stop  = `[{"id":"${Stop}","v":true}]`;

payload_start_false = `[{"id":"${Start}","v":false}]`;
payload_reset_false = `[{"id":"${Reset}","v":false}]`;
payload_stop_false  = `[{"id":"${Stop}","v":false}]`;

payload_Manu  = `[{"id":"${Manu_Auto}","v":false}]`;
payload_Auto  = `[{"id":"${Manu_Auto}","v":true}]`;