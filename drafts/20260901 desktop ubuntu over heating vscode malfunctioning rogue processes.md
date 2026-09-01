<!-- both my laptop and power bank run out today, which is quite rare. -->

# .

```
 ~ % sensors

amdgpu-pci-0300
Adapter: PCI adapter
vddgfx:        1.16 V
vddnb:       831.00 mV
edge:         +77.0°C
PPT:          19.00 W

ucsi_source_psy_USBC000:002-isa-0000
top - 22:02:16 up 14 days, 0 min,  1 user,  load average: 3.05, 2.74, 2.60
Tasks: 499 total,   5 running, 493 sleeping,   0 stopped,   1 zombie
%Cpu(s): 20.1 us,  1.4 sy,  0.0 ni, 61.9 id, 16.5 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :  15336.0 total,    763.9 free,  11114.4 used,   3872.6 buff/cache
MiB Swap:   8448.0 total,   5195.9 free,   3252.1 used.   4221.6 avail Mem

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 511210 fira      20   0 1391.9g 231228  25608 R 100.0   1.5     56,16 code
 851848 fira      20   0 1407.9g 183216  45624 R 100.0   1.2 140:43.08 code
1332832 fira      20   0 2638084 164644 106652 S   9.1   1.0   0:00.61 ghostty
1332904 fira      20   0   24632   6524   4220 R   9.1   0.0   0:00.02 top
      1 root      20   0   24376  13076   8308 S   0.0   0.1   1:37.24 systemd
      2 root      20   0       0      0      0 S   0.0   0.0   0:00.90 kthreadd
      3 root      20   0       0      0      0 S   0.0   0.0   0:00.00 pool_workqueue_release
      4 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/R-rcu_gp
      5 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/R-sync_wq
      6 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/R-kvfree_rcu_reclaim
      7 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/R-slub_flushwq
      8 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/R-netns
     11 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/0:0H-events_highpri
     13 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/R-mm_percpu_wq
     14 root      20   0       0      0      0 S   0.0   0.0   0:12.13 ksoftirqd/0
     15 root      20   0       0      0      0 I   0.0   0.0   5:42.75 rcu_preempt
     16 root      20   0       0      0      0 S   0.0   0.0   0:00.00 rcu_exp_par_gp_kthread_worker/0
     17 root      20   0       0      0      0 S   0.0   0.0   0:00.67 rcu_exp_gp_kthread_worker
     18 root      rt   0       0      0      0 S   0.0   0.0   0:47.34 migration/0
     19 root     -51   0       0      0      0 S   0.0   0.0   0:00.00 idle_inject/0
     20 root      20   0       0      0      0 S   0.0   0.0   0:00.00 cpuhp/0
     21 root      20   0       0      0      0 S   0.0   0.0   0:00.00 cpuhp/2
     22 root     -51   0       0      0      0 S   0.0   0.0   0:00.00 idle_inject/2
     23 root      rt   0       0      0      0 S   0.0   0.0   0:31.71 migration/2
     24 root      20   0       0      0      0 S   0.0   0.0   0:14.42 ksoftirqd/2
     26 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/2:0H-events_highpri
     27 root      20   0       0      0      0 S   0.0   0.0   0:00.00 cpuhp/4
 ~ % sensors

amdgpu-pci-0300
Adapter: PCI adapter
vddgfx:        1.13 V
vddnb:       837.00 mV
edge:         +76.0°C
PPT:          29.00 W

ucsi_source_psy_USBC000:002-isa-0000
Adapter: ISA adapter
in0:           0.00 V  (min =  +0.00 V, max =  +0.00 V)
curr1:         0.00 A  (max =  +0.00 A)

ucsi_source_psy_USBC000:001-isa-0000
Adapter: ISA adapter
in0:           0.00 V  (min =  +0.00 V, max =  +0.00 V)
curr1:         0.00 A  (max =  +0.00 A)

BAT0-acpi-0
Adapter: ACPI interface
in0:           7.72 V
power1:        4.62 W

mt7921_phy0-pci-0100
Adapter: PCI adapter
temp1:        +50.0°C

k10temp-pci-00c3
Adapter: PCI adapter
Tctl:         +98.2°C

nvme-pci-0200
Adapter: PCI adapter
Composite:    +55.9°C  (low  =  -5.2°C, high = +83.8°C)
                       (crit = +87.8°C)

acpitz-acpi-0
Adapter: ACPI interface
temp1:        +98.0°C
 ~ % sensors
amdgpu-pci-0300
Adapter: PCI adapter
vddgfx:      999.00 mV
vddnb:       831.00 mV
edge:         +59.0°C
PPT:          19.00 W

ucsi_source_psy_USBC000:002-isa-0000
Adapter: ISA adapter
in0:           0.00 V  (min =  +0.00 V, max =  +0.00 V)
curr1:         0.00 A  (max =  +0.00 A)

ucsi_source_psy_USBC000:001-isa-0000
Adapter: ISA adapter
in0:           0.00 V  (min =  +0.00 V, max =  +0.00 V)
curr1:         0.00 A  (max =  +0.00 A)

BAT0-acpi-0
Adapter: ACPI interface
in0:           8.11 V
power1:       20.06 W

mt7921_phy0-pci-0100
Adapter: PCI adapter
temp1:        +44.0°C

k10temp-pci-00c3
Adapter: PCI adapter
Tctl:         +68.0°C

nvme-pci-0200
Adapter: PCI adapter
Composite:    +50.9°C  (low  =  -5.2°C, high = +83.8°C)
                       (crit = +87.8°C)

acpitz-acpi-0
Adapter: ACPI interface
temp1:        +62.0°C
 ~ % top
top - 22:02:26 up 14 days, 0 min,  1 user,  load average: 2.97, 2.73, 2.60
Tasks: 503 total,   4 running, 498 sleeping,   0 stopped,   1 zombie
%Cpu(s): 18.1 us,  1.4 sy,  0.0 ni, 39.9 id, 40.6 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :  15336.0 total,    795.6 free,  11079.5 used,   3875.6 buff/cache
MiB Swap:   8448.0 total,   5196.5 free,   3251.4 used.   4256.4 avail Mem

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 511210 fira      20   0 1391.9g 231188  25608 R 100.0   1.5     56,17 code
 851848 fira      20   0 1407.9g 183212  45624 R 100.0   1.2 140:53.35 code
1332376 fira      20   0 1924580 217816  95440 S   9.1   1.4   0:06.40 resources
1332419 fira      20   0    9712   7824   4708 R   9.1   0.0   0:07.20 resources-proce
1332980 fira      20   0   24628   6548   4244 R   9.1   0.0   0:00.02 top
      1 root      20   0   24376  13076   8308 S   0.0   0.1   1:37.24 systemd
      2 root      20   0       0      0      0 S   0.0   0.0   0:00.90 kthreadd
      3 root      20   0       0      0      0 S   0.0   0.0   0:00.00 pool_workqueue_release
      4 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/R-rcu_gp
      5 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/R-sync_wq
      6 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/R-kvfree_rcu_reclaim
      7 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/R-slub_flushwq
      8 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/R-netns
     11 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/0:0H-events_highpri
     13 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/R-mm_percpu_wq
     14 root      20   0       0      0      0 S   0.0   0.0   0:12.13 ksoftirqd/0
     15 root      20   0       0      0      0 I   0.0   0.0   5:42.76 rcu_preempt
     16 root      20   0       0      0      0 S   0.0   0.0   0:00.00 rcu_exp_par_gp_kthread_worker/0
     17 root      20   0       0      0      0 S   0.0   0.0   0:00.67 rcu_exp_gp_kthread_worker
     18 root      rt   0       0      0      0 S   0.0   0.0   0:47.34 migration/0
     19 root     -51   0       0      0      0 S   0.0   0.0   0:00.00 idle_inject/0
     20 root      20   0       0      0      0 S   0.0   0.0   0:00.00 cpuhp/0
     21 root      20   0       0      0      0 S   0.0   0.0   0:00.00 cpuhp/2
     22 root     -51   0       0      0      0 S   0.0   0.0   0:00.00 idle_inject/2
     23 root      rt   0       0      0      0 S   0.0   0.0   0:31.71 migration/2
 ~ % powerprofilesctl

  performance:
    CpuDriver:  amd_pstate
    Degraded:   no

* balanced:
    CpuDriver:  amd_pstate
    PlatformDriver:     placeholder

  power-saver:
    CpuDriver:  amd_pstate
    PlatformDriver:     placeholder
 ~ % cpufreq-info | grep "current CPU frequency"

  current CPU frequency is 3.47 GHz.
  current CPU frequency is 1.11 GHz.
  current CPU frequency is 3.04 GHz.
  current CPU frequency is 3.79 GHz.
  current CPU frequency is 3.39 GHz.
  current CPU frequency is 3.79 GHz.
  current CPU frequency is 3.48 GHz.
  current CPU frequency is 3.15 GHz.
  current CPU frequency is 3.74 GHz.
  current CPU frequency is 3.73 GHz.
  current CPU frequency is 1.11 GHz.
  current CPU frequency is 3.81 GHz.
 ~ % cpufreq-info | grep "current CPU frequency"

  current CPU frequency is 3.33 GHz.
  current CPU frequency is 2.57 GHz.
  current CPU frequency is 3.31 GHz.
  current CPU frequency is 3.32 GHz.
  current CPU frequency is 1.11 GHz.
  current CPU frequency is 3.33 GHz.
  current CPU frequency is 2.69 GHz.
  current CPU frequency is 1.78 GHz.
  current CPU frequency is 3.50 GHz.
  current CPU frequency is 3.50 GHz.
  current CPU frequency is 3.48 GHz.
  current CPU frequency is 1.64 GHz.
```

# 
