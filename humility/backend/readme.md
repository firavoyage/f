humility backend 

---

wip.

---

store: pglite

connect: patchright

---

see `reference`

---

**1. Store** – Keep data safe, organized, and retrievable

- **Databases**: PostgreSQL, MySQL, MongoDB, Cassandra
- **Caching**: Redis, Memcached
- **File Storage**: S3, Google Cloud Storage, Azure Blob
- **Queues/Persistent Messages**: Kafka, RabbitMQ (can also fit “Connect”)

---

**2. Serve** – Deliver responses to clients

- **Web Frameworks**: Express.js, Django, FastAPI, Spring Boot
- **API Management**: GraphQL servers, REST endpoints
- **Content Delivery**: CDNs like Cloudflare, Akamai (edges the serving)
- **Streaming**: WebSockets, SSE (Server-Sent Events)

---

**3. Compute** – Process and transform data

- **Business Logic**: Node.js, Python, Java, Go, Rust
- **Data Processing**: Spark, Flink, Hadoop
- **Serverless Functions**: AWS Lambda, Google Cloud Functions, Azure Functions
- **ML/AI Workloads**: TensorFlow Serving, PyTorch, ONNX Runtime

---

**4. Connect** – Communicate with systems and users

- **Messaging/Events**: Kafka, RabbitMQ, MQTT
- **APIs/Integration**: REST clients, GraphQL clients, gRPC
- **External Services**: Payment gateways, OAuth providers, third-party APIs

---

**5. Secure** – Protect the system, data, and users

- **Authentication**: OAuth, JWT, Auth0, Firebase Auth
- **Authorization**: Role-based access, ABAC (Attribute-based)
- **Encryption**: TLS/SSL, AES, PGP
- **Security Tools**: WAF (Web Application Firewall), Vault, Secrets managers

---

**6. Observe** – Understand and measure system behavior

- **Logging**: ELK Stack, Fluentd, Logstash
- **Monitoring**: Prometheus, Datadog, New Relic
- **Tracing**: OpenTelemetry, Jaeger, Zipkin
- **Alerting**: PagerDuty, OpsGenie

---

**7. Automate** – Reduce manual effort, manage tasks

- **Background Jobs**: Celery, Sidekiq, RQ
- **Scheduled Tasks**: Cron, Airflow
- **Infrastructure Automation**: Terraform, Ansible, Pulumi
- **CI/CD Pipelines**: GitHub Actions, GitLab CI, Jenkins

---

**8. Scale** – Handle growth efficiently

- **Load Balancing**: NGINX, HAProxy, AWS ELB
- **Containerization**: Docker, Podman
- **Orchestration**: Kubernetes, Nomad
- **Caching Layers**: Redis, Varnish

---

**9. Validate** – Ensure correctness and quality

- **Testing**: Unit tests, integration tests, contract testing
- **Schema Validation**: JSON Schema, Protobuf, GraphQL type checks
- **Data Quality**: DB constraints, data pipelines with validation steps

---

**10. Adapt** – React and respond to change

- **Feature Flags**: LaunchDarkly, Flagsmith
- **Configuration Management**: Consul, ConfigMaps
- **A/B Testing**: Optimizely, internal experimentation tools
