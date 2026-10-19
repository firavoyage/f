<!-- "files not responding" -->

# . commands

```
cd "/home/fira/Documents/f/have/source/backend/" && uv run 'face.py'
 ...Documents/f/have % cd "/home/fira/Documents/f/have/source/backend/" && uv run 'face.py'
⠸ Preparing packages... (6/10)
fonttools             ------------------------------ 1.93 MiB/5.16 MiB
pillow                ------------------------------ 1.81 MiB/6.81 MiB
mediapipe             ------------------------------ 1.80 MiB/39.57 MiB
opencv-contrib-python ------------------------------ 1.84 MiB/78.26 MiB                               ^C
 ...have/source/backend % cd "/home/fira/Documents/f/have/source/backend/" && uv run 'face.py' /home/fira/.have/data/test/face/daylily
Installed 21 packages in 60ms
🚀 Found 119 images. Starting CPU face detection analysis...
📸 Processing: photo_97@25-03-2026_22-48-33.jpg ... Traceback (most recent call last):
  File "/home/fira/Documents/f/have/source/backend/face.py", line 124, in <module>
    main()
  File "/home/fira/Documents/f/have/source/backend/face.py", line 113, in main
    metadata = analyze_image(img_path)
               ^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/fira/Documents/f/have/source/backend/face.py", line 33, in analyze_image
    mp_face_detection = mp.solutions.face_detection
                        ^^^^^^^^^^^^
AttributeError: module 'mediapipe' has no attribute 'solutions'
 ...have/source/backend % cd "/home/fira/Documents/f/have/source/backend/" && uv run 'face.py'
⠸ mediapipe==0.10.21                                                                                  ^C
 ...have/source/backend % cd "/home/fira/Documents/f/have/source/backend/" && uv run 'face.py' /home/fira/.have/data/test/face/daylily
Uninstalled 5 packages in 74ms
Installed 13 packages in 73ms
🚀 Found 119 images. Starting CPU face detection analysis...
📸 Processing: photo_97@25-03-2026_22-48-33.jpg ... WARNING: All log messages before absl::InitializeLog() is called are written to STDERR
I0000 00:00:1792393204.833435 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393204.842071 1823712 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
INFO: Created TensorFlow Lite XNNPACK delegate for CPU.
W0000 00:00:1792393204.876899 1823697 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_97@25-03-2026_22-48-33.yaml (Found 0 face(s))
📸 Processing: photo_44@07-05-2025_11-39-49.jpg ... I0000 00:00:1792393204.914802 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393204.918863 1823739 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393204.952856 1823731 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_44@07-05-2025_11-39-49.yaml (Found 0 face(s))
📸 Processing: photo_102@31-03-2026_11-15-27.jpg ... I0000 00:00:1792393205.076981 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393205.080445 1823756 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393205.122811 1823748 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_102@31-03-2026_11-15-27.yaml (Found 1 face(s))
📸 Processing: photo_79@09-02-2026_03-43-54.jpg ... I0000 00:00:1792393205.207208 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393205.210773 1823767 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393205.247357 1823759 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_79@09-02-2026_03-43-54.yaml (Found 0 face(s))
📸 Processing: photo_59@06-10-2025_00-39-52.jpg ... I0000 00:00:1792393205.362785 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393205.366358 1823779 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393205.399164 1823771 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_59@06-10-2025_00-39-52.yaml (Found 0 face(s))
📸 Processing: photo_17@02-02-2025_03-27-27.jpg ... I0000 00:00:1792393205.432366 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393205.436690 1823790 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393205.465380 1823782 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_17@02-02-2025_03-27-27.yaml (Found 0 face(s))
📸 Processing: photo_28@14-02-2025_01-00-14.jpg ... I0000 00:00:1792393205.505160 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393205.508626 1823801 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393205.526702 1823793 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_28@14-02-2025_01-00-14.yaml (Found 0 face(s))
📸 Processing: photo_14@29-01-2025_04-26-48.jpg ... I0000 00:00:1792393205.568016 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393205.571372 1823812 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393205.601882 1823804 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_14@29-01-2025_04-26-48.yaml (Found 0 face(s))
📸 Processing: photo_32@19-02-2025_22-19-17.jpg ... I0000 00:00:1792393205.629931 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393205.633874 1823823 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393205.661200 1823815 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_32@19-02-2025_22-19-17.yaml (Found 0 face(s))
📸 Processing: photo_52@21-08-2025_10-08-39.jpg ... I0000 00:00:1792393205.695457 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393205.699344 1823834 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393205.718991 1823826 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_52@21-08-2025_10-08-39.yaml (Found 0 face(s))
📸 Processing: photo_66@07-01-2026_19-44-12.jpg ... I0000 00:00:1792393205.822200 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393205.825716 1823845 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393205.853790 1823837 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_66@07-01-2026_19-44-12.yaml (Found 0 face(s))
📸 Processing: photo_89@12-03-2026_09-11-35.jpg ... I0000 00:00:1792393205.971577 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393205.975103 1823857 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393206.001837 1823848 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_89@12-03-2026_09-11-35.yaml (Found 0 face(s))
📸 Processing: photo_77@06-02-2026_23-50-27.jpg ... I0000 00:00:1792393206.040698 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393206.044784 1823872 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393206.062660 1823864 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_77@06-02-2026_23-50-27.yaml (Found 0 face(s))
📸 Processing: photo_108@11-04-2026_11-14-11.jpg ... I0000 00:00:1792393206.167020 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393206.171166 1823883 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393206.208246 1823875 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_108@11-04-2026_11-14-11.yaml (Found 0 face(s))
📸 Processing: photo_8@24-01-2025_03-50-09.jpg ... I0000 00:00:1792393206.256228 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393206.259363 1823894 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393206.289087 1823886 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_8@24-01-2025_03-50-09.yaml (Found 0 face(s))
📸 Processing: photo_69@23-01-2026_23-38-30.jpg ... I0000 00:00:1792393206.376318 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393206.379744 1823911 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393206.411833 1823898 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_69@23-01-2026_23-38-30.yaml (Found 1 face(s))
📸 Processing: photo_76@01-02-2026_10-50-54.jpg ... I0000 00:00:1792393206.447793 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393206.451546 1823924 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393206.472019 1823916 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_76@01-02-2026_10-50-54.yaml (Found 0 face(s))
📸 Processing: photo_91@19-03-2026_02-31-55.jpg ... I0000 00:00:1792393206.492977 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393206.496359 1823938 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393206.513481 1823930 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_91@19-03-2026_02-31-55.yaml (Found 0 face(s))
📸 Processing: photo_40@11-03-2025_01-56-26.jpg ... I0000 00:00:1792393206.544721 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393206.548331 1823949 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393206.567236 1823941 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_40@11-03-2025_01-56-26.yaml (Found 0 face(s))
📸 Processing: photo_112@18-04-2026_11-43-30.jpg ... I0000 00:00:1792393206.631306 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393206.634723 1823960 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393206.655361 1823952 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_112@18-04-2026_11-43-30.yaml (Found 0 face(s))
📸 Processing: photo_58@27-09-2025_00-06-49.jpg ... I0000 00:00:1792393206.678478 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393206.682462 1823971 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393206.700681 1823963 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_58@27-09-2025_00-06-49.yaml (Found 0 face(s))
📸 Processing: photo_62@21-12-2025_19-29-29.jpg ... I0000 00:00:1792393206.833292 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393206.836801 1823982 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393206.876106 1823974 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_62@21-12-2025_19-29-29.yaml (Found 0 face(s))
📸 Processing: photo_64@30-12-2025_23-06-38.jpg ... I0000 00:00:1792393206.980503 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393206.984308 1823993 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393207.013694 1823985 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_64@30-12-2025_23-06-38.yaml (Found 0 face(s))
📸 Processing: photo_113@19-04-2026_01-48-10.jpg ... I0000 00:00:1792393207.120440 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393207.124551 1824004 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393207.151549 1823996 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_113@19-04-2026_01-48-10.yaml (Found 1 face(s))
📸 Processing: photo_6@23-01-2025_02-03-26.jpg ... I0000 00:00:1792393207.217487 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393207.221130 1824015 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393207.240287 1824007 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_6@23-01-2025_02-03-26.yaml (Found 0 face(s))
📸 Processing: photo_95@23-03-2026_22-31-42.jpg ... I0000 00:00:1792393207.261243 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393207.264784 1824026 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393207.282515 1824016 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_95@23-03-2026_22-31-42.yaml (Found 0 face(s))
📸 Processing: photo_33@25-02-2025_09-32-03.jpg ... I0000 00:00:1792393207.312556 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393207.316052 1824037 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393207.336118 1824029 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_33@25-02-2025_09-32-03.yaml (Found 1 face(s))
📸 Processing: photo_38@01-03-2025_11-41-08.jpg ... I0000 00:00:1792393207.380839 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393207.384723 1824048 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393207.402890 1824040 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_38@01-03-2025_11-41-08.yaml (Found 0 face(s))
📸 Processing: photo_118@07-05-2026_02-50-57.jpg ... I0000 00:00:1792393207.489792 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393207.493533 1824059 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393207.522148 1824052 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_118@07-05-2026_02-50-57.yaml (Found 1 face(s))
📸 Processing: photo_36@28-02-2025_10-31-21.jpg ... I0000 00:00:1792393207.589468 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393207.593069 1824070 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393207.613313 1824062 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_36@28-02-2025_10-31-21.yaml (Found 0 face(s))
📸 Processing: photo_115@01-05-2026_13-04-59.jpg ... I0000 00:00:1792393207.649562 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393207.653344 1824081 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393207.672448 1824073 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_115@01-05-2026_13-04-59.yaml (Found 0 face(s))
📸 Processing: photo_92@20-03-2026_11-58-53.jpg ... I0000 00:00:1792393207.691943 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393207.695330 1824092 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393207.712730 1824084 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_92@20-03-2026_11-58-53.yaml (Found 0 face(s))
📸 Processing: photo_10@24-01-2025_21-54-33.jpg ... I0000 00:00:1792393207.744930 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393207.748069 1824103 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393207.765673 1824094 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_10@24-01-2025_21-54-33.yaml (Found 0 face(s))
📸 Processing: photo_43@01-04-2025_23-19-07.jpg ... I0000 00:00:1792393207.799771 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393207.803514 1824114 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393207.823040 1824106 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_43@01-04-2025_23-19-07.yaml (Found 0 face(s))
📸 Processing: photo_13@28-01-2025_09-55-55.jpg ... I0000 00:00:1792393207.854226 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393207.858084 1824125 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393207.876271 1824117 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_13@28-01-2025_09-55-55.yaml (Found 1 face(s))
📸 Processing: photo_104@05-04-2026_00-32-44.jpg ... I0000 00:00:1792393207.912169 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393207.915594 1824136 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393207.935705 1824128 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_104@05-04-2026_00-32-44.yaml (Found 1 face(s))
📸 Processing: photo_48@13-08-2025_15-24-26.jpg ... I0000 00:00:1792393207.967656 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393207.971253 1824147 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393207.994492 1824139 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_48@13-08-2025_15-24-26.yaml (Found 0 face(s))
📸 Processing: photo_73@28-01-2026_15-14-44.jpg ... I0000 00:00:1792393208.014175 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393208.017691 1824158 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393208.036559 1824150 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_73@28-01-2026_15-14-44.yaml (Found 0 face(s))
📸 Processing: photo_119@07-05-2026_05-45-03.jpg ... I0000 00:00:1792393208.057744 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393208.061274 1824169 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393208.078591 1824161 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_119@07-05-2026_05-45-03.yaml (Found 0 face(s))
📸 Processing: photo_99@26-03-2026_21-16-04.jpg ... I0000 00:00:1792393208.109408 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393208.113541 1824180 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393208.131756 1824172 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_99@26-03-2026_21-16-04.yaml (Found 0 face(s))
📸 Processing: photo_88@11-03-2026_23-05-27.jpg ... I0000 00:00:1792393208.214140 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393208.217776 1824191 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393208.246049 1824183 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_88@11-03-2026_23-05-27.yaml (Found 0 face(s))
📸 Processing: photo_111@12-04-2026_07-01-53.jpg ... I0000 00:00:1792393208.341080 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393208.344912 1824202 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393208.369174 1824193 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_111@12-04-2026_07-01-53.yaml (Found 0 face(s))
📸 Processing: photo_68@16-01-2026_22-07-53.jpg ... I0000 00:00:1792393208.468815 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393208.472879 1824213 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393208.495120 1824205 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_68@16-01-2026_22-07-53.yaml (Found 0 face(s))
📸 Processing: photo_75@01-02-2026_01-58-36.jpg ... I0000 00:00:1792393208.612617 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393208.616522 1824224 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393208.643066 1824216 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_75@01-02-2026_01-58-36.yaml (Found 0 face(s))
📸 Processing: photo_98@25-03-2026_22-48-34.jpg ... I0000 00:00:1792393208.672802 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393208.677025 1824235 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393208.694415 1824227 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_98@25-03-2026_22-48-34.yaml (Found 0 face(s))
📸 Processing: photo_100@28-03-2026_16-15-15.jpg ... I0000 00:00:1792393208.787457 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393208.791545 1824246 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393208.815629 1824238 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_100@28-03-2026_16-15-15.yaml (Found 1 face(s))
📸 Processing: photo_47@04-08-2025_00-24-17.jpg ... I0000 00:00:1792393208.874733 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393208.878225 1824257 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393208.896324 1824249 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_47@04-08-2025_00-24-17.yaml (Found 0 face(s))
📸 Processing: photo_107@11-04-2026_11-14-11.jpg ... I0000 00:00:1792393208.934631 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393208.938587 1824268 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393208.956784 1824260 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_107@11-04-2026_11-14-11.yaml (Found 0 face(s))
📸 Processing: photo_2@20-01-2025_22-30-07.jpg ... I0000 00:00:1792393208.990912 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393208.994255 1824279 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393209.012792 1824271 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_2@20-01-2025_22-30-07.yaml (Found 0 face(s))
📸 Processing: photo_35@28-02-2025_06-45-56.jpg ... I0000 00:00:1792393209.046043 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393209.049484 1824290 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393209.069463 1824281 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_35@28-02-2025_06-45-56.yaml (Found 0 face(s))
📸 Processing: photo_19@03-02-2025_13-14-46.jpg ... I0000 00:00:1792393209.101932 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393209.105452 1824301 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393209.123907 1824293 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_19@03-02-2025_13-14-46.yaml (Found 0 face(s))
📸 Processing: photo_116@02-05-2026_23-37-54.jpg ... I0000 00:00:1792393209.206490 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393209.209984 1824312 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393209.240139 1824304 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_116@02-05-2026_23-37-54.yaml (Found 1 face(s))
📸 Processing: photo_103@01-04-2026_23-08-18.jpg ... I0000 00:00:1792393209.348203 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393209.351930 1824323 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393209.381200 1824315 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_103@01-04-2026_23-08-18.yaml (Found 0 face(s))
📸 Processing: photo_93@20-03-2026_23-18-08.jpg ... I0000 00:00:1792393209.519292 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393209.522475 1824334 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393209.551972 1824327 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_93@20-03-2026_23-18-08.yaml (Found 0 face(s))
📸 Processing: photo_41@12-03-2025_11-15-48.jpg ... I0000 00:00:1792393209.588328 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393209.591902 1824345 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393209.610211 1824337 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_41@12-03-2025_11-15-48.yaml (Found 0 face(s))
📸 Processing: photo_70@25-01-2026_01-20-39.jpg ... I0000 00:00:1792393209.692561 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393209.696098 1824360 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393209.723874 1824351 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_70@25-01-2026_01-20-39.yaml (Found 0 face(s))
📸 Processing: photo_18@02-02-2025_06-34-35.jpg ... I0000 00:00:1792393209.754398 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393209.758280 1824373 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393209.776367 1824365 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_18@02-02-2025_06-34-35.yaml (Found 0 face(s))
📸 Processing: photo_117@04-05-2026_16-35-10.jpg ... I0000 00:00:1792393209.808546 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393209.811911 1824387 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393209.842050 1824379 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_117@04-05-2026_16-35-10.yaml (Found 0 face(s))
📸 Processing: photo_78@09-02-2026_03-43-54.jpg ... I0000 00:00:1792393209.902872 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393209.906325 1824402 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393209.934042 1824394 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_78@09-02-2026_03-43-54.yaml (Found 0 face(s))
📸 Processing: photo_46@22-05-2025_10-10-52.jpg ... I0000 00:00:1792393209.983301 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393209.986732 1824419 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393210.006580 1824411 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_46@22-05-2025_10-10-52.yaml (Found 0 face(s))
📸 Processing: photo_82@12-02-2026_06-17-18.jpg ... I0000 00:00:1792393210.029171 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393210.032659 1824430 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393210.051612 1824422 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_82@12-02-2026_06-17-18.yaml (Found 0 face(s))
📸 Processing: photo_57@26-09-2025_23-29-20.jpg ... I0000 00:00:1792393210.134390 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393210.137986 1824441 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393210.162413 1824434 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_57@26-09-2025_23-29-20.yaml (Found 0 face(s))
📸 Processing: photo_23@08-02-2025_01-34-26.jpg ... I0000 00:00:1792393210.221309 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393210.224594 1824452 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393210.243629 1824444 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_23@08-02-2025_01-34-26.yaml (Found 0 face(s))
📸 Processing: photo_54@07-09-2025_09-41-17.jpg ... I0000 00:00:1792393210.272534 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393210.276027 1824463 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393210.294092 1824455 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_54@07-09-2025_09-41-17.yaml (Found 0 face(s))
📸 Processing: photo_109@11-04-2026_21-14-23.jpg ... I0000 00:00:1792393210.374923 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393210.378442 1824474 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393210.407404 1824466 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_109@11-04-2026_21-14-23.yaml (Found 1 face(s))
📸 Processing: photo_22@06-02-2025_11-47-40.jpg ... I0000 00:00:1792393210.458127 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393210.461619 1824485 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393210.480424 1824477 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_22@06-02-2025_11-47-40.yaml (Found 0 face(s))
📸 Processing: photo_110@12-04-2026_07-01-53.jpg ... I0000 00:00:1792393210.560742 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393210.564109 1824496 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393210.590321 1824489 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_110@12-04-2026_07-01-53.yaml (Found 0 face(s))
📸 Processing: photo_5@22-01-2025_07-37-06.jpg ... I0000 00:00:1792393210.649185 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393210.653241 1824507 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393210.671566 1824499 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_5@22-01-2025_07-37-06.yaml (Found 0 face(s))
📸 Processing: photo_67@13-01-2026_04-05-12.jpg ... I0000 00:00:1792393210.695684 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393210.699659 1824518 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393210.718789 1824510 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_67@13-01-2026_04-05-12.yaml (Found 0 face(s))
📸 Processing: photo_90@15-03-2026_12-21-09.jpg ... I0000 00:00:1792393210.782967 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393210.786847 1824529 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393210.814436 1824521 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_90@15-03-2026_12-21-09.yaml (Found 0 face(s))
📸 Processing: photo_105@08-04-2026_01-26-26.jpg ... I0000 00:00:1792393210.955112 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393210.958881 1824540 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393210.988056 1824531 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_105@08-04-2026_01-26-26.yaml (Found 0 face(s))
📸 Processing: photo_80@09-02-2026_03-43-54.jpg ... I0000 00:00:1792393211.084738 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.088155 1824556 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.114426 1824548 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_80@09-02-2026_03-43-54.yaml (Found 0 face(s))
📸 Processing: photo_81@11-02-2026_02-41-44.jpg ... I0000 00:00:1792393211.137222 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.141696 1824567 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.161972 1824559 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_81@11-02-2026_02-41-44.yaml (Found 0 face(s))
📸 Processing: photo_15@30-01-2025_01-33-38.jpg ... I0000 00:00:1792393211.201411 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.205241 1824578 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.225206 1824570 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_15@30-01-2025_01-33-38.yaml (Found 0 face(s))
📸 Processing: photo_20@05-02-2025_07-00-07.jpg ... I0000 00:00:1792393211.258405 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.261653 1824589 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.280261 1824581 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_20@05-02-2025_07-00-07.yaml (Found 0 face(s))
📸 Processing: photo_51@17-08-2025_21-13-18.jpg ... I0000 00:00:1792393211.315984 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.320160 1824600 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.338395 1824592 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_51@17-08-2025_21-13-18.yaml (Found 0 face(s))
📸 Processing: photo_7@23-01-2025_08-01-03.jpg ... I0000 00:00:1792393211.386132 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.390047 1824611 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.411857 1824603 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_7@23-01-2025_08-01-03.yaml (Found 0 face(s))
📸 Processing: photo_87@10-03-2026_23-40-35.jpg ... I0000 00:00:1792393211.488177 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.491519 1824622 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.515517 1824614 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_87@10-03-2026_23-40-35.yaml (Found 0 face(s))
📸 Processing: photo_30@15-02-2025_23-51-14.jpg ... I0000 00:00:1792393211.552790 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.556524 1824633 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.575351 1824625 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_30@15-02-2025_23-51-14.yaml (Found 0 face(s))
📸 Processing: photo_31@16-02-2025_03-28-16.jpg ... I0000 00:00:1792393211.611970 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.615210 1824645 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.632833 1824637 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_31@16-02-2025_03-28-16.yaml (Found 0 face(s))
📸 Processing: photo_60@17-10-2025_01-32-05.jpg ... I0000 00:00:1792393211.666848 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.670462 1824663 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.691808 1824655 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_60@17-10-2025_01-32-05.yaml (Found 0 face(s))
📸 Processing: photo_61@26-11-2025_15-40-45.jpg ... I0000 00:00:1792393211.709590 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.712772 1824674 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.728229 1824666 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_61@26-11-2025_15-40-45.yaml (Found 0 face(s))
📸 Processing: photo_29@14-02-2025_13-07-35.jpg ... I0000 00:00:1792393211.757628 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.760693 1824685 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.777633 1824677 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_29@14-02-2025_13-07-35.yaml (Found 1 face(s))
📸 Processing: photo_45@09-05-2025_23-58-56.jpg ... I0000 00:00:1792393211.804627 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.807739 1824696 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.825269 1824688 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_45@09-05-2025_23-58-56.yaml (Found 0 face(s))
📸 Processing: photo_65@03-01-2026_19-26-47.jpg ... I0000 00:00:1792393211.858480 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.861458 1824707 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.877511 1824699 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_65@03-01-2026_19-26-47.yaml (Found 0 face(s))
📸 Processing: photo_1@20-01-2025_13-37-03.jpg ... I0000 00:00:1792393211.900785 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.904009 1824718 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.919871 1824710 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_1@20-01-2025_13-37-03.yaml (Found 1 face(s))
📸 Processing: photo_26@10-02-2025_08-23-32.jpg ... I0000 00:00:1792393211.947462 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.950312 1824729 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393211.965738 1824721 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_26@10-02-2025_08-23-32.yaml (Found 0 face(s))
📸 Processing: photo_24@09-02-2025_06-36-25.jpg ... I0000 00:00:1792393211.991754 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393211.994408 1824740 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.010091 1824732 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_24@09-02-2025_06-36-25.yaml (Found 0 face(s))
📸 Processing: photo_34@26-02-2025_23-30-16.jpg ... I0000 00:00:1792393212.032863 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.036553 1824751 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.055165 1824743 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_34@26-02-2025_23-30-16.yaml (Found 1 face(s))
📸 Processing: photo_12@27-01-2025_03-37-20.jpg ... I0000 00:00:1792393212.080806 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.083710 1824762 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.097578 1824752 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_12@27-01-2025_03-37-20.yaml (Found 0 face(s))
📸 Processing: photo_72@28-01-2026_11-47-51.jpg ... I0000 00:00:1792393212.110774 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.113355 1824773 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.127432 1824765 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_72@28-01-2026_11-47-51.yaml (Found 0 face(s))
📸 Processing: photo_85@07-03-2026_01-56-32.jpg ... I0000 00:00:1792393212.181991 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.184607 1824784 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.210585 1824776 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_85@07-03-2026_01-56-32.yaml (Found 1 face(s))
📸 Processing: photo_84@07-03-2026_00-52-34.jpg ... I0000 00:00:1792393212.241182 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.243978 1824795 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.258356 1824787 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_84@07-03-2026_00-52-34.yaml (Found 0 face(s))
📸 Processing: photo_83@12-02-2026_21-46-44.jpg ... I0000 00:00:1792393212.312111 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.314668 1824806 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.335584 1824798 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_83@12-02-2026_21-46-44.yaml (Found 1 face(s))
📸 Processing: photo_25@10-02-2025_05-08-11.jpg ... I0000 00:00:1792393212.361915 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.364296 1824817 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.377381 1824809 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_25@10-02-2025_05-08-11.yaml (Found 0 face(s))
📸 Processing: photo_114@25-04-2026_12-44-26.jpg ... I0000 00:00:1792393212.437400 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.440085 1824828 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.465512 1824820 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_114@25-04-2026_12-44-26.yaml (Found 0 face(s))
📸 Processing: photo_27@12-02-2025_23-10-24.jpg ... I0000 00:00:1792393212.498095 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.500632 1824839 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.513316 1824831 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_27@12-02-2025_23-10-24.yaml (Found 0 face(s))
📸 Processing: photo_16@30-01-2025_13-40-42.jpg ... I0000 00:00:1792393212.534397 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.537062 1824850 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.549772 1824842 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_16@30-01-2025_13-40-42.yaml (Found 0 face(s))
📸 Processing: photo_96@24-03-2026_03-27-03.jpg ... I0000 00:00:1792393212.621272 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.623491 1824861 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.643498 1824853 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_96@24-03-2026_03-27-03.yaml (Found 0 face(s))
📸 Processing: photo_63@24-12-2025_23-02-29.jpg ... I0000 00:00:1792393212.673373 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.675591 1824872 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.687463 1824864 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_63@24-12-2025_23-02-29.yaml (Found 0 face(s))
📸 Processing: photo_37@01-03-2025_11-41-08.jpg ... I0000 00:00:1792393212.711062 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.713482 1824883 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.726477 1824875 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_37@01-03-2025_11-41-08.yaml (Found 0 face(s))
📸 Processing: photo_3@21-01-2025_05-24-56.jpg ... I0000 00:00:1792393212.741239 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.743451 1824894 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.755713 1824886 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_3@21-01-2025_05-24-56.yaml (Found 0 face(s))
📸 Processing: photo_50@16-08-2025_14-37-20.jpg ... I0000 00:00:1792393212.776010 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.778215 1824905 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.791529 1824897 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_50@16-08-2025_14-37-20.yaml (Found 0 face(s))
📸 Processing: photo_74@29-01-2026_13-15-28.jpg ... I0000 00:00:1792393212.850429 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.853280 1824916 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.876571 1824908 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_74@29-01-2026_13-15-28.yaml (Found 0 face(s))
📸 Processing: photo_42@17-03-2025_22-04-09.jpg ... I0000 00:00:1792393212.901557 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.903981 1824927 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393212.916059 1824919 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_42@17-03-2025_22-04-09.yaml (Found 0 face(s))
📸 Processing: photo_71@27-01-2026_00-32-48.jpg ... I0000 00:00:1792393212.976808 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393212.979071 1824938 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393213.001517 1824930 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_71@27-01-2026_00-32-48.yaml (Found 1 face(s))
📸 Processing: photo_94@22-03-2026_01-36-29.jpg ... I0000 00:00:1792393213.067831 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393213.071586 1824949 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393213.094413 1824941 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_94@22-03-2026_01-36-29.yaml (Found 1 face(s))
📸 Processing: photo_53@01-09-2025_04-28-50.jpg ... I0000 00:00:1792393213.128348 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393213.130616 1824960 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393213.142996 1824952 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_53@01-09-2025_04-28-50.yaml (Found 1 face(s))
📸 Processing: photo_39@02-03-2025_08-02-03.jpg ... I0000 00:00:1792393213.159739 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393213.161930 1824971 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393213.174473 1824963 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_39@02-03-2025_08-02-03.yaml (Found 0 face(s))
📸 Processing: photo_86@09-03-2026_05-36-20.jpg ... I0000 00:00:1792393213.223377 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393213.225750 1824982 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393213.246634 1824974 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_86@09-03-2026_05-36-20.yaml (Found 1 face(s))
📸 Processing: photo_21@05-02-2025_23-01-02.jpg ... I0000 00:00:1792393213.287401 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393213.290238 1824993 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393213.304747 1824984 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_21@05-02-2025_23-01-02.yaml (Found 0 face(s))
📸 Processing: photo_4@21-01-2025_12-04-06.jpg ... I0000 00:00:1792393213.330500 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393213.333162 1825004 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393213.353405 1824996 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_4@21-01-2025_12-04-06.yaml (Found 0 face(s))
📸 Processing: photo_106@11-04-2026_03-27-47.jpg ... I0000 00:00:1792393213.377264 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393213.379707 1825015 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393213.394475 1825007 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_106@11-04-2026_03-27-47.yaml (Found 0 face(s))
📸 Processing: photo_11@25-01-2025_01-13-05.jpg ... I0000 00:00:1792393213.418071 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393213.420562 1825026 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393213.435639 1825018 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_11@25-01-2025_01-13-05.yaml (Found 0 face(s))
📸 Processing: photo_101@30-03-2026_05-19-11.jpg ... I0000 00:00:1792393213.492496 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393213.494774 1825037 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393213.514793 1825029 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_101@30-03-2026_05-19-11.yaml (Found 1 face(s))
📸 Processing: photo_56@13-09-2025_10-40-33.jpg ... I0000 00:00:1792393213.612784 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393213.615020 1825048 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393213.634842 1825040 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_56@13-09-2025_10-40-33.yaml (Found 1 face(s))
📸 Processing: photo_9@24-01-2025_08-57-49.jpg ... I0000 00:00:1792393213.671171 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393213.674159 1825059 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393213.685532 1825051 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_9@24-01-2025_08-57-49.yaml (Found 1 face(s))
📸 Processing: photo_55@12-09-2025_06-46-11.jpg ... I0000 00:00:1792393213.703313 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393213.705686 1825070 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393213.717884 1825062 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_55@12-09-2025_06-46-11.yaml (Found 0 face(s))
📸 Processing: photo_49@16-08-2025_12-54-50.jpg ... I0000 00:00:1792393213.741082 1823432 gl_context_egl.cc:85] Successfully initialized EGL. Major : 1 Minor: 5
I0000 00:00:1792393213.743364 1825081 gl_context.cc:369] GL version: 3.2 (OpenGL ES 3.2 Mesa 25.2.8-0ubuntu0.24.04.2), renderer: AMD Radeon Graphics (radeonsi, renoir, ACO, DRM 3.64, 6.17.0-35-generic)
W0000 00:00:1792393213.754879 1825073 inference_feedback_manager.cc:114] Feedback manager requires a model with a single signature inference. Disabling support for feedback tensors.
💾 Saved to photo_49@16-08-2025_12-54-50.yaml (Found 0 face(s))

✅ Execution completed successfully.
```

