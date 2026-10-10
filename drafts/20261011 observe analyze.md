# . test

```
 ~ % cd "/home/fira/Documents/f/observe/source/backend/" && uv run 'analyze.py' --folder /home/fira/test --bg /home/fira/test/20261009_223702.jpg
Installed 3 packages in 38ms
Successfully generated metrics for 7310 image pairs in stats.yaml
```

```
 ...observe/source/backend % uv run visualize.py --yaml /home/fira/stats.yaml
2026-10-11 01:44:51,399 [INFO] Loading statistical data from: /home/fira/stats.yaml
2026-10-11 01:44:52,881 [INFO] Successfully loaded metrics for 7310 timestamps.
2026-10-11 01:44:53,163 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:44:53,173 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:44:53,175 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:44:53,195 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:44:53,205 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:44:53,206 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:44:53,255 [INFO] Saving dashboard visualization to: motion_dashboard.png
2026-10-11 01:44:53,316 [WARNING] findfont: Failed to find font weight semibold for DejaVu Sans, now using 700.
2026-10-11 01:44:53,854 [INFO] Dashboard rendering complete!
 ...observe/source/backend % uv run visualize.py --yaml /home/fira/stats.yaml
2026-10-11 01:45:31,208 [INFO] Loading statistical data from: /home/fira/stats.yaml
2026-10-11 01:45:32,726 [INFO] Successfully loaded metrics for 7310 timestamps.
2026-10-11 01:45:32,948 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:45:32,958 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:45:32,959 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:45:32,980 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:45:32,990 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:45:32,991 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:45:33,038 [INFO] Saving dashboard visualization to: motion_dashboard.png
2026-10-11 01:45:33,090 [WARNING] findfont: Failed to find font weight semibold for DejaVu Sans, now using 700.
2026-10-11 01:45:33,603 [INFO] Dashboard rendering complete!
 ...observe/source/backend % uv run visualize.py --yaml /home/fira/stats.yaml --output /home/fira/output.png
2026-10-11 01:45:57,129 [INFO] Loading statistical data from: /home/fira/stats.yaml
2026-10-11 01:45:58,623 [INFO] Successfully loaded metrics for 7310 timestamps.
2026-10-11 01:45:58,830 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:45:58,840 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:45:58,841 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:45:58,861 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:45:58,871 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:45:58,872 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 01:45:58,918 [INFO] Saving dashboard visualization to: /home/fira/output.png
2026-10-11 01:45:58,969 [WARNING] findfont: Failed to find font weight semibold for DejaVu Sans, now using 700.
2026-10-11 01:45:59,485 [INFO] Dashboard rendering complete!
```

```
 ...observe/source/backend % uv run determine_empty_threshold.py --bg /home/fira/test/20261009_210748.jpg --folder /home/fira/test --output /home/fira/empty.png
Installed 12 packages in 23ms
2026-10-11 02:04:19,516 [INFO] Initializing threshold diagnostic scan...
2026-10-11 02:04:19,548 [INFO] Found 7311 images to analyze.
2026-10-11 02:04:19,556 [INFO] Scanned 1/7311 frames...
2026-10-11 02:04:21,819 [INFO] Scanned 500/7311 frames...
2026-10-11 02:04:24,126 [INFO] Scanned 1000/7311 frames...
2026-10-11 02:04:26,372 [INFO] Scanned 1500/7311 frames...
2026-10-11 02:04:28,639 [INFO] Scanned 2000/7311 frames...
2026-10-11 02:04:30,858 [INFO] Scanned 2500/7311 frames...
2026-10-11 02:04:33,084 [INFO] Scanned 3000/7311 frames...
2026-10-11 02:04:35,294 [INFO] Scanned 3500/7311 frames...
2026-10-11 02:04:37,553 [INFO] Scanned 4000/7311 frames...
2026-10-11 02:04:39,801 [INFO] Scanned 4500/7311 frames...
2026-10-11 02:04:42,032 [INFO] Scanned 5000/7311 frames...
2026-10-11 02:04:44,270 [INFO] Scanned 5500/7311 frames...
2026-10-11 02:04:46,570 [INFO] Scanned 6000/7311 frames...
2026-10-11 02:04:48,880 [INFO] Scanned 6500/7311 frames...
2026-10-11 02:04:51,130 [INFO] Scanned 7000/7311 frames...
2026-10-11 02:04:52,519 [INFO] Generating distribution plots...
2026-10-11 02:04:52,771 [INFO] Min non-zero pixels found: 0
2026-10-11 02:04:52,771 [INFO] Max non-zero pixels found: 330314
2026-10-11 02:04:52,772 [INFO] Median non-zero pixels found: 244779
2026-10-11 02:04:53,088 [INFO] Diagnostic chart saved to /home/fira/empty.png
```

