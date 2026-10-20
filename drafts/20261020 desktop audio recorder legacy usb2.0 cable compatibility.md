# .

```
 ~ % sudo dmesg -w

[65998.365924] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[66002.040012] PM: suspend entry (s2idle)
[66002.048387] Filesystems sync: 0.008 seconds
[66002.146709] Freezing user space processes
[66002.150498] Freezing user space processes completed (elapsed 0.003 seconds)
[66002.150504] OOM killer disabled.
[66002.150506] Freezing remaining freezable tasks
[66002.151545] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[66002.151550] printk: Suspending console(s) (use no_console_suspend to debug)
[66004.196700] ACPI: EC: interrupt blocked
[66004.302303] ACPI: EC: interrupt unblocked
[66004.659876] [drm] PCIE GART of 1024M enabled.
[66004.659881] [drm] PTB located at 0x000000F41FC00000
[66004.659904] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[66004.660887] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[66004.661685] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[66004.664947] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[66004.664951] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[66004.664954] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[66004.664956] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[66004.664959] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[66004.664961] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[66004.664963] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[66004.664965] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[66004.664968] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[66004.664970] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[66004.664973] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[66004.664975] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[66004.664977] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[66004.664979] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[66004.664982] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[66004.668683] nvme nvme0: 12/0/0 default/read/poll queues
[66006.683208] OOM killer enabled.
[66006.683213] Restarting tasks: Starting
[66006.691230] Restarting tasks: Done
[66006.691289] random: crng reseeded on system resumption
[66006.964201] PM: suspend exit
[66009.592206] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[66009.603443] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[66009.610537] wlp1s0: authenticated
[66009.611384] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[66009.618650] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[66009.624530] wlp1s0: associated
[66050.451245] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[66054.039560] PM: suspend entry (s2idle)
[66054.052558] Filesystems sync: 0.012 seconds
[66054.150871] Freezing user space processes
[66054.153758] Freezing user space processes completed (elapsed 0.002 seconds)
[66054.153764] OOM killer disabled.
[66054.153766] Freezing remaining freezable tasks
[66054.155164] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[66054.155169] printk: Suspending console(s) (use no_console_suspend to debug)
[66056.197897] ACPI: EC: interrupt blocked
[66056.269484] ACPI: EC: interrupt unblocked
[66056.625789] [drm] PCIE GART of 1024M enabled.
[66056.625794] [drm] PTB located at 0x000000F41FC00000
[66056.625816] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[66056.627103] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[66056.628100] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[66056.631151] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[66056.631156] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[66056.631159] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[66056.631161] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[66056.631163] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[66056.631165] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[66056.631167] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[66056.631170] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[66056.631172] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[66056.631175] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[66056.631177] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[66056.631180] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[66056.631182] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[66056.631184] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[66056.631186] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[66056.634908] nvme nvme0: 12/0/0 default/read/poll queues
[66058.645240] OOM killer enabled.
[66058.645245] Restarting tasks: Starting
[66058.655375] Restarting tasks: Done
[66058.655431] random: crng reseeded on system resumption
[66058.940713] PM: suspend exit
[66061.571218] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[66061.582495] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[66061.587156] wlp1s0: authenticated
[66061.587364] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[66061.600277] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[66061.605662] wlp1s0: associated
[75059.933491] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[75065.036499] PM: suspend entry (s2idle)
[75065.051459] Filesystems sync: 0.014 seconds
[75065.152152] Freezing user space processes
[75065.157854] Freezing user space processes completed (elapsed 0.005 seconds)
[75065.157860] OOM killer disabled.
[75065.157863] Freezing remaining freezable tasks
[75065.159272] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[75065.159277] printk: Suspending console(s) (use no_console_suspend to debug)
[75067.205795] ACPI: EC: interrupt blocked
[75067.298715] ACPI: EC: interrupt unblocked
[75067.667259] [drm] PCIE GART of 1024M enabled.
[75067.667264] [drm] PTB located at 0x000000F41FC00000
[75067.667286] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[75067.668213] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[75067.669217] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[75067.672439] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[75067.672443] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[75067.672446] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[75067.672448] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[75067.672451] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[75067.672453] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[75067.672455] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[75067.672457] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[75067.672460] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[75067.672462] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[75067.672465] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[75067.672467] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[75067.672469] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[75067.672471] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[75067.672474] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[75067.676840] nvme nvme0: 12/0/0 default/read/poll queues
[75069.691681] OOM killer enabled.
[75069.691689] Restarting tasks: Starting
[75069.699665] Restarting tasks: Done
[75069.699922] random: crng reseeded on system resumption
[75069.989976] PM: suspend exit
[75070.160292] audit: type=1400 audit(1791688419.895:366): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=438640 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[75072.661297] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[75072.672538] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[75072.676255] wlp1s0: authenticated
[75072.677368] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[75072.698106] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[75072.702872] wlp1s0: associated
[75100.970745] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[75105.031343] PM: suspend entry (s2idle)
[75105.043588] Filesystems sync: 0.012 seconds
[75105.141294] Freezing user space processes
[75105.144597] Freezing user space processes completed (elapsed 0.003 seconds)
[75105.144602] OOM killer disabled.
[75105.144604] Freezing remaining freezable tasks
[75105.145487] Freezing remaining freezable tasks completed (elapsed 0.000 seconds)
[75105.145492] printk: Suspending console(s) (use no_console_suspend to debug)
[75107.197368] ACPI: EC: interrupt blocked
[75107.308032] ACPI: EC: interrupt unblocked
[75107.381367] workqueue: acpi_ec_event_processor hogged CPU for >10000us 19 times, consider switching to WQ_UNBOUND
[75107.655107] [drm] PCIE GART of 1024M enabled.
[75107.655122] [drm] PTB located at 0x000000F41FC00000
[75107.655156] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[75107.656710] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[75107.657807] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[75107.661434] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[75107.661439] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[75107.661443] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[75107.661445] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[75107.661448] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[75107.661451] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[75107.661453] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[75107.661456] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[75107.661459] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[75107.661462] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[75107.661464] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[75107.661467] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[75107.661470] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[75107.661472] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[75107.661475] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[75107.665194] nvme nvme0: 12/0/0 default/read/poll queues
[75109.679442] OOM killer enabled.
[75109.679449] Restarting tasks: Starting
[75109.691330] Restarting tasks: Done
[75109.691494] random: crng reseeded on system resumption
[75109.972176] PM: suspend exit
[75110.090961] audit: type=1400 audit(1791701650.824:367): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=440040 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[75112.664635] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[75112.676042] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[75112.695911] wlp1s0: authenticated
[75112.696378] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[75112.715559] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[75112.722532] wlp1s0: associated
[75461.625146] audit: type=1400 audit(1791702002.358:368): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=443325 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[78582.268030] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[78586.054160] PM: suspend entry (s2idle)
[78586.062188] Filesystems sync: 0.008 seconds
[78586.162048] Freezing user space processes
[78586.166747] Freezing user space processes completed (elapsed 0.004 seconds)
[78586.166755] OOM killer disabled.
[78586.166758] Freezing remaining freezable tasks
[78586.168373] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[78586.168382] printk: Suspending console(s) (use no_console_suspend to debug)
[78588.217783] ACPI: EC: interrupt blocked
[78588.322070] ACPI: EC: interrupt unblocked
[78588.662922] [drm] PCIE GART of 1024M enabled.
[78588.662941] [drm] PTB located at 0x000000F41FC00000
[78588.663000] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[78588.664123] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[78588.665020] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[78588.668414] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[78588.668420] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[78588.668423] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[78588.668426] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[78588.668429] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[78588.668431] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[78588.668434] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[78588.668437] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[78588.668439] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[78588.668442] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[78588.668445] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[78588.668448] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[78588.668451] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[78588.668453] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[78588.668456] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[78588.672151] nvme nvme0: 12/0/0 default/read/poll queues
[78590.692514] OOM killer enabled.
[78590.692520] Restarting tasks: Starting
[78590.702645] Restarting tasks: Done
[78590.702720] random: crng reseeded on system resumption
[78590.981736] PM: suspend exit
[78597.554065] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[78597.565346] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[78597.570093] wlp1s0: authenticated
[78597.571399] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[78597.590634] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[78597.596646] wlp1s0: associated
[78946.066383] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[78951.080087] PM: suspend entry (s2idle)
[78951.092036] Filesystems sync: 0.011 seconds
[78951.192286] Freezing user space processes
[78951.196787] Freezing user space processes completed (elapsed 0.004 seconds)
[78951.196795] OOM killer disabled.
[78951.196798] Freezing remaining freezable tasks
[78951.198399] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[78951.198408] printk: Suspending console(s) (use no_console_suspend to debug)
[78953.250226] ACPI: EC: interrupt blocked
[78953.358820] ACPI: EC: interrupt unblocked
[78953.698760] [drm] PCIE GART of 1024M enabled.
[78953.698768] [drm] PTB located at 0x000000F41FC00000
[78953.698822] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[78953.700181] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[78953.702917] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[78953.706419] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[78953.706424] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[78953.706427] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[78953.706430] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[78953.706432] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[78953.706435] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[78953.706438] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[78953.706440] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[78953.706443] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[78953.706446] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[78953.706449] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[78953.706452] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[78953.706456] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[78953.706459] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[78953.706462] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[78953.708881] nvme nvme0: 12/0/0 default/read/poll queues
[78955.728101] OOM killer enabled.
[78955.728107] Restarting tasks: Starting
[78955.740915] Restarting tasks: Done
[78955.741000] random: crng reseeded on system resumption
[78956.019242] PM: suspend exit
[78956.393591] audit: type=1400 audit(1791714601.070:369): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=460642 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[78958.755986] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[78958.767250] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[78958.878413] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 2/3)
[78958.884045] wlp1s0: authenticated
[78958.885388] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[78958.893727] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[78958.899721] wlp1s0: associated
[79637.695520] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[79643.057107] PM: suspend entry (s2idle)
[79643.064661] Filesystems sync: 0.007 seconds
[79643.164912] Freezing user space processes
[79643.169632] Freezing user space processes completed (elapsed 0.004 seconds)
[79643.169644] OOM killer disabled.
[79643.169649] Freezing remaining freezable tasks
[79643.171346] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[79643.171371] printk: Suspending console(s) (use no_console_suspend to debug)
[79645.234275] ACPI: EC: interrupt blocked
[79645.331866] ACPI: EC: interrupt unblocked
[79645.667767] [drm] PCIE GART of 1024M enabled.
[79645.667774] [drm] PTB located at 0x000000F41FC00000
[79645.667816] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[79645.669368] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[79645.670412] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[79645.674638] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[79645.674643] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[79645.674647] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[79645.674650] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[79645.674653] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[79645.674655] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[79645.674658] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[79645.674660] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[79645.674663] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[79645.674666] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[79645.674669] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[79645.674672] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[79645.674674] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[79645.674677] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[79645.674679] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[79645.677158] nvme nvme0: 12/0/0 default/read/poll queues
[79647.695142] OOM killer enabled.
[79647.695148] Restarting tasks: Starting
[79647.705824] Restarting tasks: Done
[79647.705911] random: crng reseeded on system resumption
[79648.006287] PM: suspend exit
[79654.571391] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[79654.582745] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[79654.614942] wlp1s0: authenticated
[79654.616388] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[79654.627511] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[79654.634685] wlp1s0: associated
[82065.308996] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[82069.043070] PM: suspend entry (s2idle)
[82069.057931] Filesystems sync: 0.014 seconds
[82069.157764] Freezing user space processes
[82069.162380] Freezing user space processes completed (elapsed 0.004 seconds)
[82069.162388] OOM killer disabled.
[82069.162391] Freezing remaining freezable tasks
[82069.163644] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[82069.163652] printk: Suspending console(s) (use no_console_suspend to debug)
[82071.217875] ACPI: EC: interrupt blocked
[82071.317024] ACPI: EC: interrupt unblocked
[82071.338741] hrtimer: interrupt took 2956130 ns
[82071.654683] [drm] PCIE GART of 1024M enabled.
[82071.654691] [drm] PTB located at 0x000000F41FC00000
[82071.654726] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[82071.656817] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[82071.658003] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[82071.662445] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[82071.662450] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[82071.662453] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[82071.662456] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[82071.662459] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[82071.662461] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[82071.662464] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[82071.662467] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[82071.662469] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[82071.662473] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[82071.662477] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[82071.662482] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[82071.662485] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[82071.662489] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[82071.662492] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[82071.664305] nvme nvme0: 12/0/0 default/read/poll queues
[82073.667815] OOM killer enabled.
[82073.667832] Restarting tasks: Starting
[82073.683936] Restarting tasks: Done
[82073.684068] random: crng reseeded on system resumption
[82073.999658] PM: suspend exit
[82080.568612] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[82080.580000] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[82080.591586] wlp1s0: authenticated
[82080.592419] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[82080.607415] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[82080.616572] wlp1s0: associated
[82728.309589] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[82732.044497] PM: suspend entry (s2idle)
[82732.062377] Filesystems sync: 0.017 seconds
[82732.163040] Freezing user space processes
[82732.167713] Freezing user space processes completed (elapsed 0.004 seconds)
[82732.167746] OOM killer disabled.
[82732.167751] Freezing remaining freezable tasks
[82732.169393] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[82732.169402] printk: Suspending console(s) (use no_console_suspend to debug)
[82734.224928] ACPI: EC: interrupt blocked
[82734.473735] ACPI: EC: interrupt unblocked
[82735.076463] [drm] PCIE GART of 1024M enabled.
[82735.076470] [drm] PTB located at 0x000000F41FC00000
[82735.076495] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[82735.077434] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[82735.078431] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[82735.081850] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[82735.081856] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[82735.081860] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[82735.081863] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[82735.081867] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[82735.081870] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[82735.081873] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[82735.081876] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[82735.081879] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[82735.081883] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[82735.081886] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[82735.081890] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[82735.081893] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[82735.081896] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[82735.081899] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[82735.085891] nvme nvme0: 12/0/0 default/read/poll queues
[82737.110774] OOM killer enabled.
[82737.110781] Restarting tasks: Starting
[82737.130939] Restarting tasks: Done
[82737.130985] random: crng reseeded on system resumption
[82737.397475] PM: suspend exit
[82737.488691] audit: type=1400 audit(1791726430.193:370): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=482903 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[82740.016131] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[82740.027407] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[82740.032872] wlp1s0: authenticated
[82740.033401] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[82740.040712] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[82740.046080] wlp1s0: associated
[82762.107697] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[82766.028630] PM: suspend entry (s2idle)
[82766.051582] Filesystems sync: 0.022 seconds
[82766.151418] Freezing user space processes
[82766.154663] Freezing user space processes completed (elapsed 0.003 seconds)
[82766.154669] OOM killer disabled.
[82766.154671] Freezing remaining freezable tasks
[82766.156061] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[82766.156066] printk: Suspending console(s) (use no_console_suspend to debug)
[82768.202135] ACPI: EC: interrupt blocked
[82768.393687] ACPI: EC: interrupt unblocked
[82768.752500] [drm] PCIE GART of 1024M enabled.
[82768.752506] [drm] PTB located at 0x000000F41FC00000
[82768.752528] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[82768.753462] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[82768.754238] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[82768.757475] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[82768.757479] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[82768.757482] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[82768.757484] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[82768.757486] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[82768.757488] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[82768.757491] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[82768.757493] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[82768.757495] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[82768.757498] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[82768.757500] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[82768.757502] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[82768.757505] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[82768.757507] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[82768.757509] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[82768.762205] nvme nvme0: 12/0/0 default/read/poll queues
[82770.777565] OOM killer enabled.
[82770.777570] Restarting tasks: Starting
[82770.784555] Restarting tasks: Done
[82770.784621] random: crng reseeded on system resumption
[82771.080435] PM: suspend exit
[82773.680697] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[82773.691902] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[82773.767761] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 2/3)
[82773.825271] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 3/3)
[82773.881954] wlp1s0: authentication with 4a:63:58:10:0d:41 timed out
[82776.538251] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[82776.545833] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[82776.645002] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 2/3)
[82776.702443] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 3/3)
[82776.756193] wlp1s0: authentication with 4a:63:58:10:0d:41 timed out
[82779.829663] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[82779.837216] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[82779.840681] wlp1s0: authenticated
[82779.841374] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[82779.850056] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[82779.855502] wlp1s0: associated
[85553.569781] audit: type=1400 audit(1791734404.210:371): apparmor="DENIED" operation="capable" class="cap" profile="/usr/sbin/cupsd" pid=495683 comm="cupsd" capability=12  capname="net_admin"
[85553.821028] audit: type=1400 audit(1791734404.462:372): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=495581 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[85864.293629] systemd-journald[192362]: Time jumped backwards, rotating.
[86107.342078] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[86111.030753] PM: suspend entry (s2idle)
[86111.036547] Filesystems sync: 0.005 seconds
[86111.134796] Freezing user space processes
[86111.138244] Freezing user space processes completed (elapsed 0.003 seconds)
[86111.138250] OOM killer disabled.
[86111.138252] Freezing remaining freezable tasks
[86111.139524] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[86111.139529] printk: Suspending console(s) (use no_console_suspend to debug)
[86113.185286] ACPI: EC: interrupt blocked
[86113.428567] ACPI: EC: interrupt unblocked
[86113.776684] [drm] PCIE GART of 1024M enabled.
[86113.776692] [drm] PTB located at 0x000000F41FC00000
[86113.776725] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[86113.778086] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[86113.778853] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[86113.782433] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[86113.782438] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[86113.782441] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[86113.782443] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[86113.782445] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[86113.782448] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[86113.782450] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[86113.782452] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[86113.782454] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[86113.782457] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[86113.782460] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[86113.782462] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[86113.782465] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[86113.782467] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[86113.782469] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[86113.785849] nvme nvme0: 12/0/0 default/read/poll queues
[86115.808759] OOM killer enabled.
[86115.808764] Restarting tasks: Starting
[86115.823088] Restarting tasks: Done
[86115.823173] random: crng reseeded on system resumption
[86116.105415] PM: suspend exit
[86116.562914] audit: type=1400 audit(1791764820.167:373): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=499101 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[86118.462396] ucsi_acpi USBC000:00: ucsi_handle_connector_change: GET_CONNECTOR_STATUS failed (-110)
[86144.532830] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[86144.544151] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[86144.558523] wlp1s0: authenticated
[86144.560432] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[86144.570145] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[86144.577326] wlp1s0: associated
[88101.229885] audit: type=1400 audit(1791766804.835:374): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=508473 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[89634.784574] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[89638.055738] PM: suspend entry (s2idle)
[89638.062592] Filesystems sync: 0.006 seconds
[89638.162465] Freezing user space processes
[89638.166676] Freezing user space processes completed (elapsed 0.004 seconds)
[89638.166684] OOM killer disabled.
[89638.166687] Freezing remaining freezable tasks
[89638.168259] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[89638.168267] printk: Suspending console(s) (use no_console_suspend to debug)
[89640.217309] ACPI: EC: interrupt blocked
[89640.320734] ACPI: EC: interrupt unblocked
[89640.664561] [drm] PCIE GART of 1024M enabled.
[89640.664573] [drm] PTB located at 0x000000F41FC00000
[89640.664627] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[89640.665167] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[89640.666246] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[89640.669749] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[89640.669754] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[89640.669758] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[89640.669760] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[89640.669763] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[89640.669765] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[89640.669768] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[89640.669771] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[89640.669773] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[89640.669776] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[89640.669779] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[89640.669782] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[89640.669785] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[89640.669787] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[89640.669790] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[89640.670389] nvme nvme0: 12/0/0 default/read/poll queues
[89642.687792] OOM killer enabled.
[89642.687799] Restarting tasks: Starting
[89642.700580] Restarting tasks: Done
[89642.700684] random: crng reseeded on system resumption
[89642.987811] PM: suspend exit
[89645.686136] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[89645.697375] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[89645.701053] wlp1s0: authenticated
[89645.702409] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[89645.718225] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[89645.725205] wlp1s0: associated
[96760.583364] workqueue: mmput_async_fn hogged CPU for >10000us 5 times, consider switching to WQ_UNBOUND
[97168.771245] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[97172.041521] PM: suspend entry (s2idle)
[97172.047718] Filesystems sync: 0.006 seconds
[97172.151673] Freezing user space processes
[97172.156495] Freezing user space processes completed (elapsed 0.004 seconds)
[97172.156515] OOM killer disabled.
[97172.156519] Freezing remaining freezable tasks
[97172.158228] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[97172.158237] printk: Suspending console(s) (use no_console_suspend to debug)
[97174.214139] ACPI: EC: interrupt blocked
[97174.505973] ACPI: EC: interrupt unblocked
[97175.050658] [drm] PCIE GART of 1024M enabled.
[97175.050665] [drm] PTB located at 0x000000F41FC00000
[97175.050695] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[97175.052116] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[97175.053128] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[97175.056390] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[97175.056396] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[97175.056399] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[97175.056401] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[97175.056404] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[97175.056407] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[97175.056409] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[97175.056412] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[97175.056414] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[97175.056417] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[97175.056420] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[97175.056423] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[97175.056426] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[97175.056428] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[97175.056431] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[97175.059846] nvme nvme0: 12/0/0 default/read/poll queues
[97177.077923] OOM killer enabled.
[97177.077928] Restarting tasks: Starting
[97177.086367] Restarting tasks: Done
[97177.086423] random: crng reseeded on system resumption
[97177.358884] PM: suspend exit
[97177.553207] audit: type=1400 audit(1791777961.272:375): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=551572 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[97183.558619] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[97183.569997] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[97183.582704] wlp1s0: authenticated
[97183.583396] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[97183.593470] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[97183.599183] wlp1s0: associated
[97202.117000] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[97205.032059] PM: suspend entry (s2idle)
[97205.047471] Filesystems sync: 0.015 seconds
[97205.147224] Freezing user space processes
[97205.150623] Freezing user space processes completed (elapsed 0.003 seconds)
[97205.150629] OOM killer disabled.
[97205.150632] Freezing remaining freezable tasks
[97205.152047] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[97205.152052] printk: Suspending console(s) (use no_console_suspend to debug)
[97207.196757] ACPI: EC: interrupt blocked
[97207.314509] ACPI: EC: interrupt unblocked
[97207.676542] [drm] PCIE GART of 1024M enabled.
[97207.676547] [drm] PTB located at 0x000000F41FC00000
[97207.676586] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[97207.676811] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[97207.677242] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[97207.680532] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[97207.680536] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[97207.680538] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[97207.680541] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[97207.680543] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[97207.680545] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[97207.680547] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[97207.680549] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[97207.680552] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[97207.680554] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[97207.680557] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[97207.680559] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[97207.680561] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[97207.680563] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[97207.680566] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[97207.681899] nvme nvme0: 12/0/0 default/read/poll queues
[97209.697646] OOM killer enabled.
[97209.697651] Restarting tasks: Starting
[97209.709787] Restarting tasks: Done
[97209.709840] random: crng reseeded on system resumption
[97209.998483] PM: suspend exit
[97212.594644] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[97212.605910] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[97212.618398] wlp1s0: authenticated
[97212.619379] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[97212.627285] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[97212.632611] wlp1s0: associated
[98343.453390] wlp1s0: Connection to AP 4a:63:58:10:0d:41 lost
[98353.845914] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[98353.853459] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[98353.901939] wlp1s0: authenticated
[98353.902374] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[98353.913280] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[98353.918087] wlp1s0: associated
[98353.927484] wlp1s0: deauthenticated from 4a:63:58:10:0d:41 (Reason: 2=PREV_AUTH_NOT_VALID)
[98356.582235] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[98356.589796] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[98356.593491] wlp1s0: authenticated
[98356.594378] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[98356.693212] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[98356.699064] wlp1s0: associated
[98674.749997] wlp1s0: Connection to AP 4a:63:58:10:0d:41 lost
[98695.258077] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[98695.265295] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[98695.286251] wlp1s0: authenticated
[98695.288368] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[98695.308772] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[98695.313827] wlp1s0: associated
[99341.053863] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[99344.039443] PM: suspend entry (s2idle)
[99344.044020] Filesystems sync: 0.004 seconds
[99344.141554] Freezing user space processes
[99344.145362] Freezing user space processes completed (elapsed 0.003 seconds)
[99344.145370] OOM killer disabled.
[99344.145372] Freezing remaining freezable tasks
[99344.146547] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[99344.146551] printk: Suspending console(s) (use no_console_suspend to debug)
[99346.199297] ACPI: EC: interrupt blocked
[99346.592802] ACPI: EC: interrupt unblocked
[99346.945905] [drm] PCIE GART of 1024M enabled.
[99346.945918] [drm] PTB located at 0x000000F41FC00000
[99346.945963] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[99346.948277] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[99346.949294] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[99346.952848] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[99346.952852] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[99346.952855] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[99346.952858] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[99346.952860] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[99346.952862] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[99346.952865] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[99346.952867] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[99346.952869] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[99346.952872] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[99346.952874] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[99346.952877] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[99346.952879] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[99346.952881] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[99346.952883] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[99346.955076] nvme nvme0: 12/0/0 default/read/poll queues
[99348.972749] OOM killer enabled.
[99348.972754] Restarting tasks: Starting
[99348.995380] Restarting tasks: Done
[99348.995468] random: crng reseeded on system resumption
[99349.266867] PM: suspend exit
[99351.614427] ucsi_acpi USBC000:00: ucsi_handle_connector_change: GET_CONNECTOR_STATUS failed (-110)
[99351.970577] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[99351.981931] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[99351.993644] wlp1s0: authenticated
[99351.994404] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[99352.004330] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[99352.010071] wlp1s0: associated
[100236.756431] audit: type=1400 audit(1791788401.195:376): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=566512 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[107066.136511] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[107070.040420] PM: suspend entry (s2idle)
[107070.053741] Filesystems sync: 0.013 seconds
[107070.153337] Freezing user space processes
[107070.158689] Freezing user space processes completed (elapsed 0.005 seconds)
[107070.158697] OOM killer disabled.
[107070.158700] Freezing remaining freezable tasks
[107070.160338] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[107070.160347] printk: Suspending console(s) (use no_console_suspend to debug)
[107072.225296] ACPI: EC: interrupt blocked
[107072.517682] ACPI: EC: interrupt unblocked
[107072.965197] [drm] PCIE GART of 1024M enabled.
[107072.965203] [drm] PTB located at 0x000000F41FC00000
[107072.965228] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[107072.966779] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[107072.967545] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[107072.971004] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[107072.971016] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[107072.971020] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[107072.971022] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[107072.971025] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[107072.971027] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[107072.971030] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[107072.971033] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[107072.971035] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[107072.971038] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[107072.971041] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[107072.971044] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[107072.971046] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[107072.971049] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[107072.971051] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[107072.974549] nvme nvme0: 12/0/0 default/read/poll queues
[107074.999061] OOM killer enabled.
[107074.999065] Restarting tasks: Starting
[107075.011235] Restarting tasks: Done
[107075.011300] random: crng reseeded on system resumption
[107075.489818] PM: suspend exit
[107078.121783] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[107078.133051] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[107078.136544] wlp1s0: authenticated
[107078.137395] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[107078.144899] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[107078.150914] wlp1s0: associated
[107100.108472] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[107103.027424] PM: suspend entry (s2idle)
[107103.053145] Filesystems sync: 0.025 seconds
[107103.152091] Freezing user space processes
[107103.155634] Freezing user space processes completed (elapsed 0.003 seconds)
[107103.155641] OOM killer disabled.
[107103.155643] Freezing remaining freezable tasks
[107103.157073] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[107103.157078] printk: Suspending console(s) (use no_console_suspend to debug)
[107105.203103] ACPI: EC: interrupt blocked
[107105.336173] ACPI: EC: interrupt unblocked
[107105.685240] [drm] PCIE GART of 1024M enabled.
[107105.685245] [drm] PTB located at 0x000000F41FC00000
[107105.685267] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[107105.686664] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[107105.687650] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[107105.690812] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[107105.690817] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[107105.690820] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[107105.690822] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[107105.690825] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[107105.690827] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[107105.690829] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[107105.690831] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[107105.690833] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[107105.690836] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[107105.690838] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[107105.690841] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[107105.690843] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[107105.690845] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[107105.690847] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[107105.694294] nvme nvme0: 12/0/0 default/read/poll queues
[107107.711856] OOM killer enabled.
[107107.711862] Restarting tasks: Starting
[107107.722630] Restarting tasks: Done
[107107.722698] random: crng reseeded on system resumption
[107107.993387] PM: suspend exit
[107114.540386] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[107114.551675] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[107114.555113] wlp1s0: authenticated
[107114.555396] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[107114.565238] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[107114.570608] wlp1s0: associated
[107137.607589] usb 1-2: new high-speed USB device number 6 using xhci_hcd
[107137.929876] usb 1-2: Device not responding to setup address.
[107138.134506] usb 1-2: Device not responding to setup address.
[107138.342617] usb 1-2: device not accepting address 6, error -71
[107138.455401] usb 1-2: new high-speed USB device number 7 using xhci_hcd
[107138.770323] usb 1-2: Device not responding to setup address.
[107138.975281] usb 1-2: Device not responding to setup address.
[107139.182434] usb 1-2: device not accepting address 7, error -71
[107139.182544] usb usb1-port2: attempt power cycle
[107139.561377] usb 1-2: new high-speed USB device number 8 using xhci_hcd
[107139.561661] usb 1-2: Device not responding to setup address.
[107139.766449] usb 1-2: Device not responding to setup address.
[107139.976368] usb 1-2: device not accepting address 8, error -71
[107140.089810] usb 1-2: new high-speed USB device number 9 using xhci_hcd
[107140.089999] usb 1-2: Device not responding to setup address.
[107140.294505] usb 1-2: Device not responding to setup address.
[107140.502389] usb 1-2: device not accepting address 9, error -71
[107140.502500] usb usb1-port2: unable to enumerate USB device
[107168.270406] usb 1-2: new high-speed USB device number 10 using xhci_hcd
[107168.585614] usb 1-2: Device not responding to setup address.
[107168.790485] usb 1-2: Device not responding to setup address.
[107168.998461] usb 1-2: device not accepting address 10, error -71
[107169.110669] usb 1-2: new high-speed USB device number 11 using xhci_hcd
[107169.223932] usb 1-2: Device not responding to setup address.
[107169.430582] usb 1-2: Device not responding to setup address.
[107169.638387] usb 1-2: device not accepting address 11, error -71
[107169.638491] usb usb1-port2: attempt power cycle
[107170.018382] usb 1-2: new high-speed USB device number 12 using xhci_hcd
[107170.018507] usb 1-2: Device not responding to setup address.
[107170.222536] usb 1-2: Device not responding to setup address.
[107170.430399] usb 1-2: device not accepting address 12, error -71
[107170.542415] usb 1-2: new high-speed USB device number 13 using xhci_hcd
[107170.542589] usb 1-2: Device not responding to setup address.
[107170.750861] usb 1-2: Device not responding to setup address.
[107170.958653] usb 1-2: device not accepting address 13, error -71
[107170.958843] usb usb1-port2: unable to enumerate USB device
[107277.374728] usb 3-1: new high-speed USB device number 4 using xhci_hcd
[107277.505445] usb 3-1: New USB device found, idVendor=2717, idProduct=ff48, bcdDevice= 6.01
[107277.505460] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[107277.505468] usb 3-1: Product: Xiaomi Pad 7
[107277.505474] usb 3-1: Manufacturer: Xiaomi
[107277.505479] usb 3-1: SerialNumber: 47f969dd
[107780.105051] usb 3-1: USB disconnect, device number 4
[108459.463872] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[108463.048486] PM: suspend entry (s2idle)
[108463.054591] Filesystems sync: 0.006 seconds
[108463.154906] Freezing user space processes
[108463.159778] Freezing user space processes completed (elapsed 0.004 seconds)
[108463.159786] OOM killer disabled.
[108463.159789] Freezing remaining freezable tasks
[108463.161441] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[108463.161450] printk: Suspending console(s) (use no_console_suspend to debug)
[108465.215972] ACPI: EC: interrupt blocked
[108465.312584] ACPI: EC: interrupt unblocked
[108465.655591] [drm] PCIE GART of 1024M enabled.
[108465.655599] [drm] PTB located at 0x000000F41FC00000
[108465.655631] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[108465.656712] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[108465.657538] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[108465.660948] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[108465.660953] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[108465.660956] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[108465.660959] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[108465.660962] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[108465.660964] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[108465.660967] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[108465.660970] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[108465.660972] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[108465.660975] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[108465.660978] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[108465.660981] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[108465.660984] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[108465.660986] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[108465.660989] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[108465.665327] nvme nvme0: 12/0/0 default/read/poll queues
[108467.681802] OOM killer enabled.
[108467.681810] Restarting tasks: Starting
[108467.695553] Restarting tasks: Done
[108467.695633] random: crng reseeded on system resumption
[108467.985908] PM: suspend exit
[108470.679929] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[108470.691205] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[108470.723743] wlp1s0: authenticated
[108470.724403] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[108470.768864] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[108470.775684] wlp1s0: associated
[108924.771304] audit: type=1400 audit(1791799205.289:377): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=604786 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[114137.471938] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[114141.042251] PM: suspend entry (s2idle)
[114141.058585] Filesystems sync: 0.016 seconds
[114141.159433] Freezing user space processes
[114141.163669] Freezing user space processes completed (elapsed 0.004 seconds)
[114141.163678] OOM killer disabled.
[114141.163681] Freezing remaining freezable tasks
[114141.165234] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[114141.165243] printk: Suspending console(s) (use no_console_suspend to debug)
[114143.213874] ACPI: EC: interrupt blocked
[114143.503512] ACPI: EC: interrupt unblocked
[114144.103523] [drm] PCIE GART of 1024M enabled.
[114144.103529] [drm] PTB located at 0x000000F41FC00000
[114144.103591] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[114144.104854] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[114144.105844] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[114144.109104] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[114144.109110] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[114144.109114] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[114144.109118] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[114144.109122] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[114144.109125] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[114144.109127] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[114144.109130] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[114144.109132] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[114144.109135] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[114144.109138] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[114144.109141] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[114144.109143] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[114144.109146] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[114144.109148] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[114144.112715] nvme nvme0: 12/0/0 default/read/poll queues
[114146.133798] OOM killer enabled.
[114146.133803] Restarting tasks: Starting
[114146.149661] Restarting tasks: Done
[114146.149765] random: crng reseeded on system resumption
[114146.416718] PM: suspend exit
[114149.046952] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[114149.057961] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[114149.142014] wlp1s0: authenticated
[114149.142392] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[114149.151139] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[114149.156495] wlp1s0: associated
[114171.123406] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[114174.034395] PM: suspend entry (s2idle)
[114174.049748] Filesystems sync: 0.015 seconds
[114174.148263] Freezing user space processes
[114174.151594] Freezing user space processes completed (elapsed 0.003 seconds)
[114174.151601] OOM killer disabled.
[114174.151604] Freezing remaining freezable tasks
[114174.152526] Freezing remaining freezable tasks completed (elapsed 0.000 seconds)
[114174.152530] printk: Suspending console(s) (use no_console_suspend to debug)
[114176.202676] ACPI: EC: interrupt blocked
[114176.373786] ACPI: EC: interrupt unblocked
[114176.740184] [drm] PCIE GART of 1024M enabled.
[114176.740190] [drm] PTB located at 0x000000F41FC00000
[114176.740212] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[114176.741198] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[114176.742228] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[114176.745335] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[114176.745340] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[114176.745342] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[114176.745345] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[114176.745347] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[114176.745352] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[114176.745360] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[114176.745362] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[114176.745364] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[114176.745367] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[114176.745369] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[114176.745372] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[114176.745374] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[114176.745376] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[114176.745378] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[114176.749623] nvme nvme0: 12/0/0 default/read/poll queues
[114178.765731] OOM killer enabled.
[114178.765736] Restarting tasks: Starting
[114178.770918] Restarting tasks: Done
[114178.771013] random: crng reseeded on system resumption
[114178.993907] audit: type=1400 audit(1791815670.660:378): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=629876 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[114179.041610] PM: suspend exit
[114181.650440] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[114181.661696] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[114181.700580] wlp1s0: authenticated
[114181.701440] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[114181.734038] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[114181.743109] wlp1s0: associated
[114192.929708] usb 1-1: new full-speed USB device number 14 using xhci_hcd
[114193.161502] usb 1-1: new high-speed USB device number 15 using xhci_hcd
[114193.288009] usb 1-1: New USB device found, idVendor=10d6, idProduct=1101, bcdDevice= 1.00
[114193.288022] usb 1-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[114193.288027] usb 1-1: Product: HS USB FlashDisk
[114193.288031] usb 1-1: Manufacturer: NEWSMY
[114193.288035] usb 1-1: SerialNumber: WG4512482ADF0FEEEE
[114193.355063] usb-storage 1-1:1.0: USB Mass Storage device detected
[114193.355663] scsi host0: usb-storage 1-1:1.0
[114193.356085] usbcore: registered new interface driver usb-storage
[114194.368246] scsi 0:0:0:0: Direct-Access     NEWSMY   USB DISK FOB     2.00 PQ: 0 ANSI: 0 CCS
[114194.368980] sd 0:0:0:0: Attached scsi generic sg0 type 0
[114194.369813] sd 0:0:0:0: [sda] 32620544 1024-byte logical blocks: (33.4 GB/31.1 GiB)
[114194.369952] sd 0:0:0:0: [sda] Write Protect is off
[114194.369960] sd 0:0:0:0: [sda] Mode Sense: 00 c0 00 00
[114194.370067] sd 0:0:0:0: [sda] Write cache: disabled, read cache: disabled, doesn't support DPO or FUA
[114194.397592]  sda:
[114194.397678] sd 0:0:0:0: [sda] Attached SCSI removable disk
[114284.927432] usb 1-1: USB disconnect, device number 15
[114284.928858] device offline error, dev sda, sector 17664 op 0x1:(WRITE) flags 0x0 phys_seg 1 prio class 2
[114284.928879] Buffer I/O error on dev sda, logical block 8832, lost async page write
[114284.995824] FAT-fs (sda): unable to read boot sector to mark fs as dirty
[119308.017235] audit: type=1400 audit(1791820800.636:379): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=650509 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[119308.039638] audit: type=1400 audit(1791820800.659:380): apparmor="DENIED" operation="capable" class="cap" profile="/usr/sbin/cupsd" pid=650666 comm="cupsd" capability=12  capname="net_admin"
[127156.311475] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[127160.042347] PM: suspend entry (s2idle)
[127160.047508] Filesystems sync: 0.005 seconds
[127160.146236] Freezing user space processes
[127160.149599] Freezing user space processes completed (elapsed 0.003 seconds)
[127160.149606] OOM killer disabled.
[127160.149608] Freezing remaining freezable tasks
[127160.150586] Freezing remaining freezable tasks completed (elapsed 0.000 seconds)
[127160.150594] printk: Suspending console(s) (use no_console_suspend to debug)
[127162.196759] ACPI: EC: interrupt blocked
[127162.541417] ACPI: EC: interrupt unblocked
[127162.993022] [drm] PCIE GART of 1024M enabled.
[127162.993028] [drm] PTB located at 0x000000F41FC00000
[127162.993049] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[127162.994015] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[127162.994839] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[127162.998029] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[127162.998033] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[127162.998036] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[127162.998039] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[127162.998041] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[127162.998043] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[127162.998045] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[127162.998047] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[127162.998050] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[127162.998052] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[127162.998055] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[127162.998057] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[127162.998059] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[127162.998062] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[127162.998064] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[127163.001742] nvme nvme0: 12/0/0 default/read/poll queues
[127165.019955] OOM killer enabled.
[127165.019960] Restarting tasks: Starting
[127165.028646] Restarting tasks: Done
[127165.028699] random: crng reseeded on system resumption
[127165.322613] PM: suspend exit
[127165.450375] audit: type=1400 audit(1791855817.064:381): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=691301 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[127167.550387] ucsi_acpi USBC000:00: ucsi_handle_connector_change: GET_CONNECTOR_STATUS failed (-110)
[127206.610680] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[127206.764361] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[127206.767457] wlp1s0: authenticated
[127206.768375] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[127206.774681] wlp1s0: RX AssocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=11)
[127206.788063] wlp1s0: associated
[127341.377713] usb 1-1: new high-speed USB device number 16 using xhci_hcd
[127341.506149] usb 1-1: New USB device found, idVendor=10d6, idProduct=1101, bcdDevice= 1.00
[127341.506167] usb 1-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[127341.506175] usb 1-1: Product: HS USB FlashDisk
[127341.506181] usb 1-1: Manufacturer: NEWSMY
[127341.506188] usb 1-1: SerialNumber: WG4512482ADF0FEEEE
[127341.508506] usb-storage 1-1:1.0: USB Mass Storage device detected
[127341.509009] scsi host0: usb-storage 1-1:1.0
[127342.528204] scsi 0:0:0:0: Direct-Access     NEWSMY   USB DISK FOB     2.00 PQ: 0 ANSI: 0 CCS
[127342.528793] sd 0:0:0:0: Attached scsi generic sg0 type 0
[127342.529560] sd 0:0:0:0: [sda] 32620544 1024-byte logical blocks: (33.4 GB/31.1 GiB)
[127342.529702] sd 0:0:0:0: [sda] Write Protect is off
[127342.529710] sd 0:0:0:0: [sda] Mode Sense: 00 c0 00 00
[127342.530005] sd 0:0:0:0: [sda] Write cache: disabled, read cache: disabled, doesn't support DPO or FUA
[127342.551578]  sda:
[127342.551794] sd 0:0:0:0: [sda] Attached SCSI removable disk
[127342.896196] FAT-fs (sda): Volume was not properly unmounted. Some data may be corrupt. Please run fsck.
[129864.108175] usb 1-1: USB disconnect, device number 16
[135349.476769] audit: type=1400 audit(1791864001.090:382): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=734338 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[137779.832324] wlp1s0: Connection to AP e2:9c:fd:da:08:bc lost
[137826.559057] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[137826.699740] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[137826.706017] wlp1s0: authenticated
[137826.708429] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[137826.716808] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[137826.730611] wlp1s0: associated
[141314.792465] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[141319.051862] PM: suspend entry (s2idle)
[141319.063845] Filesystems sync: 0.011 seconds
[141319.163520] Freezing user space processes
[141319.168267] Freezing user space processes completed (elapsed 0.004 seconds)
[141319.168276] OOM killer disabled.
[141319.168279] Freezing remaining freezable tasks
[141319.169648] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[141319.169657] printk: Suspending console(s) (use no_console_suspend to debug)
[141321.228096] ACPI: EC: interrupt blocked
[141321.339828] ACPI: EC: interrupt unblocked
[141321.676653] [drm] PCIE GART of 1024M enabled.
[141321.676661] [drm] PTB located at 0x000000F41FC00000
[141321.676738] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[141321.677740] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[141321.678589] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[141321.684219] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[141321.684225] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[141321.684228] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[141321.684231] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[141321.684234] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[141321.684236] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[141321.684239] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[141321.684242] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[141321.684244] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[141321.684247] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[141321.684250] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[141321.684253] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[141321.684256] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[141321.684258] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[141321.684261] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[141321.685759] nvme nvme0: 12/0/0 default/read/poll queues
[141323.704392] OOM killer enabled.
[141323.704397] Restarting tasks: Starting
[141323.718642] Restarting tasks: Done
[141323.718721] random: crng reseeded on system resumption
[141323.987816] PM: suspend exit
[141324.382831] audit: type=1400 audit(1791875835.076:383): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=759622 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[141326.398430] ucsi_acpi USBC000:00: ucsi_handle_connector_change: GET_CONNECTOR_STATUS failed (-110)
[141326.804230] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[141326.815689] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[141326.819601] wlp1s0: authenticated
[141326.820421] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[141326.835745] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[141326.844752] wlp1s0: associated
[144574.669915] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[144578.048649] PM: suspend entry (s2idle)
[144578.065320] Filesystems sync: 0.016 seconds
[144578.164981] Freezing user space processes
[144578.169733] Freezing user space processes completed (elapsed 0.004 seconds)
[144578.169743] OOM killer disabled.
[144578.169747] Freezing remaining freezable tasks
[144578.171561] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[144578.171577] printk: Suspending console(s) (use no_console_suspend to debug)
[144580.220314] ACPI: EC: interrupt blocked
[144580.540009] ACPI: EC: interrupt unblocked
[144581.073510] [drm] PCIE GART of 1024M enabled.
[144581.073516] [drm] PTB located at 0x000000F41FC00000
[144581.073542] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[144581.075112] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[144581.076112] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[144581.079286] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[144581.079292] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[144581.079296] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[144581.079300] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[144581.079304] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[144581.079308] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[144581.079311] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[144581.079314] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[144581.079317] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[144581.079320] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[144581.079322] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[144581.079325] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[144581.079328] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[144581.079330] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[144581.079333] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[144581.082695] nvme nvme0: 12/0/0 default/read/poll queues
[144583.108749] OOM killer enabled.
[144583.108756] Restarting tasks: Starting
[144583.125169] Restarting tasks: Done
[144583.125230] random: crng reseeded on system resumption
[144583.399737] PM: suspend exit
[144585.998152] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[144586.009428] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[144586.013293] wlp1s0: authenticated
[144586.014392] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[144586.022500] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[144586.027944] wlp1s0: associated
[144608.114758] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[144611.030716] PM: suspend entry (s2idle)
[144611.037898] Filesystems sync: 0.007 seconds
[144611.136402] Freezing user space processes
[144611.139625] Freezing user space processes completed (elapsed 0.003 seconds)
[144611.139631] OOM killer disabled.
[144611.139634] Freezing remaining freezable tasks
[144611.140536] Freezing remaining freezable tasks completed (elapsed 0.000 seconds)
[144611.140541] printk: Suspending console(s) (use no_console_suspend to debug)
[144613.188003] ACPI: EC: interrupt blocked
[144613.334789] ACPI: EC: interrupt unblocked
[144613.691273] [drm] PCIE GART of 1024M enabled.
[144613.691278] [drm] PTB located at 0x000000F41FC00000
[144613.691301] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[144613.692189] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[144613.693179] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[144613.696462] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[144613.696467] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[144613.696470] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[144613.696472] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[144613.696474] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[144613.696476] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[144613.696479] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[144613.696481] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[144613.696483] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[144613.696486] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[144613.696488] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[144613.696491] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[144613.696493] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[144613.696495] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[144613.696497] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[144613.701047] nvme nvme0: 12/0/0 default/read/poll queues
[144615.717832] OOM killer enabled.
[144615.717838] Restarting tasks: Starting
[144615.729307] Restarting tasks: Done
[144615.729391] random: crng reseeded on system resumption
[144615.928910] audit: type=1400 audit(1791888589.637:384): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=775430 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[144616.026397] PM: suspend exit
[144618.648459] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[144619.178402] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[144619.181269] wlp1s0: authenticated
[144619.182409] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[144619.187907] wlp1s0: RX AssocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=7)
[144619.200558] wlp1s0: associated
[152016.150687] usb 1-1: new high-speed USB device number 18 using xhci_hcd
[152016.278105] usb 1-1: New USB device found, idVendor=10d6, idProduct=1101, bcdDevice= 1.00
[152016.278120] usb 1-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[152016.278125] usb 1-1: Product: HS USB FlashDisk
[152016.278130] usb 1-1: Manufacturer: NEWSMY
[152016.278134] usb 1-1: SerialNumber: WG4512482ADF0FEEEE
[152016.280030] usb-storage 1-1:1.0: USB Mass Storage device detected
[152016.280728] scsi host0: usb-storage 1-1:1.0
[152017.343953] scsi 0:0:0:0: Direct-Access     NEWSMY   USB DISK FOB     2.00 PQ: 0 ANSI: 0 CCS
[152017.344823] sd 0:0:0:0: Attached scsi generic sg0 type 0
[152017.345572] sd 0:0:0:0: [sda] 32620544 1024-byte logical blocks: (33.4 GB/31.1 GiB)
[152017.345733] sd 0:0:0:0: [sda] Write Protect is off
[152017.345747] sd 0:0:0:0: [sda] Mode Sense: 00 c0 00 00
[152017.345959] sd 0:0:0:0: [sda] Write cache: disabled, read cache: disabled, doesn't support DPO or FUA
[152017.378409]  sda:
[152017.378496] sd 0:0:0:0: [sda] Attached SCSI removable disk
[152017.685901] FAT-fs (sda): Volume was not properly unmounted. Some data may be corrupt. Please run fsck.
[152055.935845] input: WH-CH720N (AVRCP) as /devices/virtual/input/input14
[152084.137817] usb 1-1: USB disconnect, device number 18
[152084.139241] device offline error, dev sda, sector 2 op 0x1:(WRITE) flags 0x0 phys_seg 1 prio class 2
[152084.139253] Buffer I/O error on dev sda, logical block 1, lost async page write
[152084.139277] device offline error, dev sda, sector 17666 op 0x1:(WRITE) flags 0x0 phys_seg 1 prio class 2
[152084.139284] Buffer I/O error on dev sda, logical block 8833, lost async page write
[152427.418045] audit: type=1400 audit(1791896401.126:385): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=807367 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[163226.514470] audit: type=1400 audit(1791907200.222:386): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=849830 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[163226.566581] audit: type=1400 audit(1791907200.274:387): apparmor="DENIED" operation="capable" class="cap" profile="/usr/sbin/cupsd" pid=850061 comm="cupsd" capability=12  capname="net_admin"
[167822.081612] wlp1s0: deauthenticating from e2:9c:fd:da:08:bc by local choice (Reason: 3=DEAUTH_LEAVING)
[167822.290327] PM: suspend entry (s2idle)
[167822.299524] Filesystems sync: 0.009 seconds
[167822.397694] Freezing user space processes
[167822.401590] Freezing user space processes completed (elapsed 0.003 seconds)
[167822.401596] OOM killer disabled.
[167822.401599] Freezing remaining freezable tasks
[167822.402525] Freezing remaining freezable tasks completed (elapsed 0.000 seconds)
[167822.402529] printk: Suspending console(s) (use no_console_suspend to debug)
[167824.458865] ACPI: EC: interrupt blocked
[167824.702783] ACPI: EC: interrupt unblocked
[167825.059968] [drm] PCIE GART of 1024M enabled.
[167825.059974] [drm] PTB located at 0x000000F41FC00000
[167825.060006] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[167825.061020] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[167825.061869] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[167825.065636] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[167825.065642] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[167825.065645] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[167825.065647] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[167825.065650] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[167825.065652] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[167825.065655] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[167825.065657] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[167825.065660] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[167825.065662] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[167825.065665] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[167825.065667] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[167825.065669] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[167825.065672] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[167825.065674] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[167825.068791] nvme nvme0: 12/0/0 default/read/poll queues
[167827.082730] OOM killer enabled.
[167827.082735] Restarting tasks: Starting
[167827.092040] Restarting tasks: Done
[167827.092124] random: crng reseeded on system resumption
[167827.363030] PM: suspend exit
[167827.369879] audit: type=1400 audit(1791943084.705:388): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=877249 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[167830.037735] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[167830.078474] ucsi_acpi USBC000:00: ucsi_handle_connector_change: GET_CONNECTOR_STATUS failed (-110)
[167830.180610] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[167830.203231] wlp1s0: authenticated
[167830.204400] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[167830.211922] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[167830.226075] wlp1s0: associated
[172478.896828] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[172483.080208] PM: suspend entry (s2idle)
[172483.098953] Filesystems sync: 0.018 seconds
[172483.199422] Freezing user space processes
[172483.203730] Freezing user space processes completed (elapsed 0.004 seconds)
[172483.203738] OOM killer disabled.
[172483.203741] Freezing remaining freezable tasks
[172483.205301] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[172483.205310] printk: Suspending console(s) (use no_console_suspend to debug)
[172485.253851] ACPI: EC: interrupt blocked
[172485.550858] ACPI: EC: interrupt unblocked
[172485.613362] workqueue: acpi_ec_event_processor hogged CPU for >10000us 35 times, consider switching to WQ_UNBOUND
[172486.055839] [drm] PCIE GART of 1024M enabled.
[172486.055845] [drm] PTB located at 0x000000F41FC00000
[172486.055870] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[172486.056884] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[172486.057878] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[172486.061111] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[172486.061117] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[172486.061120] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[172486.061122] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[172486.061125] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[172486.061127] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[172486.061130] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[172486.061133] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[172486.061135] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[172486.061138] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[172486.061141] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[172486.061144] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[172486.061146] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[172486.061149] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[172486.061151] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[172486.065821] nvme nvme0: 12/0/0 default/read/poll queues
[172486.429986] typec port0-partner: PM: parent port0 should not be sleeping
[172488.081956] OOM killer enabled.
[172488.081963] Restarting tasks: Starting
[172488.093640] Restarting tasks: Done
[172488.093729] random: crng reseeded on system resumption
[172488.437756] PM: suspend exit
[172491.050019] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[172491.190648] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[172491.212087] wlp1s0: authenticated
[172491.212385] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[172491.222142] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[172491.227828] wlp1s0: associated
[172513.106623] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[172516.031967] PM: suspend entry (s2idle)
[172516.051556] Filesystems sync: 0.019 seconds
[172516.150285] Freezing user space processes
[172516.154120] Freezing user space processes completed (elapsed 0.003 seconds)
[172516.154127] OOM killer disabled.
[172516.154130] Freezing remaining freezable tasks
[172516.155530] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[172516.155535] printk: Suspending console(s) (use no_console_suspend to debug)
[172518.199147] ACPI: EC: interrupt blocked
[172518.573566] ACPI: EC: interrupt unblocked
[172518.931796] [drm] PCIE GART of 1024M enabled.
[172518.931803] [drm] PTB located at 0x000000F41FC00000
[172518.931832] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[172518.932859] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[172518.933729] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[172518.937132] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[172518.937137] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[172518.937141] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[172518.937143] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[172518.937146] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[172518.937148] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[172518.937150] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[172518.937152] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[172518.937155] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[172518.937157] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[172518.937160] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[172518.937162] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[172518.937165] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[172518.937167] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[172518.937169] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[172518.940550] nvme nvme0: 12/0/0 default/read/poll queues
[172519.066873] usb 3-3: reset high-speed USB device number 2 using xhci_hcd
[172519.303749] usb 3-4: reset high-speed USB device number 3 using xhci_hcd
[172520.958510] OOM killer enabled.
[172520.958514] Restarting tasks: Starting
[172520.972116] Restarting tasks: Done
[172520.972213] random: crng reseeded on system resumption
[172520.981441] Bluetooth: hci0: HW/SW Version: 0x008a008a, Build Time: 20240219111427
[172521.117417] Bluetooth: hci0: Device setup in 143281 usecs
[172521.117427] Bluetooth: hci0: HCI Enhanced Setup Synchronous Connection command is advertised, but not supported.
[172521.205402] Bluetooth: hci0: AOSP extensions version v1.00
[172521.205432] Bluetooth: hci0: AOSP quality report is supported
[172521.206196] Bluetooth: MGMT ver 1.23
[172521.344424] PM: suspend exit
[172521.774343] audit: type=1400 audit(1791954042.240:389): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=899361 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[172523.583406] ucsi_acpi USBC000:00: ucsi_handle_connector_change: GET_CONNECTOR_STATUS failed (-110)
[172524.178511] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[172524.189818] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[172524.195206] wlp1s0: authenticated
[172524.197418] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[172524.282714] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[172524.291653] wlp1s0: associated
[177631.778448] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[177635.053143] PM: suspend entry (s2idle)
[177635.063548] Filesystems sync: 0.010 seconds
[177635.164268] Freezing user space processes
[177635.168708] Freezing user space processes completed (elapsed 0.004 seconds)
[177635.168717] OOM killer disabled.
[177635.168720] Freezing remaining freezable tasks
[177635.170293] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[177635.170304] printk: Suspending console(s) (use no_console_suspend to debug)
[177637.217263] ACPI: EC: interrupt blocked
[177637.513506] ACPI: EC: interrupt unblocked
[177637.923431] [drm] PCIE GART of 1024M enabled.
[177637.923438] [drm] PTB located at 0x000000F41FC00000
[177637.923464] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[177637.924303] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[177637.925328] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[177637.928427] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[177637.928432] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[177637.928435] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[177637.928438] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[177637.928440] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[177637.928443] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[177637.928446] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[177637.928448] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[177637.928451] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[177637.928454] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[177637.928456] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[177637.928459] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[177637.928462] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[177637.928464] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[177637.928467] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[177637.932770] nvme nvme0: 12/0/0 default/read/poll queues
[177638.038837] typec port0-partner: PM: parent port0 should not be sleeping
[177639.959542] OOM killer enabled.
[177639.959550] Restarting tasks: Starting
[177639.966043] Restarting tasks: Done
[177639.966106] random: crng reseeded on system resumption
[177640.262434] PM: suspend exit
[177642.863058] wlp1s0: authenticate with e2:9c:fd:da:08:b8 (local address=10:6f:d9:9d:4f:91)
[177642.874613] wlp1s0: send auth to e2:9c:fd:da:08:b8 (try 1/3)
[177642.878557] wlp1s0: authenticated
[177642.880390] wlp1s0: associate with e2:9c:fd:da:08:b8 (try 1/3)
[177642.891523] wlp1s0: RX AssocResp from e2:9c:fd:da:08:b8 (capab=0x1431 status=0 aid=8)
[177642.897810] wlp1s0: associated
[177665.102602] wlp1s0: deauthenticating from e2:9c:fd:da:08:b8 by local choice (Reason: 3=DEAUTH_LEAVING)
[177668.024246] PM: suspend entry (s2idle)
[177668.042208] Filesystems sync: 0.017 seconds
[177668.139399] Freezing user space processes
[177668.142607] Freezing user space processes completed (elapsed 0.003 seconds)
[177668.142613] OOM killer disabled.
[177668.142616] Freezing remaining freezable tasks
[177668.143554] Freezing remaining freezable tasks completed (elapsed 0.000 seconds)
[177668.143560] printk: Suspending console(s) (use no_console_suspend to debug)
[177670.188769] ACPI: EC: interrupt blocked
[177670.320769] ACPI: EC: interrupt unblocked
[177670.371809] [drm] PCIE GART of 1024M enabled.
[177670.371813] [drm] PTB located at 0x000000F41FC00000
[177670.371833] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[177670.372747] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[177670.373528] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[177670.376761] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[177670.376765] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[177670.376768] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[177670.376770] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[177670.376771] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[177670.376773] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[177670.376775] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[177670.376777] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[177670.376779] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[177670.376781] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[177670.376783] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[177670.376785] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[177670.376787] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[177670.376789] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[177670.376790] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[177670.380224] nvme nvme0: 12/0/0 default/read/poll queues
[177672.690726] OOM killer enabled.
[177672.690731] Restarting tasks: Starting
[177672.696492] Restarting tasks: Done
[177672.696559] random: crng reseeded on system resumption
[177672.971244] PM: suspend exit
[177675.584825] wlp1s0: authenticate with e2:9c:fd:da:08:b8 (local address=10:6f:d9:9d:4f:91)
[177675.596084] wlp1s0: send auth to e2:9c:fd:da:08:b8 (try 1/3)
[177675.601097] wlp1s0: authenticated
[177675.601371] wlp1s0: associate with e2:9c:fd:da:08:b8 (try 1/3)
[177675.609884] wlp1s0: RX AssocResp from e2:9c:fd:da:08:b8 (capab=0x1431 status=0 aid=8)
[177675.615661] wlp1s0: associated
[177912.728614] wlp1s0: disconnect from AP e2:9c:fd:da:08:b8 for new auth to e2:9c:fd:da:08:bc
[177912.789630] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[177912.951955] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[177912.956330] wlp1s0: authenticated
[177912.957375] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[177912.975009] wlp1s0: RX ReassocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=7)
[177912.989458] wlp1s0: associated
[178717.705715] audit: type=1400 audit(1791961200.432:390): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=926270 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[189381.358433] wlp1s0: deauthenticating from e2:9c:fd:da:08:bc by local choice (Reason: 3=DEAUTH_LEAVING)
[189381.746645] PM: suspend entry (s2idle)
[189381.765026] Filesystems sync: 0.018 seconds
[189381.863903] Freezing user space processes
[189381.867601] Freezing user space processes completed (elapsed 0.003 seconds)
[189381.867608] OOM killer disabled.
[189381.867610] Freezing remaining freezable tasks
[189381.868557] Freezing remaining freezable tasks completed (elapsed 0.000 seconds)
[189381.868564] printk: Suspending console(s) (use no_console_suspend to debug)
[189383.942264] ACPI: EC: interrupt blocked
[189384.052789] ACPI: EC: interrupt unblocked
[189384.397933] [drm] PCIE GART of 1024M enabled.
[189384.397939] [drm] PTB located at 0x000000F41FC00000
[189384.397969] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[189384.398019] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[189384.399018] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[189384.402541] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[189384.402547] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[189384.402550] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[189384.402554] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[189384.402558] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[189384.402561] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[189384.402564] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[189384.402566] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[189384.402568] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[189384.402571] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[189384.402574] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[189384.402576] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[189384.402578] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[189384.402581] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[189384.402584] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[189384.403232] nvme nvme0: 12/0/0 default/read/poll queues
[189386.416671] OOM killer enabled.
[189386.416676] Restarting tasks: Starting
[189386.443380] Restarting tasks: Done
[189386.443454] random: crng reseeded on system resumption
[189386.721001] audit: type=1400 audit(1791972333.705:391): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=968004 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[189386.732070] PM: suspend exit
[189389.603228] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[189389.753336] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[189389.809435] wlp1s0: authenticated
[189389.810388] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[189389.824691] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[189389.839225] wlp1s0: associated
[189416.062756] audit: type=1326 audit(1791972363.046:392): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=969144 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x75c9f1ee2fdb code=0x50000
[189416.062773] audit: type=1326 audit(1791972363.046:393): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=969145 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x774617e34fdb code=0x50000
[193917.357068] audit: type=1326 audit(1791976864.340:394): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=988871 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7d70f1413fdb code=0x50000
[193917.357322] audit: type=1326 audit(1791976864.340:395): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=988872 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7120a57e1fdb code=0x50000
[194187.713223] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[194192.073577] PM: suspend entry (s2idle)
[194192.108263] Filesystems sync: 0.034 seconds
[194192.208261] Freezing user space processes
[194192.212678] Freezing user space processes completed (elapsed 0.004 seconds)
[194192.212687] OOM killer disabled.
[194192.212691] Freezing remaining freezable tasks
[194192.214248] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[194192.214257] printk: Suspending console(s) (use no_console_suspend to debug)
[194194.262193] ACPI: EC: interrupt blocked
[194194.563993] ACPI: EC: interrupt unblocked
[194194.611429] [drm] PCIE GART of 1024M enabled.
[194194.611433] [drm] PTB located at 0x000000F41FC00000
[194194.611454] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[194194.613028] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[194194.614060] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[194194.617243] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[194194.617246] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[194194.617248] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[194194.617250] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[194194.617251] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[194194.617253] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[194194.617255] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[194194.617256] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[194194.617258] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[194194.617260] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[194194.617262] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[194194.617264] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[194194.617265] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[194194.617267] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[194194.617268] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[194194.620402] nvme nvme0: 12/0/0 default/read/poll queues
[194197.113638] OOM killer enabled.
[194197.113643] Restarting tasks: Starting
[194197.125149] Restarting tasks: Done
[194197.125203] random: crng reseeded on system resumption
[194197.324911] audit: type=1400 audit(1791982815.986:396): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=990499 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[194197.459982] PM: suspend exit
[194200.068325] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[194200.074571] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[194200.080323] wlp1s0: authenticated
[194200.081383] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[194200.087584] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[194200.100220] wlp1s0: associated
[194222.106881] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[194226.033891] PM: suspend entry (s2idle)
[194226.061162] Filesystems sync: 0.027 seconds
[194226.158952] Freezing user space processes
[194226.162343] Freezing user space processes completed (elapsed 0.003 seconds)
[194226.162350] OOM killer disabled.
[194226.162359] Freezing remaining freezable tasks
[194226.163528] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[194226.163533] printk: Suspending console(s) (use no_console_suspend to debug)
[194228.214947] ACPI: EC: interrupt blocked
[194228.366547] ACPI: EC: interrupt unblocked
[194228.736328] [drm] PCIE GART of 1024M enabled.
[194228.736334] [drm] PTB located at 0x000000F41FC00000
[194228.736367] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[194228.737290] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[194228.738296] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[194228.742044] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[194228.742049] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[194228.742052] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[194228.742054] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[194228.742057] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[194228.742059] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[194228.742061] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[194228.742063] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[194228.742066] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[194228.742068] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[194228.742071] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[194228.742073] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[194228.742075] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[194228.742078] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[194228.742080] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[194228.745774] nvme nvme0: 12/0/0 default/read/poll queues
[194230.740604] OOM killer enabled.
[194230.740609] Restarting tasks: Starting
[194230.759965] Restarting tasks: Done
[194230.760013] random: crng reseeded on system resumption
[194231.025396] PM: suspend exit
[194233.628543] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[194233.634780] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[194233.638003] wlp1s0: authenticated
[194233.638374] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[194233.644795] wlp1s0: RX AssocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=8)
[194233.651009] wlp1s0: associated
[195987.003739] wlp1s0: deauthenticating from e2:9c:fd:da:08:bc by local choice (Reason: 3=DEAUTH_LEAVING)
[195987.232908] PM: suspend entry (s2idle)
[195987.242827] Filesystems sync: 0.009 seconds
[195987.339917] Freezing user space processes
[195987.343387] Freezing user space processes completed (elapsed 0.003 seconds)
[195987.343393] OOM killer disabled.
[195987.343396] Freezing remaining freezable tasks
[195987.344526] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[195987.344532] printk: Suspending console(s) (use no_console_suspend to debug)
[195989.376745] ACPI: EC: interrupt blocked
[195989.473009] ACPI: EC: interrupt unblocked
[195989.837506] [drm] PCIE GART of 1024M enabled.
[195989.837512] [drm] PTB located at 0x000000F41FC00000
[195989.837534] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[195989.838436] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[195989.839220] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[195989.842490] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[195989.842495] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[195989.842498] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[195989.842500] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[195989.842503] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[195989.842505] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[195989.842507] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[195989.842509] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[195989.842512] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[195989.842514] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[195989.842517] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[195989.842519] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[195989.842521] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[195989.842524] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[195989.842526] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[195989.846533] nvme nvme0: 12/0/0 default/read/poll queues
[195991.860446] OOM killer enabled.
[195991.860451] Restarting tasks: Starting
[195991.881092] Restarting tasks: Done
[195991.881142] random: crng reseeded on system resumption
[195992.155588] PM: suspend exit
[195994.797589] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[195994.803866] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[195994.806239] wlp1s0: authenticated
[195994.808370] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[195994.813927] wlp1s0: RX AssocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=5)
[195994.820146] wlp1s0: associated
[196364.285281] audit: type=1400 audit(1791993602.840:397): apparmor="DENIED" operation="capable" class="cap" profile="/usr/sbin/cupsd" pid=1001097 comm="cupsd" capability=12  capname="net_admin"
[196364.405267] audit: type=1400 audit(1791993602.960:398): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1000969 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[199250.224255] audit: type=1326 audit(1791996488.779:400): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1016221 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x721e59e22fdb code=0x50000
[199250.224273] audit: type=1326 audit(1791996488.779:399): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1016220 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x78f0afb56fdb code=0x50000
[199284.823437] audit: type=1326 audit(1791996523.379:401): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1016665 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x742586350fdb code=0x50000
[199284.823448] audit: type=1326 audit(1791996523.379:402): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1016664 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x79da0ee3efdb code=0x50000
[199499.353745] audit: type=1326 audit(1791996737.909:403): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1018863 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x76a1f72f0fdb code=0x50000
[199499.355143] audit: type=1326 audit(1791996737.910:404): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1018864 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7268781dcfdb code=0x50000
[199608.941077] audit: type=1326 audit(1791996847.496:406): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1020130 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x735c05023fdb code=0x50000
[199608.941087] audit: type=1326 audit(1791996847.496:405): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1020131 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7c8fca3eefdb code=0x50000
[199743.510360] workqueue: mmput_async_fn hogged CPU for >10000us 7 times, consider switching to WQ_UNBOUND
[199743.679740] audit: type=1326 audit(1791996982.235:407): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1020999 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x789fdac37fdb code=0x50000
[199743.681328] audit: type=1326 audit(1791996982.236:408): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1021000 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x774cfd730fdb code=0x50000
[199832.704056] audit: type=1326 audit(1791997071.259:409): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1021606 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7ba4f46e7fdb code=0x50000
[199832.704068] audit: type=1326 audit(1791997071.259:410): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1021605 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7ef004859fdb code=0x50000
[200110.187772] audit: type=1326 audit(1791997348.742:411): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1023307 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7889c0d18fdb code=0x50000
[200110.188606] audit: type=1326 audit(1791997348.743:412): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1023308 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7f0fdf766fdb code=0x50000
[200186.514526] audit: type=1326 audit(1791997425.070:413): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1024019 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x741215304fdb code=0x50000
[200186.514535] audit: type=1326 audit(1791997425.070:414): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1024020 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7e60704fefdb code=0x50000
[200216.513326] audit: type=1326 audit(1791997455.068:416): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1024404 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x704dcb724fdb code=0x50000
[200216.513340] audit: type=1326 audit(1791997455.068:415): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1024405 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7dc5e09adfdb code=0x50000
[200257.464173] audit: type=1326 audit(1791997496.018:418): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1024818 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x726c16f40fdb code=0x50000
[200257.464184] audit: type=1326 audit(1791997496.018:417): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1024819 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x798a80807fdb code=0x50000
[200280.972952] audit: type=1326 audit(1791997519.527:419): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1025236 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7f31b0429fdb code=0x50000
[200280.974242] audit: type=1326 audit(1791997519.528:420): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1025237 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7cdeb32f8fdb code=0x50000
[200295.625976] audit: type=1326 audit(1791997534.181:421): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1025464 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7f068ad28fdb code=0x50000
[200295.626111] audit: type=1326 audit(1791997534.181:422): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1025465 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7446af63afdb code=0x50000
[200710.064075] wlp1s0: deauthenticating from e2:9c:fd:da:08:bc by local choice (Reason: 3=DEAUTH_LEAVING)
[200714.044269] PM: suspend entry (s2idle)
[200714.056309] Filesystems sync: 0.012 seconds
[200714.154939] Freezing user space processes
[200714.158604] Freezing user space processes completed (elapsed 0.003 seconds)
[200714.158611] OOM killer disabled.
[200714.158613] Freezing remaining freezable tasks
[200714.160041] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[200714.160046] printk: Suspending console(s) (use no_console_suspend to debug)
[200716.209128] ACPI: EC: interrupt blocked
[200716.630339] ACPI: EC: interrupt unblocked
[200717.302785] [drm] PCIE GART of 1024M enabled.
[200717.302791] [drm] PTB located at 0x000000F41FC00000
[200717.302813] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[200717.304320] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[200717.305327] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[200717.308451] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[200717.308458] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[200717.308462] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[200717.308465] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[200717.308468] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[200717.308470] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[200717.308472] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[200717.308475] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[200717.308478] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[200717.308480] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[200717.308483] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[200717.308485] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[200717.308487] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[200717.308489] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[200717.308492] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[200717.311946] nvme nvme0: 12/0/0 default/read/poll queues
[200719.327427] OOM killer enabled.
[200719.327432] Restarting tasks: Starting
[200719.339474] Restarting tasks: Done
[200719.339534] random: crng reseeded on system resumption
[200719.579015] audit: type=1400 audit(1792027670.153:423): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1027196 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[200719.615107] PM: suspend exit
[200721.470414] ucsi_acpi USBC000:00: ucsi_handle_connector_change: GET_CONNECTOR_STATUS failed (-110)
[200722.253715] wlp1s0: authenticate with e2:9c:fd:da:08:b8 (local address=10:6f:d9:9d:4f:91)
[200722.393215] wlp1s0: send auth to e2:9c:fd:da:08:b8 (try 1/3)
[200722.406243] wlp1s0: authenticated
[200722.407408] wlp1s0: associate with e2:9c:fd:da:08:b8 (try 1/3)
[200722.415365] wlp1s0: RX AssocResp from e2:9c:fd:da:08:b8 (capab=0x1431 status=0 aid=8)
[200722.428562] wlp1s0: associated
[200737.999598] wlp1s0: disconnect from AP e2:9c:fd:da:08:b8 for new auth to e2:9c:fd:da:08:bc
[200738.060003] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[200738.221076] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[200738.225829] wlp1s0: authenticated
[200738.226369] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[200738.245532] wlp1s0: RX ReassocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=8)
[200738.259728] wlp1s0: associated
[200744.091873] wlp1s0: deauthenticating from e2:9c:fd:da:08:bc by local choice (Reason: 3=DEAUTH_LEAVING)
[200748.025766] PM: suspend entry (s2idle)
[200748.072885] Filesystems sync: 0.047 seconds
[200748.169868] Freezing user space processes
[200748.172607] Freezing user space processes completed (elapsed 0.002 seconds)
[200748.172611] OOM killer disabled.
[200748.172612] Freezing remaining freezable tasks
[200748.173473] Freezing remaining freezable tasks completed (elapsed 0.000 seconds)
[200748.173476] printk: Suspending console(s) (use no_console_suspend to debug)
[200750.224008] ACPI: EC: interrupt blocked
[200750.345009] ACPI: EC: interrupt unblocked
[200750.714498] [drm] PCIE GART of 1024M enabled.
[200750.714504] [drm] PTB located at 0x000000F41FC00000
[200750.714526] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[200750.715472] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[200750.716254] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[200750.719443] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[200750.719447] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[200750.719449] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[200750.719452] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[200750.719454] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[200750.719456] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[200750.719458] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[200750.719461] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[200750.719463] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[200750.719465] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[200750.719468] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[200750.719470] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[200750.719473] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[200750.719475] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[200750.719477] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[200750.723747] nvme nvme0: 12/0/0 default/read/poll queues
[200752.742585] OOM killer enabled.
[200752.742590] Restarting tasks: Starting
[200752.751967] Restarting tasks: Done
[200752.752024] random: crng reseeded on system resumption
[200753.040063] PM: suspend exit
[200755.780503] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[200755.788864] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[200755.791401] wlp1s0: authenticated
[200755.792374] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[200755.797147] wlp1s0: RX AssocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=9)
[200755.803605] wlp1s0: associated
[207357.397219] audit: type=1400 audit(1792036804.091:424): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1060517 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[208986.950732] systemd-journald[192362]: Time jumped backwards, rotating.
[218155.895484] audit: type=1400 audit(1792047603.564:425): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1100715 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[220802.441308] wlp1s0: deauthenticating from e2:9c:fd:da:08:bc by local choice (Reason: 3=DEAUTH_LEAVING)
[220802.671528] PM: suspend entry (s2idle)
[220802.676102] Filesystems sync: 0.004 seconds
[220802.775570] Freezing user space processes
[220802.779322] Freezing user space processes completed (elapsed 0.003 seconds)
[220802.779329] OOM killer disabled.
[220802.779331] Freezing remaining freezable tasks
[220802.780530] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[220802.780535] printk: Suspending console(s) (use no_console_suspend to debug)
[220804.877644] ACPI: EC: interrupt blocked
[220805.026481] ACPI: EC: interrupt unblocked
[220805.069257] [drm] PCIE GART of 1024M enabled.
[220805.069265] [drm] PTB located at 0x000000F41FC00000
[220805.069295] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[220805.070004] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[220805.070881] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[220805.075195] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[220805.075199] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[220805.075204] nvme nvme0: 12/0/0 default/read/poll queues
[220805.075203] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[220805.075205] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[220805.075208] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[220805.075210] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[220805.075213] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[220805.075215] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[220805.075217] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[220805.075220] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[220805.075222] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[220805.075225] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[220805.075227] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[220805.075229] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[220805.075232] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[220807.372537] OOM killer enabled.
[220807.372542] Restarting tasks: Starting
[220807.382530] Restarting tasks: Done
[220807.382605] random: crng reseeded on system resumption
[220807.649448] audit: type=1400 audit(1792064887.658:426): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1110781 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[220807.688475] PM: suspend exit
[220810.303385] ucsi_acpi USBC000:00: ucsi_handle_connector_change: GET_CONNECTOR_STATUS failed (-110)
[220810.377724] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[220810.523713] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[220810.600349] wlp1s0: authenticated
[220810.601402] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[220810.611669] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[220810.624768] wlp1s0: associated
[222674.220592] audit: type=1326 audit(1792066754.764:427): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1122661 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7ae79d12bfdb code=0x50000
[222674.239715] audit: type=1326 audit(1792066754.783:428): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1122662 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7301dec64fdb code=0x50000
[222707.689274] audit: type=1326 audit(1792066788.232:429): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1123057 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x75f5c2178fdb code=0x50000
[222707.689303] audit: type=1326 audit(1792066788.232:430): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1123056 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7104e981efdb code=0x50000
[222818.183375] audit: type=1326 audit(1792066898.726:431): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1124464 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7aa358d6afdb code=0x50000
[222818.184512] audit: type=1326 audit(1792066898.728:432): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1124465 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x74db1b19dfdb code=0x50000
[224149.508672] audit: type=1326 audit(1792068230.052:433): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1133064 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x72155faf9fdb code=0x50000
[224149.516132] audit: type=1326 audit(1792068230.059:434): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1133065 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x77f08f265fdb code=0x50000
[224596.075771] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[224601.054614] PM: suspend entry (s2idle)
[224601.061290] Filesystems sync: 0.006 seconds
[224601.160132] Freezing user space processes
[224601.165639] Freezing user space processes completed (elapsed 0.005 seconds)
[224601.165696] OOM killer disabled.
[224601.165703] Freezing remaining freezable tasks
[224601.167413] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[224601.167422] printk: Suspending console(s) (use no_console_suspend to debug)
[224603.220969] ACPI: EC: interrupt blocked
[224603.561997] ACPI: EC: interrupt unblocked
[224604.017685] [drm] PCIE GART of 1024M enabled.
[224604.017693] [drm] PTB located at 0x000000F41FC00000
[224604.017723] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[224604.019168] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[224604.020179] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[224604.023253] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[224604.023258] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[224604.023261] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[224604.023264] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[224604.023266] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[224604.023269] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[224604.023272] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[224604.023274] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[224604.023277] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[224604.023280] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[224604.023283] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[224604.023285] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[224604.023288] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[224604.023290] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[224604.023293] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[224604.026832] nvme nvme0: 12/0/0 default/read/poll queues
[224606.048184] OOM killer enabled.
[224606.048190] Restarting tasks: Starting
[224606.055703] Restarting tasks: Done
[224606.055770] random: crng reseeded on system resumption
[224606.347613] PM: suspend exit
[224606.476045] audit: type=1400 audit(1792074010.180:435): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1134982 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[224608.983583] wlp1s0: authenticate with e2:9c:fd:da:08:b8 (local address=10:6f:d9:9d:4f:91)
[224609.124196] wlp1s0: send auth to e2:9c:fd:da:08:b8 (try 1/3)
[224609.174243] wlp1s0: authenticated
[224609.175385] wlp1s0: associate with e2:9c:fd:da:08:b8 (try 1/3)
[224609.218504] wlp1s0: RX AssocResp from e2:9c:fd:da:08:b8 (capab=0x1431 status=0 aid=5)
[224609.224773] wlp1s0: associated
[224631.110952] wlp1s0: deauthenticating from e2:9c:fd:da:08:b8 by local choice (Reason: 3=DEAUTH_LEAVING)
[224636.024662] PM: suspend entry (s2idle)
[224636.043746] Filesystems sync: 0.019 seconds
[224636.141408] Freezing user space processes
[224636.145470] Freezing user space processes completed (elapsed 0.004 seconds)
[224636.145476] OOM killer disabled.
[224636.145479] Freezing remaining freezable tasks
[224636.146545] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[224636.146550] printk: Suspending console(s) (use no_console_suspend to debug)
[224638.200302] ACPI: EC: interrupt blocked
[224638.334929] ACPI: EC: interrupt unblocked
[224638.684262] [drm] PCIE GART of 1024M enabled.
[224638.684267] [drm] PTB located at 0x000000F41FC00000
[224638.684290] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[224638.685283] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[224638.686306] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[224638.689841] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[224638.689845] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[224638.689848] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[224638.689850] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[224638.689852] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[224638.689854] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[224638.689857] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[224638.689859] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[224638.689861] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[224638.689864] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[224638.689866] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[224638.689869] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[224638.689871] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[224638.689873] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[224638.689875] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[224638.693979] nvme nvme0: 12/0/0 default/read/poll queues
[224640.709916] OOM killer enabled.
[224640.709922] Restarting tasks: Starting
[224640.721029] Restarting tasks: Done
[224640.721092] random: crng reseeded on system resumption
[224641.012423] PM: suspend exit
[224643.638219] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[224643.802340] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[224643.807158] wlp1s0: authenticated
[224643.808397] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[224643.813284] wlp1s0: RX AssocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=10)
[224643.826612] wlp1s0: associated
[227648.765436] audit: type=1400 audit(1792080004.462:436): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1147706 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[227648.784080] audit: type=1400 audit(1792080004.480:437): apparmor="DENIED" operation="capable" class="cap" profile="/usr/sbin/cupsd" pid=1147908 comm="cupsd" capability=12  capname="net_admin"
[231207.979245] renderer[1161132]: segfault at 0 ip 000072cb40844014 sp 000072cabe7dfd20 error 4 in libfreetype.so.6.20.1[24014,72cb4082d000+91000] likely on CPU 2 (core 1, socket 0)
[231207.979261] Code: 00 00 0f 85 9a 09 00 00 48 81 c4 a8 00 00 00 5b 41 5c 41 5d 41 5e 41 5f 5d c3 0f 1f 40 00 45 84 c0 75 b3 49 8b 82 28 01 00 00 <48> 8b 00 f3 0f 6f 70 28 48 8b 50 58 c7 40 18 00 00 00 00 c7 40 38
[231348.824918] audit: type=1326 audit(1792083704.521:439): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1164894 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7f9b44418fdb code=0x50000
[231348.824931] audit: type=1326 audit(1792083704.521:438): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1164895 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7c69a700afdb code=0x50000
[231920.472785] audit: type=1326 audit(1792084276.169:440): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1167310 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x70178981efdb code=0x50000
[231920.472997] audit: type=1326 audit(1792084276.169:441): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1167309 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x79962b6a6fdb code=0x50000
[232523.631983] wlp1s0: deauthenticating from e2:9c:fd:da:08:bc by local choice (Reason: 3=DEAUTH_LEAVING)
[232527.036796] PM: suspend entry (s2idle)
[232527.041306] Filesystems sync: 0.004 seconds
[232527.140326] Freezing user space processes
[232527.143589] Freezing user space processes completed (elapsed 0.003 seconds)
[232527.143595] OOM killer disabled.
[232527.143598] Freezing remaining freezable tasks
[232527.144529] Freezing remaining freezable tasks completed (elapsed 0.000 seconds)
[232527.144534] printk: Suspending console(s) (use no_console_suspend to debug)
[232529.190208] ACPI: EC: interrupt blocked
[232529.705263] ACPI: EC: interrupt unblocked
[232530.290708] [drm] PCIE GART of 1024M enabled.
[232530.290714] [drm] PTB located at 0x000000F41FC00000
[232530.290735] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[232530.292087] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[232530.293073] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[232530.296297] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[232530.296301] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[232530.296304] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[232530.296307] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[232530.296309] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[232530.296311] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[232530.296314] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[232530.296316] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[232530.296318] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[232530.296321] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[232530.296323] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[232530.296326] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[232530.296328] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[232530.296330] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[232530.296332] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[232530.299634] nvme nvme0: 12/0/0 default/read/poll queues
[232532.313662] OOM killer enabled.
[232532.313666] Restarting tasks: Starting
[232532.319111] Restarting tasks: Done
[232532.319171] random: crng reseeded on system resumption
[232532.615639] PM: suspend exit
[232532.700231] audit: type=1400 audit(1792114866.261:442): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1170129 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[232534.590398] ucsi_acpi USBC000:00: ucsi_handle_connector_change: GET_CONNECTOR_STATUS failed (-110)
[232535.403463] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[232535.559308] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[232535.562409] wlp1s0: authenticated
[232535.563366] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[232535.568514] wlp1s0: RX AssocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=3)
[232535.574756] wlp1s0: associated
[240869.730031] audit: type=1400 audit(1792123203.292:443): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1206365 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[250031.853358] workqueue: mmput_async_fn hogged CPU for >10000us 11 times, consider switching to WQ_UNBOUND
[250032.260174] audit: type=1326 audit(1792132365.821:445): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1243557 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x7331b4171fdb code=0x50000
[250032.260183] audit: type=1326 audit(1792132365.821:444): auid=1000 uid=1000 gid=1000 ses=1 subj=snap.chromium.chromium pid=1243558 comm="chrome" exe="/snap/chromium/2842/usr/lib/chromium-browser/chrome" sig=0 arch=c000003e syscall=330 compat=0 ip=0x729f1a70afdb code=0x50000
[251668.962057] audit: type=1400 audit(1792134002.523:446): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1251759 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[257712.239776] wlp1s0: AP e2:9c:fd:da:08:bc changed bandwidth in beacon, new used config is 5805.000 MHz, width 3 (5775.000/0 MHz)
[262301.221987] wlp1s0: deauthenticating from e2:9c:fd:da:08:bc by local choice (Reason: 3=DEAUTH_LEAVING)
[262306.039246] PM: suspend entry (s2idle)
[262306.049215] Filesystems sync: 0.009 seconds
[262306.150613] Freezing user space processes
[262306.154629] Freezing user space processes completed (elapsed 0.004 seconds)
[262306.154637] OOM killer disabled.
[262306.154639] Freezing remaining freezable tasks
[262306.156134] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[262306.156142] printk: Suspending console(s) (use no_console_suspend to debug)
[262308.215797] ACPI: EC: interrupt blocked
[262308.321506] ACPI: EC: interrupt unblocked
[262308.657461] [drm] PCIE GART of 1024M enabled.
[262308.657468] [drm] PTB located at 0x000000F41FC00000
[262308.657499] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[262308.658834] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[262308.659632] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[262308.663052] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[262308.663057] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[262308.663060] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[262308.663063] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[262308.663065] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[262308.663068] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[262308.663070] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[262308.663072] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[262308.663075] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[262308.663077] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[262308.663080] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[262308.663083] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[262308.663085] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[262308.663087] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[262308.663089] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[262308.667078] nvme nvme0: 12/0/0 default/read/poll queues
[262308.792770] usb 3-4: reset high-speed USB device number 3 using xhci_hcd
[262309.029846] usb 3-3: reset high-speed USB device number 2 using xhci_hcd
[262310.687068] OOM killer enabled.
[262310.687073] Restarting tasks: Starting
[262310.696481] Restarting tasks: Done
[262310.696582] random: crng reseeded on system resumption
[262310.699058] Bluetooth: hci0: HW/SW Version: 0x008a008a, Build Time: 20240219111427
[262310.834813] Bluetooth: hci0: Device setup in 134957 usecs
[262310.834824] Bluetooth: hci0: HCI Enhanced Setup Synchronous Connection command is advertised, but not supported.
[262310.919633] Bluetooth: hci0: AOSP extensions version v1.00
[262310.919649] Bluetooth: hci0: AOSP quality report is supported
[262310.920047] Bluetooth: MGMT ver 1.23
[262311.062301] PM: suspend exit
[262311.407091] audit: type=1400 audit(1792145743.123:447): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1327314 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[262352.791722] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[262352.949681] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[262352.953804] wlp1s0: authenticated
[262352.954433] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[262352.962560] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[262352.975548] wlp1s0: associated
[268891.042314] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[268896.046755] PM: suspend entry (s2idle)
[268896.051939] Filesystems sync: 0.005 seconds
[268896.153022] Freezing user space processes
[268896.158513] Freezing user space processes completed (elapsed 0.005 seconds)
[268896.158523] OOM killer disabled.
[268896.158526] Freezing remaining freezable tasks
[268896.160213] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[268896.160222] printk: Suspending console(s) (use no_console_suspend to debug)
[268898.208981] ACPI: EC: interrupt blocked
[268898.503789] ACPI: EC: interrupt unblocked
[268899.289334] [drm] PCIE GART of 1024M enabled.
[268899.289340] [drm] PTB located at 0x000000F41FC00000
[268899.289378] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[268899.290205] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[268899.290981] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[268899.294198] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[268899.294203] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[268899.294207] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[268899.294210] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[268899.294212] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[268899.294215] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[268899.294218] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[268899.294220] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[268899.294223] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[268899.294226] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[268899.294229] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[268899.294231] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[268899.294234] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[268899.294237] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[268899.294239] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[268899.298936] nvme nvme0: 12/0/0 default/read/poll queues
[268901.318316] OOM killer enabled.
[268901.318323] Restarting tasks: Starting
[268901.328498] Restarting tasks: Done
[268901.328559] random: crng reseeded on system resumption
[268901.618068] PM: suspend exit
[268904.268021] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[268904.279267] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[268904.291136] wlp1s0: authenticated
[268904.292382] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[268904.299698] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[268904.305078] wlp1s0: associated
[269757.465587] audit: type=1400 audit(1792155601.175:448): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1362534 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[278041.669395] wlp1s0: Connection to AP 4a:63:58:10:0d:41 lost
[278044.554640] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[278044.561719] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[278044.630456] wlp1s0: authenticated
[278044.632382] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[278044.730734] wlp1s0: associate with 4a:63:58:10:0d:41 (try 2/3)
[278044.796570] wlp1s0: associate with 4a:63:58:10:0d:41 (try 3/3)
[278044.863587] wlp1s0: association with 4a:63:58:10:0d:41 timed out
[278059.532627] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[278059.542580] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[278059.545104] wlp1s0: authenticated
[278059.545377] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[278059.551799] wlp1s0: RX AssocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=8)
[278059.564709] wlp1s0: associated
[278799.714381] wlp1s0: deauthenticating from e2:9c:fd:da:08:bc by local choice (Reason: 3=DEAUTH_LEAVING)
[278804.044398] PM: suspend entry (s2idle)
[278804.051321] Filesystems sync: 0.006 seconds
[278804.151162] Freezing user space processes
[278804.155673] Freezing user space processes completed (elapsed 0.004 seconds)
[278804.155680] OOM killer disabled.
[278804.155682] Freezing remaining freezable tasks
[278804.157171] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[278804.157178] printk: Suspending console(s) (use no_console_suspend to debug)
[278806.204145] ACPI: EC: interrupt blocked
[278806.308813] ACPI: EC: interrupt unblocked
[278806.655734] [drm] PCIE GART of 1024M enabled.
[278806.655742] [drm] PTB located at 0x000000F41FC00000
[278806.655774] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[278806.657168] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[278806.657954] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[278806.661544] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[278806.661549] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[278806.661553] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[278806.661556] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[278806.661559] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[278806.661561] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[278806.661564] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[278806.661567] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[278806.661571] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[278806.661576] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[278806.661581] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[278806.661585] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[278806.661587] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[278806.661590] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[278806.661593] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[278806.664697] nvme nvme0: 12/0/0 default/read/poll queues
[278808.678648] OOM killer enabled.
[278808.678652] Restarting tasks: Starting
[278808.705251] Restarting tasks: Done
[278808.705330] random: crng reseeded on system resumption
[278808.978596] PM: suspend exit
[278811.710437] ucsi_acpi USBC000:00: ucsi_handle_connector_change: GET_CONNECTOR_STATUS failed (-110)
[278811.859600] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[278811.870998] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[278811.882184] wlp1s0: authenticated
[278811.883401] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[278811.916961] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[278811.929521] wlp1s0: associated
[280048.241125] audit: type=1400 audit(1792166402.968:449): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1422705 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[280740.485432] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[280744.051301] PM: suspend entry (s2idle)
[280744.057414] Filesystems sync: 0.006 seconds
[280744.157153] Freezing user space processes
[280744.162503] Freezing user space processes completed (elapsed 0.005 seconds)
[280744.162512] OOM killer disabled.
[280744.162515] Freezing remaining freezable tasks
[280744.164157] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[280744.164165] printk: Suspending console(s) (use no_console_suspend to debug)
[280746.218999] ACPI: EC: interrupt blocked
[280746.315617] ACPI: EC: interrupt unblocked
[280746.652259] [drm] PCIE GART of 1024M enabled.
[280746.652266] [drm] PTB located at 0x000000F41FC00000
[280746.652297] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[280746.654257] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[280746.655309] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[280746.658888] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[280746.658893] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[280746.658896] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[280746.658899] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[280746.658901] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[280746.658904] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[280746.658907] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[280746.658909] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[280746.658912] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[280746.658915] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[280746.658918] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[280746.658921] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[280746.658923] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[280746.658926] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[280746.658929] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[280746.660923] nvme nvme0: 12/0/0 default/read/poll queues
[280748.678810] OOM killer enabled.
[280748.678817] Restarting tasks: Starting
[280748.702810] Restarting tasks: Done
[280748.702891] random: crng reseeded on system resumption
[280748.980392] PM: suspend exit
[280751.707770] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[280751.719121] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[280751.747905] wlp1s0: authenticated
[280751.748394] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[280751.758132] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[280751.764314] wlp1s0: associated
[281857.000380] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[281861.057779] PM: suspend entry (s2idle)
[281861.063838] Filesystems sync: 0.006 seconds
[281861.165333] Freezing user space processes
[281861.170563] Freezing user space processes completed (elapsed 0.005 seconds)
[281861.170576] OOM killer disabled.
[281861.170580] Freezing remaining freezable tasks
[281861.172368] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[281861.172377] printk: Suspending console(s) (use no_console_suspend to debug)
[281863.221947] ACPI: EC: interrupt blocked
[281863.339906] ACPI: EC: interrupt unblocked
[281863.678564] [drm] PCIE GART of 1024M enabled.
[281863.678571] [drm] PTB located at 0x000000F41FC00000
[281863.678626] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[281863.680081] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[281863.681102] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[281863.684779] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[281863.684784] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[281863.684788] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[281863.684791] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[281863.684793] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[281863.684796] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[281863.684799] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[281863.684802] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[281863.684804] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[281863.684808] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[281863.684811] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[281863.684815] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[281863.684818] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[281863.684821] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[281863.684824] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[281863.688909] nvme nvme0: 12/0/0 default/read/poll queues
[281865.708645] OOM killer enabled.
[281865.708651] Restarting tasks: Starting
[281865.723158] Restarting tasks: Done
[281865.723246] random: crng reseeded on system resumption
[281865.998392] PM: suspend exit
[281868.728094] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[281868.739363] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[281868.742805] wlp1s0: authenticated
[281868.743388] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[281868.759862] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[281868.766285] wlp1s0: associated
[282572.047719] wlp1s0: Connection to AP 4a:63:58:10:0d:41 lost
[282682.616334] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[282682.623966] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[282682.631433] wlp1s0: authenticated
[282682.633411] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[282682.657176] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[282682.663564] wlp1s0: associated
[285038.765248] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[285043.053004] PM: suspend entry (s2idle)
[285043.061711] Filesystems sync: 0.008 seconds
[285043.162612] Freezing user space processes
[285043.167750] Freezing user space processes completed (elapsed 0.005 seconds)
[285043.167759] OOM killer disabled.
[285043.167762] Freezing remaining freezable tasks
[285043.169464] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[285043.169472] printk: Suspending console(s) (use no_console_suspend to debug)
[285045.218886] ACPI: EC: interrupt blocked
[285045.545878] ACPI: EC: interrupt unblocked
[285046.353503] [drm] PCIE GART of 1024M enabled.
[285046.353511] [drm] PTB located at 0x000000F41FC00000
[285046.353541] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[285046.354490] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[285046.355540] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[285046.358749] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[285046.358755] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[285046.358759] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[285046.358763] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[285046.358765] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[285046.358768] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[285046.358771] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[285046.358773] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[285046.358776] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[285046.358779] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[285046.358781] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[285046.358784] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[285046.358787] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[285046.358789] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[285046.358792] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[285046.362961] nvme nvme0: 12/0/0 default/read/poll queues
[285048.380420] OOM killer enabled.
[285048.380425] Restarting tasks: Starting
[285048.394537] Restarting tasks: Done
[285048.394785] random: crng reseeded on system resumption
[285048.659029] PM: suspend exit
[285051.227967] wlp1s0: AP is in CSA process, reject auth
[285052.846379] usb 3-1: new high-speed USB device number 5 using xhci_hcd
[285052.974011] usb 3-1: New USB device found, idVendor=04e8, idProduct=6860, bcdDevice= 5.04
[285052.974020] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[285052.974024] usb 3-1: Product: SAMSUNG_Android
[285052.974027] usb 3-1: Manufacturer: SAMSUNG
[285052.974030] usb 3-1: SerialNumber: R5GL41JDA7Z
[285053.042747] cdc_acm 3-1:1.1: ttyACM0: USB ACM device
[285053.822380] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[285053.833314] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[285053.838726] wlp1s0: authenticated
[285053.839374] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[285053.867845] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[285053.872693] wlp1s0: associated
[285073.107853] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[285077.027346] PM: suspend entry (s2idle)
[285077.044857] Filesystems sync: 0.017 seconds
[285077.142695] Freezing user space processes
[285077.146633] Freezing user space processes completed (elapsed 0.003 seconds)
[285077.146639] OOM killer disabled.
[285077.146641] Freezing remaining freezable tasks
[285077.148079] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[285077.148084] printk: Suspending console(s) (use no_console_suspend to debug)
[285079.192776] ACPI: EC: interrupt blocked
[285079.337734] ACPI: EC: interrupt unblocked
[285079.693436] [drm] PCIE GART of 1024M enabled.
[285079.693442] [drm] PTB located at 0x000000F41FC00000
[285079.693469] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[285079.694398] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[285079.695415] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[285079.699315] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[285079.699319] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[285079.699322] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[285079.699324] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[285079.699327] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[285079.699329] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[285079.699331] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[285079.699333] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[285079.699336] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[285079.699338] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[285079.699341] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[285079.699343] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[285079.699345] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[285079.699347] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[285079.699362] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[285079.702544] nvme nvme0: 12/0/0 default/read/poll queues
[285081.718853] OOM killer enabled.
[285081.718858] Restarting tasks: Starting
[285081.727709] Restarting tasks: Done
[285081.727766] random: crng reseeded on system resumption
[285082.000963] PM: suspend exit
[285084.584927] wlp1s0: Wrong control channel: center-freq: 2462 ht-cfreq: 2412 ht->primary_chan: 1 band: 0 - Disabling HT
[285084.593871] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[285084.605167] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[285084.609552] wlp1s0: authenticated
[285084.610386] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[285084.617613] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[285084.622201] wlp1s0: associated
[286961.432023] audit: type=1400 audit(1792177204.139:450): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1460536 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[295245.274190] usb 3-1: USB disconnect, device number 5
[295405.286669] usb 3-1: new high-speed USB device number 6 using xhci_hcd
[295405.415602] usb 3-1: New USB device found, idVendor=04e8, idProduct=6860, bcdDevice= 5.04
[295405.415620] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[295405.415628] usb 3-1: Product: SAMSUNG_Android
[295405.415634] usb 3-1: Manufacturer: SAMSUNG
[295405.415640] usb 3-1: SerialNumber: R5GL41JDA7Z
[295405.506555] cdc_acm 3-1:1.1: ttyACM0: USB ACM device
[297216.465858] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[297220.039877] PM: suspend entry (s2idle)
[297220.045705] Filesystems sync: 0.005 seconds
[297220.144964] Freezing user space processes
[297220.148623] Freezing user space processes completed (elapsed 0.003 seconds)
[297220.148629] OOM killer disabled.
[297220.148632] Freezing remaining freezable tasks
[297220.150057] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[297220.150062] printk: Suspending console(s) (use no_console_suspend to debug)
[297222.195131] ACPI: EC: interrupt blocked
[297222.290666] ACPI: EC: interrupt unblocked
[297222.648333] [drm] PCIE GART of 1024M enabled.
[297222.648338] [drm] PTB located at 0x000000F41FC00000
[297222.648370] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[297222.649270] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[297222.650087] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[297222.653234] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[297222.653238] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[297222.653241] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[297222.653244] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[297222.653246] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[297222.653248] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[297222.653251] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[297222.653253] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[297222.653255] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[297222.653258] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[297222.653260] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[297222.653263] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[297222.653265] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[297222.653267] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[297222.653269] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[297222.657820] nvme nvme0: 12/0/0 default/read/poll queues
[297224.921113] OOM killer enabled.
[297224.921119] Restarting tasks: Starting
[297224.921223] usb 3-1: USB disconnect, device number 6
[297224.929611] Restarting tasks: Done
[297224.929695] random: crng reseeded on system resumption
[297225.206558] PM: suspend exit
[297225.399866] audit: type=1400 audit(1792216200.138:451): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1524126 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[297227.823650] wlp1s0: authenticate with c4:cc:f9:fc:aa:1f (local address=10:6f:d9:9d:4f:91)
[297227.981738] wlp1s0: send auth to c4:cc:f9:fc:aa:1f (try 1/3)
[297227.983791] wlp1s0: authenticated
[297227.985372] wlp1s0: associate with c4:cc:f9:fc:aa:1f (try 1/3)
[297227.989492] wlp1s0: RX AssocResp from c4:cc:f9:fc:aa:1f (capab=0x1831 status=0 aid=12)
[297228.002967] wlp1s0: associated
[297228.259489] wlp1s0: Limiting TX power to 30 (30 - 0) dBm as advertised by c4:cc:f9:fc:aa:1f
[297330.030382] usb 3-1: new high-speed USB device number 7 using xhci_hcd
[297330.161878] usb 3-1: New USB device found, idVendor=2717, idProduct=ff48, bcdDevice= 6.01
[297330.161887] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[297330.161891] usb 3-1: Product: Xiaomi Pad 7
[297330.161893] usb 3-1: Manufacturer: Xiaomi
[297330.161896] usb 3-1: SerialNumber: 47f969dd
[298224.653313] usb 3-1: USB disconnect, device number 7
[298226.622439] usb 3-1: new high-speed USB device number 8 using xhci_hcd
[298226.751540] usb 3-1: New USB device found, idVendor=04e8, idProduct=6860, bcdDevice= 5.04
[298226.751548] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[298226.751552] usb 3-1: Product: SAMSUNG_Android
[298226.751555] usb 3-1: Manufacturer: SAMSUNG
[298226.751558] usb 3-1: SerialNumber: R5GL41JDA7Z
[298226.830154] cdc_acm 3-1:1.1: ttyACM0: USB ACM device
[298925.456775] usb 3-1: USB disconnect, device number 8
[299216.718694] usb 3-1: new high-speed USB device number 9 using xhci_hcd
[299216.851825] usb 3-1: New USB device found, idVendor=2717, idProduct=ff48, bcdDevice= 6.01
[299216.851834] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[299216.851838] usb 3-1: Product: Xiaomi Pad 7
[299216.851841] usb 3-1: Manufacturer: Xiaomi
[299216.851844] usb 3-1: SerialNumber: 47f969dd
[301430.271682] audit: type=1400 audit(1792220405.010:452): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1546548 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[301608.022601] wlp1s0: deauthenticating from c4:cc:f9:fc:aa:1f by local choice (Reason: 3=DEAUTH_LEAVING)
[301612.033795] PM: suspend entry (s2idle)
[301612.048680] Filesystems sync: 0.014 seconds
[301612.146806] Freezing user space processes
[301612.150246] Freezing user space processes completed (elapsed 0.003 seconds)
[301612.150252] OOM killer disabled.
[301612.150255] Freezing remaining freezable tasks
[301612.151530] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[301612.151535] printk: Suspending console(s) (use no_console_suspend to debug)
[301614.200053] ACPI: EC: interrupt blocked
[301614.620215] ACPI: EC: interrupt unblocked
[301615.561677] [drm] PCIE GART of 1024M enabled.
[301615.561682] [drm] PTB located at 0x000000F41FC00000
[301615.561707] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[301615.562575] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[301615.563560] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[301615.566654] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[301615.566658] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[301615.566661] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[301615.566663] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[301615.566666] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[301615.566668] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[301615.566670] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[301615.566673] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[301615.566675] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[301615.566677] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[301615.566680] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[301615.566682] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[301615.566684] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[301615.566687] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[301615.566689] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[301615.570662] nvme nvme0: 12/0/0 default/read/poll queues
[301615.804761] usb 3-4: reset high-speed USB device number 3 using xhci_hcd
[301616.042870] usb 3-3: reset high-speed USB device number 2 using xhci_hcd
[301617.792238] OOM killer enabled.
[301617.792243] Restarting tasks: Starting
[301617.792333] usb 3-1: USB disconnect, device number 9
[301617.802194] Restarting tasks: Done
[301617.802312] random: crng reseeded on system resumption
[301617.831472] Bluetooth: hci0: HW/SW Version: 0x008a008a, Build Time: 20240219111427
[301617.966947] Bluetooth: hci0: Device setup in 149434 usecs
[301617.966955] Bluetooth: hci0: HCI Enhanced Setup Synchronous Connection command is advertised, but not supported.
[301618.026862] audit: type=1400 audit(1792242481.612:453): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1548056 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[301618.051042] Bluetooth: hci0: AOSP extensions version v1.00
[301618.051052] Bluetooth: hci0: AOSP quality report is supported
[301618.051258] Bluetooth: MGMT ver 1.23
[301618.065700] PM: suspend exit
[301619.774399] ucsi_acpi USBC000:00: ucsi_handle_connector_change: GET_CONNECTOR_STATUS failed (-110)
[301629.497443] wlp1s0: authenticate with c4:cc:f9:fc:aa:1f (local address=10:6f:d9:9d:4f:91)
[301629.505882] wlp1s0: send auth to c4:cc:f9:fc:aa:1f (try 1/3)
[301629.507903] wlp1s0: authenticated
[301629.508375] wlp1s0: associate with c4:cc:f9:fc:aa:1f (try 1/3)
[301629.511839] wlp1s0: RX AssocResp from c4:cc:f9:fc:aa:1f (capab=0x1831 status=0 aid=11)
[301629.518056] wlp1s0: associated
[301629.580910] wlp1s0: Limiting TX power to 30 (30 - 0) dBm as advertised by c4:cc:f9:fc:aa:1f
[301642.110374] wlp1s0: deauthenticating from c4:cc:f9:fc:aa:1f by local choice (Reason: 3=DEAUTH_LEAVING)
[301645.032041] PM: suspend entry (s2idle)
[301645.057040] Filesystems sync: 0.024 seconds
[301645.155516] Freezing user space processes
[301645.158591] Freezing user space processes completed (elapsed 0.003 seconds)
[301645.158597] OOM killer disabled.
[301645.158599] Freezing remaining freezable tasks
[301645.159526] Freezing remaining freezable tasks completed (elapsed 0.000 seconds)
[301645.159531] printk: Suspending console(s) (use no_console_suspend to debug)
[301647.204695] ACPI: EC: interrupt blocked
[301647.294339] ACPI: EC: interrupt unblocked
[301647.675251] [drm] PCIE GART of 1024M enabled.
[301647.675257] [drm] PTB located at 0x000000F41FC00000
[301647.675280] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[301647.676731] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[301647.677737] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[301647.680956] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[301647.680961] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[301647.680966] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[301647.680969] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[301647.680972] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[301647.680976] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[301647.680979] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[301647.680982] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[301647.680985] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[301647.680989] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[301647.680992] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[301647.680995] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[301647.680999] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[301647.681002] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[301647.681005] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[301647.684319] nvme nvme0: 12/0/0 default/read/poll queues
[301647.776987] typec port1-partner: PM: parent port1 should not be sleeping
[301647.914780] usb 3-4: reset high-speed USB device number 3 using xhci_hcd
[301648.152885] usb 3-3: reset high-speed USB device number 2 using xhci_hcd
[301649.703547] OOM killer enabled.
[301649.703553] Restarting tasks: Starting
[301649.714583] Restarting tasks: Done
[301649.714636] random: crng reseeded on system resumption
[301649.715989] Bluetooth: hci0: HW/SW Version: 0x008a008a, Build Time: 20240219111427
[301649.818383] usb 3-1: new high-speed USB device number 10 using xhci_hcd
[301649.852363] Bluetooth: hci0: Device setup in 134918 usecs
[301649.852370] Bluetooth: hci0: HCI Enhanced Setup Synchronous Connection command is advertised, but not supported.
[301649.936595] Bluetooth: hci0: AOSP extensions version v1.00
[301649.936605] Bluetooth: hci0: AOSP quality report is supported
[301649.936930] Bluetooth: MGMT ver 1.23
[301649.945820] usb 3-1: New USB device found, idVendor=04e8, idProduct=6860, bcdDevice= 5.04
[301649.945827] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[301649.945829] usb 3-1: Product: SAMSUNG_Android
[301649.945831] usb 3-1: Manufacturer: SAMSUNG
[301649.945833] usb 3-1: SerialNumber: R5GL41JDA7Z
[301650.044761] cdc_acm 3-1:1.1: ttyACM0: USB ACM device
[301650.075421] PM: suspend exit
[301652.678022] wlp1s0: authenticate with c4:cc:f9:fc:aa:1f (local address=10:6f:d9:9d:4f:91)
[301652.686461] wlp1s0: send auth to c4:cc:f9:fc:aa:1f (try 1/3)
[301652.688446] wlp1s0: authenticated
[301652.689377] wlp1s0: associate with c4:cc:f9:fc:aa:1f (try 1/3)
[301652.692341] wlp1s0: RX AssocResp from c4:cc:f9:fc:aa:1f (capab=0x1831 status=0 aid=13)
[301652.698584] wlp1s0: associated
[301652.745396] wlp1s0: Limiting TX power to 30 (30 - 0) dBm as advertised by c4:cc:f9:fc:aa:1f
[301935.702337] usb 3-1: USB disconnect, device number 10
[303253.510409] usb 3-1: new high-speed USB device number 11 using xhci_hcd
[303253.639866] usb 3-1: New USB device found, idVendor=04e8, idProduct=6860, bcdDevice= 5.04
[303253.639876] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[303253.639879] usb 3-1: Product: SAMSUNG_Android
[303253.639883] usb 3-1: Manufacturer: SAMSUNG
[303253.639886] usb 3-1: SerialNumber: R5GL41JDA7Z
[303253.723436] cdc_acm 3-1:1.1: ttyACM0: USB ACM device
[310123.263478] audit: type=1400 audit(1792252803.955:454): apparmor="DENIED" operation="capable" class="cap" profile="/usr/sbin/cupsd" pid=1582695 comm="cupsd" capability=12  capname="net_admin"
[310123.430758] audit: type=1400 audit(1792252804.122:455): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1582531 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[310704.533224] usb 3-1: USB disconnect, device number 11
[317885.486495] usb 3-1: new high-speed USB device number 12 using xhci_hcd
[317885.616097] usb 3-1: New USB device found, idVendor=04e8, idProduct=6860, bcdDevice= 5.04
[317885.616113] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[317885.616121] usb 3-1: Product: SAMSUNG_Android
[317885.616127] usb 3-1: Manufacturer: SAMSUNG
[317885.616133] usb 3-1: SerialNumber: R5GL41JDA7Z
[317885.684887] cdc_acm 3-1:1.1: ttyACM0: USB ACM device
[317889.837977] usb 3-1: USB disconnect, device number 12
[318122.774450] usb 3-1: new high-speed USB device number 13 using xhci_hcd
[318122.902067] usb 3-1: New USB device found, idVendor=04e8, idProduct=6860, bcdDevice= 5.04
[318122.902076] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[318122.902079] usb 3-1: Product: SAMSUNG_Android
[318122.902081] usb 3-1: Manufacturer: SAMSUNG
[318122.902084] usb 3-1: SerialNumber: R5GL41JDA7Z
[318122.996302] cdc_acm 3-1:1.1: ttyACM0: USB ACM device
[320922.732116] audit: type=1400 audit(1792263603.424:456): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1625523 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[322805.783485] wlp1s0: deauthenticating from c4:cc:f9:fc:aa:1f by local choice (Reason: 3=DEAUTH_LEAVING)
[322809.036804] PM: suspend entry (s2idle)
[322809.039828] Filesystems sync: 0.003 seconds
[322809.139085] Freezing user space processes
[322809.142612] Freezing user space processes completed (elapsed 0.003 seconds)
[322809.142618] OOM killer disabled.
[322809.142620] Freezing remaining freezable tasks
[322809.143541] Freezing remaining freezable tasks completed (elapsed 0.000 seconds)
[322809.143546] printk: Suspending console(s) (use no_console_suspend to debug)
[322811.188968] ACPI: EC: interrupt blocked
[322811.280161] ACPI: EC: interrupt unblocked
[322811.663606] [drm] PCIE GART of 1024M enabled.
[322811.663612] [drm] PTB located at 0x000000F41FC00000
[322811.663634] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[322811.664554] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[322811.665318] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[322811.668544] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[322811.668549] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[322811.668552] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[322811.668554] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[322811.668556] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[322811.668558] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[322811.668561] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[322811.668563] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[322811.668565] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[322811.668568] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[322811.668570] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[322811.668573] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[322811.668575] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[322811.668577] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[322811.668579] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[322811.672345] nvme nvme0: 12/0/0 default/read/poll queues
[322813.936031] OOM killer enabled.
[322813.936038] Restarting tasks: Starting
[322813.936318] usb 3-1: USB disconnect, device number 13
[322813.946847] Restarting tasks: Done
[322813.946905] random: crng reseeded on system resumption
[322814.223233] PM: suspend exit
[322816.846454] wlp1s0: authenticate with c4:cc:f9:fc:aa:1f (local address=10:6f:d9:9d:4f:91)
[322816.854901] wlp1s0: send auth to c4:cc:f9:fc:aa:1f (try 1/3)
[322816.856928] wlp1s0: authenticated
[322816.857402] wlp1s0: associate with c4:cc:f9:fc:aa:1f (try 1/3)
[322816.860861] wlp1s0: RX AssocResp from c4:cc:f9:fc:aa:1f (capab=0x1831 status=0 aid=11)
[322816.867104] wlp1s0: associated
[322816.940349] wlp1s0: Limiting TX power to 30 (30 - 0) dBm as advertised by c4:cc:f9:fc:aa:1f
[322895.070739] usb 3-1: new high-speed USB device number 14 using xhci_hcd
[322895.202053] usb 3-1: New USB device found, idVendor=04e8, idProduct=6860, bcdDevice= 5.04
[322895.202069] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[322895.202076] usb 3-1: Product: SAMSUNG_Android
[322895.202083] usb 3-1: Manufacturer: SAMSUNG
[322895.202088] usb 3-1: SerialNumber: R5GL41JDA7Z
[322895.303569] cdc_acm 3-1:1.1: ttyACM0: USB ACM device
[324139.106883] usb 3-1: USB disconnect, device number 14
[324883.198711] usb 3-1: new high-speed USB device number 15 using xhci_hcd
[324883.328154] usb 3-1: New USB device found, idVendor=04e8, idProduct=6860, bcdDevice= 5.04
[324883.328164] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[324883.328167] usb 3-1: Product: SAMSUNG_Android
[324883.328171] usb 3-1: Manufacturer: SAMSUNG
[324883.328174] usb 3-1: SerialNumber: R5GL41JDA7Z
[324883.406684] cdc_acm 3-1:1.1: ttyACM0: USB ACM device
[325223.574468] wlp1s0: deauthenticating from c4:cc:f9:fc:aa:1f by local choice (Reason: 3=DEAUTH_LEAVING)
[325227.067966] PM: suspend entry (s2idle)
[325227.073974] Filesystems sync: 0.005 seconds
[325227.171488] Freezing user space processes
[325227.175169] Freezing user space processes completed (elapsed 0.003 seconds)
[325227.175176] OOM killer disabled.
[325227.175179] Freezing remaining freezable tasks
[325227.176529] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[325227.176534] printk: Suspending console(s) (use no_console_suspend to debug)
[325229.229239] ACPI: EC: interrupt blocked
[325229.326911] ACPI: EC: interrupt unblocked
[325229.680606] [drm] PCIE GART of 1024M enabled.
[325229.680610] [drm] PTB located at 0x000000F41FC00000
[325229.680633] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[325229.681544] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[325229.682363] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[325229.685578] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[325229.685583] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[325229.685586] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[325229.685589] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[325229.685591] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[325229.685593] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[325229.685595] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[325229.685598] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[325229.685600] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[325229.685603] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[325229.685605] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[325229.685608] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[325229.685610] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[325229.685612] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[325229.685614] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[325229.689465] nvme nvme0: 12/0/0 default/read/poll queues
[325231.951939] OOM killer enabled.
[325231.951946] Restarting tasks: Starting
[325231.952043] usb 3-1: USB disconnect, device number 15
[325231.959791] Restarting tasks: Done
[325231.959857] random: crng reseeded on system resumption
[325232.238576] PM: suspend exit
[325234.827014] wlp1s0: authenticate with c4:cc:f9:fc:aa:1f (local address=10:6f:d9:9d:4f:91)
[325234.835346] wlp1s0: send auth to c4:cc:f9:fc:aa:1f (try 1/3)
[325234.837302] wlp1s0: authenticated
[325234.839382] wlp1s0: associate with c4:cc:f9:fc:aa:1f (try 1/3)
[325234.842972] wlp1s0: RX AssocResp from c4:cc:f9:fc:aa:1f (capab=0x1831 status=0 aid=11)
[325234.849185] wlp1s0: associated
[325234.928302] wlp1s0: Limiting TX power to 30 (30 - 0) dBm as advertised by c4:cc:f9:fc:aa:1f
[325278.197969] wlp1s0: deauthenticating from c4:cc:f9:fc:aa:1f by local choice (Reason: 3=DEAUTH_LEAVING)
[325282.028070] PM: suspend entry (s2idle)
[325282.067904] Filesystems sync: 0.039 seconds
[325282.166627] Freezing user space processes
[325282.170197] Freezing user space processes completed (elapsed 0.003 seconds)
[325282.170204] OOM killer disabled.
[325282.170206] Freezing remaining freezable tasks
[325282.171524] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[325282.171528] printk: Suspending console(s) (use no_console_suspend to debug)
[325284.220183] ACPI: EC: interrupt blocked
[325284.308970] ACPI: EC: interrupt unblocked
[325284.677049] [drm] PCIE GART of 1024M enabled.
[325284.677054] [drm] PTB located at 0x000000F41FC00000
[325284.677079] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[325284.678460] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[325284.679443] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[325284.682860] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[325284.682864] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[325284.682867] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[325284.682870] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[325284.682872] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[325284.682874] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[325284.682876] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[325284.682878] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[325284.682881] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[325284.682883] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[325284.682885] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[325284.682888] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[325284.682890] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[325284.682892] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[325284.682894] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[325284.685383] nvme nvme0: 12/0/0 default/read/poll queues
[325284.748385] typec port1-partner: PM: parent port1 should not be sleeping
[325286.707050] OOM killer enabled.
[325286.707054] Restarting tasks: Starting
[325286.715864] Restarting tasks: Done
[325286.715933] random: crng reseeded on system resumption
[325286.818375] usb 3-1: new high-speed USB device number 16 using xhci_hcd
[325286.945549] usb 3-1: New USB device found, idVendor=04e8, idProduct=6860, bcdDevice= 5.04
[325286.945557] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[325286.945560] usb 3-1: Product: SAMSUNG_Android
[325286.945563] usb 3-1: Manufacturer: SAMSUNG
[325286.945565] usb 3-1: SerialNumber: R5GL41JDA7Z
[325286.989441] PM: suspend exit
[325287.014808] cdc_acm 3-1:1.1: ttyACM0: USB ACM device
[325287.116485] audit: type=1400 audit(1792298451.832:457): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1647605 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[325298.519077] wlp1s0: authenticate with c4:cc:f9:fc:aa:1f (local address=10:6f:d9:9d:4f:91)
[325298.527203] wlp1s0: send auth to c4:cc:f9:fc:aa:1f (try 1/3)
[325298.529229] wlp1s0: authenticated
[325298.529363] wlp1s0: associate with c4:cc:f9:fc:aa:1f (try 1/3)
[325298.533161] wlp1s0: RX AssocResp from c4:cc:f9:fc:aa:1f (capab=0x1831 status=0 aid=13)
[325298.539401] wlp1s0: associated
[325298.603332] wlp1s0: Limiting TX power to 30 (30 - 0) dBm as advertised by c4:cc:f9:fc:aa:1f
[325325.223477] usb 3-1: USB disconnect, device number 16
[325428.838668] usb 3-1: new high-speed USB device number 17 using xhci_hcd
[325428.971710] usb 3-1: New USB device found, idVendor=2717, idProduct=ff48, bcdDevice= 6.01
[325428.971726] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[325428.971734] usb 3-1: Product: Xiaomi Pad 7
[325428.971740] usb 3-1: Manufacturer: Xiaomi
[325428.971746] usb 3-1: SerialNumber: 47f969dd
[330078.235080] usb 3-1: USB disconnect, device number 17
[330079.935387] usb 3-1: new high-speed USB device number 18 using xhci_hcd
[330080.062938] usb 3-1: New USB device found, idVendor=04e8, idProduct=6860, bcdDevice= 5.04
[330080.062948] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[330080.062953] usb 3-1: Product: SAMSUNG_Android
[330080.062956] usb 3-1: Manufacturer: SAMSUNG
[330080.062960] usb 3-1: SerialNumber: R5GL41JDA7Z
[330080.132722] cdc_acm 3-1:1.1: ttyACM0: USB ACM device
[330490.517633] usb 3-1: USB disconnect, device number 18
[330567.617430] usb 3-1: new high-speed USB device number 19 using xhci_hcd
[330567.746782] usb 3-1: New USB device found, idVendor=04e8, idProduct=6860, bcdDevice= 5.04
[330567.746791] usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[330567.746795] usb 3-1: Product: SAMSUNG_Android
[330567.746798] usb 3-1: Manufacturer: SAMSUNG
[330567.746801] usb 3-1: SerialNumber: R5GL41JDA7Z
[330567.840014] cdc_acm 3-1:1.1: ttyACM0: USB ACM device
[333633.916631] audit: type=1400 audit(1792306803.319:458): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1686769 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[336106.196939] wlp1s0: deauthenticating from c4:cc:f9:fc:aa:1f by local choice (Reason: 3=DEAUTH_LEAVING)
[336113.036535] PM: suspend entry (s2idle)
[336113.043899] Filesystems sync: 0.007 seconds
[336113.140973] Freezing user space processes
[336113.143599] Freezing user space processes completed (elapsed 0.002 seconds)
[336113.143604] OOM killer disabled.
[336113.143605] Freezing remaining freezable tasks
[336113.144470] Freezing remaining freezable tasks completed (elapsed 0.000 seconds)
[336113.144473] printk: Suspending console(s) (use no_console_suspend to debug)
[336115.190108] ACPI: EC: interrupt blocked
[336115.634165] ACPI: EC: interrupt unblocked
[336116.068934] [drm] PCIE GART of 1024M enabled.
[336116.068941] [drm] PTB located at 0x000000F41FC00000
[336116.068966] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[336116.070385] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[336116.071370] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[336116.074498] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[336116.074502] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[336116.074505] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[336116.074507] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[336116.074510] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[336116.074512] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[336116.074514] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[336116.074516] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[336116.074519] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[336116.074521] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[336116.074524] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[336116.074526] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[336116.074528] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[336116.074531] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[336116.074533] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[336116.078493] nvme nvme0: 12/0/0 default/read/poll queues
[336118.335935] OOM killer enabled.
[336118.335941] Restarting tasks: Starting
[336118.336039] usb 3-1: USB disconnect, device number 19
[336118.345637] Restarting tasks: Done
[336118.345735] random: crng reseeded on system resumption
[336118.609157] PM: suspend exit
[336118.615200] audit: type=1400 audit(1792337286.176:459): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1696942 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[336120.894383] ucsi_acpi USBC000:00: ucsi_handle_connector_change: GET_CONNECTOR_STATUS failed (-110)
[336125.534630] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[336125.699649] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[336125.702037] wlp1s0: authenticated
[336125.702375] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[336125.707950] wlp1s0: RX AssocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=10)
[336125.714188] wlp1s0: associated
[336143.105100] wlp1s0: deauthenticating from e2:9c:fd:da:08:bc by local choice (Reason: 3=DEAUTH_LEAVING)
[336173.268012] PM: suspend entry (s2idle)
[336173.292472] Filesystems sync: 0.024 seconds
[336173.390909] Freezing user space processes
[336173.394344] Freezing user space processes completed (elapsed 0.003 seconds)
[336173.394349] OOM killer disabled.
[336173.394358] Freezing remaining freezable tasks
[336173.395565] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[336173.395572] printk: Suspending console(s) (use no_console_suspend to debug)
[336175.680713] ACPI: EC: interrupt blocked
[336175.767204] ACPI: EC: interrupt unblocked
[336176.144867] [drm] PCIE GART of 1024M enabled.
[336176.144872] [drm] PTB located at 0x000000F41FC00000
[336176.144895] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[336176.146371] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[336176.147372] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[336176.153220] nvme nvme0: 12/0/0 default/read/poll queues
[336176.221804] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[336176.221808] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[336176.221811] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[336176.221814] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[336176.221816] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[336176.221818] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[336176.221821] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[336176.221823] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[336176.221825] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[336176.221828] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[336176.221830] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[336176.221832] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[336176.221835] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[336176.221837] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[336176.221839] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[336178.166413] OOM killer enabled.
[336178.166418] Restarting tasks: Starting
[336178.179835] Restarting tasks: Done
[336178.179886] random: crng reseeded on system resumption
[336178.466892] PM: suspend exit
[336181.064431] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[336181.070645] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[336181.084640] wlp1s0: authenticated
[336181.086370] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[336181.094004] wlp1s0: RX AssocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=10)
[336181.100241] wlp1s0: associated
[338026.265642] audit: type=1400 audit(1792339201.519:460): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1706228 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[338026.283697] audit: type=1400 audit(1792339201.537:461): apparmor="DENIED" operation="capable" class="cap" profile="/usr/sbin/cupsd" pid=1706425 comm="cupsd" capability=12  capname="net_admin"
[345677.845978] systemd-journald[192362]: Time jumped backwards, rotating.
[346461.499562] wlp1s0: deauthenticating from e2:9c:fd:da:08:bc by local choice (Reason: 3=DEAUTH_LEAVING)
[346461.735616] PM: suspend entry (s2idle)
[346461.742017] Filesystems sync: 0.006 seconds
[346461.839642] Freezing user space processes
[346461.843302] Freezing user space processes completed (elapsed 0.003 seconds)
[346461.843308] OOM killer disabled.
[346461.843310] Freezing remaining freezable tasks
[346461.844537] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[346461.844542] printk: Suspending console(s) (use no_console_suspend to debug)
[346463.872872] ACPI: EC: interrupt blocked
[346464.120717] ACPI: EC: interrupt unblocked
[346464.156785] [drm] PCIE GART of 1024M enabled.
[346464.156791] [drm] PTB located at 0x000000F41FC00000
[346464.156821] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[346464.158993] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[346464.160004] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[346464.163521] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[346464.163526] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[346464.163530] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[346464.163532] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[346464.163535] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[346464.163537] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[346464.163539] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[346464.163541] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[346464.163544] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[346464.163546] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[346464.163549] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[346464.163551] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[346464.163554] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[346464.163556] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[346464.163558] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[346464.166557] nvme nvme0: 12/0/0 default/read/poll queues
[346466.466889] OOM killer enabled.
[346466.466895] Restarting tasks: Starting
[346466.493560] Restarting tasks: Done
[346466.493644] random: crng reseeded on system resumption
[346466.767517] PM: suspend exit
[346467.142631] audit: type=1400 audit(1792374482.058:462): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1739355 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[346469.438404] ucsi_acpi USBC000:00: ucsi_handle_connector_change: GET_CONNECTOR_STATUS failed (-110)
[346485.575058] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[346485.736167] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[346485.739737] wlp1s0: authenticated
[346485.741432] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[346485.751071] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[346485.765424] wlp1s0: associated
[348967.552502] audit: type=1400 audit(1792376982.467:463): apparmor="ALLOWED" operation="open" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=1751782 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[348967.552517] audit: type=1400 audit(1792376982.467:464): apparmor="ALLOWED" operation="file_perm" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=1751782 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[348967.552594] audit: type=1400 audit(1792376982.467:465): apparmor="ALLOWED" operation="file_perm" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=1751782 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[349479.532418] audit: type=1400 audit(1792377494.447:466): apparmor="ALLOWED" operation="open" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=1753645 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[349479.532432] audit: type=1400 audit(1792377494.448:467): apparmor="ALLOWED" operation="file_perm" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=1753645 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[349479.532533] audit: type=1400 audit(1792377494.448:468): apparmor="ALLOWED" operation="file_perm" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=1753645 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[353344.793116] audit: type=1400 audit(1792381359.707:469): apparmor="ALLOWED" operation="open" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=1773628 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[353344.793130] audit: type=1400 audit(1792381359.707:470): apparmor="ALLOWED" operation="file_perm" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=1773628 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[353344.793242] audit: type=1400 audit(1792381359.707:471): apparmor="ALLOWED" operation="file_perm" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=1773628 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[353710.937273] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[353715.059128] PM: suspend entry (s2idle)
[353715.067069] Filesystems sync: 0.007 seconds
[353715.168560] Freezing user space processes
[353715.173176] Freezing user space processes completed (elapsed 0.004 seconds)
[353715.173185] OOM killer disabled.
[353715.173189] Freezing remaining freezable tasks
[353715.174655] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[353715.174664] printk: Suspending console(s) (use no_console_suspend to debug)
[353717.223132] ACPI: EC: interrupt blocked
[353717.523780] ACPI: EC: interrupt unblocked
[353718.139677] [drm] PCIE GART of 1024M enabled.
[353718.139683] [drm] PTB located at 0x000000F41FC00000
[353718.139707] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[353718.140767] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[353718.141779] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[353718.145018] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[353718.145023] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[353718.145027] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[353718.145030] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[353718.145032] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[353718.145035] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[353718.145038] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[353718.145040] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[353718.145043] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[353718.145046] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[353718.145048] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[353718.145051] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[353718.145054] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[353718.145056] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[353718.145059] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[353718.148734] nvme nvme0: 12/0/0 default/read/poll queues
[353720.164152] OOM killer enabled.
[353720.164158] Restarting tasks: Starting
[353720.174919] Restarting tasks: Done
[353720.174983] random: crng reseeded on system resumption
[353720.496376] PM: suspend exit
[353720.550942] audit: type=1400 audit(1792382558.253:472): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1775177 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[353723.263667] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[353723.429839] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[353723.433847] wlp1s0: authenticated
[353723.434400] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[353723.440460] wlp1s0: RX AssocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=5)
[353723.453831] wlp1s0: associated
[353772.615399] usb 1-2: new full-speed USB device number 21 using xhci_hcd
[362255.315871] wlp1s0: deauthenticating from e2:9c:fd:da:08:bc by local choice (Reason: 3=DEAUTH_LEAVING)
[362260.049632] PM: suspend entry (s2idle)
[362260.055860] Filesystems sync: 0.006 seconds
[362260.155972] Freezing user space processes
[362260.159622] Freezing user space processes completed (elapsed 0.003 seconds)
[362260.159628] OOM killer disabled.
[362260.159631] Freezing remaining freezable tasks
[362260.161090] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[362260.161097] printk: Suspending console(s) (use no_console_suspend to debug)
[362262.209009] ACPI: EC: interrupt blocked
[362262.307899] ACPI: EC: interrupt unblocked
[362262.665665] [drm] PCIE GART of 1024M enabled.
[362262.665672] [drm] PTB located at 0x000000F41FC00000
[362262.665701] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[362262.666581] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[362262.667592] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[362262.671935] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[362262.671940] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[362262.671944] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[362262.671946] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[362262.671949] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[362262.671951] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[362262.671954] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[362262.671956] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[362262.671958] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[362262.671961] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[362262.671964] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[362262.671966] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[362262.671968] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[362262.671971] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[362262.671973] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[362262.675027] nvme nvme0: 12/0/0 default/read/poll queues
[362264.695997] OOM killer enabled.
[362264.696004] Restarting tasks: Starting
[362264.711873] Restarting tasks: Done
[362264.712058] random: crng reseeded on system resumption
[362264.980313] PM: suspend exit
[362267.656838] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[362267.668101] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[362267.672346] wlp1s0: authenticated
[362267.673374] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[362267.680450] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[362267.693145] wlp1s0: associated
[363859.753506] audit: type=1400 audit(1792393201.786:473): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1823171 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[370701.046289] audit: type=1400 audit(1792400043.078:474): apparmor="ALLOWED" operation="open" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=1857073 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[370701.046304] audit: type=1400 audit(1792400043.078:475): apparmor="ALLOWED" operation="file_perm" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=1857073 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[370701.046398] audit: type=1400 audit(1792400043.078:476): apparmor="ALLOWED" operation="file_perm" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=1857073 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[370722.447750] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[370727.039674] PM: suspend entry (s2idle)
[370727.049585] Filesystems sync: 0.009 seconds
[370727.151557] Freezing user space processes
[370727.156879] Freezing user space processes completed (elapsed 0.005 seconds)
[370727.156888] OOM killer disabled.
[370727.156892] Freezing remaining freezable tasks
[370727.158586] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[370727.158599] printk: Suspending console(s) (use no_console_suspend to debug)
[370729.219241] ACPI: EC: interrupt blocked
[370729.322894] ACPI: EC: interrupt unblocked
[370729.669512] [drm] PCIE GART of 1024M enabled.
[370729.669526] [drm] PTB located at 0x000000F41FC00000
[370729.669560] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[370729.670482] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[370729.671489] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[370729.675662] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[370729.675668] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[370729.675671] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[370729.675674] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[370729.675677] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[370729.675679] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[370729.675682] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[370729.675685] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[370729.675687] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[370729.675690] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[370729.675693] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[370729.675696] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[370729.675699] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[370729.675701] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[370729.675704] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[370729.678312] nvme nvme0: 12/0/0 default/read/poll queues
[370731.694517] OOM killer enabled.
[370731.694525] Restarting tasks: Starting
[370731.706952] Restarting tasks: Done
[370731.707040] random: crng reseeded on system resumption
[370731.995779] PM: suspend exit
[370734.805634] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[370734.975928] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[370734.979066] wlp1s0: authenticated
[370734.979381] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[370734.986883] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[370734.999503] wlp1s0: associated
[370824.651557] wlp1s0: deauthenticated from 4a:63:58:10:0d:41 (Reason: 6=CLASS2_FRAME_FROM_NONAUTH_STA)
[370824.819977] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[370824.826263] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[370824.836667] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 2/3)
[370824.847162] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 3/3)
[370824.857881] wlp1s0: authentication with 4a:63:58:10:0d:41 timed out
[370842.545884] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[370842.552184] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[370842.554423] wlp1s0: authenticated
[370842.555385] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[370842.560123] wlp1s0: RX AssocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=6)
[370842.566590] wlp1s0: associated
[371064.137604] audit: type=1400 audit(1792400924.848:477): apparmor="ALLOWED" operation="open" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=1859604 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[371064.137612] audit: type=1400 audit(1792400924.848:478): apparmor="ALLOWED" operation="file_perm" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=1859604 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[371064.137650] audit: type=1400 audit(1792400924.848:479): apparmor="ALLOWED" operation="file_perm" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=1859604 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[372262.547636] wlp1s0: deauthenticating from e2:9c:fd:da:08:bc by local choice (Reason: 3=DEAUTH_LEAVING)
[372266.050556] PM: suspend entry (s2idle)
[372266.057331] Filesystems sync: 0.006 seconds
[372266.155932] Freezing user space processes
[372266.160431] Freezing user space processes completed (elapsed 0.004 seconds)
[372266.160438] OOM killer disabled.
[372266.160441] Freezing remaining freezable tasks
[372266.161581] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[372266.161588] printk: Suspending console(s) (use no_console_suspend to debug)
[372268.217906] ACPI: EC: interrupt blocked
[372268.335834] ACPI: EC: interrupt unblocked
[372268.704247] [drm] PCIE GART of 1024M enabled.
[372268.704254] [drm] PTB located at 0x000000F41FC00000
[372268.704285] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[372268.705694] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[372268.706712] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[372268.710664] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[372268.710675] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[372268.710679] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[372268.710681] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[372268.710684] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[372268.710686] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[372268.710688] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[372268.710691] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[372268.710693] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[372268.710696] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[372268.710698] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[372268.710701] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[372268.710703] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[372268.710706] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[372268.710708] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[372268.713158] nvme nvme0: 12/0/0 default/read/poll queues
[372268.838766] usb 3-4: reset high-speed USB device number 3 using xhci_hcd
[372269.076898] usb 3-3: reset high-speed USB device number 2 using xhci_hcd
[372270.723166] OOM killer enabled.
[372270.723171] Restarting tasks: Starting
[372270.741944] Bluetooth: hci0: HW/SW Version: 0x008a008a, Build Time: 20240219111427
[372270.746394] Restarting tasks: Done
[372270.746471] random: crng reseeded on system resumption
[372270.878701] Bluetooth: hci0: Device setup in 142371 usecs
[372270.878715] Bluetooth: hci0: HCI Enhanced Setup Synchronous Connection command is advertised, but not supported.
[372270.964829] Bluetooth: hci0: AOSP extensions version v1.00
[372270.964840] Bluetooth: hci0: AOSP quality report is supported
[372270.965214] Bluetooth: MGMT ver 1.23
[372271.104187] PM: suspend exit
[372273.797137] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[372273.808468] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[372273.886076] wlp1s0: authenticated
[372273.887428] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[372273.896322] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[372273.909105] wlp1s0: associated
[372364.959162] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[372370.037100] PM: suspend entry (s2idle)
[372370.042708] Filesystems sync: 0.005 seconds
[372370.141083] Freezing user space processes
[372370.145625] Freezing user space processes completed (elapsed 0.004 seconds)
[372370.145637] OOM killer disabled.
[372370.145642] Freezing remaining freezable tasks
[372370.147348] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[372370.147374] printk: Suspending console(s) (use no_console_suspend to debug)
[372372.206072] ACPI: EC: interrupt blocked
[372372.306885] ACPI: EC: interrupt unblocked
[372372.639675] [drm] PCIE GART of 1024M enabled.
[372372.639682] [drm] PTB located at 0x000000F41FC00000
[372372.639736] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[372372.640639] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[372372.641462] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[372372.644958] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[372372.644963] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[372372.644967] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[372372.644969] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[372372.644972] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[372372.644975] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[372372.644978] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[372372.644980] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[372372.644983] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[372372.644986] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[372372.644989] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[372372.644992] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[372372.644994] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[372372.644997] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[372372.644999] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[372372.649645] nvme nvme0: 12/0/0 default/read/poll queues
[372374.647689] OOM killer enabled.
[372374.647697] Restarting tasks: Starting
[372374.671393] Restarting tasks: Done
[372374.671477] random: crng reseeded on system resumption
[372374.965327] PM: suspend exit
[372377.662829] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[372377.674180] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[372377.689265] wlp1s0: authenticated
[372377.690398] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[372377.749059] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[372377.755998] wlp1s0: associated
[372564.260660] audit: type=1400 audit(1792404004.985:480): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1869696 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[377750.135655] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[377754.049154] PM: suspend entry (s2idle)
[377754.065503] Filesystems sync: 0.016 seconds
[377754.166711] Freezing user space processes
[377754.172589] Freezing user space processes completed (elapsed 0.005 seconds)
[377754.172602] OOM killer disabled.
[377754.172606] Freezing remaining freezable tasks
[377754.174493] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[377754.174501] printk: Suspending console(s) (use no_console_suspend to debug)
[377756.223263] ACPI: EC: interrupt blocked
[377756.570732] ACPI: EC: interrupt unblocked
[377757.658519] [drm] PCIE GART of 1024M enabled.
[377757.658525] [drm] PTB located at 0x000000F41FC00000
[377757.658550] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[377757.659918] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[377757.660915] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[377757.664257] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[377757.664262] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[377757.664265] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[377757.664268] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[377757.664270] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[377757.664273] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[377757.664276] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[377757.664278] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[377757.664281] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[377757.664284] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[377757.664287] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[377757.664289] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[377757.664292] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[377757.664295] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[377757.664297] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[377757.667856] nvme nvme0: 12/0/0 default/read/poll queues
[377759.685811] OOM killer enabled.
[377759.685817] Restarting tasks: Starting
[377759.695233] Restarting tasks: Done
[377759.695288] random: crng reseeded on system resumption
[377760.282698] PM: suspend exit
[377762.934625] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[377762.940868] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[377762.945240] wlp1s0: authenticated
[377762.946379] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[377762.953090] wlp1s0: RX AssocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=9)
[377762.966508] wlp1s0: associated
[377796.733217] audit: type=1400 audit(1792414802.434:481): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1905137 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[388052.446232] systemd-journald[192362]: Time jumped backwards, rotating.
[388600.286427] audit: type=1400 audit(1792425601.140:482): apparmor="DENIED" operation="capable" class="cap" profile="/usr/sbin/cupsd" pid=1980835 comm="cupsd" capability=12  capname="net_admin"
[388600.522084] audit: type=1400 audit(1792425601.375:483): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=1980708 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[399403.700968] audit: type=1400 audit(1792436404.013:484): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=2043710 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[401686.859809] wlp1s0: deauthenticating from e2:9c:fd:da:08:bc by local choice (Reason: 3=DEAUTH_LEAVING)
[401691.025988] PM: suspend entry (s2idle)
[401691.041398] Filesystems sync: 0.015 seconds
[401691.141115] Freezing user space processes
[401691.144616] Freezing user space processes completed (elapsed 0.003 seconds)
[401691.144623] OOM killer disabled.
[401691.144625] Freezing remaining freezable tasks
[401691.145540] Freezing remaining freezable tasks completed (elapsed 0.000 seconds)
[401691.145545] printk: Suspending console(s) (use no_console_suspend to debug)
[401693.200081] ACPI: EC: interrupt blocked
[401693.443799] ACPI: EC: interrupt unblocked
[401693.811207] [drm] PCIE GART of 1024M enabled.
[401693.811214] [drm] PTB located at 0x000000F41FC00000
[401693.811252] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[401693.812210] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[401693.813199] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[401693.816526] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[401693.816531] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[401693.816534] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[401693.816536] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[401693.816539] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[401693.816541] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[401693.816544] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[401693.816546] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[401693.816548] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[401693.816551] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[401693.816553] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[401693.816556] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[401693.816558] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[401693.816560] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[401693.816563] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[401693.820671] nvme nvme0: 12/0/0 default/read/poll queues
[401695.834627] OOM killer enabled.
[401695.834633] Restarting tasks: Starting
[401695.854383] Restarting tasks: Done
[401695.854473] random: crng reseeded on system resumption
[401696.125617] audit: type=1400 audit(1792455019.720:485): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=2059702 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[401696.136892] PM: suspend exit
[401698.879405] ucsi_acpi USBC000:00: ucsi_handle_connector_change: GET_CONNECTOR_STATUS failed (-110)
[401724.522222] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[401724.680755] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[401724.684602] wlp1s0: authenticated
[401724.686413] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[401724.694979] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[401724.708820] wlp1s0: associated
[404678.125695] audit: type=1400 audit(1792458002.628:486): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=2075474 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[406170.487311] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[406174.050342] PM: suspend entry (s2idle)
[406174.061421] Filesystems sync: 0.011 seconds
[406174.164039] Freezing user space processes
[406174.168794] Freezing user space processes completed (elapsed 0.004 seconds)
[406174.168803] OOM killer disabled.
[406174.168806] Freezing remaining freezable tasks
[406174.170500] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[406174.170509] printk: Suspending console(s) (use no_console_suspend to debug)
[406176.238838] ACPI: EC: interrupt blocked
[406176.460523] ACPI: EC: interrupt unblocked
[406177.074797] [drm] PCIE GART of 1024M enabled.
[406177.074804] [drm] PTB located at 0x000000F41FC00000
[406177.074830] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[406177.075531] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[406177.076538] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[406177.079668] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[406177.079674] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[406177.079678] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[406177.079681] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[406177.079684] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[406177.079686] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[406177.079689] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[406177.079692] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[406177.079694] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[406177.079697] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[406177.079700] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[406177.079703] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[406177.079705] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[406177.079708] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[406177.079711] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[406177.083542] nvme nvme0: 12/0/0 default/read/poll queues
[406179.107585] OOM killer enabled.
[406179.107589] Restarting tasks: Starting
[406179.115722] Restarting tasks: Done
[406179.115790] random: crng reseeded on system resumption
[406179.529338] PM: suspend exit
[406182.299004] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[406182.441504] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[406182.463995] wlp1s0: authenticated
[406182.464372] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[406182.485162] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[406182.490517] wlp1s0: associated
[406204.117947] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[406208.032999] PM: suspend entry (s2idle)
[406208.051276] Filesystems sync: 0.018 seconds
[406208.149309] Freezing user space processes
[406208.152695] Freezing user space processes completed (elapsed 0.003 seconds)
[406208.152702] OOM killer disabled.
[406208.152704] Freezing remaining freezable tasks
[406208.154142] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[406208.154147] printk: Suspending console(s) (use no_console_suspend to debug)
[406210.188840] ACPI: EC: interrupt blocked
[406210.295086] ACPI: EC: interrupt unblocked
[406210.666025] [drm] PCIE GART of 1024M enabled.
[406210.666031] [drm] PTB located at 0x000000F41FC00000
[406210.666053] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[406210.667587] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[406210.668579] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[406210.671979] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[406210.671985] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[406210.671988] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[406210.671991] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[406210.671994] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[406210.671997] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[406210.672000] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[406210.672003] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[406210.672005] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[406210.672009] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[406210.672012] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[406210.672015] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[406210.672017] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[406210.672020] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[406210.672023] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[406210.674950] nvme nvme0: 12/0/0 default/read/poll queues
[406212.675075] OOM killer enabled.
[406212.675079] Restarting tasks: Starting
[406212.684342] Restarting tasks: Done
[406212.684455] random: crng reseeded on system resumption
[406212.962720] PM: suspend exit
[406215.592945] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[406215.604199] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[406215.622003] wlp1s0: authenticated
[406215.623399] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[406215.687083] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[406215.692349] wlp1s0: associated
[410087.872917] audit: type=1400 audit(1792464054.614:487): apparmor="ALLOWED" operation="open" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=2104548 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[410087.872925] audit: type=1400 audit(1792464054.614:488): apparmor="ALLOWED" operation="file_perm" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=2104548 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[410087.872964] audit: type=1400 audit(1792464054.614:489): apparmor="ALLOWED" operation="file_perm" class="file" profile="libreoffice-soffice" name="/usr/share/fcitx5/themes/default/theme.conf" pid=2104548 comm="soffice.bin" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[412110.278884] wlp1s0: Connection to AP 4a:63:58:10:0d:41 lost
[412128.480421] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[412128.641513] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[412128.644453] wlp1s0: authenticated
[412128.645412] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[412128.650837] wlp1s0: RX AssocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=7)
[412128.664454] wlp1s0: associated
[414838.262598] audit: type=1400 audit(1792468805.004:490): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=2127939 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[424089.894186] wlp1s0: deauthenticating from e2:9c:fd:da:08:bc by local choice (Reason: 3=DEAUTH_LEAVING)
[424093.045614] PM: suspend entry (s2idle)
[424093.061762] Filesystems sync: 0.016 seconds
[424093.162227] Freezing user space processes
[424093.166804] Freezing user space processes completed (elapsed 0.004 seconds)
[424093.166813] OOM killer disabled.
[424093.166816] Freezing remaining freezable tasks
[424093.168435] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[424093.168448] printk: Suspending console(s) (use no_console_suspend to debug)
[424095.223035] ACPI: EC: interrupt blocked
[424095.323509] ACPI: EC: interrupt unblocked
[424095.659500] [drm] PCIE GART of 1024M enabled.
[424095.659508] [drm] PTB located at 0x000000F41FC00000
[424095.659543] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[424095.660531] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[424095.661365] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[424095.664846] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[424095.664852] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[424095.664855] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[424095.664858] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[424095.664861] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[424095.664863] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[424095.664866] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[424095.664869] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[424095.664871] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[424095.664875] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[424095.664878] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[424095.664882] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[424095.664885] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[424095.664887] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[424095.664891] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[424095.669438] nvme nvme0: 12/0/0 default/read/poll queues
[424097.688511] OOM killer enabled.
[424097.688517] Restarting tasks: Starting
[424097.708383] Restarting tasks: Done
[424097.708468] random: crng reseeded on system resumption
[424098.003503] PM: suspend exit
[424100.719771] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[424100.863812] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[424100.867994] wlp1s0: authenticated
[424100.869379] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[424100.877215] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[424100.890555] wlp1s0: associated
[425263.781468] audit: type=1400 audit(1792479601.491:491): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=2190716 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[429537.941828] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[429543.054464] PM: suspend entry (s2idle)
[429543.062766] Filesystems sync: 0.008 seconds
[429543.163944] Freezing user space processes
[429543.168731] Freezing user space processes completed (elapsed 0.004 seconds)
[429543.168740] OOM killer disabled.
[429543.168743] Freezing remaining freezable tasks
[429543.170386] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[429543.170395] printk: Suspending console(s) (use no_console_suspend to debug)
[429545.218288] ACPI: EC: interrupt blocked
[429545.514470] ACPI: EC: interrupt unblocked
[429545.965787] [drm] PCIE GART of 1024M enabled.
[429545.965793] [drm] PTB located at 0x000000F41FC00000
[429545.965820] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[429545.967148] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[429545.968133] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[429545.972331] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[429545.972337] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[429545.972340] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[429545.972342] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[429545.972345] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[429545.972348] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[429545.972363] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[429545.972366] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[429545.972368] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[429545.972371] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[429545.972374] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[429545.972377] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[429545.972379] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[429545.972382] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[429545.972384] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[429545.975845] nvme nvme0: 12/0/0 default/read/poll queues
[429547.990341] OOM killer enabled.
[429547.990346] Restarting tasks: Starting
[429548.001970] Restarting tasks: Done
[429548.002035] random: crng reseeded on system resumption
[429548.276563] PM: suspend exit
[429551.043555] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[429551.054797] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[429551.058248] wlp1s0: authenticated
[429551.059376] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[429551.067288] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[429551.072667] wlp1s0: associated
[433780.785368] workqueue: netstamp_clear hogged CPU for >10000us 4 times, consider switching to WQ_UNBOUND
[434687.979708] audit: type=1400 audit(1792490400.686:492): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=2246870 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[435109.311114] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[435139.371718] PM: suspend entry (s2idle)
[435139.378201] Filesystems sync: 0.006 seconds
[435139.480183] Freezing user space processes
[435139.485288] Freezing user space processes completed (elapsed 0.005 seconds)
[435139.485297] OOM killer disabled.
[435139.485300] Freezing remaining freezable tasks
[435139.486676] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[435139.486685] printk: Suspending console(s) (use no_console_suspend to debug)
[435141.803584] ACPI: EC: interrupt blocked
[435141.909337] ACPI: EC: interrupt unblocked
[435142.241163] [drm] PCIE GART of 1024M enabled.
[435142.241174] [drm] PTB located at 0x000000F41FC00000
[435142.241207] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[435142.242161] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[435142.242998] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[435142.250275] nvme nvme0: 12/0/0 default/read/poll queues
[435142.320305] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[435142.320311] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[435142.320314] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[435142.320317] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[435142.320320] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[435142.320323] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[435142.320326] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[435142.320328] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[435142.320331] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[435142.320334] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[435142.320337] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[435142.320340] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[435142.320343] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[435142.320345] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[435142.320348] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[435144.258837] OOM killer enabled.
[435144.258843] Restarting tasks: Starting
[435144.274826] Restarting tasks: Done
[435144.274907] random: crng reseeded on system resumption
[435144.571984] PM: suspend exit
[435499.043193] PM: suspend entry (s2idle)
[435499.050993] Filesystems sync: 0.007 seconds
[435499.151936] Freezing user space processes
[435499.156718] Freezing user space processes completed (elapsed 0.004 seconds)
[435499.156727] OOM killer disabled.
[435499.156730] Freezing remaining freezable tasks
[435499.158419] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[435499.158427] printk: Suspending console(s) (use no_console_suspend to debug)
[435501.212247] ACPI: EC: interrupt blocked
[435501.310803] ACPI: EC: interrupt unblocked
[435501.640153] [drm] PCIE GART of 1024M enabled.
[435501.640162] [drm] PTB located at 0x000000F41FC00000
[435501.640197] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[435501.641675] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[435501.643300] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[435501.648006] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[435501.648011] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[435501.648015] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[435501.648018] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[435501.648021] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[435501.648024] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[435501.648027] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[435501.648029] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[435501.648032] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[435501.648035] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[435501.648038] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[435501.648041] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[435501.648043] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[435501.648046] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[435501.648049] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[435501.648957] nvme nvme0: 12/0/0 default/read/poll queues
[435503.667175] OOM killer enabled.
[435503.667182] Restarting tasks: Starting
[435503.679887] Restarting tasks: Done
[435503.679970] random: crng reseeded on system resumption
[435503.958221] PM: suspend exit
[435522.548074] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[435522.559340] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[435522.563289] wlp1s0: authenticated
[435522.565422] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[435522.573588] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[435522.580915] wlp1s0: associated
[435971.770056] wlp1s0: deauthenticating from 4a:63:58:10:0d:41 by local choice (Reason: 3=DEAUTH_LEAVING)
[435975.044568] PM: suspend entry (s2idle)
[435975.062592] Filesystems sync: 0.018 seconds
[435975.162213] Freezing user space processes
[435975.166722] Freezing user space processes completed (elapsed 0.004 seconds)
[435975.166731] OOM killer disabled.
[435975.166734] Freezing remaining freezable tasks
[435975.168350] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[435975.168373] printk: Suspending console(s) (use no_console_suspend to debug)
[435977.223723] ACPI: EC: interrupt blocked
[435977.506903] ACPI: EC: interrupt unblocked
[435978.012248] [drm] PCIE GART of 1024M enabled.
[435978.012254] [drm] PTB located at 0x000000F41FC00000
[435978.012280] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[435978.013252] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[435978.014236] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[435978.018240] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[435978.018247] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[435978.018251] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[435978.018254] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[435978.018258] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[435978.018261] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[435978.018264] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[435978.018267] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[435978.018271] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[435978.018274] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[435978.018278] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[435978.018281] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[435978.018284] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[435978.018288] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[435978.018291] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[435978.021818] nvme nvme0: 12/0/0 default/read/poll queues
[435980.043014] OOM killer enabled.
[435980.043020] Restarting tasks: Starting
[435980.065201] Restarting tasks: Done
[435980.065275] random: crng reseeded on system resumption
[435980.334189] PM: suspend exit
[435982.941077] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[435982.952306] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[435982.960862] wlp1s0: authenticated
[435982.961416] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[435982.968881] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=2)
[435982.974251] wlp1s0: associated
[435996.871179] wlp1s0: Connection to AP 4a:63:58:10:0d:41 lost
[436010.028129] PM: suspend entry (s2idle)
[436010.044469] Filesystems sync: 0.016 seconds
[436010.143511] Freezing user space processes
[436010.146642] Freezing user space processes completed (elapsed 0.003 seconds)
[436010.146648] OOM killer disabled.
[436010.146650] Freezing remaining freezable tasks
[436010.148077] Freezing remaining freezable tasks completed (elapsed 0.001 seconds)
[436010.148081] printk: Suspending console(s) (use no_console_suspend to debug)
[436012.192809] ACPI: EC: interrupt blocked
[436012.292807] ACPI: EC: interrupt unblocked
[436012.651012] [drm] PCIE GART of 1024M enabled.
[436012.651018] [drm] PTB located at 0x000000F41FC00000
[436012.651048] amdgpu 0000:03:00.0: amdgpu: SMU is resuming...
[436012.651592] amdgpu 0000:03:00.0: amdgpu: dpm has been disabled
[436012.652641] amdgpu 0000:03:00.0: amdgpu: SMU is resumed successfully!
[436012.656053] amdgpu 0000:03:00.0: amdgpu: ring gfx uses VM inv eng 0 on hub 0
[436012.656057] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.0 uses VM inv eng 1 on hub 0
[436012.656060] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.0 uses VM inv eng 4 on hub 0
[436012.656063] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.0 uses VM inv eng 5 on hub 0
[436012.656065] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.0 uses VM inv eng 6 on hub 0
[436012.656067] amdgpu 0000:03:00.0: amdgpu: ring comp_1.0.1 uses VM inv eng 7 on hub 0
[436012.656069] amdgpu 0000:03:00.0: amdgpu: ring comp_1.1.1 uses VM inv eng 8 on hub 0
[436012.656072] amdgpu 0000:03:00.0: amdgpu: ring comp_1.2.1 uses VM inv eng 9 on hub 0
[436012.656074] amdgpu 0000:03:00.0: amdgpu: ring comp_1.3.1 uses VM inv eng 10 on hub 0
[436012.656076] amdgpu 0000:03:00.0: amdgpu: ring kiq_0.2.1.0 uses VM inv eng 11 on hub 0
[436012.656079] amdgpu 0000:03:00.0: amdgpu: ring sdma0 uses VM inv eng 0 on hub 8
[436012.656081] amdgpu 0000:03:00.0: amdgpu: ring vcn_dec uses VM inv eng 1 on hub 8
[436012.656084] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc0 uses VM inv eng 4 on hub 8
[436012.656086] amdgpu 0000:03:00.0: amdgpu: ring vcn_enc1 uses VM inv eng 5 on hub 8
[436012.656088] amdgpu 0000:03:00.0: amdgpu: ring jpeg_dec uses VM inv eng 6 on hub 8
[436012.656550] nvme nvme0: 12/0/0 default/read/poll queues
[436014.656546] OOM killer enabled.
[436014.656551] Restarting tasks: Starting
[436014.671759] Restarting tasks: Done
[436014.671813] random: crng reseeded on system resumption
[436014.948621] PM: suspend exit
[436017.596393] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[436017.607625] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[436017.612014] wlp1s0: authenticated
[436017.612365] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[436017.623954] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[436017.629332] wlp1s0: associated
[437747.297323] wlp1s0: AP 4a:63:58:10:0d:41 switches to different band (5805 MHz, width:1, CF1/2: 5805/0 MHz), disconnecting
[437750.008899] wlp1s0: AP is in CSA process, reject auth
[437753.045801] wlp1s0: AP is in CSA process, reject auth
[437756.594794] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[437756.761724] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[437756.764298] wlp1s0: authenticated
[437756.765407] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[437756.771575] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[437756.785012] wlp1s0: associated
[437788.302396] usb 1-1: new high-speed USB device number 23 using xhci_hcd
[437788.434104] usb 1-1: New USB device found, idVendor=04e8, idProduct=6860, bcdDevice= 5.04
[437788.434120] usb 1-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[437788.434125] usb 1-1: Product: SAMSUNG_Android
[437788.434130] usb 1-1: Manufacturer: SAMSUNG
[437788.434134] usb 1-1: SerialNumber: R5GL41JDA7Z
[437788.504284] cdc_acm 1-1:1.1: ttyACM0: USB ACM device
[437797.386786] usb 1-1: USB disconnect, device number 23
[438077.294660] usb 1-1: new high-speed USB device number 25 using xhci_hcd
[438077.421832] usb 1-1: New USB device found, idVendor=10d6, idProduct=1101, bcdDevice= 1.00
[438077.421850] usb 1-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[438077.421858] usb 1-1: Product: HS USB FlashDisk
[438077.421864] usb 1-1: Manufacturer: ACTIONS
[438077.421870] usb 1-1: SerialNumber: CAcdefghijklm...
[438077.424140] usb-storage 1-1:1.0: USB Mass Storage device detected
[438077.424811] scsi host0: usb-storage 1-1:1.0
[438078.463651] scsi 0:0:0:0: Direct-Access     ACTIONS  USB DISK FOB 2.0 0    PQ: 0 ANSI: 0 CCS
[438078.464489] sd 0:0:0:0: Attached scsi generic sg0 type 0
[438078.465387] sd 0:0:0:0: [sda] 122138624 512-byte logical blocks: (62.5 GB/58.2 GiB)
[438078.465586] sd 0:0:0:0: [sda] Write Protect is off
[438078.465594] sd 0:0:0:0: [sda] Mode Sense: 00 c0 00 00
[438078.465791] sd 0:0:0:0: [sda] Write cache: disabled, read cache: disabled, doesn't support DPO or FUA
[438078.493634]  sda: sda1
[438078.494049] sd 0:0:0:0: [sda] Attached SCSI removable disk
[438221.291302] usb 1-1: USB disconnect, device number 25
[438944.437429] audit: type=1400 audit(1792501205.178:493): apparmor="DENIED" operation="open" class="file" profile="snap.firmware-updater.firmware-notifier" name="/proc/sys/vm/max_map_count" pid=2269182 comm="firmware-notifi" requested_mask="r" denied_mask="r" fsuid=1000 ouid=0
[439062.306784] wlp1s0: AP 4a:63:58:10:0d:41 switches to different band (2462 MHz, width:1, CF1/2: 2462/0 MHz), disconnecting
[439065.043317] wlp1s0: AP is in CSA process, reject auth
[439068.033637] wlp1s0: authenticate with 4a:63:58:10:0d:41 (local address=10:6f:d9:9d:4f:91)
[439068.044819] wlp1s0: send auth to 4a:63:58:10:0d:41 (try 1/3)
[439068.048728] wlp1s0: authenticated
[439068.049384] wlp1s0: associate with 4a:63:58:10:0d:41 (try 1/3)
[439068.056529] wlp1s0: RX AssocResp from 4a:63:58:10:0d:41 (capab=0x411 status=0 aid=1)
[439068.069843] wlp1s0: associated
[439113.221722] Buffer I/O error on dev sda1, logical block 0, lost sync page write
[439222.084055] wlp1s0: Connection to AP 4a:63:58:10:0d:41 lost
[439240.084549] wlp1s0: authenticate with e2:9c:fd:da:08:bc (local address=10:6f:d9:9d:4f:91)
[439240.094527] wlp1s0: send auth to e2:9c:fd:da:08:bc (try 1/3)
[439240.098656] wlp1s0: authenticated
[439240.100026] wlp1s0: associate with e2:9c:fd:da:08:bc (try 1/3)
[439240.107560] wlp1s0: RX AssocResp from e2:9c:fd:da:08:bc (capab=0x1531 status=0 aid=11)
[439240.120944] wlp1s0: associated
```

