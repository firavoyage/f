# . report

```sh
 ~ % on_ac_power; echo $?

0
 ~ % upower -i /org/freedesktop/UPower/devices/line_power_AC

  native-path:          (null)
  power supply:         no
  updated:              Thu 01 Jan 1970 08:00:00 AM CST (1783594756 seconds ago)
  has history:          no
  has statistics:       no
  unknown
    warning-level:       unknown
    battery-level:       unknown
    percentage:          0% (should be ignored)
    icon-name:          '(null)'

 ~ % upower -i /org/freedesktop/UPower/devices/battery_BAT0

  native-path:          BAT0
  vendor:               SMP
  model:                L19M4PF7
  serial:               712
  power supply:         yes
  updated:              Thu 09 Jul 2026 06:59:18 PM CST (3 seconds ago)
  has history:          yes
  has statistics:       yes
  battery
    present:             yes
    rechargeable:        yes
    state:               charging
    warning-level:       none
    energy:              12.38 Wh
    energy-empty:        0 Wh
    energy-full:         42.56 Wh
    energy-full-design:  50 Wh
    energy-rate:         2.63 W
    voltage:             7.668 V
    charge-cycles:       557
    time to full:        11.5 hours
    percentage:          29%
    capacity:            85.12%
    technology:          lithium-ion
    icon-name:          'battery-low-charging-symbolic'
  History (rate):
    1783594758  2.630   charging
    1783594728  2.821   charging
    1783594698  7.877   charging
    1783594668  6.918   charging
```

```sh
 ~ % upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep -E "state|energy-rate|percentage|time to"

    state:               charging
    energy-rate:         17.374 W
    time to full:        1.5 hours
    percentage:          37%
 ~ % echo "=== 1. AC POWER STATUS ===" && on_ac_power; echo "Exit Status (0=AC, 1=Battery): $?" && echo "" && echo "=== 2. FULL UPOWER AC DETAILS ===" && upower -i /org/freedesktop/UPower/devices/line_power_AC && echo "" && echo "=== 3. FULL UPOWER BATTERY DETAILS ===" && upower -i /org/freedesktop/UPower/devices/battery_BAT0 && echo "" && echo "=== 4. FULL CPU FREQUENCY REPORT ===" && lscpu

=== 1. AC POWER STATUS ===
Exit Status (0=AC, 1=Battery): 0

=== 2. FULL UPOWER AC DETAILS ===
  native-path:          (null)
  power supply:         no
  updated:              Thu 01 Jan 1970 08:00:00 AM CST (1783595562 seconds ago)
  has history:          no
  has statistics:       no
  unknown
    warning-level:       unknown
    battery-level:       unknown
    percentage:          0% (should be ignored)
    icon-name:          '(null)'


=== 3. FULL UPOWER BATTERY DETAILS ===
  native-path:          BAT0
  vendor:               SMP
  model:                L19M4PF7
  serial:               712
  power supply:         yes
  updated:              Thu 09 Jul 2026 07:12:28 PM CST (14 seconds ago)
  has history:          yes
  has statistics:       yes
  battery
    present:             yes
    rechargeable:        yes
    state:               charging
    warning-level:       none
    energy:              15.8 Wh
    energy-empty:        0 Wh
    energy-full:         42.56 Wh
    energy-full-design:  50 Wh
    energy-rate:         15.667 W
    voltage:             7.969 V
    charge-cycles:       557
    time to full:        1.7 hours
    percentage:          37%
    capacity:            85.12%
    technology:          lithium-ion
    icon-name:          'battery-good-charging-symbolic'
  History (charge):
    1783595487  37.000  charging
  History (rate):
    1783595548  15.667  charging
    1783595518  17.374  charging
    1783595487  17.286  charging
    1783595479  13.231  charging
    1783595449  16.247  charging


=== 4. FULL CPU FREQUENCY REPORT ===
Architecture:                x86_64
  CPU op-mode(s):            32-bit, 64-bit
  Address sizes:             48 bits physical, 48 bits virtual
  Byte Order:                Little Endian
CPU(s):                      12
  On-line CPU(s) list:       0-11
Vendor ID:                   AuthenticAMD
  Model name:                AMD Ryzen 5 5600U with Radeon Graphics
    CPU family:              25
    Model:                   80
    Thread(s) per core:      2
    Core(s) per socket:      6
    Socket(s):               1
    Stepping:                0
    Frequency boost:         enabled
    CPU(s) scaling MHz:      87%
    CPU max MHz:             4291.7529
    CPU min MHz:             413.6630
    BogoMIPS:                4591.48
    Flags:                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht sysc
                             all nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl xtopology nonstop_tsc cpuid extd_apic
                             id aperfmperf rapl pni pclmulqdq monitor ssse3 fma cx16 sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdr
                             and lahf_lm cmp_legacy svm extapic cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw ibs skinit wdt tce
                              topoext perfctr_core perfctr_nb bpext perfctr_llc mwaitx cpb cat_l3 cdp_l3 hw_pstate ssbd mba ibrs ibpb
                             stibp vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid cqm rdt_a rdseed adx smap clflushopt clwb sha_ni
                             xsaveopt xsavec xgetbv1 xsaves cqm_llc cqm_occup_llc cqm_mbm_total cqm_mbm_local user_shstk clzero irperf
                              xsaveerptr rdpru wbnoinvd cppc arat npt lbrv svm_lock nrip_save tsc_scale vmcb_clean flushbyasid decodea
                             ssists pausefilter pfthreshold avic v_vmsave_vmload vgif v_spec_ctrl umip pku ospke vaes vpclmulqdq rdpid
                              overflow_recov succor smca fsrm debug_swap
Virtualization features:
  Virtualization:            AMD-V
Caches (sum of all):
  L1d:                       192 KiB (6 instances)
  L1i:                       192 KiB (6 instances)
  L2:                        3 MiB (6 instances)
  L3:                        16 MiB (1 instance)
NUMA:
  NUMA node(s):              1
  NUMA node0 CPU(s):         0-11
Vulnerabilities:
  Gather data sampling:      Not affected
  Ghostwrite:                Not affected
  Indirect target selection: Not affected
  Itlb multihit:             Not affected
  L1tf:                      Not affected
  Mds:                       Not affected
  Meltdown:                  Not affected
  Mmio stale data:           Not affected
  Old microcode:             Not affected
  Reg file data sampling:    Not affected
  Retbleed:                  Not affected
  Spec rstack overflow:      Mitigation; Safe RET
  Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:                Mitigation; Retpolines; IBPB conditional; IBRS_FW; STIBP always-on; RSB filling; PBRSB-eIBRS Not affected
                             ; BHI Not affected
  Srbds:                     Not affected
  Tsa:                       Vulnerable: No microcode
  Tsx async abort:           Not affected
  Vmscape:                   Mitigation; IBPB before exit to userspace
```

# 