```
 ...observe/source/backend % uv run analyze.py --bg /home/fira/test/20261009_210748.jpg --folder /home/fira/test --output /home/fira/stats2.yaml
2026-10-11 02:10:48,569 [INFO] Starting processing workflow with custom bimodal thresholds...
2026-10-11 02:10:48,604 [INFO] Found 7311 images to process in targets directory.
2026-10-11 02:10:48,604 [INFO] Applying adjusted internal pixel threshold filter: 8750 pixels (at scale factor 0.5)
2026-10-11 02:10:48,604 [INFO] Loading initial base frame: 20261009_210742.jpg
2026-10-11 02:10:48,623 [INFO] Processing progress: 1/7310 frames handled...
2026-10-11 02:10:52,909 [INFO] Processing progress: 500/7310 frames handled...
2026-10-11 02:10:57,156 [INFO] Processing progress: 1000/7310 frames handled...
2026-10-11 02:11:01,457 [INFO] Processing progress: 1500/7310 frames handled...
2026-10-11 02:11:05,792 [INFO] Processing progress: 2000/7310 frames handled...
2026-10-11 02:11:10,132 [INFO] Processing progress: 2500/7310 frames handled...
2026-10-11 02:11:14,428 [INFO] Processing progress: 3000/7310 frames handled...
2026-10-11 02:11:18,764 [INFO] Processing progress: 3500/7310 frames handled...
2026-10-11 02:11:23,136 [INFO] Processing progress: 4000/7310 frames handled...
2026-10-11 02:11:27,459 [INFO] Processing progress: 4500/7310 frames handled...
2026-10-11 02:11:31,864 [INFO] Processing progress: 5000/7310 frames handled...
2026-10-11 02:11:36,260 [INFO] Processing progress: 5500/7310 frames handled...
2026-10-11 02:11:40,686 [INFO] Processing progress: 6000/7310 frames handled...
2026-10-11 02:11:44,958 [INFO] Processing progress: 6500/7310 frames handled...
2026-10-11 02:11:49,447 [INFO] Processing progress: 7000/7310 frames handled...
2026-10-11 02:11:52,206 [INFO] Writing calculated statistics to output file: /home/fira/stats2.yaml
2026-10-11 02:11:52,972 [INFO] Processing job successfully finalized!
```

```
 ...observe/source/backend % uv run visualize.py --yaml /home/fira/stats2.yaml --output /home/fira/output2.png
2026-10-11 02:12:12,193 [INFO] Loading statistical data from: /home/fira/stats2.yaml
2026-10-11 02:12:13,539 [INFO] Successfully loaded metrics for 7310 timestamps.
2026-10-11 02:12:13,736 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 02:12:13,745 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 02:12:13,746 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 02:12:13,766 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 02:12:13,775 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 02:12:13,776 [INFO] Using categorical units to plot a list of strings that are all parsable as floats or dates. If these strings should be plotted as numbers, cast to the appropriate data type before plotting.
2026-10-11 02:12:13,815 [INFO] Saving dashboard visualization to: /home/fira/output2.png
2026-10-11 02:12:13,858 [WARNING] findfont: Failed to find font weight semibold for DejaVu Sans, now using 700.
2026-10-11 02:12:14,315 [INFO] Dashboard rendering complete!
```

```
 ...observe/source/backend % uv run visualize_volume.py --yaml /home/fira/stats2.yaml
Installed 12 packages in 22ms
2026-10-11 02:18:23,949 [INFO] Loading data from: /home/fira/stats2.yaml
2026-10-11 02:18:25,368 [INFO] Aggregated dataset into 123 distinct 1-minute intervals.
2026-10-11 02:18:25,632 [INFO] Saving trend dashboard visualization to: mse_minute_trend.png
2026-10-11 02:18:25,930 [INFO] Visualization generated successfully!
 ...observe/source/backend % uv run visualize_volume.py --yaml /home/fira/stats2.yaml --output /home/fira/volume.png
2026-10-11 02:18:49,502 [INFO] Loading data from: /home/fira/stats2.yaml
2026-10-11 02:18:50,907 [INFO] Aggregated dataset into 123 distinct 1-minute intervals.
2026-10-11 02:18:51,140 [INFO] Saving trend dashboard visualization to: /home/fira/volume.png
2026-10-11 02:18:51,409 [INFO] Visualization generated successfully!
```

```
 ~ % cd /home/fira/.observe/data/night
 ....observe/data/night % for file in *_*; do [ -f "$file" ] && mkdir -p "${file%%_*}" && mv "$file" "${file%%_*}"; done
```

# . analyze


