good...

```
event: delta_encoding
data: "v1"

data: {"type": "resume_conversation_token", "kind": "conduit", "token": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25kdWl0X3V1aWQiOiI3N2VjODE1MGFhY2E0NTM3OTY1ODBhY2NmN2NlNTRmZSIsImNvbmR1aXRfbG9jYXRpb24iOiIxMC4xMzMuMC43Nzo4MzAyIiwiY2x1c3RlciI6InVuaWZpZWQtODciLCJpYXQiOjE3NjkyNjczNjQsImV4cCI6MTc2OTI3NDU2NCwidHVybl90b3BpY19pZCI6bnVsbH0.z6JMTXy_3sUvNkLQDUJilJbUj4kHqofwWPkODAZ911Asj_15akAX_16PBRgw-sogkRKm_SSBi1P4Hq_VIjJ-BA", "conversation_id": "6974e0a3-b684-8321-a73a-bf4e7b6dfafe"}

event: delta
data: {"p": "", "o": "add", "v": {"message": {"id": "b5644258-4a5d-451f-a38c-bc8c03ab4848", "author": {"role": "system", "name": null, "metadata": {}}, "create_time": null, "update_time": null, "content": {"content_type": "text", "parts": [""]}, "status": "finished_successfully", "end_turn": true, "weight": 0.0, "metadata": {"is_visually_hidden_from_conversation": true, "model_switcher_deny": []}, "recipient": "all", "channel": null}, "conversation_id": "6974e0a3-b684-8321-a73a-bf4e7b6dfafe", "error": null, "error_code": null}, "c": 0} 

event: delta
data: {"v": {"message": {"id": "b274ffa4-16a9-45d5-be0f-1374c0abb419", "author": {"role": "user", "name": null, "metadata": {}}, "create_time": 1769267362.839, "update_time": null, "content": {"content_type": "text", "parts": ["give me a list of 10 famous people"]}, "status": "finished_successfully", "end_turn": null, "weight": 1.0, "metadata": {"selected_github_repos": [], "serialization_metadata": {"custom_symbol_offsets": []}, "request_id": "8543ef06-a65b-471c-854e-52b78747c1fb", "message_source": null, "turn_exchange_id": "6e1d4596-bead-43b8-a172-f54617f7b885", "model_switcher_deny": []}, "recipient": "all", "channel": null}, "conversation_id": "6974e0a3-b684-8321-a73a-bf4e7b6dfafe", "error": null, "error_code": null}, "c": 1}  

data: {"type": "input_message", "input_message": {"id": "b274ffa4-16a9-45d5-be0f-1374c0abb419", "author": {"role": "user", "name": null, "metadata": {}}, "create_time": 1769267362.839, "update_time": null, "content": {"content_type": "text", "parts": ["give me a list of 10 famous people"]}, "status": "finished_successfully", "end_turn": null, "weight": 1.0, "metadata": {"selected_github_repos": [], "selected_all_github_repos": false, "serialization_metadata": {"custom_symbol_offsets": []}, "request_id": "8543ef06-a65b-471c-854e-52b78747c1fb", "message_source": null, "turn_exchange_id": "6e1d4596-bead-43b8-a172-f54617f7b885", "turn_trace_id": "0e18d544-ddad-4083-9eed-247681c6a6bf", "useragent": {"client_type": "web", "is_mobile": false, "is_mobile_app": false, "is_desktop_app": false, "is_native_app": false, "is_native_app_apple": false, "is_mobile_app_ios": false, "is_desktop_app_macos": false, "is_aura_app_macos": false, "is_aura_web": false, "is_sora_ios": false, "is_agora_ios": false, "is_agora_android": false, "is_desktop_app_windows": false, "is_electron_app": false, "is_mobile_app_android": false, "is_mobile_web": false, "is_mobile_web_ios": false, "is_mobile_web_android": false, "is_ios": false, "is_android": false, "is_macos": false, "is_windows": false, "is_linux": true, "is_chatgpt_client": false, "is_sora_client": false, "is_agora_client": false, "is_browserbased_app": true, "is_chatgpt_api": false, "is_slack": false, "is_chatkit_web": false, "is_chatkit_synthetic": false, "is_kakao_talk": false, "app_version": null, "build_number": null, "user_agent": "mozilla/5.0 (x11; linux x86_64) applewebkit/537.36 (khtml, like gecko) chrome/143.0.0.0 safari/537.36", "app_environment": null, "os_version": null, "device_model": null, "user_client_type": "desktop_web"}, "paragen_stream_type": "default", "parent_id": "b5644258-4a5d-451f-a38c-bc8c03ab4848"}, "recipient": "all", "channel": null}, "conversation_id": "6974e0a3-b684-8321-a73a-bf4e7b6dfafe"}

event: delta
data: {"v": {"message": {"id": "0fe98393-5d68-4e41-9fb6-75b50f27c79e", "author": {"role": "assistant", "name": null, "metadata": {}}, "create_time": 1769267364.446187, "update_time": null, "content": {"content_type": "text", "parts": [""]}, "status": "in_progress", "end_turn": null, "weight": 1.0, "metadata": {"citations": [], "content_references": [], "request_id": "8543ef06-a65b-471c-854e-52b78747c1fb", "message_type": "next", "model_slug": "gpt-5-2", "default_model_slug": "auto", "parent_id": "b274ffa4-16a9-45d5-be0f-1374c0abb419", "turn_exchange_id": "6e1d4596-bead-43b8-a172-f54617f7b885", "model_switcher_deny": []}, "recipient": "all", "channel": null}, "conversation_id": "6974e0a3-b684-8321-a73a-bf4e7b6dfafe", "error": null, "error_code": null}, "c": 2}     

data: {"type": "message_marker", "conversation_id": "6974e0a3-b684-8321-a73a-bf4e7b6dfafe", "message_id": "0fe98393-5d68-4e41-9fb6-75b50f27c79e", "marker": "user_visible_token", "event": "first"}

event: delta
data: {"p": "/message/content/parts/0", "o": "append", "v": "Here\u2019s"}    

event: delta
data: {"v": " a list"}

event: delta
data: {"v": " of "}   

event: delta
data: {"v": "10 famous"}      

event: delta
data: {"v": " people from different fields:\n\n1. **"}

data: {"type": "title_generation", "title": "Famous People List Request", "conversation_id": "6974e0a3-b684-8321-a73a-bf4e7b6dfafe"}

event: delta
data: {"v": "Albert Einstein** \u2013 Physicist, known for developing the theory of relativity.\n2. **Oprah Winfrey** \u2013 Media mogul, talk show host, and philanthropist.\n3. **Leonardo da Vinci** \u2013 Renaissance polymath, painter, and inventor.\n4. **Maya Angelou** \u2013 Poet, memoirist, and civil rights activist.\n5. **Steve Jobs"}

event: delta
data: {"v": "** \u2013 Co-founder of Apple Inc. and pioneer in personal computing.\n6. **Beyonc\u00e9** \u2013 Singer, songwriter, and actress"}      

event: delta
data: {"v": ".\n7. **Nelson Mandela** \u2013 Anti-apartheid revolutionary and former President of South"}     

event: delta
data: {"v": " Africa.\n8. **Elon Musk** \u2013 Entrepreneur, CEO of Tesla and SpaceX.\n9."}   

event: delta
data: {"v": " **William Shakespeare** \u2013 Playwright and poet, widely regarded as one of the greatest writers in"} 

event: delta
data: {"v": " the English language.\n10. **Frida Kahlo** \u2013 Mexican artist, known"}       

event: delta
data: {"v": " for her self-portraits and bold use of color"}  

event: delta
data: {"p": "", "o": "patch", "v": [{"p": "/message/content/parts/0", "o": "append", "v": ".\n\nAny particular field or person you're interested in learning more about?"}, {"p": "/message/status", "o": "replace", "v": "finished_successfully"}, {"p": "/message/end_turn", "o": "replace", "v": true}, {"p": "/message/metadata", "o": "append", "v": {"finish_details": {"type": "stop", "stop_tokens": [200002]}, "is_complete": true}}]}       

data: {"type": "server_ste_metadata", "metadata": {"conduit_prewarmed": false, "plan_type": "free", "user_agent": "web_desktop", "service": null, "tool_name": null, "tool_invoked": false, "fast_convo": true, "warmup_state": "cold", "is_first_turn": true, "cluster_region": "japanwest", "model_slug": "i-mini", "region": null, "is_multimodal": false, "did_auto_switch_to_reasoning": false, "auto_switcher_race_winner": null, "is_autoswitcher_enabled": false, "is_search": null, "did_prompt_contain_image": false, "search_tool_call_count": null, "search_tool_query_types": null, "message_id": "0fe98393-5d68-4e41-9fb6-75b50f27c79e", "request_id": "8543ef06-a65b-471c-854e-52b78747c1fb", "turn_exchange_id": "6e1d4596-bead-43b8-a172-f54617f7b885", "turn_trace_id": "0e18d544-ddad-4083-9eed-247681c6a6bf", "a32e6ebcb": 2, "resume_with_websockets": false, "streaming_async_status": false, "temporal_conversation_turn": false}, "conversation_id": "6974e0a3-b684-8321-a73a-bf4e7b6dfafe"}

data: {"type": "message_stream_complete", "conversation_id": "6974e0a3-b684-8321-a73a-bf4e7b6dfafe"}

data: {"type": "title_generation", "title": "Famous People List", "conversation_id": "6974e0a3-b684-8321-a73a-bf4e7b6dfafe"}

data: [DONE]
```

