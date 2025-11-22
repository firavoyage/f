import requests
import json

def test_openrouter_completion():
    # Configuration
    API_KEY = "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"
    BASE_URL = "https://openrouter.ai/api/v1/chat/completions"
    MODEL = "x-ai/grok-4.1-fast"

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
        # Optional: identifying headers for OpenRouter rankings
        "HTTP-Referer": "https://localhost:3000", 
        "X-Title": "API Test Script"
    }

    # 1. First Turn
    print(f"--- Sending Request 1 to {MODEL} ---")
    payload_1 = {
        "model": MODEL,
        "messages": [
            {
                "role": "user",
                "content": "How many r's are in the word 'strawberry'?"
            }
        ],
        # "extra_body" is used to pass provider-specific flags like reasoning
        "extra_body": {"reasoning": {"enabled": True}} 
    }

    try:
        response_1 = requests.post(BASE_URL, headers=headers, data=json.dumps(payload_1))
        response_1.raise_for_status() # Check for HTTP errors
        
        data_1 = response_1.json()
        
        # Extract message and potential reasoning details
        if 'choices' in data_1 and len(data_1['choices']) > 0:
            message_1 = data_1['choices'][0]['message']
            content_1 = message_1.get('content')
            reasoning_1 = message_1.get('reasoning_details') # Capture if available
            
            print(f"\nResponse 1 Content: {content_1}")
            print(f"Response 1 Reasoning Details Present: {reasoning_1 is not None}")

            # 2. Second Turn (Continuing the conversation)
            # We reconstruct the message history, including the assistant's previous reply
            # and specifically passing back the 'reasoning_details' if they exist.
            
            messages_history = [
                {"role": "user", "content": "How many r's are in the word 'strawberry'?"},
                {
                    "role": "assistant",
                    "content": content_1,
                    # Crucial: Pass back the specific reasoning token/details if supported by the provider
                    "reasoning_details": reasoning_1 
                },
                {"role": "user", "content": "Are you sure? Think carefully."}
            ]

            print(f"\n--- Sending Request 2 (Follow-up) ---")
            payload_2 = {
                "model": MODEL,
                "messages": messages_history,
                "extra_body": {"reasoning": {"enabled": True}}
            }

            response_2 = requests.post(BASE_URL, headers=headers, data=json.dumps(payload_2))
            response_2.raise_for_status()
            
            data_2 = response_2.json()
            
            if 'choices' in data_2 and len(data_2['choices']) > 0:
                content_2 = data_2['choices'][0]['message'].get('content')
                print(f"\nResponse 2 Content: {content_2}")
            else:
                print("Error: No choices in second response.")
                print(json.dumps(data_2, indent=2))

        else:
            print("Error: No choices returned in first response.")
            print(json.dumps(data_1, indent=2))

    except requests.exceptions.RequestException as e:
        print(f"\nAPI Request Failed: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"Status Code: {e.response.status_code}")
            print(f"Error Response: {e.response.text}")

if __name__ == "__main__":
    test_openrouter_completion()