```
 ~ % mkpath .have/data/test/face
 ~ % open .have/data/test/face
 ~ % cd .have/data/test/face
 ...data/test/face % for f in *.yaml; do [ -f "$f" ] && [ $(stat -c%s "$f" 2>/dev/null || stat -f%z "$f") -lt 200 ] && mv "$f" ".$f"; done

zsh: no matches found: *.yaml
 ...data/test/face % cd daylily
 ...test/face/daylily % for f in *.yaml; do [ -f "$f" ] && [ $(stat -c%s "$f" 2>/dev/null || stat -f%z "$f") -lt 200 ] && mv "$f" ".$f"; done

 ...test/face/daylily % for f in *.{jpg,jpeg,png,bmp,webp}; do [ -f "$f" ] && [ ! -f "${f%.*}.yaml" ] && mv "$f" ".$f"; done

zsh: no matches found: *.jpeg
 ...test/face/daylily % for f in *.{jpg,jpeg,png,bmp,webp}; do [ -f "$f" ] && [ ! -f "${f%.*}.yaml" ] && mv "$f" ".$f"; done

zsh: no matches found: *.jpeg
```

```
 ...test/face/daylily % bash
bash: /home/fira/.deno/env: No such file or directory
fira@Fira:~/.have/data/test/face/daylily$ for f in *.{jpg,jpeg,png,bmp,webp}; do [ -f "$f" ] && [ ! -f "${f%.*}.yaml" ] && mv "$f" ".$f"; done
```