(til bold use of color)

```
event: delta_encoding
data: "v1"

data: {"type": "resume_conversation_token", "kind": "conduit", "token": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25kdWl0X3V1aWQiOiI5MTU0MDFjZjM0NDk0N2I3OTcxZDQ3YjQzMjQ3MTUyNyIsImNvbmR1aXRfbG9jYXRpb24iOiIxMC4xMjkuMTA4LjE4NDo4MzAyIiwiY2x1c3RlciI6InVuaWZpZWQtODciLCJpYXQiOjE3NjkyNjc1MzIsImV4cCI6MTc2OTI3NDczMiwidHVybl90b3BpY19pZCI6bnVsbH0.YytSQHYEwEGd-cPNASA9dtOxTvkvU1wkRplY7d1Wh_VXHHuByWMX2V-MCrd_wlpysFs49UbsxuqFkidvsRGxCA", "conversation_id": "6974e14b-7434-8324-b4c3-6b3e64d1da87"}

event: delta
data: {"p": "", "o": "add", "v": {"message": {"id": "d5f2e661-cf6e-4410-a2f2-91d3d412c2dd", "author": {"role": "system", "name": null, "metadata": {}}, "create_time": null, "update_time": null, "content": {"content_type": "text", "parts": [""]}, "status": "finished_successfully", "end_turn": true, "weight": 0.0, "metadata": {"is_visually_hidden_from_conversation": true, "model_switcher_deny": []}, "recipient": "all", "channel": null}, "conversation_id": "6974e14b-7434-8324-b4c3-6b3e64d1da87", "error": null, "error_code": null}, "c": 0} 

event: delta
data: {"v": {"message": {"id": "825a3e4c-90fc-43c0-b3d4-1b2e80bfb637", "author": {"role": "user", "name": null, "metadata": {}}, "create_time": 1769267531.133, "update_time": null, "content": {"content_type": "text", "parts": ["give me a list of 10 famous people"]}, "status": "finished_successfully", "end_turn": null, "weight": 1.0, "metadata": {"selected_github_repos": [], "serialization_metadata": {"custom_symbol_offsets": []}, "request_id": "994199a9-61a3-4a07-b86a-451c15ddabfb", "message_source": null, "turn_exchange_id": "af8f9ebe-6d3f-44ce-8fc9-0c8fc0f975c2", "model_switcher_deny": []}, "recipient": "all", "channel": null}, "conversation_id": "6974e14b-7434-8324-b4c3-6b3e64d1da87", "error": null, "error_code": null}, "c": 1}  

data: {"type": "input_message", "input_message": {"id": "825a3e4c-90fc-43c0-b3d4-1b2e80bfb637", "author": {"role": "user", "name": null, "metadata": {}}, "create_time": 1769267531.133, "update_time": null, "content": {"content_type": "text", "parts": ["give me a list of 10 famous people"]}, "status": "finished_successfully", "end_turn": null, "weight": 1.0, "metadata": {"selected_github_repos": [], "selected_all_github_repos": false, "serialization_metadata": {"custom_symbol_offsets": []}, "request_id": "994199a9-61a3-4a07-b86a-451c15ddabfb", "message_source": null, "turn_exchange_id": "af8f9ebe-6d3f-44ce-8fc9-0c8fc0f975c2", "turn_trace_id": "ef988a6f-86e5-4e16-b7a2-8364b83ca459", "useragent": {"client_type": "web", "is_mobile": false, "is_mobile_app": false, "is_desktop_app": false, "is_native_app": false, "is_native_app_apple": false, "is_mobile_app_ios": false, "is_desktop_app_macos": false, "is_aura_app_macos": false, "is_aura_web": false, "is_sora_ios": false, "is_agora_ios": false, "is_agora_android": false, "is_desktop_app_windows": false, "is_electron_app": false, "is_mobile_app_android": false, "is_mobile_web": false, "is_mobile_web_ios": false, "is_mobile_web_android": false, "is_ios": false, "is_android": false, "is_macos": false, "is_windows": false, "is_linux": true, "is_chatgpt_client": false, "is_sora_client": false, "is_agora_client": false, "is_browserbased_app": true, "is_chatgpt_api": false, "is_slack": false, "is_chatkit_web": false, "is_chatkit_synthetic": false, "is_kakao_talk": false, "app_version": null, "build_number": null, "user_agent": "mozilla/5.0 (x11; linux x86_64) applewebkit/537.36 (khtml, like gecko) chrome/143.0.0.0 safari/537.36", "app_environment": null, "os_version": null, "device_model": null, "user_client_type": "desktop_web"}, "paragen_stream_type": "default", "parent_id": "d5f2e661-cf6e-4410-a2f2-91d3d412c2dd"}, "recipient": "all", "channel": null}, "conversation_id": "6974e14b-7434-8324-b4c3-6b3e64d1da87"}

event: delta
data: {"v": {"message": {"id": "8dde1460-da6b-4666-b176-d8d6d77a16aa", "author": {"role": "assistant", "name": null, "metadata": {}}, "create_time": 1769267531.789828, "update_time": null, "content": {"content_type": "text", "parts": [""]}, "status": "in_progress", "end_turn": null, "weight": 1.0, "metadata": {"citations": [], "content_references": [], "request_id": "994199a9-61a3-4a07-b86a-451c15ddabfb", "message_type": "next", "model_slug": "gpt-5-2", "default_model_slug": "auto", "parent_id": "825a3e4c-90fc-43c0-b3d4-1b2e80bfb637", "turn_exchange_id": "af8f9ebe-6d3f-44ce-8fc9-0c8fc0f975c2", "model_switcher_deny": []}, "recipient": "all", "channel": null}, "conversation_id": "6974e14b-7434-8324-b4c3-6b3e64d1da87", "error": null, "error_code": null}, "c": 2}     

data: {"type": "message_marker", "conversation_id": "6974e14b-7434-8324-b4c3-6b3e64d1da87", "message_id": "8dde1460-da6b-4666-b176-d8d6d77a16aa", "marker": "user_visible_token", "event": "first"}

event: delta
data: {"p": "/message/content/parts/0", "o": "append", "v": "Sure! Here's"}   

event: delta
data: {"v": " a list of"}     

event: delta
data: {"v": " 10 famous people across various"}       

event: delta
data: {"v": " fields:\n\n1. **Albert Einstein** \u2013 Theoretical physicist, best known for the theory of relativity.\n2. **Oprah Winfrey**"}

data: {"type": "title_generation", "title": "Famous People List Request", "conversation_id": "6974e14b-7434-8324-b4c3-6b3e64d1da87"}

event: delta
data: {"v": " \u2013 Media mogul, talk show host, and philanthropist.\n3. **Leonardo DiCaprio** \u2013 Actor, environmental"} 

event: delta
data: {"v": " activist.\n4. **Marie Curie** \u2013 Pioneering scientist known"}       

event: delta
data: {"v": " for her work in radioactivity.\n5. **Nelson Mandela** \u2013"}  

event: delta
data: {"v": " Anti-apartheid revolutionary, former president of South Africa.\n6. **"}

event: delta
data: {"v": "Serena Williams** \u2013 Professional tennis player, considered one of the greatest athletes of"}

event: delta
data: {"v": " all time.\n7. **Mahatma Gandhi** \u2013 Leader of"}     

event: delta
data: {"v": " the Indian independence movement.\n8. **Beyonc\u00e9** \u2013 Singer, songwriter"}      

event: delta
data: {"v": ", and actress.\n9. **Winston Churchill** \u2013 British Prime Minister during"}  

event: delta
data: {"v": " World War II.\n10. **Frida Kahlo** \u2013 Mexican artist, known for her"}       

event: delta
data: {"v": " vivid self-portraits and surrealist style.\n\nLet me know if you\u2019d"}       

event: delta
data: {"p": "", "o": "patch", "v": [{"p": "/message/content/parts/0", "o": "append", "v": " like more details about any of them!"}, {"p": "/message/status", "o": "replace", "v": "finished_successfully"}, {"p": "/message/end_turn", "o": "replace", "v": true}, {"p": "/message/metadata", "o": "append", "v": {"is_complete": true, "finish_details": {"type": "stop", "stop_tokens": [200002]}}}]}       

data: {"type": "server_ste_metadata", "metadata": {"conduit_prewarmed": false, "plan_type": "free", "user_agent": "web_desktop", "service": null, "tool_name": null, "tool_invoked": false, "fast_convo": true, "warmup_state": "cold", "is_first_turn": true, "cluster_region": "japanwest", "model_slug": "i-mini", "region": null, "is_multimodal": false, "did_auto_switch_to_reasoning": false, "auto_switcher_race_winner": null, "is_autoswitcher_enabled": false, "is_search": null, "did_prompt_contain_image": false, "search_tool_call_count": null, "search_tool_query_types": null, "message_id": "8dde1460-da6b-4666-b176-d8d6d77a16aa", "request_id": "994199a9-61a3-4a07-b86a-451c15ddabfb", "turn_exchange_id": "af8f9ebe-6d3f-44ce-8fc9-0c8fc0f975c2", "turn_trace_id": "ef988a6f-86e5-4e16-b7a2-8364b83ca459", "a32e6ebcb": 2, "resume_with_websockets": false, "streaming_async_status": false, "temporal_conversation_turn": false}, "conversation_id": "6974e14b-7434-8324-b4c3-6b3e64d1da87"}

data: {"type": "message_stream_complete", "conversation_id": "6974e14b-7434-8324-b4c3-6b3e64d1da87"}

data: {"type": "title_generation", "title": "Famous People List", "conversation_id": "6974e14b-7434-8324-b4c3-6b3e64d1da87"}

data: [DONE]
```

(til, if you d)

