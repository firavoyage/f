# .

```sh
 ~ % git clone https://github.com/danny-avila/LibreChat.git && cd LibreChat && cp .env.example .env && sudo docker compose up -d

Cloning into 'LibreChat'...
remote: Enumerating objects: 100761, done.
remote: Counting objects: 100% (1271/1271), done.
remote: Compressing objects: 100% (596/596), done.
remote: Total 100761 (delta 985), reused 675 (delta 675), pack-reused 99490 (from 4)
Receiving objects: 100% (100761/100761), 178.39 MiB | 5.72 MiB/s, done.
Resolving deltas: 100% (70905/70905), done.
# cleared by a docker command
 ~/LibreChat % sudo docker compose down

WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] down 6/6
 ✔ Container LibreChat        Removed                                                                                             0.4s
 ✔ Container chat-meilisearch Removed                                                                                             0.2s
 ✔ Container chat-mongodb     Removed                                                                                             0.2s
 ✔ Container rag_api          Removed                                                                                             1.0s
 ✔ Container vectordb         Removed                                                                                             0.1s
 ✔ Network librechat_default  Removed                                                                                             0.1s
 ~/LibreChat % sudo docker compose up -d

WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] up 6/6
 ✔ Network librechat_default  Created                                                                                             0.0s
 ✔ Container chat-meilisearch Started                                                                                             0.3s
 ✔ Container chat-mongodb     Started                                                                                             0.3s
 ✔ Container vectordb         Started                                                                                             0.3s
 ✔ Container rag_api          Started                                                                                             0.4s
 ✔ Container LibreChat        Started                                                                                             0.6s
```