# how to export recording from philips vtr5170 to ubuntu

## how to export recording from philips vtr5170 to ubuntu

To export recordings from your

**[Philips VTR5170 Digital Voice Tracer](https://www.google.com/search?ibp=oshop\&prds=pvt%3Ahg%2Cpvo%3A29%2CimageDocid%3A9775921147296648554%2CheadlineOfferDocid%3A4386147932685418221%2CproductDocid%3A4386147932685418221\&q=product\&sa=X\&ved=2ahUKEwiXl8DezciXAxUVklYBHexkDq8Qxa4PeggIAggBCAgQAQ\&gl=us)**

to **Ubuntu Linux**, you do not need any special software or drivers. The device operates as a standard **USB Mass Storage** device, meaning Ubuntu will recognize it just like a regular USB flash drive.

Follow these steps to transfer your files:

### Step 1: Connect the Device

1. Turn on your\
   [Philips VTR5170 recorder](https://www.google.com/search?ibp=oshop\&prds=pvt%3Ahg%2Cpvo%3A29%2CimageDocid%3A2315054169814917685%2CheadlineOfferDocid%3A6156589093952148902%2CproductDocid%3A6156589093952148902\&q=product\&sa=X\&ved=2ahUKEwiXl8DezciXAxUVklYBHexkDq8Qxa4PeggIAggBCA4QAg\&gl=us)\
   .
2. Connect the recorder to your Ubuntu computer using the supplied **Micro-USB to USB cable**.
3. The device's screen should update to show a USB connection or battery charging icon. [link](https://www.dictation.philips.com/fileadmin/Products/dvt2110/ifu/en/device-and-data-management.html)

### Step 2: Access the Files in Ubuntu

1. Open the **Files** application (Ubuntu's default file manager, Nautilus).
2. Look at the left sidebar under the **"Devices"** or **"Other Locations"** section.
3. You will see a newly mounted external drive, typically named **"VoiceTracer"** or **"**

**[VTR5170](https://www.google.com/search?ibp=oshop\&prds=pvt%3Ahg%2Cpvo%3A29%2CimageDocid%3A9775921147296648554%2CheadlineOfferDocid%3A4386147932685418221%2CproductDocid%3A4386147932685418221\&q=product\&sa=X\&ved=2ahUKEwiXl8DezciXAxUVklYBHexkDq8Qxa4PeggIAggBCBIQBA\&gl=us)**

**"**. Click on it to open it. [link](https://www.dictation.philips.com/fileadmin/Products/dvt2110/ifu/en/device-and-data-management.html)

### Step 3: Locate and Copy Your Recordings

1. Navigate through the folders on the device. Philips voice recorders usually store files in a root directory or designated subfolders labeled **"RECORD"**, **"VOICE"**, or specific folder letters (e.g., Folder A, B, C).
2. Highlight the audio files you want to export (they are usually in `.mp3` or `.wav` format).
3. **Right-click and copy** the files, or simply **drag and drop** them into a local directory on your computer, such as your `Music` or `Documents` folder. [link](https://www.philips.ie/c-f/XC000011747/how-to-transfer-recordings-from-my-philips-player-to-my-pc)

### Step 4: Safely Disconnect

1. Once the transfer is complete, go back to the left sidebar of the **Files** application.
2. Click the **Eject** icon (a small triangle with a line under it) next to the Philips device name.
3. Wait for the notification that it is safe to remove the device, then unplug the USB cable.

### Troubleshooting Audio Formats

If your Ubuntu system has trouble playing back the transferred files, you may need to install the multimedia codecs for MP3/WAV playback. You can quickly add them by opening your terminal (`Ctrl`+`Alt`+`T`) and running:

bash

```
sudo apt update && sudo apt install ubuntu-restricted-extras
```

Use code with caution.

Are you having any trouble getting Ubuntu to **detect the device**, or do you need help **converting the audio format** of the recordings once they are on your computer?

- [link](https://www.dictation.philips.com/fileadmin/Products/dvt2110/ifu/en/device-and-data-management.html)\
  Philips dictation\
  Device and data management\
  Select the desired files from one of the folders and copy, cut or drag them to the desired location on your computer.
- [link](https://www.philips.ie/c-f/XC000011747/how-to-transfer-recordings-from-my-philips-player-to-my-pc)\
  Philips.ie\
  How to transfer recordings from my Philips player to my PC?

1. Connect your player to your computer. Select the Open folder to view files. Find the corresponding folders. Select the folder R...

- [link](https://www.youtube.com/watch?v=v%5FYRois%5FGmo\&t=34)\
  YouTube·Certified eSupport\
  How to Manually Transfer Files from a Digital Voice Recorder\
  Feb 5, 2016 — Philips devices may list them in a root directory or specific subfolders. Once the files are located, select the desired dictation...\
  18s

## why doesnt it show up

If your

[Philips VTR5170](https://www.google.com/search?ibp=oshop\&prds=pvt%3Ahg%2Cpvo%3A29%2CimageDocid%3A2315054169814917685%2CheadlineOfferDocid%3A6156589093952148902%2CproductDocid%3A6156589093952148902\&q=product\&sa=X\&ved=2ahUKEwiowrH4zciXAxVlk1YBHaxINQ4Qxa4PegYIAAgMEAE\&gl=us)

is not appearing as a drive in Ubuntu, the issue usually boils down to a **bad/charge-only cable**, a **hardware connection glitch**, or a **USB compatibility bug**. [link](https://www.dictation.philips.com/fileadmin/Products/lfh7445/ifu/extensions/en/known-issues.html)

Because it doesn't require any drivers, your system is failing to see the physical connection. Run through these checks to fix it: [link](https://www.dictation.philips.com/fileadmin/Products/dvt2110/ifu/en/device-and-data-management.html)

### 1. Swap the Cable (The Most Common Culprit)

Many Micro-USB cables are **charge-only** cables meant for power banks or cheap electronics. They lack the internal data wiring required to transfer files.

- Try using a different Micro-USB cable—ideally one that you know works for transferring files from another device (like an older phone or camera).

### 2. Check Ubuntu's Terminal Detection

We can bypass the file manager entirely to see if Ubuntu's kernel can detect the hardware at all.

1. Unplug the recorder.

2. Open your terminal (`Ctrl`+`Alt`+`T`).

3. Run this command to watch system messages live:\
   bash

<!---->

```
sudo dmesg -w
```

Use code with caution.
4\. Plug the recorder in while watching the terminal screen.

- **If new text pops up:** Look for lines mentioning `USB Mass Storage device` or assigning a label like `sdb` or `sdc`. If you see this, the device is detected, but just isn't mounting automatically.
- **If absolutely nothing happens:** The computer doesn't even know something was plugged in. Go back to step 1 (bad cable) or try a different physical USB port.

### 3. Switch to a USB 2.0 Port

Philips dictation devices can sometimes fail to negotiate connections properly with newer **USB 3.0 or 3.1 ports** on Linux machines. [link](https://www.dictation.philips.com/fileadmin/Products/lfh7445/ifu/extensions/en/known-issues.html)

- If your computer has a mix of ports, try plugging it into a older **USB 2.0 port** (usually colored **black**, whereas USB 3.0 ports are **blue**).
- Avoid plugging the device into an external USB hub; plug it directly into the computer's motherboard or chassis port.

### 4. Force a Hard Reset on the Recorder

If the internal controller of the

[VTR5170](https://www.google.com/search?ibp=oshop\&prds=pvt%3Ahg%2Cpvo%3A29%2CimageDocid%3A2315054169814917685%2CheadlineOfferDocid%3A6156589093952148902%2CproductDocid%3A6156589093952148902\&q=product\&sa=X\&ved=2ahUKEwiowrH4zciXAxVlk1YBHaxINQ4Qxa4PegYIAAgeEAE\&gl=us)

is frozen, it might charge while refusing to initiate the USB protocol. [link](https://www.dictation.philips.com/fileadmin/Products/dvt2110/ifu/en/troubleshooting.html)

- Find a paperclip or a small pin and gently press the **Reset button** on the side of the device. This will reboot the recorder's internal operating system safely without deleting your recordings. Try connecting it to the computer again after it restarts. [link](https://www.dictation.philips.com/fileadmin/Products/dvt4115/ifu/en/your-voicetracer-audio-recorder.html)

Did running the `dmesg -w` command print out any lines of text when you plugged the recorder in, or did it remain completely blank?

- [link](https://www.dictation.philips.com/fileadmin/Products/lfh7445/ifu/extensions/en/known-issues.html)\
  Philips dictation\
  Known issues\
  Linux: USB 3.0 ports are unsupported for audio/dictation devices; firmware updates, DPM microphone use unsupported;
- [link](https://www.dictation.philips.com/fileadmin/Products/dvt2110/ifu/en/device-and-data-management.html)\
  Philips dictation\
  Device and data management\
  Device Reset: Press reset button with a paper clip; hold Power switch down for three seconds to restart.
- [link](https://www.dictation.philips.com/fileadmin/Products/dvt2110/ifu/en/troubleshooting.html)\
  Philips dictation\
  Troubleshooting\
  Settings & Operation: Change recording scene for low volume disable Auto off via Device settings; clear filters if recordings are ...

Show all

## it's blank, and the recorder sometimes wants to play some recordings instead of transferring

Because `dmesg -w` is staying **completely blank**, it means Ubuntu is not detecting any physical or electrical signal coming from the port. When the recorder plays back audio instead of connecting, it confirms that the device thinks it is running on standard battery power or plugged into a basic wall charger, completely unaware that a computer is on the other end.

This points directly to a hardware layer failure. Resolve it by trying the following:

### 1. Change the Mode on the Recorder (If Applicable)

Some firmware versions of the Philips VTR series require the device to be **powered off** before you plug it into a computer, or they will prompt you on the screen to choose a connection mode. [link](https://www.dictation.philips.com/fileadmin/Products/dvt4115/ifu/en/troubleshooting.html)

- **Turn off the recorder completely.**
- Plug the cable into the computer first, and then plug it into the recorder while it is off. See if the screen changes to a "USB" or "PC" connection screen automatically.
- If a menu pops up asking for **"Charge Only"** or **"PC Connection / Storage"**, use the volume or navigation arrows to select the storage mode and press the record/play button to confirm. [link](https://www.dictation.philips.com/popups/faq-popup/?faqId=2297\&productId=902\&cHash=a0cb41c3ea5ea1b618d84fad782fc8b6)

### 2. The Cable is Power-Only

Even if the cable came in the box or charges the device, many Micro-USB/USB-C cables lack the physical data wires inside. If data pins aren't connecting, the recorder assumes it's plugged into a wall outlet and stays in playback mode. [link](https://www.dictation.philips.com/fileadmin/Products/dvt2110/ifu/en/troubleshooting.html)

- You **must** try a different cable that is explicitly verified for data transfer (such as a cable used to sync an Android phone, a Kindle, or an external hard drive to a computer).

### 3. Dust in the Port

Because these recorders sit in pockets or bags, lint easily packs into the bottom of the recorder's USB port. This lint acts as a wedge, allowing the slightly longer power pins to connect but blocking the shorter data pins.

- Take a wooden toothpick or a non-metallic pin and gently scrape the inside of the recorder's USB port to see if any pocket lint comes out.

### 4. Bypassing the Kernel

If you try a known good data cable and `dmesg -w` still prints absolutely nothing, the physical USB port on the computer or the recorder itself may be loose or faulty. Try moving the cable to a port on the **back of the computer tower** (if using a desktop) as front ports are notorious for dropping connection signals.

Once you **turn the recorder off completely** and plug it in, does the screen display a computer connection graphic, or does it still just boot up normally and try to play audio?

- [link](https://www.dictation.philips.com/fileadmin/Products/dvt2110/ifu/en/troubleshooting.html)\
  Philips dictation\
  Troubleshooting\
  Troubleshooting: Device not turning on (charge battery); use USB-C to A/C cables; record during charge by holding Record for 2 sec...
- [link](https://www.dictation.philips.com/fileadmin/Products/dvt4115/ifu/en/troubleshooting.html)\
  Philips dictation\
  Troubleshooting\
  Connectivity & Firmware: Uses USB Type-C; update firmware by copying unzipped file to device root with >=30% battery; record durin...
- [link](https://www.philips.ca/c-t/XC000007161/my-philips-device-does-not-recognize-files-on-usb)\
  Philips - Canada\
  My Philips device does not recognize files on USB\
  Make sure your USB is formatted in the correct file system; suggest using more common file system such as FAT12, FAT16 or FAT32. U...

Show all

## the cable does work to connect my phone and transfer files. it doesnt make the recordings show up.

Since the cable successfully handles data transfer with your phone, it rules out a bad wire. The fact that the recorder tries to play back audio instead of acknowledging the computer means <mark><strong>the recorder's micro-USB port pins are failing to negotiate the connection</strong>, or the device is locked in standard operation mode</mark>.

To bypass this and force it into storage mode, follow these steps in this exact order:

### 1. Force the "Power-Off Connection" sequence

The

[VTR5170](https://www.google.com/search?ibp=oshop\&prds=pvt%3Ahg%2Cpvo%3A29%2CimageDocid%3A11974050843841176320%2CheadlineOfferDocid%3A12496446634413629882%2CproductDocid%3A12496446634413629882\&q=product\&sa=X\&ved=2ahUKEwjy3fWmz8iXAxXnqFYBHQAOK1gQxa4PegYIAAgOEAE\&gl=us)

handles connection protocols differently depending on whether it is awake or asleep when plugged in.

1. Unplug the recorder from the cable.
2. Turn the recorder **completely off** using its power switch.
3. Plug the USB cable into your Ubuntu computer first.
4. While the recorder is still powered off, plug the micro-USB end into the device.

_If this works:_ The power from the computer's USB port should force the recorder to boot directly into a specialized **"PC" or "USB Link" mode** automatically, preventing it from letting you browse or play recordings manually. [link](https://www.youtube.com/watch?v=KJ92lRa7M1k)

### 2. Check the Hold/Lock Switch

If the recorder has its physical hardware **Hold/Lock** switch turned on, it will reject automated USB commands from external operating systems to protect its state. [link](https://www.bhphotovideo.com/lit%5Ffiles/344151.pdf)

- Ensure the physical sliding lock button (usually on the side) is completely in the **unlocked** position before plugging it into the computer.

### 3. Check for a Hidden USB Setting

Some firmware variations of the Philips VTR series have a settings toggle that forces the USB port to act strictly as a power inlet.

1. Disconnect the recorder and turn it on.
2. Go to the stop screen, and press or hold the **Menu / Settings** button to open the system menu.
3. Look for a sub-menu named **Device Settings**, **System**, or **USB Mode**.
4. If you find a setting for USB, ensure it is set to **"PC Connection"** or **"Mass Storage"** rather than "Charge Only". [link](https://www.bhphotovideo.com/lit%5Ffiles/344151.pdf)

### 4. Hardware Workaround: Use a MicroSD Card Reader

The

[Philips VTR5170](https://www.google.com/search?ibp=oshop\&prds=pvt%3Ahg%2Cpvo%3A29%2CimageDocid%3A2315054169814917685%2CheadlineOfferDocid%3A6156589093952148902%2CproductDocid%3A6156589093952148902\&q=product\&sa=X\&ved=2ahUKEwjy3fWmz8iXAxXnqFYBHQAOK1gQxa4PegYIAAgfEAE\&gl=us)

features a **MicroSD expansion card slot** on the side. If the micro-USB data pins inside the recorder's port are physically bent or broken (which still allows charging but permanently kills data connections), you can bypass the recorder entirely:

1. Insert a MicroSD card into the recorder.
2. Use the recorder's internal menu to **Copy/Move** your recordings from the Internal Memory over to the "Card Memory".
3. Pop the MicroSD card out of the recorder.
4. Plug the MicroSD card into your Ubuntu computer using an SD card adapter or a USB card reader. Ubuntu will instantly mount it as a flash drive, allowing you to pull the files off perfectly.

- [link](https://www.bhphotovideo.com/lit%5Ffiles/344151.pdf)\
  B\&H Photo Video\
  VoiceTracer\
  1 In stop mode, press and hold the Menu button . 3 Press the Menu button to select Date/time. To return to the stop mode screen, p...
- [link](https://www.notice-facile.com/en/manual/941040/philips+voice-tracer-vtr5810)\
  Notice Facile\
  Dictaphone PHILIPS Voice Tracer VTR5810\
  Connect the device to a PC via USB cable. The recorder will be recognized as a USB mass storage device (no software needed). You c...
- [link](https://www.youtube.com/watch?v=KJ92lRa7M1k)\
  YouTube·Philips Dictation\
  Philips VoiceTracer Audio Recorder DVT1170 Tutorial How to ...\
  Apr 29, 2026 — To connect the device to a PC, use the included USB-C cable; "PC" will appear on the screen, allowing file transfer. To turn the d...\
  3:20

## why only the builtin cable works

The reason your phone cable works for the phone but completely fails on the recorder comes down to <mark>a known hardware quirk in modern smartphones called<span> </span><strong>Muxing / OTG (On-The-Go) configuration</strong><span>, combined with the strict power requirements of the<span> </span><div><div><a role="link" tabindex="0" aria-describedby="pvlink-desc-rGLXarnwOtCdvr0Ptd6agQs_kqr5ey_2" href="https://www.google.com/search?ibp=oshop&amp;prds=pvt%3Ahg%2Cpvo%3A29%2CimageDocid%3A2315054169814917685%2CheadlineOfferDocid%3A6156589093952148902%2CproductDocid%3A6156589093952148902&amp;q=product&amp;sa=X&amp;ved=2ahUKEwi59q6r0MiXAxXQjq8BHTWvJrAQxa4PegYIAAgMEAI&amp;gl=us"><span>Philips VTR5170 recorder</span></a></div></div></span></mark>. [link](https://m.tvcmall.com/details/philips-vtr5170-64gb-voice-recorder-hd-noise-cancelling-audio-digital-recording-device-for-meeting-black-sku6816000774a.html)

This issue occurs due to three specific technical reasons:

### 1. The Phone Cable Uses "E-Marker" or Power Delivery (PD) Smart Chips

Modern phone cables (especially USB-C to USB-C or high-speed Type-A to Type-C cables) are **active cables**. They contain tiny microchips inside the connector plugs that talk to your smartphone and computer to negotiate exactly how much power and what speed to use.

[Philips VTR5170$37.15Shein](https://www.google.com/search?ibp=oshop\&prds=pvt%3Ahg%2Cpvo%3A29%2CimageDocid%3A2315054169814917685%2CheadlineOfferDocid%3A6156589093952148902%2CproductDocid%3A6156589093952148902\&q=product\&sa=X\&ved=2ahUKEwi59q6r0MiXAxXQjq8BHTWvJrAQgLcPegYIAAgSEAE\&gl=us)

**The conflict:** The

[Philips VTR5170](https://www.google.com/search?ibp=oshop\&prds=pvt%3Ahg%2Cpvo%3A29%2CimageDocid%3A2315054169814917685%2CheadlineOfferDocid%3A6156589093952148902%2CproductDocid%3A6156589093952148902\&q=product\&sa=X\&ved=2ahUKEwi59q6r0MiXAxXQjq8BHTWvJrAQxa4PegYIAAgSEAk\&gl=us)

uses a basic, passive USB controller designed for standard 5V/500mA USB 2.0 power inputs. When you plug a smart phone cable into it, the recorder does not know how to "talk" to the cable's internal chip. Because the handshake fails, the cable defaults to **power-only mode**, refusing to open up the data lanes. The recorder assumes it's plugged into a wall outlet and remains in playback mode. [link](https://www.lazada.com.ph/products/philips-philips-vtr5170-voice-recorder-087-inch-screen-high-quality-recording-smart-noise-reduction-for-meeting-record-student-learning-i15513276422.html)

### 2. Physical Pin Alignment (The "Shorter Pin" Issue)

Phone cables are built with deeper, more insulated channels to protect the hardware from high-voltage fast charging. Audio recorders have much shallower USB ports. When you plug a thick phone cable into the recorder, it may charge it perfectly fine (because the outer power pins touch), but the inner data pins (D+ and D-) are physically failing to bridge the connection.

### 3. Missing OTG Resistor

Your phone relies on a system that tells it whether it is acting as a "Host" (the computer) or a "Device" (the accessory). Phone cables are wired specifically to pass this signal. The Philips recorder does not use this protocol. When it receives the host signal from a phone cable, its system gets confused and fails to initialize.

### 💡 The Solution to Find Your Recordings

Because your phone cable cannot establish a data link, Ubuntu will never see the files using it. To export your files, you must use **the short, basic USB cable that came in the box with the Philips recorder**, or any **cheap, older "dumb" USB-A to USB-C cable** (like one from an old desktop mouse, keyboard, or cheap desk fan) that lacks fast-charging chips. [link](https://www.dictation.philips.com/fileadmin/Products/dvt2110/ifu/en/device-and-data-management.html)

Once you plug it in with a basic passive cable and `dmesg -w` registers the connection, the files will appear in Ubuntu under this file path:

- **`VoiceTracer` (Drive) ➡️ `RECORD` or `VOICE` (Folder)** [link](https://www.philips.com.au/c-f/XC000011813/how-to-transfer-voice-recordings-from-my-philips-player-to-my-pc)

Do you have access to the **original cable** that came with the Philips recorder, or an **older USB-A type cable** you can try instead of your phone cable? [link](https://www.dictation.philips.com/fileadmin/Products/dvt2110/ifu/en/device-and-data-management.html)

- [link](https://www.dictation.philips.com/fileadmin/Products/dvt2110/ifu/en/device-and-data-management.html)\
  Philips dictation\
  Device and data management - Philips dictation\
  Connect the device to the computer via the supplied USB cable. Double-click the VoiceTracer drive. ... \* Select the desired files ...
- [link](https://m.tvcmall.com/details/philips-vtr5170-64gb-voice-recorder-hd-noise-cancelling-audio-digital-recording-device-for-meeting-black-sku6816000774a.html)\
  TVCMALL\
  PHILIPS VTR5170 64GB Voice Recorder HD Noise ...\
  Internal Memory: 64GB options \* Screen Size: 0.87 inch \* Battery Capacity: 180mAh \* Recording Time: 14 hours (64GB) \* Charging Met...
- [link](https://www.lazada.com.ph/products/philips-philips-vtr5170-voice-recorder-087-inch-screen-high-quality-recording-smart-noise-reduction-for-meeting-record-student-learning-i15513276422.html)\
  Lazada Philippines\
  Philips VTR5170 Voice Recorder 0.87 inch Screen High\
  1\. Do not expose this device to water and moisture to avoid short circuit. 2. Do not expose this device to any heating device. 3. ...

Show all

## what are compatible cables like this called

These compatible cables are most commonly called <mark><strong>USB Data Cables</strong><span> </span>or<span> </span><strong>Standard USB 2.0 Cables</strong></mark>, but the most accurate technical term you should look for is a **Passive USB Cable**.

Unlike modern smartphone cables, these do not contain any internal microchips (which are called **E-Markers** or **Power Delivery chips**). They are completely "dumb" wires that physically bridge the data connection between the device and your computer without trying to negotiate high-speed charging.

When searching for a replacement, look for cables with the following specifications:

- **USB 2.0 Only:** Avoid cables labeled USB 3.0, 3.1, or "Fast Charging." USB 2.0 cables are highly compatible with legacy audio controllers.
- **A-to-C or A-to-Micro (Depending on your port):** If your recorder uses a Type-C port, look for a standard **USB-A to USB-C cable**. USB-A ends naturally lack the smart Power Delivery negotiation chips that cause the handshake to fail on audio recorders.
- **"Data Sync and Charge":** Ensure the listing explicitly says it supports "Data Sync" or "Data Transfer" and isn't just a cheap "Charge Only" power cable.

A great place to find these cables for free is to look for the cables that come bundled inside the box with low-power electronics like standard desktop computer mice, keyboards, basic desk fans, or older non-fast-charging e-readers.

Would you like me to help you find a **specific link or product listing** for a compatible passive USB cable online?

## can i buy a type c to type c that works this way

<mark><strong><span>Yes, you can absolutely buy a Type-C to Type-C cable that will work, but you have to check the specifications very carefully.</span></strong></mark>

Most high-end Type-C cables have **E-Marker chips** that cause the handshake to fail on your audio recorder. However, standard **USB 2.0 Type-C to Type-C cables rated for 60W (3 Amps) or less** are technically allowed to be "passive" and completely chip-free under official USB-IF guidelines. [link](https://community.infineon.com/t5/Knowledge-Base-Articles/Maximum-length-of-the-cable-for-applications-in-USB-Type-C/ta-p/250571)

When shopping for a Type-C to Type-C cable that works with legacy devices like the Philips recorder, look for these three rule-of-thumb specs:

- **Speed Rating:** It must explicitly say **USB 2.0** or **480 Mbps**. Avoid any cables labeled USB 3.0, USB 3.1, USB4, Gen 1, Gen 2, or Thunderbolt. [link](https://www.bestbuy.com/site/shop/usb-c-for-data-transfer)
- **Power Rating:** Choose a cable capped at **60W or 3A**. If a cable claims 100W or 240W, it is legally required by USB standards to include a smart E-Marker chip, which will block your recorder from connecting. [link](https://community.infineon.com/t5/Knowledge-Base-Articles/Maximum-length-of-the-cable-for-applications-in-USB-Type-C/ta-p/250571)
- **Avoid "Super Fast Charging" labels:** Look for standard charging or basic data sync cables.

### Recommended Options

If you want to purchase an inline, compliant Type-C to Type-C option that strips out the smart handshake protocols, these options fit the passive USB 2.0 profile:

[Anker 322 USB-C to USB-C Cable$9.99Micro Center4.8(99)](https://www.google.com/search?ibp=oshop\&prds=pvt%3Ahg%2Cpvo%3A29%2Cmid%3A576462567125637103%2CimageDocid%3A17278674511079228748%2Cgpcid%3A14748727969270805826%2CheadlineOfferDocid%3A2795444327779539946%2Ccatalogid%3A3789916025306278751%2CproductDocid%3A6401269742929590747%2Crds%3APC%5F14748727969270805826%7CPROD%5FPC%5F14748727969270805826\&q=product\&sa=X\&ved=2ahUKEwiPya6N0ciXAxUedvUHHTuPKRAQgLcPegYIAAgcEAE\&gl=us)

A standard USB 2.0 baseline cable with a 480 Mbps transfer rate and basic 60W power delivery capability. Because it lacks complex e-marking protocols required by higher speeds, it acts as a basic passive bridge. You can check options or buy online via the [Anker Official Store](https://www.anker.com/) or pick it up at electronics retailers like [Micro Center](https://www.microcenter.com/).

***

[Tripp Lite USB 2.0 Type-C Cable$8.23Rackfinity.com& more5.0(10)](https://www.google.com/search?ibp=oshop\&prds=pvt%3Ahg%2Cpvo%3A29%2Cmid%3A576462777170625625%2CimageDocid%3A6988649215074615270%2Cgpcid%3A2873150372351404064%2CheadlineOfferDocid%3A17681445089367374302%2Ccatalogid%3A1910270736955527892%2CproductDocid%3A6068295325505586947%2Crds%3APC%5F2873150372351404064%7CPROD%5FPC%5F2873150372351404064\&q=product\&sa=X\&ved=2ahUKEwiPya6N0ciXAxUedvUHHTuPKRAQgLcPegYIAAgcEA4\&gl=us)

A purely legacy-focused Type-C to Type-C cable designed strictly for the older USB 2.0 standard. It explicitly relies on standard copper wiring without advanced power management components, making it highly compatible with basic audio accessories and dictation hardware. Available through IT suppliers like [Rackfinity](https://www.rackfinity.com/).

### 💡 An Alternative Fix: A "Dumb" Adapter

If you want to use the high-speed Type-C to Type-C smartphone cables you already own, you can buy a tiny, cheap **USB-C Female to USB-C Male "Data Blocker" or basic legacy adapter**. This acts as a physical barrier that severs the smart configuration pins (CC pins) completely, forcing any smart cable to act like a legacy, non-chipped wire.

Would you prefer to order a **new dedicated USB 2.0 Type-C cable**, or should we look at a **cheap physical adapter** so you can keep using your existing phone cables?

- [link](https://www.bestbuy.com/site/shop/usb-c-for-data-transfer)\
  Best Buy\
  USB-C For Data Transfer - Best Buy\
  USB 3.1 Gen 1 supports up to 5 Gbps, USB 3.1 Gen 2 up to 10 Gbps, and USB4 or Thunderbolt 3/4 can reach up to 40 Gbps. Always chec...
- [link](https://community.infineon.com/t5/Knowledge-Base-Articles/Maximum-length-of-the-cable-for-applications-in-USB-Type-C/ta-p/250571)\
  Infineon Developer Community\
  Maximum length of the cable for applications in USB Type-C\
  Apr 20, 2025 — USB Type-C specification recommends a maximum cable length of 4 meters for passive cables. However, depending on the power deliver...
- [link](https://www.ti.com/lit/pdf/ssztbj8)\
  Texas Instruments\
  USB Type\
  Supports USB 2.0 and USB. USB 2.0 Type-C cable with a USB 2.0 Type-C plug at both ends – Supports USB 2.0 data operation (does not...

Show all