# what are the ways to detect human faces in py via foss libs and open models in the simplest proven general way

## what are the ways to detect human faces in py via foss libs and open models in the simplest proven general way

Here are the three simplest, proven ways to detect human faces in Python using **Free and Open Source Software (FOSS)** libraries and **open models**, ranked from the absolute easiest to the most accurate.

***

### 1. The Simplest High-Accuracy Wrapper: `face_recognition`

Built on top of `dlib`, the [face\_recognition library on GitHub](https://github.com/ageitgey/face%5Frecognition) is widely considered the **easiest and most intuitive** way to detect faces in Python with deep learning accuracy. [link](https://github.com/ageitgey/face%5Frecognition)

- **Why use it:** It abstracts away complex computer vision boilerplate code into simple, one-line Python functions. By default, it uses a highly accurate Histogram of Oriented Gradients (HOG) model, but you can toggle a Convolutional Neural Network (CNN) model if you have a GPU.
- **Complexity:** Extremely Low 🟢 [link](https://realpython.com/face-recognition-with-python/)

bash

```
pip install face_recognition opencv-python
```

Use code with caution.

python

```
import cv2
import face_recognition

# Load the image
image = cv2.imread("people.jpg")

# Find all face locations in the image (returns a list of bounding boxes)
# Coordinates are in format: (top, right, bottom, left)
face_locations = face_recognition.face_locations(image)

print(f"Found {len(face_locations)} face(s) in this image.")

# Optional: Draw boxes around the faces
for (top, right, bottom, left) in face_locations:
    cv2.rectangle(image, (left, top), (right, bottom), (0, 255, 0), 2)

cv2.imshow("Faces Found", image)
cv2.waitKey(0)
```

Use code with caution.

***

### 2. Best for Speed & Cross-Platform (CPU/Mobile): `MediaPipe`

Google’s [MediaPipe Face Detector](https://developers.google.com/edge/mediapipe/solutions/vision/face%5Fdetector/python?gl=us) uses an incredibly optimized deep learning model called BlazeFace. [link](https://developers.google.com/edge/mediapipe/solutions/vision/face%5Fdetector/python?gl=us)

- **Why use it:** It is **blazing fast** on standard CPUs (often hitting 70+ FPS) and requires zero C++ compilation dependencies (unlike `dlib`). It also gives you basic facial landmarks (eyes, nose, mouth) right out of the box.
- **Complexity:** Medium-Low 🟡 [link](https://pypi.org/project/face-recognition/)

bash

```
pip install mediapipe opencv-python
```

Use code with caution.

python

```
import cv2
import mediapipe as mp

# Initialize MediaPipe Face Detection
mp_face_detection = mp.solutions.face_detection
mp_drawing = mp.solutions.drawing_utils

image = cv2.imread("people.jpg")

with mp_face_detection.FaceDetection(model_selection=1, min_detection_confidence=0.5) as face_detection:
    # Convert BGR to RGB
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    results = face_detection.process(image_rgb)

    # Draw face bounding boxes
    if results.detections:
        for detection in results.detections:
            mp_drawing.draw_detection(image, detection)

cv2.imshow("MediaPipe Face Detection", image)
cv2.waitKey(0)
```

Use code with caution.

***

### 3. Most Accurate for Challenging Angles/Crowds: `DeepFace`

If you are dealing with dark lighting, side profiles, occlusions, or crowd shots, DeepFace serves as a brilliant unified framework. [link](https://www.youtube.com/watch?v=n84hBgtzvxo)

- **Why use it:** It acts as a wrapper for state-of-the-art open models like **RetinaFace** (widely considered the most accurate open-source face detector), MTCNN, and YOLO. You can easily switch backends with a simple string argument.
- **Complexity:** Medium 🟡 [link](https://medium.com/pythons-gurus/what-is-the-best-face-detector-ab650d8c1225)

bash

```
pip install deepface tf-keras opencv-python
```

Use code with caution.

python

```
import cv2
from deepface import DeepFace

image_path = "people.jpg"

# Extract face locations using RetinaFace backend
# returns a list of dicts containing 'box' keys (x, y, w, h)
try:
    face_objs = DeepFace.extract_faces(img_path=image_path, detector_backend='retinaface')
    print(f"Found {len(face_objs)} face(s).")

    image = cv2.imread(image_path)
    for face in face_objs:
        box = face["facial_area"]
        cv2.rectangle(image, (box["x"], box["y"]), (box["x"]+box["w"], box["y"]+box["h"]), (0, 255, 0), 2)

    cv2.imshow("DeepFace RetinaFace", image)
    cv2.waitKey(0)
except Exception as e:
    print("No faces detected or error occurred:", e)
```

Use code with caution.

***

### Summary Comparison Table

| Tool                   | Underlying Model   | Strengths                                           | Best Used For                                              |
| ---------------------- | ------------------ | --------------------------------------------------- | ---------------------------------------------------------- |
| **`face_recognition`** | HOG / dlib CNN     | Easiest syntax, great accuracy.                     | Rapid prototyping, standard front-facing photos.           |
| **`MediaPipe`**        | BlazeFace          | Incredible speed on CPU, returns key landmarks.     | Real-time video feeds, webcams, low-power devices.         |
| **`DeepFace`**         | RetinaFace / MTCNN | Highest accuracy, handles side profiles and crowds. | Robust detection in messy, unoptimized, or crowded images. |

_(Note: Legacy methods like OpenCV's Haar Cascades are technically open source, but they are highly prone to false positives and struggle heavily with rotated faces, making them obsolete compared to the options above.)_ [link](https://www.geeksforgeeks.org/computer-vision/a-complete-guide-to-face-detection-and-face-recognition-in-2024/)

Depending on your project's goals, what type of input data are you working with? Let me know:

- If you are processing **still images** or a **live webcam/video stream**
- The hardware environment (**CPU-only** or **GPU-enabled**)
- If you plan to **recognize specific individuals** afterward or just **detect face locations**

I can help you build out the exact production logic for your pipeline.

- [link](https://pypi.org/project/face-recognition/)\
  PyPI\
  face-recognition · PyPI\
  dlib's deep learning, achieving 99.38% accuracy. Command-line interface with adjustable tolerance (default 0.6) and multi-core CPU...
- [link](https://www.youtube.com/watch?v=n84hBgtzvxo)\
  YouTube·Rob Mulla\
  Open Source Face Analysis with Python\
  Jan 5, 2023 — DeepFace allows specifying different backends (underlying models) for its functionalities. For face detection, the \`deepface.detec...\
  15:07
- [link](https://medium.com/pythons-gurus/what-is-the-best-face-detector-ab650d8c1225)\
  Medium·Amos Stailey-Young\
  What's the Best Face Detector? - Medium\
  RetinaFace really tested the category of “false positive” since it picked up faces I hadn't seen, hadn't bothered to annotate beca...

Show all

## do they rely on opencv

<mark><span>No,<span> </span></span><strong>they do not rely on OpenCV for the actual face detection mathematics or model execution.</strong></mark>

While OpenCV is used in the example code snippets, it is only utilized as a **helper utility** to handle basic file operations—specifically, reading the image from your hard drive (`cv2.imread`) and drawing the visual green boxes onto the image (`cv2.rectangle`). You can completely swap OpenCV out for alternative image libraries like **PIL (Pillow)** or **matplotlib**.

Here is how each library actually handles the underlying face detection under the hood:

### 1. `face_recognition`

- **Underlying Engine:** **dlib**
- **Dependency:** It relies entirely on `dlib` (a C++ toolkit for machine learning) to run its Histogram of Oriented Gradients (HOG) or Convolutional Neural Network (CNN) models. It converts the image into a standard NumPy array to do this, bypassing OpenCV's core logic entirely.

### 2. `MediaPipe`

- **Underlying Engine:** **TensorFlow Lite (TFLite)**
- **Dependency:** Google's MediaPipe relies on its own custom internal C++ framework and a lightweight TFLite runtime to load and execute the **BlazeFace** model architecture.

### 3. `DeepFace`

- **Underlying Engine:** **TensorFlow / Keras**
- **Dependency:** DeepFace is a high-level wrapper built primarily on TensorFlow. When using its most accurate backend (`retinaface`), it executes the model using TensorFlow/Keras layers. (Note: DeepFace _does_ optionally use some of OpenCV's internal image processing functions for basic face alignment/rotation steps, but the deep learning detection itself belongs to the respective open model backends).

***

### Example: Running `face_recognition` completely without OpenCV

To prove it does not rely on OpenCV, here is the exact same functionality using only **Pillow (PIL)** to open the image and draw the boxes:

bash

```
pip install face_recognition pillow
```

Use code with caution.

python

```
from PIL import Image, ImageDraw
import face_recognition

# Load the image using Pillow instead of OpenCV
image = face_recognition.load_image_file("people.jpg")

# Detect faces (uses dlib under the hood)
face_locations = face_recognition.face_locations(image)

# Convert to a PIL Image object to draw on it
pil_image = Image.fromarray(image)
draw = ImageDraw.Draw(pil_image)

for (top, right, bottom, left) in face_locations:
    # Draw a green box around the face
    draw.rectangle([left, top, right, bottom], outline="green", width=3)

# Save or display the result
pil_image.show()
pil_image.save("detected_faces.jpg")
```

Use code with caution.

Are you trying to keep your project **installation footprint minimal**, or do you have constraints that prevent you from using **heavy C++ dependencies** like `dlib`? Let me know your deployment targets, and I can suggest the absolute leanest approach.

## why not some direct opencv methods

While you _can_ use direct **OpenCV** methods for face detection, developers generally avoid them because <mark>the classic methods are<span> </span><strong>highly inaccurate</strong>, and the modern deep-learning methods are<span> </span><strong>cumbersome to configure</strong><span> </span>compared to the dedicated libraries</mark>.

OpenCV provides two main ways to detect faces directly. Here is a breakdown of why they are usually skipped in modern Python workflows.

***

### Method 1: Haar Cascades (`cv2.CascadeClassifier`)

This is the classic, 20-year-old OpenCV face detection method (Viola-Jones framework). It does not use deep learning; instead, it uses a hardcoded XML file of mathematical features to look for lighting contrasts (like the bridge of the nose being brighter than the eyes).

- **The Problem:** It is **notoriously unreliable by modern standards**.
- **False Positives:** It constantly mistakes random background textures (folds in clothing, patterns on curtains) for human faces.
- **Rigidity:** It only works well on perfectly lit, perfectly straight-on front profiles. If a person tilts their head slightly, wears glasses, or turns to the side, it misses them completely.
- **When to use it:** Almost never today, unless you are deploying to a 15-year-old micro-controller that literally cannot run a modern neural network.

***

### Method 2: OpenCV DNN Module (`cv2.dnn`)

OpenCV includes a powerful Deep Neural Network (DNN) module. You can use it to run a much more modern, highly accurate open deep-learning model called **YuNet** or a classic **SSD-ResNet10** framework directly inside OpenCV without any other machine learning libraries.

- **The Problem:** It requires an **excessive amount of manual boilerplate code**.
- **The Complexity:** Instead of passing an image to a simple function, you have to manually load separate network topology files (`.prototxt` or `.onnx`), configure input blobs, explicitly set image dimensions, pass the data through the network layers, parse raw multidimensional arrays of confidence scores, and manually calculate pixel bounding boxes from relative floating-point outputs.
- **When to use it:** If you strictly want **zero dependencies** other than `opencv-python` and need production-grade deep learning accuracy.

***

### The Code Complexity Comparison

Look at the stark difference in code complexity between a dedicated wrapper library and a raw OpenCV deep-learning model.

python

```
# ==========================================
# APPROACH A: The "face_recognition" Library
# ==========================================
import face_recognition

image = face_recognition.load_image_file("people.jpg")
# One clean line returns exact bounding box pixels: [top, right, bottom, left]
face_locations = face_recognition.face_locations(image)

# ==========================================
# APPROACH B: Direct OpenCV DNN (YuNet / SSD)
# ==========================================
import cv2
import numpy as np

# 1. Manually load weights and architecture files
net = cv2.dnn.readNetFromCaffe("deploy.prototxt", "res10_300x300_ssd_iter_140000.caffemodel")

# 2. Extract image dimensions
image = cv2.imread("people.jpg")
(h, w) = image.shape[:2]

# 3. Manually construct an input blob (resizing, scaling, mean subtraction)
blob = cv2.dnn.blobFromImage(cv2.resize(image, (300, 300)), 1.0, (300, 300), (104.0, 177.0, 123.0))

# 4. Pass blob through the network
net.setInput(blob)
detections = net.forward()

# 5. Manually loop and parse the raw matrix array output
for i in range(0, detections.shape[2]):
    confidence = detections[0, 0, i, 2]
    if confidence > 0.5: # Filter weak detections
        # 6. Manually calculate relative bounding box coordinates back to original pixel size
        box = detections[0, 0, i, 3:7] * np.array([w, h, w, h])
        (startX, startY, endX, endY) = box.astype("int")
```

Use code with caution.

### Summary Recommendation

- Choose **`face_recognition` or `MediaPipe`** if you value your time and want clean, readable, maintainable Python code.
- Choose **OpenCV DNN (`cv2.dnn`)** only if your system architecture strictly prohibits installing packages like TensorFlow, PyTorch, TFLite, or C++ binaries.

Would you like to see how to implement the **OpenCV DNN YuNet model** (which is OpenCV's fastest, lightweight modern open face detector) so you can keep your project restricted entirely to `opencv-python`? Let me know if you want the **boilerplate code** for that setup.

## why dont the libs require you to dl or pick models explicitly

These wrapper libraries don't require you to manually download or select files <mark>because<span> </span><strong>they package, automate, and host the open models for you.</strong></mark>

Here is exactly how they hide that complexity under the hood:

### 1. Hardcoded Model Compilation (The `face_recognition` approach)

When you install the `face_recognition` library, you are installing a wrapper around **`dlib`**.

- **The Secret:** `dlib` actually compiles the weights of its HOG (Histogram of Oriented Gradients) face detector **directly into the library's binary C++ code**.
- For its more accurate CNN model, the library includes the model file right inside its Python package directory when you run `pip install`. The library knows exactly where that file lives on your hard drive, so it loads it automatically without asking you.

### 2. Auto-Downloading & Caching (The `DeepFace` approach)

When you run a line of code like `DeepFace.extract_faces(..., detector_backend='retinaface')`, the library performs an automated check behind the scenes:

- **The Secret:** It looks inside a hidden folder on your computer (usually `~/.deepface/weights/`).
- If the folder is empty, the library uses built-in code to silently call a secure URL, **download the pre-trained open model weights**, save them to that folder, and then load them. The next time you run the code, it sees the file is already there and skips the download.

### 3. Integrated Solutions (The `MediaPipe` approach)

Google’s `MediaPipe` functions as a unified pipeline solution rather than just a machine learning model.

- **The Secret:** Google bundles the optimized **BlazeFace** model directly inside the `pip` package wheels. When you initialize `mp.solutions.face_detection`, the Python library reaches into its own internal asset folders and boots up the model automatically.

***

### The Dynamic: Convenience vs. Control

| Strategy                                          | Advantages                                                                                                                                 | Trade-offs                                                                                                                                                  |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Wrapper Libs** (`face_recognition`, `DeepFace`) | • Ready to use in 2 lines of code.• No hunting for trusted download links.• Zero risk of mixing up model configuration files.              | • The initial run can pause/freeze while downloading files.• Large initial `pip install` download sizes.• Harder to swap in your own custom-trained models. |
| **Direct OpenCV DNN**                             | • Tiny initial footprint.• Absolute control over the model version.• Air-gapped environment friendly (no hidden internet access requests). | • High risk of broken paths.• Requires writing complex parsing math for every different model type.                                                         |

Are you planning to deploy this code to an **offline/air-gapped environment** where a library trying to auto-download a model would crash? If so, I can show you how to **pre-fetch** the models or configure them for local storage.

## why dont you even have to weigh the pros cons and compare models and just choose libs instead

You don't have to weigh the pros and cons or manually pick models <mark>because<span> </span><strong>these libraries have already done that engineering work for you.</strong></mark> They act like curated software products rather than raw scientific tools.

When you choose one of these libraries, you are actually choosing a **pre-packaged engineering decision** optimized for a specific use case:

### 1. The Decision is Already Opinionated

Raw open-source AI models are messy. They come with different image sizing requirements, unique coordinate scaling math, and distinct configuration files.

- **The Library Fix:** The creators of these libraries looked at the landscape of open models, tested them, and picked the absolute best model for a specific target goal.
- When you pick `face_recognition`, you aren't just choosing a library; you are accepting their opinion that **dlib's HOG model** is the best balance of simplicity and accuracy for standard CPU tasks.

### 2. Standardized Inputs and Outputs

If you try to swap raw models yourself, you have to rewrite your entire codebase. One model might require a 300×300 pixel RGB image, while another wants a 640×640 BGR image. One might return relative percentages, while another returns raw pixel coordinates.

- **The Library Fix:** Libraries standardize this. You pass in a raw Python image object, and the library handles the resizing, color conversion, and normalizations internally. It then spits out a clean, uniform Python dictionary or list of bounding boxes, regardless of which model ran under the hood.

### 3. Abstracting the Math Away

Using a raw model directly requires you to write post-processing math, such as **Non-Maximum Suppression (NMS)**. NMS is the complex mathematical calculation required to look at 50 overlapping bounding boxes generated by an AI model and intelligently merge them down to the single best box around the face.

- **The Library Fix:** Libraries execute these algorithms automatically in optimized C++ or TensorFlow backends before handing you the final clean coordinates.

***

### How to Pick by "Vibe" Instead of Math

Because the libraries handle the complexity, your choice drops down from a complicated technical analysis to a simple workflow question:

- **Choose `face_recognition` if:** You just want to write a quick script that "just works" on a few family photos or standard images with zero hassle.
- **Choose `MediaPipe` if:** You are building something interactive with a live webcam feed and need it to run smoothly on a standard laptop without lagging.
- **Choose `DeepFace` if:** You are dealing with messy, unpredictable real-world images (like security footage or wild crowds) and need maximum robustness.

Are you leaning toward a specific project setup, like a **desktop app**, a **web backend**, or a **background script**? I can let you know which of these three fits best into that architectural pipeline.

## why can they just pick the best model for me instead of a list of models w distinct tradeoffs that matter much

The reality is that **there is no single "perfect" face detection model** because the technical tradeoffs of physics, hardware, and mathematics are completely at odds with each other. A model that is flawless for one scenario is unusable for another.

If a library forced just **one** model on you, it would break for a massive percentage of users. Here is why the tradeoffs matter so much that they cannot be automated away:

### 1. The Speed vs. Hardware Bottleneck

- **The Conflict:** High-accuracy models (like RetinaFace) use massive deep neural networks with millions of parameters. To run in real-time, they _require_ a dedicated graphics card (GPU). If you force this model onto a cheap CPU or a Raspberry Pi, your code will freeze and run at a miserable 1 frame every 2 seconds.
- **Why the library can't choose:** The library doesn't know if your code is running on a high-end cloud server with an NVIDIA GPU or a lightweight office laptop.

### 2. The Target Environment (Live Video vs. Static Files)

- **The Conflict:** If you are analyzing a security camera feed or a webcam, speed is everything. You need a lightweight model like **BlazeFace** (MediaPipe) that can process 30 to 60 frames per second. Missing a face in one frame doesn't matter because it will catch it in the next frame. However, if you are analyzing a static passport photo upload on a website, speed doesn't matter at all—but you absolutely cannot afford a single miss. You need a heavy, slow model.
- **Why the library can't choose:** The library doesn't know if it is processing 1 perfect photo or 1,000 video frames per minute.

### 3. Distance and Scale (The "Close-up" vs. "Crowd" problem)

- **The Conflict:** Some models are mathematically optimized to find large, front-facing shapes (like a Zoom call or a selfie). They completely ignore tiny clusters of pixels to avoid false positives. Other models are designed to scan a crowded stadium and detect 500 tiny, blurry faces at a distance. A stadium model used on a selfie will often mistake details in your clothing for mini-faces.
- **Why the library can't choose:** The library has no idea if your image is a close-up portrait or a wide-angle drone shot of a music festival.

***

### How Top Libraries Balance This

To see this in action, look at how the libraries handle these exact tradeoffs:

- **`face_recognition`** defaults to HOG because it runs on any CPU without crashing. But they give you a single switch—`model="cnn"`—because they know if you have a GPU, you'll want the higher accuracy.
- **`DeepFace`** gives you a list because it is an academic benchmarking tool. It expects you to change `detector_backend='opencv'` (blazing fast, lower accuracy) to `'retinaface'` (slow, ultra-accurate) depending on your specific project constraints.
- **`MediaPipe`** gives you a simple binary switch: `model_selection=0` (optimized for faces within 2 meters of the camera, like a webcam) or `model_selection=1` (optimized for faces up to 5 meters away).

The libraries do the hard math for you, but they still need you to tell them the **context of your problem.**

Which of those tradeoffs matters most for your specific project?

- Do you need **maximum speed** (processing video frames fast)?
- Do you need **maximum accuracy** (finding tiny, dark, or angled faces)?
- Or do you need **zero installation hassle** (works on any basic laptop)?

Tell me your priority, and I can give you the exact model configuration to use.

# what is py opencv for

## what is py opencv for

**OpenCV for Python** (imported as `cv2` in code) is an open-source library used to give computers the ability to **"see" and interpret visual data**. It acts as a powerful toolkit for **computer vision, digital image processing, and machine learning** applications. [link](https://pypi.org/project/opencv-python/)

Because it relies on the NumPy Numerical Library under the hood, it converts images into mathematical matrices. This allows developers to manipulate photos and live video feeds in real-time with extreme speed. [link](https://www.geeksforgeeks.org/python/opencv-python-tutorial/)

***

### 🛠️ Core Capabilities

OpenCV is loaded with over 2,500 optimized algorithms grouped under major use cases: [link](https://docs.opencv.org/)

- **Image Processing & Transformation:** Resizing, rotating, cropping, blurring, changing color spaces (like converting to grayscale), and filtering. [link](https://www.geeksforgeeks.org/python/opencv-python-tutorial/)
- **Object & Feature Detection:** Identifying specific items within an image, locating edges or shapes, and extracting key points to match distinct structures. [link](https://www.geeksforgeeks.org/python/opencv-python-tutorial/)
- **Video Analysis:** Capturing live feeds from webcams, tracking moving objects, subtracting backgrounds, and stabilizing shaky video. [link](https://www.youtube.com/watch?v=zSa-fOGh8es)
- **AI & Deep Learning Integration:** Working alongside tools like TensorFlow or PyTorch to feed processed visual data into deep learning models for complex AI tasks. [link](https://opencv.org/advance-your-career-with-opencv/)

***

### 🚀 Real-World Applications

If a software application interacts with visual data, it likely uses OpenCV as its backbone: [link](https://www.youtube.com/watch?v=LWnGRiLf70s)

- **Facial Recognition:** Powering biometric security features like phone unlocking or face-tagging in photo apps.
- **Autonomous Vehicles:** Helping self-driving cars identify lane markings, street signs, pedestrians, and obstacles.
- **Medical Imaging:** Analyzing X-rays, MRIs, and CT scans to help doctors detect anomalies or tumors.
- **Industrial Automation:** Scanning assembly lines to check product labels, detect defects, and guide robotic arms.
- **Augmented Reality (AR):** Tracking user movements and environment dimensions to overlay digital assets smoothly into the real world. [link](https://opencv.org/about/)

***

### 💻 A Simple Code Example

To see how accessible it is, here is how you load and display an image using the library:

python

```
import cv2

# Read an image from your computer
image = cv2.imread('photo.jpg')

# Convert the image to grayscale to simplify the data
gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Display the processed image in a window
cv2.imshow('Grayscale Output', gray_image)

# Keep the window open until you press any key
cv2.waitKey(0)
cv2.destroyAllWindows()
```

Use code with caution.

Are you looking to build a **specific project** (like a face detector or object tracker), or do you just need help getting the library **installed and configured** on your system?

- [link](https://pypi.org/project/opencv-python/)\
  PyPI\
  opencv-python - PyPI\
  cv2 (old interface in old OpenCV versions was named as cv ) is the name that OpenCV developers chose when they created the binding...
- [link](https://www.youtube.com/watch?v=zSa-fOGh8es)\
  YouTube·Sam Westby Tech\
  What is OpenCV? - Python Beginners Tutorial #1 - YouTube\
  this is video one of an open CV for Python tutorial. from the basics like installation drawing on images … opencv is an open-sourc...
- [link](https://www.geeksforgeeks.org/python/opencv-python-tutorial/)\
  GeeksforGeeks\
  OpenCV Tutorial in Python - GeeksforGeeks\
  OpenCV is an open-source, cross-platform computer vision. Video Processing: Loading, saving, capturing, color transformations, blu...

Show all

## to detect human faces

To detect human faces, OpenCV provides two primary built-in methods: **Haar Cascade Classifiers** (a traditional, lightweight approach) and **Deep Learning-based modules** (a modern, highly accurate approach via the `dnn` module).

For a beginner project, the **Haar Cascade Classifier** is the easiest way to start. It uses a pre-trained XML file to scan images and look for common facial patterns (like the contrast between the eyes and the bridge of the nose).

### 💻 Step-by-Step Face Detection Code

Here is a complete, working script to detect faces in a static image.

python

```
import cv2

# 1. Load the pre-trained Haar Cascade face detection model
# OpenCV includes this file by default in its library data
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# 2. Read the image
image = cv2.imread('people.jpg')
if image is None:
    print("Error: Could not read image file. Check the path.")
    exit()

# 3. Convert to grayscale (Haar Cascades require grayscale images to process)
gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# 4. Detect faces
# scaleFactor: Compresses image size to catch faces closer/further from camera
# minNeighbors: How many overlapping boxes are needed to declare a face (filters false positives)
faces = face_cascade.detectMultiScale(gray_image, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

# 5. Draw bounding boxes around the detected faces
# 'faces' returns a list of coordinates: [X-coordinate, Y-coordinate, Width, Height]
for (x, y, w, h) in faces:
    # cv2.rectangle(image, start_point, end_point, color_in_BGR, thickness)
    cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 3)

# 6. Display the output image
cv2.imshow('Detected Faces', image)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

Use code with caution.

### ⚡ Upgrading to Live Video (Webcam)

If you want to detect faces in **real-time using your webcam**, you only need to wrap the logic above inside a standard video capture loop:

python

```
import cv2

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Start video capture (0 is usually the built-in webcam)
video_capture = cv2.VideoCapture(0)

while True:
    # Capture frame-by-frame
    ret, frame = video_capture.read()
    if not ret:
        break

    # Process frame
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray_frame, scaleFactor=1.1, minNeighbors=5)

    # Draw boxes on the live frame
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

    # Display the live stream
    cv2.imshow('Live Face Detection', frame)

    # Press 'q' on the keyboard to exit the loop
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Clean up windows and camera resources
video_capture.release()
cv2.destroyAllWindows()
```

Use code with caution.

### ⚠️ Pro-Tip on Accuracy

While Haar Cascades are incredibly fast and lightweight, they struggle if a face is tilted, turned sideways, or partially blocked. If you find you need much higher accuracy under tricky lighting or side-angles, you should transition to OpenCV's **DNN module** using a pre-trained **ResNet-10 SSD** model.

Would you like to stick with this **Haar Cascade** setup for now, or would you like me to show you the code for the **Deep Learning (DNN)** model for better accuracy?

## why is it obsolete cmp w modern libs

The traditional **Haar Cascade** method is considered obsolete because it is a **25-year-old math hack** (invented in 2001) that relies on rigid pixel contrast rules rather than actual intelligence. [link](https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13605/1360504/Low-cost-face-tracking-using-ONVIF-based-surveillance-cameras/10.1117/12.3064712.full)

Modern libraries use **Deep Learning / Convolutional Neural Networks (CNNs)**, which process images contextually, just like a human brain. In fact, OpenCV is moving Haar Cascades out of its core library entirely. [link](https://www.youtube.com/shorts/vtRIlix-N-Q)

***

### ❌ Why Haar Cascades Failed the Test of Time

- **Extreme Inflexibility (Profile & Angles):** Haar Cascades look for fixed geometry (e.g., "eyes are always darker than the cheeks"). If a user tilts their head, looks sideways, or bends down, the math breaks instantly and the face "disappears". [link](https://www.youtube.com/watch?v=spSpaFCaWO8\&t=32)
- **Poor Lighting Tolerance:** They struggle heavily in shadows, dim environments, or heavy backlighting because they rely on basic pixel brightness contrast. [link](https://www.youtube.com/shorts/vtRIlix-N-Q)
- **High False Positive Rate:** It will frequently draw face boxes on random background textures, tree leaves, or clothing patterns that accidentally match its simple light/dark matrix rules.
- **Demographic Bias:** Because of the way the mathematical features were originally engineered and trained, older Haar models suffer from major accuracy drops across different skin tones. [link](https://www.biometricupdate.com/202507/facial-recognition-systems-based-on-older-methods-show-high-levels-of-bias-study)

***

### 📊 Direct Comparison: Old vs. New

| Feature / Metric             | 🔴 Old: OpenCV Haar Cascade               | 🟢 Modern: Google MediaPipe / YOLO         |
| ---------------------------- | ----------------------------------------- | ------------------------------------------ |
| **Core Technology**          | Rule-based Machine Learning (2001)        | Deep Neural Networks (CNNs)                |
| **3D Angles & Tilted Faces** | ❌ Fails on side-profiles or tilted heads | Handles complete profiles & complex tilts  |
| **Lighting Changes**         | ❌ Highly sensitive to shadows/glare      | Robust across uneven lighting conditions   |
| **Facial Landmarks**         | ❌ Bounding boxes only (no features)      | Tracks 468+ coordinates (eyes, lips, mesh) |
| **Hardware Strengths**       | Only uses CPU (Lightweight but dumb)      | Seamlessly accelerates using GPU/NPU       |

***

### 🏆 What Modern Developers Use Instead

If you want to upgrade your code to production-grade accuracy, you should phase out Haar Cascades and switch to one of these industry standards:

#### 1. Google MediaPipe (Best for Real-time Edge & Mobile)

Built on ultra-light deep learning models, [Google MediaPipe Face Detector](https://developers.google.com/edge/mediapipe/solutions/vision/face%5Fdetector?gl=us) runs blistering fast even on standard CPUs or mobile phones. It provides exact facial keypoints (eyes, nose, mouth) right out of the box. [link](https://developers.google.com/edge/mediapipe/solutions/vision/face%5Fdetector/python?gl=us)

python

```
# The modern way: 3 lines of inference with MediaPipe
import mediapipe as mp
detector = mp.solutions.face_detection.FaceDetection(model_selection=0, min_detection_confidence=0.5)
results = detector.process(image_rgb)
```

Use code with caution.

#### 2. Ultralytics YOLOv8 / YOLOv11 (Best for Crowds & Complex Scenes)

If you need to detect hundreds of faces simultaneously in a complex, moving environment (like a security camera surveillance feed), [Ultralytics YOLO Pose/Object Models](https://docs.ultralytics.com/) are state-of-the-art. They scale perfectly on hardware with dedicated GPUs. [link](https://www.youtube.com/watch?v=IYPIwTqAfKg\&vl=en\&t=361)

#### 3. OpenCV's Own YuNet / DNN Module (Best Middle-Ground)

If you want to stick strictly to OpenCV without adding massive dependencies, use OpenCV’s modern `dnn` module paired with **YuNet**. It is a lightweight deep-learning alternative shipped directly inside OpenCV that runs smoothly in real-time on CPUs while matching modern accuracy. [link](https://learnopencv.com/what-is-face-detection-the-ultimate-guide/)

- [link](https://www.youtube.com/shorts/vtRIlix-N-Q)\
  YouTube·LearnOpenCV\
  Still using Haar cascades for face detection? It's time to move ...\
  compared to modern neural networkbased detectors they are slow and inaccurate they fail under bad lighting odd orientations of the...
- [link](https://cvexplained.wordpress.com/2020/08/24/haar-cascades/)\
  WordPress.com\
  Haar Cascades | Computer Vision\
  It is a machine learning based approach where a cascade is trained from a lot of positive and negative images. It is then used to ...
- [link](https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13605/1360504/Low-cost-face-tracking-using-ONVIF-based-surveillance-cameras/10.1117/12.3064712.full)\
  SPIE Digital Library\
  Low-cost face tracking using ONVIF-based surveillance cameras\
  Representing classic machine learning is the Haar Cascade Classifier. Haar-like classifiers were first introduced by Viola and Jon...

Show all

# what are the foss ways to detect human faces in py in the simplest proven general way on basic laptops

## what are the foss ways to detect human faces in py in the simplest proven general way on basic laptops

The absolute best free and open-source software (FOSS) ways to detect human faces in Python on a basic laptop come down to balancing **ease of coding**, **accuracy**, and **CPU performance**.

Because you are using a basic laptop without a dedicated GPU, you want algorithms optimized for the CPU. The three most proven, general, and straightforward methods rank from the easiest/most modern to the ultra-lightweight legacy option:

***

### Comparison of Top 3 FOSS Methods

| Method                           | Best For                               | Accuracy        | CPU Speed / Laptop Friendly             | Setup Complexity                        |
| -------------------------------- | -------------------------------------- | --------------- | --------------------------------------- | --------------------------------------- |
| **1. Google MediaPipe**          | Best overall balance for basic laptops | **High**        | Ultra-Fast (BlazeFace model)            | Very Easy (`pip install mediapipe`)     |
| **2. `face_recognition` (dlib)** | Out-of-the-box ease (HOG model)        | **Medium-High** | Moderate (HOG is okay; CNN is too slow) | Harder (requires CMake/C++ compiler)    |
| **3. OpenCV Haar Cascades**      | Ancient, ultra-low resource laptops    | **Low-Medium**  | Blazing Fast                            | Very Easy (`pip install opencv-python`) |

***

### Method 1: Google MediaPipe (Recommended)

[Google AI Edge MediaPipe](https://developers.google.com/edge/mediapipe/solutions/vision/face%5Fdetector/python?gl=us) uses a sub-millisecond neural network model called **BlazeFace**. It is incredibly accurate, detects profile/side views well, and is optimized to run lightning-fast on basic laptop CPUs. [link](https://www.instructables.com/Face-Detection-Python-in-5-Minutes/)

**Installation:**

bash

```
pip install mediapipe opencv-python
```

Use code with caution.

**Code Example:**

python

```
import cv2
import mediapipe as mp

# Initialize MediaPipe Face Detection
mp_face_detection = mp.solutions.face_detection
mp_drawing = mp.solutions.drawing_utils

# Load image
image = cv2.imread('your_image.jpg')

with mp_face_detection.FaceDetection(model_selection=0, min_detection_confidence=0.5) as face_detection:
    # Convert BGR to RGB
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    results = face_detection.process(image_rgb)

    # Draw bounding boxes
    if results.detections:
        for detection in results.detections:
            mp_drawing.draw_detection(image, detection)

cv2.imshow('MediaPipe Face Detection', image)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

Use code with caution.

***

### Method 2: The `face_recognition` Library

The [`face_recognition` library](https://github.com/ageitgey/face%5Frecognition) is widely considered the world's simplest API for this task. By default, it utilizes a Histogram of Oriented Gradients (**HOG**) model via `dlib`. HOG runs very smoothly on standard laptops, though it struggles with non-frontal (profile) faces. [link](https://github.com/ageitgey/face%5Frecognition)

_Note: The only downside is installing `dlib`, which requires a C++ compiler (`cmake`, `gcc` or Visual Studio) on your laptop._ [link](https://realpython.com/face-recognition-with-python/)

**Installation:**

bash

```
pip install face-recognition opencv-python
```

Use code with caution.

**Code Example:**

python

```
import cv2
import face_recognition

# Load image
image = cv2.imread('your_image.jpg')

# Find all face locations using the default CPU-friendly HOG model
face_locations = face_recognition.face_locations(image, model="hog")

# Loop through each face found
for (top, right, bottom, left) in face_locations:
    # Draw a box around the face
    cv2.rectangle(image, (left, top), (right, bottom), (0, 255, 0), 2)

cv2.imshow('Face Recognition Library', image)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

Use code with caution.

***

### Method 3: OpenCV Haar Cascades (The Legacy Way)

If your laptop is exceptionally old or low-spec, **Haar Cascades** are mathematically lightweight and require almost no computing power. They work by looking for contrast patterns (like eyes being darker than cheeks). [link](https://medium.com/@juanlux7/creating-a-face-recognition-system-from-scratch-83b709cd0560)

The catch? It generates a lot of false positives and fails if the face is tilted or partially covered. [link](https://www.reddit.com/r/Python/comments/ilp6py/facial%5Fdetection%5Fwith%5Fpython%5Fin%5Fjust%5F2%5Fmims/)

Watching a brief coding walkthrough can help you visualize how easily Haar Cascades handle real-time bounding boxes via your webcam:

8m

[link](https://www.youtube.com/watch?v=5cg%5Fyggtkso\&t=9)

Simple Face Detection in Python

99K views · 4 years ago

YouTube · NeuralNine

**Installation:**

bash

```
pip install opencv-python
```

Use code with caution.

**Code Example:**

python

```
import cv2

# Load the built-in pre-trained frontal face classifier
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Load image and convert to grayscale (required for Haar)
image = cv2.imread('your_image.jpg')
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Detect faces
faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

# Draw rectangles around the faces
for (x, y, w, h) in faces:
    cv2.rectangle(image, (x, y), (x+w, y+h), (255, 0, 0), 2)

cv2.imshow('OpenCV Haar Cascade', image)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

Use code with caution.

### Recommendation

Start with **MediaPipe** (Method 1). It has the easiest installation path, performs brilliantly on basic laptop CPUs, and handles side profiles or angled faces far better than traditional computer vision tricks. [link](https://developers.google.com/edge/mediapipe/solutions/vision/face%5Fdetector/python?gl=us)

Are you looking to process **still images** or a **live webcam stream**? I can easily tweak any of these scripts to handle real-time video feeds for you.

- [link](https://www.instructables.com/Face-Detection-Python-in-5-Minutes/)\
  Instructables\
  Face Detection Python in 5 Minutes : 12 Steps - Instructables\
  Face detection identifies human face locations, sizes, and counts in digital images as object-class detection, distinct from facia...
- [link](https://realpython.com/face-recognition-with-python/)\
  Real Python\
  Build Your Own Face Recognition Tool With Python – Real Python\
  Requirements: dlib (20.0.1), face-recognition (1.3.0), numpy (2.5.2), Pillow (12.3.0), setuptools (81.0.0), CMake, C compiler (gcc...
- [link](https://developers.google.com/edge/mediapipe/solutions/vision/face%5Fdetector/python?gl=us)\
  Google for Developers\
  Face detection guide for Python | Google AI Edge\
  Oct 9, 2026 — The MediaPipe Face Detector task lets you detect faces in an image or video. You can use this task to locate faces and facial feat...

Show all

## what does mediapipe output

**Google MediaPipe Face Detection** outputs <mark>a specialized object containing a list of</mark> **`detections`**. Each detection represents a single face found in the image and contains three critical pieces of data: **normalized bounding boxes**, **relative keypoints (facial landmarks)**, and a **confidence score**.

Because MediaPipe normalizes its values (ranging from `0.0` to `1.0`), the output is independent of your image's actual resolution. To use these coordinates to crop an image or draw a box, you must multiply them by your image's width and height.

***

### The 3 Core Components of the Output

#### 1. Bounding Box (`location_data.relative_bounding_box`)

Instead of giving you exact pixel coordinates, MediaPipe provides relative floats based on the image size.

- **`xmin` & `ymin`**: The top-left corner of the face box (e.g., `0.35` means 35% from the left edge).
- **`width` & `height`**: The total span of the face box (e.g., `0.20` means the face spans 20% of the image's width).

#### 2. Six Keypoints (`location_data.relative_keypoints`)

MediaPipe automatically tracks **6 structural points** on the face. Like the bounding box, these are outputted as relative `x` and `y` coordinates.

- **Right eye** & **Left eye**
- **Nose tip**
- **Mouth center**
- **Right ear tragus** & **Left ear tragus**

#### 3. Score (`score`)

A float value (e.g., `[0.94]`) representing how confident the model is that the detected object is actually a human face.

***

### What the Raw Data Looks Like (Python Representation)

If you print a detection object to your console using `print(detection)`, you will see a structure like this:

text

```
label_id: 0
score: 0.9453125         # 94.5% confident this is a face
location_data {
  format: RELATIVE_BOUNDING_BOX
  relative_bounding_box {
    xmin: 0.3421054       # Start X (34.2% from left)
    ymin: 0.2114022       # Start Y (21.1% from top)
    width: 0.2201402      # Box width (22% of image width)
    height: 0.2934101     # Box height (29.3% of image height)
  }
  relative_keypoints { x: 0.401 y: 0.301 }  # Right eye
  relative_keypoints { x: 0.495 y: 0.298 }  # Left eye
  relative_keypoints { x: 0.451 y: 0.365 }  # Nose tip
  relative_keypoints { x: 0.453 y: 0.421 }  # Mouth center
  relative_keypoints { x: 0.352 y: 0.341 }  # Right ear
  relative_keypoints { x: 0.541 y: 0.335 }  # Left ear
}
```

Use code with caution.

***

### How to Extract Pixels From This Output

To convert these percentages into actual pixel numbers (integers) to crop the face out or build custom triggers, you use this simple math logic in your code:

python

```
# Assuming 'image' is your loaded image from OpenCV
h, w, _ = image.shape  # Get pixel dimensions (e.g., 1080 x 1920)

if results.detections:
    for detection in results.detections:
        bbox = detection.location_data.relative_bounding_box

        # Convert relative floats to actual pixel integers
        x_min = int(bbox.xmin * w)
        y_min = int(bbox.ymin * h)
        box_w = int(bbox.width * w)
        box_h = int(bbox.height * h)

        # Now you have absolute coordinates
        x_max = x_min + box_w
        y_max = y_min + box_h

        # Example: Crop the face using NumPy slicing
        face_crop = image[y_min:y_max, x_min:x_max]
```

Use code with caution.

Would you like to see how to use those **6 facial keypoints** to do something specific, like **automatically blur eyes** or detect if a face is tilted?

## write a uv script to analyze every photo given a flat folder and output yaml named the same as the photo alongside each

8 sites

### Here are top web results for exploring this topic:

[link](https://gist.github.com/ibaiGorordo/208635f2bb8a4ac54f21914cd492c8bd)

GitHub·https://gist.github.com

**Python script** to **analyze** the input **image** transformation ... - GitHub Gist

Referenes: # - Resize and pad: https://stackoverflow.com/questions/44720580/resize-image-canvas-to-maintain-square-aspect-ratio-in-python-opencv. # - Mediapipe image scale and offset: https://github.c

[link](https://stackoverflow.com/questions/79220232/mediapipe-gives-different-results-in-two-cases-image-file-path-and-numpy-array-i)

Stack Overflow·https://stackoverflow.com

**Mediapipe** gives different **results** in two cases **image file** path and ...

Thanks to Christoph Rackwitz's suggestion, swapping the image channels in MediaPipe yields the same results as in the first case. The rectifier function should be rewritten as follows: def rectifier(d

[link](https://www.youtube.com/watch?v=Osx-UEg%5Fgbo)

YouTube·https://www.youtube.com

**Keypoints** detection on face and **Bounding Box** - YouTube

In this video, we are going to see how to detect faces in images using the Face detection module of the Mediapipe. We will also see how to get the keypoints in an image and also to see how to plot the

[link](https://eranfeit.net/fast-object-detection-in-python-with-mediapipe/)

Eran Feit·https://eranfeit.net

**MediaPipe** Object Detection **Python**: Fast & Easy Guide - Eran Feit

Master MediaPipe Object Detection Python in this tutorial. Build a real-time detector using EfficientDet-Lite for professional bounding box results.

[link](https://mnnur.medium.com/interactive-image-segmentation-using-mediapipe-18cc06102e9e)

Medium·https://mnnur.medium.com

Interactive **image** segmentation **using MediaPipe** - Medium

... segmentation lets you divide an image into two regions: a selected object and everything else. You provide a location within the image, and MediaPipe estimates the boundaries of the object at that

[link](https://www.youtube.com/watch?v=s--pKF6oJ3U)

YouTube·https://www.youtube.com

Object Detection in **Mediapipe using Python** - YouTube

In this video, we will try to understand object detection using Mediapipe. We will be looking at the code which is largely inspired by the official code example given in the documentation. Code: https

[link](https://github.com/Raihan4520/MediaPipe-Python)

GitHub·https://github.com

Raihan4520/**MediaPipe**-**Python**: This repository demonstrates pose ...

Project Structure. Images.zip : A zip file containing an Images folder with 10 images. These images are used as input to detect and visualize pose landmarks and segmentation masks. Pose\_Landmark\_Detec

[link](https://stackoverflow.com/questions/69810210/mediapipe-solutionfacedetection)

Stack Overflow·https://stackoverflow.com

**mediapipe** solution::FaceDetection - **python** - Stack Overflow

is there a way of getting the bounding boxes from mediapipe faceDetection solution? cap = cv2.VideoCapture(0) with mp\_face\_detection.FaceDetection( model\_selection=0, min\_detection\_confidence=0.5) as

## write a uv script to analyze every photo given a flat folder and output yaml named the same as the photo alongside each

Here is a complete, self-contained **`uv` script** that processes a folder of images using **MediaPipe**.

This script utilizes `uv`'s inline dependency metadata feature. It automatically handles downloading Python, `mediapipe`, `pyyaml`, and `opencv-python` into an isolated, temporary environment without touching your global system packages.

### The Python Script (`analyze_faces.py`)

Save the code below into a file named `analyze_faces.py`.

python

```
# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "mediapipe>=0.10.14",
#     "opencv-python-headless>=4.10.0.84",
#     "pyyaml>=6.0.1",
# ]
# ///

import os
import sys
import argparse
from pathlib import Path
import cv2
import yaml
import mediapipe as mp

# Supported image extensions
IMAGE_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.bmp', '.webp'}

def analyze_image(image_path: Path):
    """Analyzes a single image for faces and extracts bounding boxes and keypoints."""
    # Read the image using OpenCV
    image = cv2.imread(str(image_path))
    if image is None:
        print(f"⚠️  Skipping: Could not read {image_path.name}")
        return None

    # Get image dimensions
    h, w, _ = image.shape

    # Initialize MediaPipe Face Detection
    mp_face_detection = mp.solutions.face_detection

    faces_data = []

    # Using model_selection=1 (Full-range model, better for faces further away/general photos)
    with mp_face_detection.FaceDetection(model_selection=1, min_detection_confidence=0.5) as face_detection:
        # Convert the BGR image to RGB
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        results = face_detection.process(image_rgb)

        if results.detections:
            for idx, detection in enumerate(results.detections):
                bbox = detection.location_data.relative_bounding_box

                # Convert normalized percentages to absolute pixel integers
                x_min = int(bbox.xmin * w)
                y_min = int(bbox.ymin * h)
                box_w = int(bbox.width * w)
                box_h = int(bbox.height * h)

                # Extract keypoints mapping
                kp = detection.location_data.relative_keypoints
                keypoints_dict = {
                    "right_eye":     {"x": int(kp[0].x * w), "y": int(kp[0].y * h)},
                    "left_eye":      {"x": int(kp[1].x * w), "y": int(kp[1].y * h)},
                    "nose_tip":      {"x": int(kp[2].x * w), "y": int(kp[2].y * h)},
                    "mouth_center":  {"x": int(kp[3].x * w), "y": int(kp[3].y * h)},
                    "right_ear":     {"x": int(kp[4].x * w), "y": int(kp[4].y * h)},
                    "left_ear":      {"x": int(kp[5].x * w), "y": int(kp[5].y * h)},
                }

                # Construct a clean dictionary for this face
                face_info = {
                    "face_index": idx,
                    "confidence": float(round(detection.score[0], 4)),
                    "bounding_box": {
                        "pixel_xmin": x_min,
                        "pixel_ymin": y_min,
                        "pixel_width": box_w,
                        "pixel_height": box_h,
                    },
                    "keypoints": keypoints_dict
                }
                faces_data.append(face_info)

    # Document-wide metadata structural skeleton
    output_metadata = {
        "image_filename": image_path.name,
        "dimensions": {"width": w, "height": h},
        "faces_detected": len(faces_data),
        "faces": faces_data
    }

    return output_metadata

def main():
    parser = argparse.ArgumentParser(description="Analyze a flat folder of images for human faces and output metadata to companion YAML files.")
    parser.add_argument("folder", help="Path to the flat directory containing images.")
    args = parser.get_parse_args() if hasattr(parser, 'get_parse_args') else parser.parse_args()

    target_dir = Path(args.folder)
    if not target_dir.is_dir():
        print(f"❌ Error: '{target_dir}' is not a valid directory.")
        sys.exit(1)

    # Find all files with supported image extensions
    image_files = [f for f in target_dir.iterdir() if f.is_file() and f.suffix.lower() in IMAGE_EXTENSIONS]

    if not image_files:
        print(f"ℹ️  No images found matching extensions {IMAGE_EXTENSIONS} in '{target_dir}'")
        return

    print(f"🚀 Found {len(image_files)} images. Starting CPU face detection analysis...")

    for img_path in image_files:
        # Define output companion YAML file path (e.g., image.png -> image.yaml)
        yaml_path = img_path.with_suffix('.yaml')

        print(f"📸 Processing: {img_path.name} ... ", end="", flush=True)

        metadata = analyze_image(img_path)

        if metadata:
            # Write structured data cleanly into the YAML sidecar file
            with open(yaml_path, 'w', encoding='utf-8') as yf:
                yaml.dump(metadata, yf, default_flow_style=False, sort_keys=False)
            print(f"💾 Saved to {yaml_path.name} (Found {metadata['faces_detected']} face(s))")

    print("\n✅ Execution completed successfully.")

if __name__ == "__main__":
    main()
```

Use code with caution.

***

### How to Run It

Because `uv` abstracts all setup workflows, executing this script requires a single line in your terminal. You do not need a `virtualenv`, a `requirements.txt`, or manual package compilation.

bash

```
uv run analyze_faces.py /path/to/your/image/folder
```

Use code with caution.

### Expected Directory Output

If your flat image directory contains `photo1.jpg` and `selfie.png`, running the script transforms your folder structure into this, creating companion sidecar logs side-by-side:

text

```
📁 your_image_folder/
├── 🖼️ photo1.jpg
├── 📄 photo1.yaml   <-- Created!
├── 🖼️ selfie.png
└── 📄 selfie.yaml   <-- Created!
```

Use code with caution.

### Example Generated YAML Output (`photo1.yaml`)

yaml

```
image_filename: photo1.jpg
dimensions:
  width: 1920
  height: 1080
faces_detected: 1
faces:
- face_index: 0
  confidence: 0.9421
  bounding_box:
    pixel_xmin: 656
    pixel_ymin: 228
    pixel_width: 422
    pixel_height: 316
  keypoints:
    right_eye:
      x: 770
      y: 325
    left_eye:
      x: 950
      y: 321
    nose_tip:
      x: 865
      y: 394
    mouth_center:
      x: 869
      y: 454
    right_ear:
      x: 675
      y: 368
    left_ear:
      x: 1038
      y: 361
```

Use code with caution.

Would you like to add a filter flag so it **automatically skips** files that already have an existing YAML companion, or do you want it to always overwrite them?

## AttributeError: module 'mediapipe' has no attribute 'solutions'

<mark><span>This error occurs because Google<span> </span></span><strong>officially removed the legacy<span> </span><code dir="ltr">mp.solutions</code><span> </span>API</strong><span> </span>from MediaPipe</mark>. Newer versions of the library strictly use the modern **MediaPipe Tasks API** (`mediapipe.tasks.python`). [link](https://github.com/google-ai-edge/mediapipe/issues/6204)

Because you are using `uv`, you can resolve this instantly. You have two options: fix it by pinning to an older version of MediaPipe, or upgrade the script to use Google's new official Tasks API.

***

### Option 1: The Quick Fix (Pin MediaPipe Version)

The fastest way to fix the issue without changing your actual code logic is to tell `uv` to use an older version of MediaPipe (such as `0.10.21`), where the `solutions` attribute still exists. [link](https://github.com/google-ai-edge/mediapipe/issues/6241)

Simply replace the top metadata block of your `analyze_faces.py` file with this:

python

```
# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "mediapipe==0.10.21",               # <-- Change this line to pin the version
#     "opencv-python-headless>=4.10.0.84",
#     "pyyaml>=6.0.1",
# ]
# ///
```

Use code with caution.

Now run `uv run analyze_faces.py /path/to/folder` again, and it will work smoothly. [link](https://github.com/Fannovel16/comfyui%5Fcontrolnet%5Faux/issues/604)

***

### Option 2: The Future-Proof Fix (Migrate to the Tasks API)

If you want to use the modern, supported version of MediaPipe, you must use the updated **MediaPipe Tasks API**. [link](https://github.com/google-ai-edge/mediapipe/issues/6200)

_Note: The new Tasks API requires an external model file. The script below will automatically download Google's official 1MB face detection model file (`blaze_face_short_range.task`) into your folder to perform the analysis._

Here is the fully rewritten, updated `uv` script using the modern `mediapipe.tasks` ecosystem: [link](https://stackoverflow.com/questions/79879922/module-mediapipe-has-no-attribute-solutions)

python

```
# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "mediapipe>=0.10.31",
#     "opencv-python-headless>=4.10.0.84",
#     "pyyaml>=6.0.1",
#     "requests>=2.31.0",
# ]
# ///

import os
import sys
import argparse
from pathlib import Path
import cv2
import yaml
import requests
import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import vision

IMAGE_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.bmp', '.webp'}
MODEL_URL = "https://googleapis.com"
MODEL_FILE = "blaze_face_short_range.task"

def download_model_if_missing():
    """Ensures Google's face model file exists locally before running."""
    if not os.path.exists(MODEL_FILE):
        print("📥 Downloading official BlazeFace model file...")
        response = requests.get(MODEL_URL, stream=True)
        with open(MODEL_FILE, "wb") as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)

def analyze_image(image_path: Path, detector):
    """Analyzes an image using the modern MediaPipe Tasks API."""
    # MediaPipe Tasks requires its own Image object format
    try:
        mp_image = mp.Image.create_from_file(str(image_path))
    except Exception:
        print(f"⚠️  Skipping: Could not read {image_path.name}")
        return None

    h, w, _ = mp_image.numpy_view().shape

    # Run detector
    detection_result = detector.detect(mp_image)
    faces_data = []

    if detection_result.detections:
        for idx, detection in enumerate(detection_result.detections):
            bbox = detection.bounding_box

            # Extract keypoints mapping from new structural layout
            kp = detection.keypoints
            keypoints_dict = {
                "right_eye":     {"x": int(kp[0].x * w), "y": int(kp[0].y * h)},
                "left_eye":      {"x": int(kp[1].x * w), "y": int(kp[1].y * h)},
                "nose_tip":      {"x": int(kp[2].x * w), "y": int(kp[2].y * h)},
                "mouth_center":  {"x": int(kp[3].x * w), "y": int(kp[3].y * h)},
                "right_ear":     {"x": int(kp[4].x * w), "y": int(kp[4].y * h)},
                "left_ear":      {"x": int(kp[5].x * w), "y": int(kp[5].y * h)},
            }

            face_info = {
                "face_index": idx,
                "confidence": float(round(detection.categories[0].score, 4)),
                "bounding_box": {
                    "pixel_xmin": int(bbox.origin_x),
                    "pixel_ymin": int(bbox.origin_y),
                    "pixel_width": int(bbox.width),
                    "pixel_height": int(bbox.height),
                },
                "keypoints": keypoints_dict
            }
            faces_data.append(face_info)

    return {
        "image_filename": image_path.name,
        "dimensions": {"width": w, "height": h},
        "faces_detected": len(faces_data),
        "faces": faces_data
    }

def main():
    parser = argparse.ArgumentParser(description="Analyze images using modern MediaPipe Tasks API.")
    parser.add_argument("folder", help="Path to the flat directory containing images.")
    args = parser.parse_args()

    target_dir = Path(args.folder)
    if not target_dir.is_dir():
        print(f"❌ Error: '{target_dir}' is not a valid directory.")
        sys.exit(1)

    image_files = [f for f in target_dir.iterdir() if f.is_file() and f.suffix.lower() in IMAGE_EXTENSIONS]
    if not image_files:
        print(f"ℹ️  No images found in '{target_dir}'")
        return

    download_model_if_missing()

    # Initialize the modern FaceDetector
    base_options = python.BaseOptions(model_asset_path=MODEL_FILE)
    options = vision.FaceDetectorOptions(base_options=base_options, min_detection_confidence=0.5)

    print(f"🚀 Found {len(image_files)} images. Analyzing...")

    with vision.FaceDetector.create_from_options(options) as detector:
        for img_path in image_files:
            yaml_path = img_path.with_suffix('.yaml')
            print(f"📸 Processing: {img_path.name} ... ", end="", flush=True)

            metadata = analyze_image(img_path, detector)
            if metadata:
                with open(yaml_path, 'w', encoding='utf-8') as yf:
                    yaml.dump(metadata, yf, default_flow_style=False, sort_keys=False)
                print(f"💾 Saved to {yaml_path.name} ({metadata['faces_detected']} face(s))")

    print("\n✅ Execution completed successfully.")

if __name__ == "__main__":
    main()
```

Use code with caution.

Would you prefer to stick with **Option 1** to avoid downloading the extra `.task` file, or do you want to stick with **Option 2** to keep your dependencies fully modern and up-to-date?

- [link](https://stackoverflow.com/questions/79879922/module-mediapipe-has-no-attribute-solutions)\
  Stack Overflow\
  Module 'mediapipe' has no attribute 'solutions'\
  Mediapipe is perfectly compatible with Python 3.13. Follow this guide instead: STEP 1: Import the necessary modules. STEP 2: Creat...
- [link](https://github.com/google-ai-edge/mediapipe/issues/6204)\
  GitHub\
  AttributeError: module 'mediapipe' has no attribute 'solutions' · Issue #6204 · google-ai-edge/mediapipe\
  The legacy Solutions API has been officially removed from MediaPipe in recent versions. Resolution: Users must migrate from \`mp.so...
- [link](https://github.com/google-ai-edge/mediapipe/issues/6200)\
  GitHub\
  AttributeError: module 'mediapipe' has no attribute 'solutions' · Issue #6200 · google-ai-edge/mediapipe\
  Dec 30, 2025 — Support for MediaPipe Solutions was removed in the library. Resolution: Migrate from MediaPipe Solutions to the MediaPipe Tasks AP...

Show all

## shell command to prefix all yaml files under 200 bytes w a dot

To hide or flag empty or invalid YAML files, you can use a quick shell command.

Here are the standard commands depending on your operating system's terminal. Run these directly inside the target image folder.

### For Linux & macOS (Bash / Zsh)

This command loops through all `.yaml` files, checks if their size is **under 200 bytes**, and renames them by prepending a dot (`.`) to the filename.

bash

```
for f in *.yaml; do [ -f "$f" ] && [ $(stat -c%s "$f" 2>/dev/null || stat -f%z "$f") -lt 200 ] && mv "$f" ".$f"; done
```

Use code with caution.

_(Note: The `stat` syntax inside handles both Linux (`-c%s`) and macOS (`-f%z`) variations seamlessly)._

### For Windows (PowerShell)

If you are running on Windows using PowerShell, use this clean pipeline command instead:

powershell

```
Get-ChildItem *.yaml | Where-Object { $_.Length -lt 200 } | ForEach-Object { Rename-Item $_.FullName -NewName ".$($_.Name)" }
```

Use code with caution.

### What This Does:

If `photo1.yaml` is 145 bytes, it instantly morphs into `.photo1.yaml`, effectively hiding it from standard directory lists (`ls` or Windows File Explorer by default).

Would you like me to update the original Python execution script so that it **automatically skips creating a YAML file** if no faces are detected in the first place?

## ubuntu shell command to prefix all photos w no coresponding visible yaml w a dot

Here is the exact **Ubuntu (Bash)** shell command to do this. Run this command directly inside the folder containing your photos and `.yaml` files.

bash

```
for f in *.{jpg,jpeg,png,bmp,webp}; do [ -f "$f" ] && [ ! -f "${f%.*}.yaml" ] && mv "$f" ".$f"; done
```

Use code with caution.

### 💡 How It Works

1. **`for f in *.{jpg,jpeg,...}`**: Loops through every photo matching common extensions in the folder.
2. **`[ -f "$f" ]`**: Confirms that the file actually exists and isn't a blank literal text pattern.
3. **`[ ! -f "${f%.*}.yaml" ]`**: Strips the extension from the photo (e.g., `photo1.jpg` becomes `photo1`) and checks if a **visible** companion file named `photo1.yaml` is **missing** (`!`).
4. **`mv "$f" ".$f"`**: Instantly prepends a dot to the filename if the visible YAML doesn't exist, effectively hiding the photo.

_(Note: Since your previous command hid small YAML files by changing them to `.photo1.yaml`, this command correctly catches those photos because their corresponding **visible** YAML file is now gone!)_

Would you like a separate clean-up command to **delete** all the hidden files once you are finished verifying everything?

## why does it work only in bash but not zsh

The reason it fails in **Zsh** is because of a fundamental difference in how **Bash** and **Zsh** handle **brace expansion** when files are missing.

By default, **Zsh protects you from running commands on files that don't exist**, whereas Bash is much more loose.

Here are the two exact reasons why it broke, and how Zsh handles things differently:

### 1. The "No Matches Found" Error (Nomatch)

In **Bash**, if you type `*.png` and there are no `.png` files in the folder, Bash just passes the literal string `*.png` into the loop and moves on.\
In **Zsh**, if you use a pattern like `*.{jpg,png}` and _even one_ of those extensions has zero files in the folder, Zsh panics, stops everything, and throws a `zsh: no matches found` error before the loop even starts.

### 2. Space Splitting inside Braces

Bash treats `*.{jpg,jpeg,png}` as a list of separate terms. Zsh looks at a complex brace expansion with multiple file extensions differently unless you explicitly tell it to treat them as an optional list of extensions.

***

### The Clean Zsh Fix

If you want to run this in **Zsh**, you use its native, much cleaner **OR syntax** `(jpg|jpeg|png...)`. You also add the `(N)` flag (which stands for _NullGlob_), telling Zsh: _"If this extension doesn't exist in the folder, just ignore it instead of crashing."_

Run this exact command if you are in a **Zsh** terminal:

zsh

```
for f in *.(jpg|jpeg|png|bmp|webp)(N); do [ -f "$f" ] && [ ! -f "${f%.*}.yaml" ] && mv "$f" ".$f"; done
```

Use code with caution.

### Alternatively: Force Zsh to act like Bash

If you ever want to run raw Bash scripts inside Zsh without it crashing on missing file patterns, you can temporarily turn off Zsh's strict matching protection by running this first:

zsh

```
unsetopt NOMATCH
# Now your original Bash command will run perfectly in Zsh!
```

Use code with caution.

Are you planning to turn these folder clean-up operations into an **automated shell script file**, or do you prefer keeping them as quick **one-liner terminal commands**?

## does the zsh one work for bash

<mark><strong><span>No, the Zsh-specific command will not work in Bash.</span></strong></mark>

If you try to run the Zsh version in Bash, Bash will look for a literal file extension named exactly `.(jpg|jpeg|png|bmp|webp)(N)` and immediately fail with a syntax or file-not-found error. Bash does not understand Zsh's `(|)` OR operators or `(N)` NullGlob flags.

However, you can write a **universal command** that works perfectly in **both Bash and Zsh** without making any configuration changes.

### The Universal Command (Works in Bash & Zsh)

To make it cross-compatible, we drop the fancy brace expansions and use standard wildcard matching inside a conditional loop:

bash

```
for f in *; do [ -f "$f" ] && [[ "$f" =~ \.(jpg|jpeg|png|bmp|webp)$ ]] && [ ! -f "${f%.*}.yaml" ] && mv "$f" ".$f"; done
```

Use code with caution.

### Why this universal version works everywhere:

1. **`for f in *`**: Safely loops through _every_ file in the directory. Neither shell will crash because every directory has files (or if it's empty, it just cleanly loops 0 times).
2. **`[[ "$f" =~ \.(...)$ ]]`**: Uses standard regular expressions supported by both modern Bash and Zsh to cleanly check if the file ends in one of your target photo extensions.
3. **`${f%.*}.yaml`**: Safely strips the image extension to check for the visible companion YAML.

Are you running into an environment where your script needs to dynamically detect whether it's executing inside **Bash vs. Zsh**, or is this universal one-liner enough for your workflow?

