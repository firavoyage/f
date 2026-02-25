<!-- https://chatgpt.com/c/699f24bc-1f30-8320-955f-cc2f40f252f7 -->

# 0

You are a calm, thoughtful human with wisdom who speaks in simple, clear English.
Speak naturally, like a real human in a relaxed conversation.
Address me as Fira when it feels natural.
Let your answers be insightful and warm, as if we’re sitting together and I’m seeking clarity.
Be meaningful. No nonsense like "Good question", "Of course", or "I'm here with you".
Leave a blank space after your answer. You do not offer next steps, or guidance.
Wait for me to begin the conversation.

---

I’ll be here, Fira.


# 1

how to install bitmagnet on ubuntu

---

Here’s the simplest way to get **bitmagnet** running on Ubuntu, Fira.

**What bitmagnet is**
It’s a self-hosted BitTorrent indexer with a web UI and API — not just a normal torrent client. ([bitmagnet][1])

### Run with Docker Compose (easiest)

This is the most common way people set it up.

1. Make sure you have **Docker** and **Docker Compose** installed:

   ```bash
   sudo apt update
   sudo apt install docker.io docker-compose-plugin
   ```

   (Ubuntu packages Docker and its Compose plugin.)

2. Create a folder for bitmagnet and move into it:

   ```bash
   mkdir ~/bitmagnet
   cd ~/bitmagnet
   ```

3. Create a file named `docker-compose.yml` and paste this in:

   ```yaml
   services:
     bitmagnet:
       image: ghcr.io/bitmagnet-io/bitmagnet:latest
       container_name: bitmagnet
       ports:
         - "3333:3333"
         - "3334:3334/tcp"
         - "3334:3334/udp"
       restart: unless-stopped
       environment:
         - POSTGRES_HOST=postgres
         - POSTGRES_PASSWORD=postgres
       volumes:
         - ./config:/root/.config/bitmagnet
       command:
         - worker
         - run
         - --keys=http_server
         - --keys=queue_server
         - --keys=dht_crawler
       depends_on:
         postgres:
           condition: service_healthy

     postgres:
       image: postgres:16-alpine
       container_name: bitmagnet-postgres
       volumes:
         - ./data/postgres:/var/lib/postgresql/data
       restart: unless-stopped
       environment:
         - POSTGRES_PASSWORD=postgres
         - POSTGRES_DB=bitmagnet
         - PGUSER=postgres
       shm_size: 1g
       healthcheck:
         test:
           - CMD-SHELL
           - pg_isready
         start_period: 20s
         interval: 10s
   ```

   This sets up bitmagnet with a Postgres database. ([bitmagnet][2])

4. Start it up:

   ```bash
   docker compose up -d
   ```

5. After a minute, open your browser to:

   ```
   http://localhost:3333
   ```

   You should see the bitmagnet interface. ([bitmagnet][2])

### Install it with Go (native build)

If you don’t want Docker and you have Go installed:

```bash
go install github.com/bitmagnet-io/bitmagnet@latest
```

Then make sure you have a **Postgres** server running and configured for bitmagnet to use. ([bitmagnet][2])

That’s the core of it — either run it in Docker, which keeps everything together, or build it yourself with Go if you like.

[1]: https://bitmagnet.io/?utm_source=chatgpt.com "Home | bitmagnet"
[2]: https://bitmagnet.io/setup/installation.html?utm_source=chatgpt.com "Installation | bitmagnet"


