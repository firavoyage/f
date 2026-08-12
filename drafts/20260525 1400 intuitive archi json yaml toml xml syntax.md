<!-- it suddenly jumps out of my head when im doing daily washing. i have to learn it know instead of writing to todo or somewhere. -->

<!-- xml is fundamentally different to objects i guess. -->

# json syntax

**JSON (JavaScript Object Notation)** is a strict, text-based data format used to store and exchange structured information. Its rules are derived from JavaScript object literal syntax, but they are far more rigid and language-independent. \[[1](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Scripting/JSON), [2](https://contabo.com/blog/json-a-complete-guide-to-syntax-and-data-format-2026/), [3](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/JSON), [4](https://tc39.es/ecma404/)]

Core Syntax Rules

- **Data is in key/value pairs**: Every piece of data consists of a property name (key) followed by a colon and the value.
- **Keys must have double quotes**: All keys must be string literals enclosed in double quotation marks `""`. Single quotes `''` are invalid.
- **Elements are separated by commas**: Use a comma `,` to separate multiple key/value pairs or list items.
- **No trailing commas**: Placing a comma after the final item in an object or array will cause a syntax error.
- **No comments**: Standard JSON does not support comments of any kind (`//` or `/* */`). \[[1](https://www.w3schools.com/js/js%5Fjson%5Fsyntax.asp), [2](https://www.hostinger.com/tutorials/what-is-json), [3](https://www.freecodecamp.org/news/what-is-json-a-json-file-example/), [4](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Scripting/JSON), [5](https://contabo.com/blog/json-a-complete-guide-to-syntax-and-data-format-2026/)]

Data Structures

JSON organizes data using two main structures: \[[1](https://javaee.github.io/tutorial/jsonp001.html), [2](https://contabo.com/blog/json-a-complete-guide-to-syntax-and-data-format-2026/)]

1. **Objects `{}`**: An unordered collection of key/value pairs wrapped in curly braces.
2. **Arrays `[]`**: An ordered list of values wrapped in square brackets. \[[1](https://www.json.org/), [2](https://www.microfocus.com/documentation/silk-performer/195/en/silkperformer-195-webhelp-en/GUID-6AFC32B4-6D73-4FBA-AD36-E42261E2D77E.html), [3](https://contabo.com/blog/json-a-complete-guide-to-syntax-and-data-format-2026/)]

Data Types

A JSON value must belong to one of the following six primitive or structured data types: \[[1](https://datatracker.ietf.org/doc/html/rfc8259), [2](https://contabo.com/blog/json-a-complete-guide-to-syntax-and-data-format-2026/)]

- **String**: Must be enclosed in double quotes (e.g., `"Hello World"`).
- **Number**: Integers or floating-point decimals (e.g., `42`, `3.14`). Hexadecimal, `NaN`, and `Infinity` are not allowed.
- **Boolean**: Explicitly lowercase `true` or `false`.
- **Null**: An explicitly lowercase empty value written as `null`.
- **Object**: A nested JSON object.
- **Array**: A nested JSON array. \[[1](https://www.mongodb.com/resources/languages/what-is-json), [2](https://www.json.org/), [3](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Scripting/JSON), [4](https://contabo.com/blog/json-a-complete-guide-to-syntax-and-data-format-2026/), [5](https://www.hostinger.com/tutorials/what-is-json), [6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/JSON), [7](https://datatracker.ietf.org/doc/html/rfc8259)]

Code Example

json

```
{
  "title": "Syntax Guide",
  "version": 1,
  "isValid": true,
  "tags": ["web", "data", "json"],
  "author": {
    "name": "Jane Doe",
    "id": null
  }
}
```

Use code with caution.

If you are dealing with a parsing issue or working on a layout, tell me:

- Are you getting a specific **syntax error** message?
- Which **programming language** are you using to parse the data?

I can help you pinpoint formatting mistakes or write a data validator.

- [link](https://www.w3schools.com/js/js%5Fjson%5Fsyntax.asp)\
  JSON Syntax - W3Schools\
  Data is in name/value pairs. Data is separated by commas. Curly braces hold objects. Square brackets hold arrays. JSON Data - A Na...\
  W3Schools
- [link](https://www.json.org/)\
  JSON\
  A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, key...\
  JSON
- [link](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Scripting/JSON)\
  Working with JSON - Learn web development | MDN\
  Aug 18, 2025 — Working with JSON. ... JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on...\
  MDN Web Docs

Show all

You said: complex example

json

```
{
  "$schema": "https://json-schema.org",
  "metaData": {
    "transactionId": "tx_9876543210_abc",
    "timestamp": "2026-05-25T06:44:00Z",
    "environment": "production",
    "version": 2.4
  },
  "isActive": true,
  "systemLogs": null,
  "organization": {
    "name": "Global Tech Corp",
    "departments": [
      {
        "id": "dept_engineering_01",
        "name": "Cloud Infrastructure",
        "budget": 1500000.50,
        "headcount": 42,
        "isRemoteFriendly": true
      },
      {
        "id": "dept_data_02",
        "name": "Artificial Intelligence",
        "budget": 3200000.00,
        "headcount": 18,
        "isRemoteFriendly": false
      }
    ],
    "location": {
      "country": "United States",
      "coordinates": {
        "latitude": 37.4220,
        "longitude": -122.0841
      }
    }
  },
  "permissions": [
    "read:admin",
    "write:deploy",
    "delete:logs"
  ],
  "matrixConfiguration": [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ]
}
```

Use code with caution.

If you are building your own dataset, tell me:

- What **industry or use case** are you modeling? (e.g., e-commerce, user profiles, IoT devices)
- Do you need to convert this into a **JSON Schema** for validation?

I can generate a custom mock dataset or create a schema to validate your structure.

You said: schema

A **JSON Schema** is a declarative language used to validate the structure, data types, and constraints of a JSON document. It ensures that the incoming data matches exactly what your application expects.

Here is the complete **JSON Schema** that validates the complex example provided in the previous turn.

You said: schema

json

```
{
  "$schema": "https://json-schema.org",
  "title": "OrganizationData",
  "type": "object",
  "required": ["metaData", "isActive", "organization", "permissions"],
  "properties": {
    "metaData": {
      "type": "object",
      "required": ["transactionId", "timestamp", "environment", "version"],
      "properties": {
        "transactionId": { "type": "string" },
        "timestamp": { "type": "string", "format": "date-time" },
        "environment": { "type": "string", "enum": ["development", "staging", "production"] },
        "version": { "type": "number" }
      }
    },
    "isActive": { "type": "boolean" },
    "systemLogs": { "type": ["null", "array"] },
    "organization": {
      "type": "object",
      "required": ["name", "departments", "location"],
      "properties": {
        "name": { "type": "string" },
        "departments": {
          "type": "array",
          "items": {
            "type": "object",
            "required": ["id", "name", "budget", "headcount", "isRemoteFriendly"],
            "properties": {
              "id": { "type": "string" },
              "name": { "type": "string" },
              "budget": { "type": "number", "minimum": 0 },
              "headcount": { "type": "integer", "minimum": 0 },
              "isRemoteFriendly": { "type": "boolean" }
            }
          }
        },
        "location": {
          "type": "object",
          "required": ["country", "coordinates"],
          "properties": {
            "country": { "type": "string" },
            "coordinates": {
              "type": "object",
              "required": ["latitude", "longitude"],
              "properties": {
                "latitude": { "type": "number", "minimum": -90, "maximum": 90 },
                "longitude": { "type": "number", "minimum": -180, "maximum": 180 }
              }
            }
          }
        }
      }
    },
    "permissions": {
      "type": "array",
      "items": { "type": "string" },
      "uniqueItems": true
    },
    "matrixConfiguration": {
      "type": "array",
      "items": {
        "type": "array",
        "items": { "type": "integer" }
      }
    }
  }
}
```

Use code with caution.

If you want to use this validation schema, let me know:

- Which **JSON Schema draft version** do you target? (e.g., Draft 7, Draft 2020-12)
- Do you need to inject **custom regex constraints** for IDs or timestamps?

I can adjust the rules or write a validation script in **Python** or **JavaScript**.

You said: schema syntax

**JSON Schema** is a declarative language used to validate the structure, data types, and constraints of JSON documents. It ensures that incoming or outgoing JSON data conforms to a strictly defined template.

Core Structure Elements

- **`$schema`**: Declares the JSON Schema draft version being used.
- **`$id`**: Defines the unique URI identifier for the schema itself.
- **`title` / `description`**: Provides descriptive, non-functional metadata about the schema.
- **`type`**: Specifies the data type constraint (`string`, `number`, `integer`, `boolean`, `object`, `array`, `null`).

Object Validation Keywords

- **`properties`**: Defines a nested dictionary of keys and their respective schemas.
- **`required`**: Lists keys that _must_ be present in the JSON instance.
- **`additionalProperties`**: Controls whether keys not listed in `properties` are allowed (`true`/`false`).

Array Validation Keywords

- **`items`**: Defines the schema template that every element in the array must follow.
- **`minItems` / `maxItems`**: Sets the bounds for the length of the array.
- **`uniqueItems`**: Forces all elements inside the array to be distinct if set to `true`.

Value Constraints

- **String**: `minLength`, `maxLength`, `pattern` (regex), and `format` (e.g., `"date-time"`, `"email"`).
- **Number/Integer**: `minimum`, `maximum`, `exclusiveMinimum`, `exclusiveMaximum`, and `multipleOf`.

Syntax Example

json

```
{
  "$schema": "https://json-schema.org",
  "$id": "https://example.com",
  "title": "User Profile",
  "type": "object",
  "required": ["userId", "email"],
  "properties": {
    "userId": {
      "type": "integer",
      "minimum": 1000
    },
    "email": {
      "type": "string",
      "format": "email"
    },
    "roles": {
      "type": "array",
      "items": { "type": "string" },
      "minItems": 1,
      "uniqueItems": true
    }
  },
  "additionalProperties": false
}
```

Use code with caution.

If you are currently setting up a validation pipeline, let me know:

- What **validation tool or library** are you running? (e.g., Ajv for JS, jsonschema for Python)
- Do you need to combine rules using **conditional logic**? (e.g., `oneOf`, `anyOf`, `allOf`)

I can provide the exact code snippets or advanced conditional logic structures you need.

# yaml syntax

**YAML syntax** is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">a human-readable data serialization language that relies on <strong>indentation and whitespace</strong> rather than brackets or quotation marks to define structural relationships</mark>. It is commonly used for configuration files in tools like Docker, Kubernetes, and Ansible. \[[1](https://en.wikipedia.org/wiki/YAML), [2](https://about.gitlab.com/topics/devops/what-is-yaml/), [3](https://www.youtube.com/watch?v=1uFVr15xDGg), [4](https://www.youtube.com/watch?v=BEki%5FrsWu4E)]

Here is a summary of the core rules and structures defined by the [YAML Specification](https://yaml.org/spec/). \[[1](https://yaml.org/spec/), [2](https://rajanand.org/glossary/yaml), [3](https://www.ibm.com/think/topics/yaml)]

Core Rules

- **Indentation**: Use spaces for indentation. **Tabs are strictly forbidden**.
- **Case Sensitivity**: YAML is entirely case-sensitive.
- **Comments**: Start with a `#` symbol and must be separated from other tokens by a space.
- **Document Separation**: Three dashes (`---`) signal the start of a document, and three dots (`...`) signal the end. \[[1](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html), [2](https://www.tutorialspoint.com/yaml/yaml%5Fbasics.htm), [3](https://quickref.me/yaml.html), [4](https://www.home-assistant.io/docs/configuration/yaml/), [5](https://developers.redhat.com/learning/learn:ansible:yaml-essentials-ansible/resource/resources:ansible-yaml-file-syntax-and-structure), [6](https://yaml.org/spec/1.2.2/)]

***

Basic Data Structures

1\. Mappings (Key-Value Pairs)

Mappings use a colon followed by a mandatory space (`: `) to connect a key to its value. \[[1](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html), [2](https://yaml.org/spec/1.2.2/)]

yaml

```
# A simple mapping
username: john_doe
app_port: 8080
```

Use code with caution.

2\. Sequences (Lists / Arrays)

List members are denoted by a leading hyphen followed by a space (`- `), with all items aligned at the same indentation level. \[[1](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html), [2](https://yaml.org/spec/1.2.2/)]

yaml

```
# Block style list
fruits:
  - Apple
  - Orange
  - Mango
```

Use code with caution.

3\. Nested Structures

You can nest lists inside dictionaries, dictionaries inside lists, or dictionaries inside other dictionaries using consistent indentation. \[[1](https://www.redhat.com/en/blog/yaml-nesting-lists-comments-ansible), [2](https://www.home-assistant.io/docs/configuration/yaml/)]

yaml

```
# Nested dictionary and list combination
permissions:
  roles:
    - admin
    - developer
  active: true
```

Use code with caution.

***

Data Types (Scalars)

YAML automatically detects common data types: \[[1](https://www.commonwl.org/user%5Fguide/topics/yaml-guide.html), [2](https://www.youtube.com/watch?v=qn1aoRBXeHo), [3](https://dev.to/bansikah/yaml-the-backbone-of-modern-devops-mhm), [4](https://dev.to/tene/the-ultimate-yaml-guide-for-developers-from-basics-to-advanced-devops-workflows-5g07)]

yaml

```
integer_value: 42
float_value: 3.1415
boolean_true: true    # Can be true/false or yes/no
boolean_false: false
null_value: null      # Or use a tilde (~)
string_unquoted: Hello World
string_quoted: "A string with a newline \n"  # Double quotes interpret escape characters
```

Use code with caution.

Multiline Strings

You can handle strings spanning across multiple lines using literal (`|`) or folded (`>`) block scalars. \[[1](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html), [2](https://yaml.org/spec/1.2.2/)]

- **Literal block (`|`)**: Keeps all original newlines and trailing spaces.
- **Folded block (`>`)**: Replaces single newlines with spaces to compress the text into a single paragraph. \[[1](https://stackoverflow.com/questions/72082343/what-is-the-difference-between-and-in-yaml), [2](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html)]

yaml

```
literal_example: |
  This paragraph will keep
  every single newline.

folded_example: >
  This paragraph will be
  compiled into a single long
  line of text.
```

Use code with caution.

***

Advanced Features

Flow Style (JSON Compatibility) \[[1](https://yaml.org/spec/1.1/), [2](https://cloudslang-docs.readthedocs.io/en/latest/overview/yaml%5Foverview.html)]

YAML is a superset of JSON, meaning you can write lists and maps inline using JSON-style brackets if you prefer. \[[1](https://intersect-training.org/CI-CD/understanding-yaml.html), [2](https://sidneyliebrand.io/blog/the-greatnesses-and-gotchas-of-yaml), [3](https://gutsytechster.wordpress.com/2019/03/21/yaml-101/), [4](https://en.wikipedia.org/wiki/YAML), [5](https://quickref.me/yaml.html)]

yaml

```
inline_list: [1, 2, 3, 4]
inline_map: { name: "Alice", age: 30 }
```

Use code with caution.

Anchors and Aliases

To avoid repeating data, use an ampersand (`&`) to define an anchor and an asterisk (`*`) to reference it later. \[[1](https://yamlchecker.com/), [2](https://www.tutorialspoint.com/yaml/yaml%5Fbasics.htm)]

yaml

```
# Reusing a configuration block
default_settings: &base
  timeout: 30
  retry: true

production_service:
  <<: *base           # Merges the anchor keys here
  environment: prod   # Overrides or adds new keys
```

Use code with caution.

If you are writing a file for a specific platform, let me know if you want to explore **Kubernetes manifests**, **Docker Compose files**, or **Ansible playbooks** so we can tailor the examples.

- [link](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html)\
  YAML Syntax — Ansible Community Documentation\
  Apr 20, 2026 — YAML Basics. For Ansible, nearly every YAML file starts with a list. Each item in the list is a list of key/value pairs, commonly ...\
  Ansible documentation
- [link](https://yaml.org/spec/1.2.2/)\
  YAML Ain't Markup Language (YAML™) revision 1.2.2\
  Oct 1, 2021 — Chapter 2. Language Overview \* 2.1. Collections. YAML's block collections use indentation for scope and begin each entry on its ow...\
  YAML.org
- [link](https://en.wikipedia.org/wiki/YAML)\
  YAML - Wikipedia\
  YAML (/ˈjæməl/ YAM-əl) is a human-readable data serialization language. It is commonly used for configuration files and in applica...\
  Wikipedia

Show all

You said: complex example

Here is a complex YAML example demonstrating advanced nesting, multi-line blocks, custom anchors, aliases, and explicit data typing.

This example represents a mock configuration for a microservice architecture deployment.

yaml

```
---
# ==============================================================================
# MICROSERVICE PLATFORM CONFIGURATION EXAMPLE
# ==============================================================================

# 1. ANCHORS (Reusable Templates)
# Define standard environments and resource limits to inject later
.environment_defaults: &env_base
  debug_mode: false
  log_level: WARNING
  health_check:
    path: /healthz
    port: &default_port 8080
    interval: 30s
    retries: 3

.resource_templates:
  cpu_intensive: &cpu_profile
    resources:
      requests: { cpu: "500m", memory: "1Gi" }
      limits:   { cpu: "2000m", memory: "4Gi" }
  memory_intensive: &mem_profile
    resources:
      requests: { cpu: "100m", memory: "2Gi" }
      limits:   { cpu: "500m", memory: "8Gi" }

# ==============================================================================
# 2. MAIN DOCUMENT STRUCTURE
# ==============================================================================
global:
  cluster_name: "prod-us-east-4"
  domain: &root_domain "company.internal"
  tags: [infrastructure, production, internal]  # Flow-style sequence

services:
  # --- API Gateway Service ---
  - name: api-gateway
    port: *default_port
    type: proxy
    config:
      <<: *env_base  # Merges all keys from the env_base anchor
      log_level: INFO  # Explicitly overrides the inherited WARNING level
    routing_rules:
      - path: /v1/auth
        forward_to: auth-service
      - path: /v1/analytics
        forward_to: analytics-engine
    ssl:
      enabled: true
      # Explicit string types utilizing tags and literal blocks
      certificate: !!str |
        -----BEGIN CERTIFICATE-----
        MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0Ykh...
        ...truncated certificate data...
        -----END CERTIFICATE-----

  # --- Auth Service ---
  - name: auth-service
    port: 9000
    type: backend
    config:
      <<: *env_base
    <<: *cpu_profile  # Injecting resource templates
    backing_databases:
      - type: redis
        connection_string: "redis://cache.*"  # Will merge with root_domain logically
        timeout: !!float 5.0                  # Explicit float declaration

  # --- Analytics Engine ---
  - name: analytics-engine
    port: 9500
    type: worker
    config:
      <<: *env_base
    <<: *mem_profile  # Injecting memory template
    # Folded block formatting rules automatically convert newlines to spaces
    startup_banner: >
      Analytics Engine Initialization Sequence Successful.
      System monitoring telemetry streams are now active and
      binding directly to the centralized data pipelines.
    data_pipeline:
      kafka_topics:
        - name: telemetry.events.raw
          partitions: 12
          replication_factor: 3
        - name: telemetry.events.processed
          partitions: 6
          replication_factor: 3
      storage:
        retention_days: 90
        cold_storage: true
        archive_path: null                    # Explicit null value

# ==============================================================================
# 3. EXTRA PLATFORM METADATA
# ==============================================================================
maintenance_window:
  day: Sunday
  start_time: 02:00:00-0500                   # Iso8601 timestamp format
  duration_minutes: 180
...
```

Use code with caution.

Advanced Concepts Used Above

- **`---` and `...`**: Explicitly demarcate the start and the end of the config document.
- **`<<: *anchor`**: The merge key syntax, which inherits multiple fields from a base template and allows local overrides.
- **`!!str` / `!!float`**: Schema tags that explicitly force the YAML parser to interpret values as specific data types, overriding auto-detection.
- **`|` vs `>`**: The `certificate` property uses the literal block to preserve standard block line breaks, while `startup_banner` uses the folded block to keep line limits manageable in code but output as a single string line to the app.

Let me know if you would like me to write a **Python script** to parse this YAML or if you need to transform this exact example into a specific **JSON format**.

You said: object in array, array in object

In YAML, you nest elements inside each other by shifting your indentation to the right.

Here is how to structure an **object containing an array**, and an **array containing objects**.

1\. Object containing an Array (Array in Object)

An object property points to a list of items. The list items are indented under the parent key.

yaml

```
# The parent object contains a key named 'shopping_list'
shopping_list:
  - Apples
  - Milk
  - Bread
  - Eggs
```

Use code with caution.

2\. Array containing Objects (Object in Array)

A list where every single item is its own standalone key-value dictionary.

yaml

```
# A list of employees, where each list item is a distinct object
employees:
  - name: Alice Smith
    role: Developer
    id: 101
  - name: Bob Jones
    role: Designer
    id: 102
```

Use code with caution.

***

Combining Both Together

In real configurations, you will frequently see these two structures deeply nested inside one another.

yaml

```
# Root Object
company:
  name: TechCorp
  # Array inside an Object (List of department objects)
  departments:
    - name: Engineering
      budget: 50000
      # Object inside an Array (List of strings inside a department object)
      skills_required:
        - Python
        - Docker
        - YAML

    - name: Marketing
      budget: 25000
      skills_required:
        - SEO
        - Copywriting
```

Use code with caution.

If you are currently debugging a configuration file, share the **error message** or the **code snippet** you are working on so we can fix the indentation together.

You said: is empty valid yaml. must it be an object at root.

**Yes, an empty file is valid YAML**, and <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>no, the root does not have to be an object</strong></mark>. \[[1](https://stackoverflow.com/questions/36663187/is-it-possible-to-have-a-list-in-the-root-section), [2](https://stackoverflow.com/questions/28628511/read-empty-yaml-file)]

Here is exactly how the [YAML Specification](https://yaml.org/spec/) defines both rules.

1\. Is an empty file valid YAML?

**Yes.** According to the official specification, an empty string or completely empty file is a valid YAML document. \[[1](https://github.com/eemeli/yaml/discussions/187), [2](https://stackoverflow.com/questions/28628511/read-empty-yaml-file)]

- When a YAML parser reads an empty file, it evaluates the content as a single **`null` scalar value**.
- Depending on your programming language, parsing an empty YAML file will typically return `None` (Python), `nil` (Ruby), or `null`/`undefined` (JavaScript). \[[1](https://github.com/eemeli/yaml/discussions/187), [2](https://stackoverflow.com/questions/28628511/read-empty-yaml-file), [3](https://github.com/yaml/yaml-test-suite/issues/116)]

_Note: While it is valid YAML, the specific application reading your file (like Docker or Kubernetes) might throw an error because it expects a configuration dictionary, not a null value._ \[[1](https://stackoverflow.com/questions/28628511/read-empty-yaml-file)]

***

2\. Must it be an object at the root? \[[1](https://stackoverflow.com/questions/51650938/yaml-json-required-attribute-is-not-working-for-object-properties)]

**No.** Unlike older versions of JSON which required a root array or object, YAML allows **any valid data node** to exist at the absolute root level. \[[1](https://stackoverflow.com/questions/36663187/is-it-possible-to-have-a-list-in-the-root-section), [2](https://stackoverflow.com/questions/28628511/read-empty-yaml-file)]

A YAML root can officially be any of the following three types:

A. A Mapping (Object / Dictionary)

The most common approach for configuration files. \[[1](https://www.redhat.com/en/topics/automation/what-is-yaml)]

yaml

```
# Root is an object
api_version: 1.0
service_name: auth-provider
```

Use code with caution.

B. A Sequence (Array / List) \[[1](https://stackoverflow.com/questions/36663187/is-it-possible-to-have-a-list-in-the-root-section)]

The root level starts immediately with list hyphens. This is standard practice for tools like **Ansible playbooks**. \[[1](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html)]

yaml

```
# Root is a list
- deploy-database
- run-migrations
- restart-server
```

Use code with caution.

C. A Scalar (Single Primitive Value)

A file consisting of just a single string, number, or boolean is a fully compliant, valid YAML file. \[[1](https://stackoverflow.com/questions/36663187/is-it-possible-to-have-a-list-in-the-root-section), [2](https://stackoverflow.com/questions/28628511/read-empty-yaml-file)]

yaml

```
# Root is a single string scalar
"Hello, this is a completely valid YAML document"
```

Use code with caution.

If your configuration is currently failing to load, let me know **which application** or **programming language parser** you are using so we can check its specific root-level expectations.

- [link](https://github.com/yaml/yaml-test-suite/issues/116)\
  8G76: an empty file is not a valid JSON document #116 - GitHub\
  Feb 20, 2022 — Description. Snaipe. opened on Feb 20, 2022. Test case 8G76 contains an empty in. json file, but an empty file is not a valid JSON...\
  GitHub
- [link](https://stackoverflow.com/questions/28628511/read-empty-yaml-file)\
  Read empty YAML file - Stack Overflow\
  Feb 20, 2015 — 1 Answer 1. Sorted by: Reset to default. 3. If the top level of your YAML file is not a sequence or a mapping, it is a scalar. Tha...\
  Stack Overflow
- [link](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html)\
  YAML Syntax — Ansible Community Documentation\
  Apr 20, 2026 — YAML Basics. For Ansible, nearly every YAML file starts with a list. Each item in the list is a list of key/value pairs, commonly ...\
  Ansible documentation

Show all

# toml syntax

**TOML (Tom's Obvious Minimal Language)** is a case-sensitive, [UTF-8 encoded](https://toml.io/en/v1.1.0) configuration file format designed to be easy for humans to read and write while mapping cleanly to standard hash tables. \[[1](https://github.com/toml-lang/toml), [2](https://toml.io/en/v1.1.0)]

***

Core Structural Elements

- **Key-Value Pairs**: The primary building block structured as `key = value`. Whitespace around the `=` sign is ignored, but pairs must end with a newline.
- **Comments**: Indicated by a hash symbol (`#`), continuing until the end of the line.
- **Keys**: Can be **bare** (letters, digits, underscores, dashes), **quoted** (enclosed in quotes to support spaces or special characters), or **dotted** (used to denote nested paths). \[[1](https://toml.io/en/v1.0.0), [2](https://learnxinyminutes.com/toml/), [3](https://realpython.com/videos/data-types-toml/), [4](https://toml.io/en/v1.1.0), [5](https://realpython.com/python-toml/)]

toml

```
# This is a comment
username = "alex"            # Bare key
"login id" = 42              # Quoted key
system.profile.role = "admin" # Dotted key (creates nested tables)
```

Use code with caution.

***

Data Types

TOML is explicitly typed. Note that it **does not support null or blank values**. \[[1](https://toml.io/en/v1.0.0), [2](https://realpython.com/videos/data-types-toml/), [3](https://realpython.com/videos/understanding-toml/), [4](https://www.youtube.com/watch?v=D%5FJb52jw2HY)]

| Data Type \[[1](https://toml.io/en/), [2](https://realpython.com/videos/data-types-toml/), [3](https://github.com/toml-lang/toml), [4](https://realpython.com/videos/data-types-toml/), [5](https://www.youtube.com/watch?v=D%5FJb52jw2HY)] | Syntax Rules                                                                                                                                     | Examples                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| **String**                                                                                                                                                                                                                                  | **Basic**: Double quotes; supports escaping.**Literal**: Single quotes; no escaping.**Multi-line**: Triple quotes (`"""` or `'''`) for newlines. | `path = "C:\\Windows"``raw = 'C:\Windows'``bio = """Lines\nbreak"""` |
| **Integer**                                                                                                                                                                                                                                 | Base 10, 2 (`0b`), 8 (`0o`), or 16 (`0x`). Prefers underscores for readability.                                                                  | `port = 8080``large_num = 1_000_000``hex_val = 0xDEADBEEF`           |
| **Float**                                                                                                                                                                                                                                   | Requires an integer part and a fractional/exponent part. Supports `inf` and `nan`.                                                               | `pi = 3.1415``weight = 5e+22``infinity = inf`                        |
| **Boolean**                                                                                                                                                                                                                                 | Must be strictly lowercase.                                                                                                                      | `enabled = true``secure = false`                                     |
| **Offset Date-Time**                                                                                                                                                                                                                        | Follows RFC 3339 format with time zones.                                                                                                         | `created = 1979-05-27T07:32:00-08:00`                                |
| **Local Date-Time**                                                                                                                                                                                                                         | Follows RFC 3339 without time zones.                                                                                                             | `stamp = 2026-05-24T23:43:00`                                        |
| **Array**                                                                                                                                                                                                                                   | Square brackets containing comma-separated values. Can span multiple lines.                                                                      | `ports = [ 8000, 8001 ]``matrix = [[1, 2], [3, 4]]`                  |

***

Tables and Advanced Collections

Tables represent dictionaries or maps. \[[1](https://learnxinyminutes.com/toml/), [2](https://www.anbowell.com/blog/the-developers-guide-to-toml/)]

Standard Tables

Declared with brackets `[table_name]`. All key-value pairs underneath belong to that table until a new table header is declared. \[[1](https://en.wikipedia.org/wiki/TOML), [2](https://quickref.me/toml.html), [3](https://medium.com/softaai-blogs/toml-tables-types-explained-a-clear-and-complete-guide-d958c8bfd98c), [4](https://medium.com/softaai-blogs/master-dotted-keys-in-toml-tables-the-ultimate-deep-dive-32104b246e40), [5](https://github.com/toml-lang/toml/blob/main/toml.md)]

toml

```
[database]
server = "192.168.1.1"
connection_max = 5000
```

Use code with caution.

Nested Tables

Created using dotted syntax in the header. \[[1](https://quickref.me/toml.html), [2](https://realpython.com/python-toml/)]

toml

```
[servers.alpha]
ip = "10.0.0.1"

[servers.beta]
ip = "10.0.0.2"
```

Use code with caution.

Inline Tables

Written on a single line within curly braces `{}`. They are meant to express small, self-contained data maps succinctly. \[[1](https://www.anbowell.com/blog/the-developers-guide-to-toml/), [2](https://quickref.me/toml.html), [3](https://medium.com/softaai-blogs/inline-tables-in-toml-made-easy-a-simple-and-in-depth-guide-b692641975e2), [4](https://toml.io/en/v0.4.0)]

toml

```
user = { name = "Tom", role = "moderator" }
```

Use code with caution.

Array of Tables

Declared with double brackets `[[array_name]]`. Every time the header is repeated, a new table object is appended to the array. \[[1](https://quickref.me/toml.html), [2](https://github.com/toml-lang/toml/blob/main/toml.md), [3](https://github.com/toml-lang/toml/blob/main/toml.md)]

toml

```
[[products]]
name = "Hammer"
sku = 73859

[[products]]
name = "Nails"
sku = 85930
```

Use code with caution.

***

If you are currently writing a configuration file, let me know **what application or environment** you are building it for (e.g., a Python `pyproject.toml`, a Rust `Cargo.toml`, or a Docker setup). I can provide a complete, tailor-made template for you! \[[1](https://www.reddit.com/r/rust/comments/hhq5ar/even%5Fbetter%5Ftoml%5Fproper%5Ftoml%5Fsupport%5Ffor%5Fvisual/), [2](https://packaging.python.org/en/latest/guides/writing-pyproject-toml/), [3](https://realpython.com/python-toml/), [4](https://surajsinghbisht054.medium.com/understanding-yaml-json-and-toml-when-to-use-what-e6089a1d16f1)]

- [link](https://toml.io/en/)\
  TOML: Tom's Obvious Minimal Language\
  Powerful Strings. There are four ways to express strings: basic, multi-line basic, literal, and multi-line literal. Basic strings ...\
  TOML
- [link](https://github.com/toml-lang/toml)\
  toml-lang/toml: Tom's Obvious, Minimal Language - GitHub\
  May 27, 1979 — You can find the released versions at https://toml.io. \* Objectives. TOML aims to be a minimal configuration file format that's ea...\
  GitHub
- [link](https://en.wikipedia.org/wiki/TOML)\
  TOML - Wikipedia\
  Syntax. TOML's syntax primarily consists of, among other constructs, key = value pairs, \[section names] , and # (for comments). TO...\
  Wikipedia

Show all

You said: complex example

Below is a production-grade, highly complex TOML example demonstrating deep nesting, array of tables, diverse data types, multi-line strings, and complex dates.

This example configures a fictional, high-availability data processing cluster.

toml

```
# ==============================================================================
# PROD-CLUSTER-X GLOBAL CONFIGURATION (TOML v1.1.0 Compliant)
# ==============================================================================

title = "Enterprise Analytics Pipeline Engine"
version = "3.4.1-rc2"

# Bare keys, quoted keys, and numeric formatting
[infrastructure.meta]
cluster_id = "us-east-prod-099"
"security classification" = "restricted"
max_failover_nodes = 3
operational_budget = 450_000.00          # Underscores for large floats
bitmask_override = 0x1A2F               # Hexadecimal integer
binary_flag = 0b11010110                 # Binary integer

# Timekeeping using various RFC 3339 formats
[infrastructure.telemetry.timestamps]
deployment_utc = 2026-05-24T07:32:00Z                     # Offset Date-Time
maintenance_local = 2026-06-01T03:00:00                   # Local Date-Time
cutoff_date = 2028-12-31                                  # Local Date
backup_window_start = 22:00:00                            # Local Time

# Strings: Basic, Literal, and Multi-line variants
[engine.templates]
basic_escape = "Logs directory: C:\\Program Data\\Engine\\logs"
literal_raw = 'No escaping needed here: C:\Program Data\Engine\logs'

query_template_sql = """
    SELECT node_id, metric_value, execution_time
    FROM telemetry.node_metrics
    WHERE status = 'FAILED'
      AND timestamp >= NOW() - INTERVAL '15 minutes';
    """

regex_pattern = '''^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$'''

# Strictly typed Multi-dimensional Array (mixed whitespace/comments allowed)
[engine.tuning]
memory_allocation_mb = [ 4096, 8192, 16384, 32768 ]
special_constants = [ inf, -inf, nan ]  # Special floats

matrix_routing_table = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]

# Inline Tables (compact notation for self-contained key-value objects)
[engine.security]
tls_config = { cipher_suite = "ECDHE-RSA-AES128-GCM-SHA256", min_version = 1.3, strict = true }
fallback_auth = { method = "LDAP", domain = "corp.local", timeout_sec = 30 }

# Deep Nesting via Dotted Keys
networks.primary.wan.provider.company = "Global Transit Corp"
networks.primary.wan.provider.sla_percentage = 99.995

# ------------------------------------------------------------------------------
# ARRAY OF TABLES: Database Instances
# ------------------------------------------------------------------------------
[[databases]]
id = "db-replica-01"
role = "primary"
endpoints = [ "10.0.4.10:5432", "10.0.4.11:5432" ]
connections = { max = 15000, idle_timeout = 60.0 } # Mixed with inline table

[[databases]]
id = "db-replica-02"
role = "read-mirror"
endpoints = [ "10.0.5.10:5432" ]
connections = { max = 5000, idle_timeout = 30.0 }

# ------------------------------------------------------------------------------
# ARRAY OF TABLES: Alert Microservices
# ------------------------------------------------------------------------------
[[services]]
name = "SlackNotifier"
enabled = true
triggers = [ "CRITICAL", "FATAL" ]

    # Nested table explicitly defined inside an array of tables element
    [services.config]
    webhook_url = "https://slack.com"
    channel = "#ops-alerts"

[[services]]
name = "PagerDutyBridge"
enabled = false
triggers = [ "FATAL" ]

    [services.config]
    routing_key = "pd-routing-key-alpha-99"
    severity = "emergency"
```

Use code with caution.

***

If you need to parse or use this configuration, let me know **what language** your project uses (e.g., Python, Rust, Go, JavaScript). I can write the clean snippet to **load and parse** this structure for you!

You said: object in array, array in object

In TOML, **objects** are represented as Tables or Inline Tables, and **arrays** are enclosed in square brackets `[]`.

Here is how you handle arrays inside objects, and objects inside arrays.

***

1\. Array in Object (Array inside a Table)

To place an array inside an object, define your table first, then assign a standard array to a key.

toml

```
[user_profile]
username = "johndoe"
# Array of primitives inside the object
roles = ["admin", "moderator", "billing"]
# Array of inline objects inside the object
login_history = [ { ip = "1.1.1.1", success = true }, { ip = "2.2.2.2", success = false } ]
```

Use code with caution.

***

2\. Object in Array (Array of Tables)

To create an array filled with objects, use double brackets `[[table_name]]`. Each time you repeat the header, it opens a brand new object inside that array.

toml

```
# First object in the 'products' array
[[products]]
name = "Laptop"
price = 999.99

# Second object in the 'products' array
[[products]]
name = "Mouse"
price = 24.50
```

Use code with caution.

***

3\. Complex Combination (Objects inside Arrays inside Objects)

This example combines both concepts to show a complex, nested structure.

toml

```
[company]
name = "TechCorp"

    # 'departments' is an array of objects inside the 'company' object
    [[company.departments]]
    name = "Engineering"
    # 'languages' is an array inside this specific object
    languages = ["Rust", "Python", "Go"]

    [[company.departments]]
    name = "Design"
    languages = ["HTML", "CSS"]
```

Use code with caution.

***

If you are writing this file to be consumed by code, let me know **which programming language** you are using. I can show you exactly how this structures out as native code objects (like dictionaries, lists, or structs)!

# xml syntax

The **syntax rules of XML (Extensible Markup Language)** are <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">strict, logical, and designed to ensure that data is structured consistently so it can be easily parsed by software</mark>. An XML document that follows these core formatting rules is considered **"well-formed"**. \[[1](https://www.w3schools.com/xml/xml%5Fsyntax.asp), [2](https://www.w3schools.com/xml/), [3](https://developer.mozilla.org/en-US/docs/Web/XML/Guides/XML%5Fintroduction), [4](https://www.w3schools.com/xml/schema%5Fintro.asp), [5](https://www.w3schools.com/xml/xml%5Fvalidator.asp)]

1\. Mandatory Root Element \[[1](https://www.ibm.com/docs/SSRJDU/reference/SCN%5FXML%5FSyntax%5FRules.html), [2](https://www.networkacademy.io/ccna-automation/data-formats/xml-syntax)]

An XML document **must contain exactly one root element** that acts as the parent to all other elements. \[[1](https://www.w3schools.com/xml/xml%5Fsyntax.asp)]

- All other tags must be nested inside this single root tag. \[[1](https://www.ibm.com/docs/SSRJDU/reference/SCN%5FXML%5FSyntax%5FRules.html)]

xml

```
<root>
  <child>Content</child>
</root>
```

Use code with caution.

2\. All Elements Must Have a Closing Tag \[[1](https://www.ibm.com/docs/SSRJDU/reference/SCN%5FXML%5FSyntax%5FRules.html)]

Unlike HTML, omitting a closing tag is **strictly illegal** in XML. \[[1](https://www.w3schools.com/xml/xml%5Fsyntax.asp)]

- Every start tag must have a corresponding end tag.
- For elements without data, you can use a **self-closing tag**. \[[1](https://en.wikipedia.org/wiki/XML), [2](https://www.ibm.com/docs/en/zos/3.1.0?topic=snr-syntax-rules-xml-statements), [3](https://docs.oracle.com/en/cloud/saas/netsuite-openair/nsoa-online-help/article%5F31122801293.html)]

xml

```
<message>Hello</message>   <!-- Correct -->
<message>Hello             <!-- Syntax Error -->
<line_break />             <!-- Correct self-closing tag -->
```

Use code with caution.

3\. Tags Are Case-Sensitive \[[1](https://www.ibm.com/docs/SSRJDU/reference/SCN%5FXML%5FSyntax%5FRules.html)]

The opening and closing tags **must match exactly in case**. The tag is completely different from . \[[1](https://www.ibm.com/docs/SSRJDU/reference/SCN%5FXML%5FSyntax%5FRules.html), [2](https://forstasurveys.zendesk.com/hc/en-us/articles/4409461376795-XML-Syntax)]

xml

```
<username>John</username>   <!-- Correct -->
<username>John</Username>   <!-- Syntax Error -->
```

Use code with caution.

4\. Elements Must Be Properly Nested \[[1](https://www.ibm.com/docs/SSRJDU/reference/SCN%5FXML%5FSyntax%5FRules.html)]

Tags must be closed in the **reverse order of how they were opened**. They cannot overlap or cross over each other. \[[1](https://forstasurveys.zendesk.com/hc/en-us/articles/4409461376795-XML-Syntax), [2](https://www.tutorialspoint.com/xml/xml%5Fsyntax.htm), [3](https://transliteracies.english.ucsb.edu/index.html%3Fp=550.html)]

xml

```
<b><i>Bold and Italic</i></b>   <!-- Correct -->
<b><i>Bold and Italic</b></i>   <!-- Syntax Error -->
```

Use code with caution.

5\. Attribute Values Must Always Be Quoted \[[1](https://www.ibm.com/docs/SSRJDU/reference/SCN%5FXML%5FSyntax%5FRules.html)]

If an element contains attributes to describe its data, the attribute values **must be enclosed in single or double quotes**. Duplicating an attribute name within the same tag is prohibited. \[[1](https://krpano.com/docu/xml/syntaxrules/), [2](https://www.geeksforgeeks.org/software-engineering/xml-syntax/)]

xml

```
<book price="19.99">      <!-- Correct -->
<book price=19.99>        <!-- Syntax Error -->
```

Use code with caution.

6\. Special Entity References \[[1](https://www.w3schools.com/xml/schema%5Fintro.asp), [2](https://www.youtube.com/watch?v=hnWbQmNkEhE)]

You cannot use the raw characters `<` or `&` directly inside XML text content because the parser mistakes them for markup. You must replace them with **predefined entity references**: \[[1](https://en.wikipedia.org/wiki/XML), [2](https://www.ibm.com/docs/en/zos/3.1.0?topic=snr-syntax-rules-xml-statements), [3](https://forstasurveys.zendesk.com/hc/en-us/articles/4409461376795-XML-Syntax), [4](https://www.youtube.com/watch?v=I0qLFS%5FH%5Fbc)]

| Raw Character \[[1](http://cse.unl.edu/~reich/XML/syntax.html), [2](https://www.oreilly.com/library/view/xquery/0596006349/ch21s05.html), [3](http://www.xmlmaster.org/en/article/d01/c02/), [4](https://aosabook.org/en/posa/parsing-xml-at-the-speed-of-light.html), [5](https://www3.ntu.edu.sg/home/ehchua/programming/java/J6d%5Fxml.html)] | Purpose        | XML Entity Reference |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | -------------------- |
| `<`                                                                                                                                                                                                                                                                                                                                              | Less than      | `&lt;`               |
| `>`                                                                                                                                                                                                                                                                                                                                              | Greater than   | `&gt;`               |
| `&`                                                                                                                                                                                                                                                                                                                                              | Ampersand      | `&amp;`              |
| `'`                                                                                                                                                                                                                                                                                                                                              | Apostrophe     | `&apos;`             |
| `"`                                                                                                                                                                                                                                                                                                                                              | Quotation mark | `&quot;`             |

7\. Comments Syntax

Comments in XML are used to leave notes for developers and are ignored by the parser. They must begin with and end with `-->`. You cannot place comments inside a tag or use double-hyphens (`--`) inside the comment text. \[[1](https://krpano.com/docu/xml/syntaxrules/), [2](https://www.ibm.com/docs/en/zos/3.1.0?topic=snr-syntax-rules-xml-statements), [3](https://community.rti.com/static/documentation/connext-dds/current/doc/manuals/addon%5Fproducts/queuing%5Fservice/users%5Fmanual/queuing%5Fservice/Queuing%5FUsersManual/XMLSyntaxValidation.htm), [4](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ms764707%28v=vs.85%29), [5](https://www.menota.org/HB3%5Fch2.xml)]

xml

```
<!-- This is a valid XML comment -->
<user id="101"> <!-- Commenting inside a tag is illegal --> </user>
```

Use code with caution.

8\. Optional XML Prolog (Declaration) \[[1](https://www.servicenow.com/community/developer-articles/integratenow-chapter-6-working-with-xmls/ta-p/2306541), [2](https://www.staff.uni-mainz.de/doria/SQL/LINQ%5F3.pdf)]

While optional, if an XML document includes a declaration (prolog), it **must be the absolute first line** of the file. It defines the XML version and the character encoding used. \[[1](https://www.w3schools.com/xml/xml%5Fsyntax.asp), [2](https://www.geeksforgeeks.org/software-engineering/xml-syntax/), [3](https://www.w3schools.com/xml/xml%5Ftree.asp)]

xml

```
<?xml version="1.0" encoding="UTF-8"?>
```

Use code with caution.

***

If you are working on a specific file, tell me:

- What **data or structure** are you trying to represent?
- Do you need to **validate your XML** against a DTD or Schema?
- Are you looking to **convert it to another format** like JSON? \[[1](https://devopedia.org/xml), [2](https://blog.submain.com/json-and-xml-dying/)]

I can write out a complete template tailored to your specific application.

- [link](https://www.w3schools.com/xml/xml%5Fsyntax.asp)\
  XML Syntax Rules - W3Schools\
  ❮ Previous Next ❯ The syntax rules of XML are very simple and logical. The rules are easy to learn, and easy to use. XML Documents...\
  W3Schools
- [link](https://www.ibm.com/docs/SSRJDU/reference/SCN%5FXML%5FSyntax%5FRules.html)\
  XML Syntax Rules - IBM\
  All XML elements must have a closing tag. XML tags are case-sensitive. All XML elements must be properly nested. All XML documents...\
  IBM
- [link](https://en.wikipedia.org/wiki/XML)\
  XML - Wikipedia\
  The characters making up an XML document are divided into markup and content, which may be distinguished by the application of sim...\
  Wikipedia

Show all

You said: complex example

Here is a complex, well-formed XML example representing an **E-Commerce Order Fulfillment System**.

This example demonstrates advanced nesting, attributes, namespaces, self-closing tags, entity references, and structural data.

xml

```
<?xml version="1.0" encoding="UTF-8"?>
<!-- Advanced E-Commerce Order Fulfillment Record -->
<fulfillment:shipment
    xmlns:fulfillment="https://example.com"
    xmlns:inventory="https://example.com"
    status="In-Transit"
    priority="Express">

  <!-- Metadata Block -->
  <metadata>
    <order_id>ORD-2026-99482</order_id>
    <timestamps>
      <created_at>2026-05-24T14:32:10Z</created_at>
      <dispatched_at>2026-05-24T18:15:00Z</dispatched_at>
    </timestamps>
    <carrier code="FEDEX_EXP">FedEx Express</carrier>
    <tracking_number>123456789012</tracking_number>
  </metadata>

  <!-- Parties Involved -->
  <parties>
    <customer id="CUST-8831">
      <name>Jane Doe</name>
      <email>jane.doe@example.com</email>
      <phone type="mobile">+1-555-0199</phone>
    </customer>
    <address type="shipping">
      <street_line1>123 Innovation Way</street_line1>
      <street_line2>Suite 400 &amp; 500</street_line2> <!-- Escaped ampersand -->
      <city>Mountain View</city>
      <state_province code="CA">California</state_province>
      <postal_code>94043</postal_code>
      <country code="US">United States</country>
    </address>
  </parties>

  <!-- Consignment Manifest -->
  <manifest total_items="3" currency="USD">

    <!-- Item 1: Standard Item -->
    <item sequence="1">
      <inventory:sku>TECH-LAP-042</inventory:sku>
      <title>ProBook Ultra 14&quot;</title> <!-- Escaped quote -->
      <quantity>1</quantity>
      <pricing>
        <unit_price>1299.00</unit_price>
        <discount type="promo" code="SPRING26">100.00</discount>
        <tax_rate>0.0825</tax_rate>
        <total>1199.00</total>
      </pricing>
      <specifications>
        <spec name="RAM">32GB</spec>
        <spec name="Storage">1TB SSD</spec>
      </specifications>
    </item>

    <!-- Item 2: Multiple Quantities -->
    <item sequence="2">
      <inventory:sku>ACC-CBL-USB-01</inventory:sku>
      <title>USB-C Braided Cable (6ft)</title>
      <quantity>2</quantity>
      <pricing>
        <unit_price>15.00</unit_price>
        <discount type="none" /> <!-- Self-closing tag -->
        <tax_rate>0.0825</tax_rate>
        <total>30.00</total>
      </pricing>
    </item>

  </manifest>

  <!-- Financial Summary -->
  <summary>
    <subtotal>1229.00</subtotal>
    <shipping_handling fee="free">0.00</shipping_handling>
    <tax_total>101.39</tax_total>
    <grand_total>1330.39</grand_total>
  </summary>

  <!-- Special Instructions and Notes -->
  <instructions>
    <note author="System">Fragile electronics. Requires signature if value is &gt; $1000.</note> <!-- Escaped greater-than -->
    <delivery_window>Leave at front desk if no response.</delivery_window>
  </instructions>

</fulfillment:shipment>
```

Use code with caution.

Key Complex Features Demonstrated:

- **XML Namespaces (`xmlns:fulfillment`, `xmlns:inventory`)**: Prevents element naming conflicts by qualifying tags with unique URIs.
- **Mixed Prefixes**: Combines elements from different domains (e.g., and ) in the same file.
- **Escaped Entities**: Safely renders reserved characters using `&amp;` (Line 23), `&quot;` (Line 34), and `&gt;` (Line 61).
- **Attribute Diversity**: Uses various string types, codes, and numerical flags directly inside tags to categorize data.

***

If you want to use this example for a project, let me know:

- Do you need to generate a **matching JSON schema** for comparison?
- Do you want to see how to write a **DTD or XSD (XML Schema)** to validate this specific structure?
- Do you need an **XPath query example** to extract specific data from this document?

You said: object to xml, xml to object

To convert data between programming languages (**Objects**) and **XML**, you use a process called <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>Serialization</strong> (Object to XML) and <strong>Deserialization</strong> (XML to Object)</mark>.

Because different programming languages handle this differently, here is how to do it in the three most common languages: **JavaScript/TypeScript**, **Python**, and **C#**.

***

1\. JavaScript / TypeScript (Node.js & Browser)

JavaScript natively handles JSON, so it relies on the `fast-xml-parser` library (or the built-in `DOMParser` in browsers) to handle XML.

javascript

```
const { XMLBuilder, XMLParser } = require('fast-xml-parser');

// The Original JavaScript Object
const userObj = {
  user: {
    name: "Jane Doe",
    role: "Admin",
    id: 101
  }
};

// 1. OBJECT TO XML (Serialization)
const builder = new XMLBuilder({ format: true });
const xmlData = builder.build(userObj);
console.log(xmlData);
/* Outputs:
<user>
  <name>Jane Doe</name>
  <role>Admin</role>
  <id>101</id>
</user>
*/

// 2. XML TO OBJECT (Deserialization)
const parser = new XMLParser();
const backToObj = parser.parse(xmlData);
console.log(backToObj.user.name); // Outputs: Jane Doe
```

Use code with caution.

***

2\. Python

Python uses the built-in `xml.etree.ElementTree` library for parsing, and third-party libraries like `dicttoxml` or `xmltodict` to make object conversion effortless.

python

```
import xmltodict
import json

# The Original Python Dictionary (Object)
user_dict = {
    "user": {
        "name": "Jane Doe",
        "role": "Admin",
        "id": "101"
    }
}

# 1. OBJECT TO XML (Serialization)
xml_data = xmltodict.unparse(user_dict, pretty=True)
print(xml_data)

# 2. XML TO OBJECT (Deserialization)
# Parse XML back into a Python dictionary
parsed_dict = xmltodict.parse(xml_data)
print(parsed_dict["user"]["name"])  # Outputs: Jane Doe
```

Use code with caution.

***

3\. C# (.NET)

C# uses the powerful, built-in `XmlSerializer` which uses class definitions to map objects directly to XML tags.

csharp

```
using System.IO;
using System.Xml.Serialization;

// Define the class structure first
public class User {
    public string Name { get; set; }
    public string Role { get; set; }
    public int Id { get; set; }
}

// 1. OBJECT TO XML (Serialization)
User myUser = new User { Name = "Jane Doe", Role = "Admin", Id = 101 };
XmlSerializer serializer = new XmlSerializer(typeof(User));

using (StringWriter writer = new StringWriter()) {
    serializer.Serialize(writer, myUser);
    string xmlData = writer.ToString();

    // 2. XML TO OBJECT (Deserialization)
    using (StringReader reader = new StringReader(xmlData)) {
        User backToObj = (User)serializer.Deserialize(reader);
        System.Console.WriteLine(backToObj.Name); // Outputs: Jane Doe
    }
}
```

Use code with caution.

***

Common Traps to Watch Out For

- **Arrays/Lists**: Converting an object array to XML can result in repetitive tags (e.g., tags), which need special configurations in your parser so they don't break.
- **Attributes vs. Elements**: By default, most object-to-xml tools convert object properties into nested XML _elements_ rather than XML _attributes_.
- **Data Types**: XML treats everything as text. When parsing back to an object, numbers (like `101`) or booleans (`true`) might accidentally become strings (`"101"`, `"true"`) unless explicit type casting is used.

***

To tailor this code to your project, let me know:

- What **programming language** or framework are you using?
- What does your **target object or data structure** look like?
- Do your XML elements need to include **specific attributes**?

You said: i mean xml to json, json to xml

Converting data between **XML** and **JSON** is highly common since modern web APIs primarily use JSON, while legacy systems and configuration files rely on XML.

Because XML supports features that JSON does not (like attributes and namespaces), conversion libraries use specific conventions to map the two formats.

***

1\. JavaScript / Node.js

The `fast-xml-parser` library is the most efficient tool for handling bidirectional conversion in JavaScript.

javascript

```
const { XMLParser, XMLBuilder } = require('fast-xml-parser');

const xmlInput = `
<user id="101">
  <name>Jane Doe</name>
  <role>Admin</role>
</user>`;

// 1. XML TO JSON
// Enable parsing attributes (they are prefixed with '@_' by default)
const parser = new XMLParser({ ignoreAttributes: false });
const jsonObject = parser.parse(xmlInput);

console.log(JSON.stringify(jsonObject, null, 2));
/* Outputs JSON:
{
  "user": {
    "name": "Jane Doe",
    "role": "Admin",
    "@_id": "101"
  }
}
*/

// 2. JSON TO XML
const builder = new XMLBuilder({ ignoreAttributes: false, format: true });
const xmlOutput = builder.build(jsonObject);
console.log(xmlOutput); // Converts back to the exact original XML structure
```

Use code with caution.

***

2\. Python

Python's `xmltodict` library natively reads XML and outputs standard Python dictionaries, which can immediately be outputted as JSON using the built-in `json` module.

python

```
import xmltodict
import json

xml_input = """
<user id="101">
  <name>Jane Doe</name>
  <role>Admin</role>
</user>"""

# 1. XML TO JSON
# xmltodict maps attributes by prefixing them with '@'
data_dict = xmltodict.parse(xml_input)
json_output = json.dumps(data_dict, indent=2)
print(json_output)

# 2. JSON TO XML
decoded_json = json.loads(json_output)
xml_output = xmltodict.unparse(decoded_json, pretty=True)
print(xml_output)
```

Use code with caution.

***

3\. C# (.NET)

In modern .NET, the `Newtonsoft.Json` package provides the easiest one-line functions to convert directly between `XmlDocument` objects and JSON strings.

csharp

```
using System;
using System.Xml;
using Newtonsoft.Json;

class Program {
    static void Main() {
        string xmlInput = @"
        <user id='101'>
          <name>Jane Doe</name>
          <role>Admin</role>
        </user>";

        // 1. XML TO JSON
        XmlDocument doc = new XmlDocument();
        doc.LoadXml(xmlInput);

        string jsonOutput = JsonConvert.SerializeXmlNode(doc, Formatting.Indented);
        Console.WriteLine(jsonOutput);

        // 2. JSON TO XML
        XmlDocument revertedDoc = JsonConvert.DeserializeXmlNode(jsonOutput);
        Console.WriteLine(revertedDoc.OuterXml);
    }
}
```

Use code with caution.

***

Structural Rules & Translation Gotchas

When converting between the two formats, pay close attention to these three translation rules:

- **Attributes mapping**: Because JSON only has key-value pairs, XML attributes (like `id="101"`) are converted into JSON keys with a special character prefix (usually `@_id` or `@id`).
- **Single vs. Multiple Elements**: If an XML structure has only one child , a converter will turn it into a single JSON object. If there are multiple tags, the converter changes it into a JSON array `["Test"]`. This can break backend logic if the number of elements fluctuates dynamically.
- **Loss of Order**: XML strictly maintains the vertical order of elements. JSON objects are technically unordered collections of keys, meaning sequence data can occasionally be scrambled during translation.

***

If you are setting up an automation script, let me know:

- What **programming language** or CLI tool are you using?
- Do you have an **example snippet** you need converted right now?
- Does your JSON structure need to **strip away the XML attributes** completely?

You said: i mean what do they look like. not how to write.

When you convert directly between XML and JSON, structural differences alter how the data looks.

Because XML supports text attributes and JSON does not, converters use unique symbol prefixes (like `@` or `#`) to balance the formats.

1\. Simple Data Structure

A basic comparison showing how elements become standard JSON key-value pairs.

XML

xml

```
<user>
  <id>101</id>
  <name>Jane Doe</name>
  <role>Admin</role>
</user>
```

Use code with caution.

JSON

json

```
{
  "user": {
    "id": "101",
    "name": "Jane Doe",
    "role": "Admin"
  }
}
```

Use code with caution.

***

2\. Handling XML Attributes

JSON objects do not have "attributes." Converted JSON handles tag attributes by adding an **`@` prefix** to the attribute name.

XML

xml

```
<product id="45" status="instock">
  <name>Wireless Mouse</name>
</product>
```

Use code with caution.

JSON

json

```
{
  "product": {
    "@id": "45",
    "@status": "instock",
    "name": "Wireless Mouse"
  }
}
```

Use code with caution.

***

3\. Handling Mixed Content (Attributes + Text)

When an XML tag has both an attribute and raw inner text, converters generate a **`#text` key** inside the JSON to hold the string value.

XML

xml

```
<price currency="USD">29.99</price>
```

Use code with caution.

JSON

json

```
{
  "price": {
    "@currency": "USD",
    "#text": "29.99"
  }
}
```

Use code with caution.

***

4\. Handling Repeating Elements (Arrays)

Multiple XML elements with identical names stacked on top of each other are automatically collapsed into a single JSON array list.

XML

xml

```
<gallery>
  <image>photo1.jpg</image>
  <image>photo2.jpg</image>
  <image>photo3.jpg</image>
</gallery>
```

Use code with caution.

JSON

json

```
{
  "gallery": {
    "image": [
      "photo1.jpg",
      "photo2.jpg",
      "photo3.jpg"
    ]
  }
}
```

Use code with caution.

***

If you have a snippet to process, let me know:

- Would you like me to **manually translate** your data block right now?
- Do you want to see how to format **self-closing tags** () in JSON?

You said: json to xml

When converting from **JSON to XML**, structural rules must reverse. Because XML requires a single root element and does not support native arrays, JSON keys and array structures are mapped to strict tag configurations.

Most converters use standard symbol conventions (like `@` for attributes) to recreate proper XML syntax.

1\. Simple Data Structure

A standard JSON object translates directly into nested XML tags. The outermost JSON key becomes the mandatory XML root element.

JSON

json

```
{
  "profile": {
    "username": "coder123",
    "status": "active"
  }
}
```

Use code with caution.

XML

xml

```
<profile>
  <username>coder123</username>
  <status>active</status>
</profile>
```

Use code with caution.

***

2\. Creating XML Attributes

To generate an XML attribute inside a tag (instead of a child element), the JSON key must start with an **`@` prefix**.

JSON

json

```
{
  "device": {
    "@id": "DH-882",
    "@type": "sensor",
    "reading": "23.5"
  }
}
```

Use code with caution.

XML

xml

```
<device id="DH-882" type="sensor">
  <reading>23.5</reading>
</device>
```

Use code with caution.

***

3\. Creating Mixed Content (Attributes + Inner Text)

To give an XML element both attributes and raw text content, the JSON uses the **`#text` key** alongside the `@` attribute keys.

JSON

json

```
{
  "measurement": {
    "@unit": "celsius",
    "#text": "23.5"
  }
}
```

Use code with caution.

XML

xml

```
<measurement unit="celsius">23.5</measurement>
```

Use code with caution.

***

4\. Handling JSON Arrays

Because XML has no `[]` array symbols, lists are converted by repeating the target tag name for every item in the JSON array.

JSON

json

```
{
  "team": {
    "member": [
      "Alice",
      "Bob",
      "Charlie"
    ]
  }
}
```

Use code with caution.

XML

xml

```
<team>
  <member>Alice</member>
  <member>Bob</member>
  <member>Charlie</member>
</team>
```

Use code with caution.

***

5\. Array of Objects

When an array contains complex objects, the array's key name is repeated for every object container.

JSON

json

```
{
  "catalog": {
    "book": [
      { "@id": "1", "title": "Book A" },
      { "@id": "2", "title": "Book B" }
    ]
  }
}
```

Use code with caution.

XML

xml

```
<catalog>
  <book id="1">
    <title>Book A</title>
  </book>
  <book id="2">
    <title>Book B</title>
  </book>
</catalog>
```

Use code with caution.

***

If you have a payload ready, tell me:

- Would you like me to **convert a specific JSON snippet** for you?
- Do you need to handle **anonymous JSON arrays** that lack an explicit key name?

# <!-- 12 aug -->

# all yaml syntax

**YAML (YAML Ain't Markup Language)** is a human-readable data serialization language used primarily for configuration files. Its <mark>structural hierarchy relies entirely on<span> </span><strong>indentation and whitespace</strong><span> </span>rather than brackets, braces, or closing tags</mark>. [link](https://www.youtube.com/watch?v=BEki%5FrsWu4E\&vl=en-US)

Here is the complete syntax breakdown of YAML, ranging from foundational data types to advanced structuring mechanisms.

***

### Basic Structure & Rules

- **Indentation**: Must use **spaces only** (tabs are strictly prohibited and will cause parsing errors). The universal standard is **2 spaces** per indentation level.
- **Case Sensitivity**: YAML is fully case-sensitive (`Key` and `key` are treated differently).
- **File Extensions**: Typically saved as `.yaml` or `.yml`. [link](https://www.youtube.com/watch?v=BEki%5FrsWu4E\&vl=en-US)

***

### Document Boundaries

YAML allows you to embed multiple structural documents within a single physical file.

- `---` (Three dashes): Explicitly marks the **start** of a document.
- `...` (Three dots): Optionally marks the **end** of a document. [link](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html)

yaml

```
---
document: "This is document 1"
...
---
document: "This is document 2"
...
```

Use code with caution.

***

### Core Components & Data Types

#### 1. Mappings (Key-Value Pairs)

A basic association of a key to a value. **A space is strictly required after the colon**. [link](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html)

yaml

```
# Simple key-value
app_name: "AuthService"

# Nested mapping (Object / Dictionary)
database:
  host: "localhost"
  port: 5432
```

Use code with caution.

#### 2. Sequences (Lists / Arrays)

Ordered collections of items. They can be written in two distinct styles: [link](https://www.youtube.com/watch?v=rGOvugNq6sM\&t=462)

- **Block Style** (Uses a dash followed by a space):\
  yaml

<!---->

```
environments:
  - development
  - staging
  - production
```

Use code with caution.

- **Flow Style** (Inline, JSON-like syntax):\
  yaml

<!---->

```
environments: [development, staging, production]
```

Use code with caution.\
[link](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html)

#### 3. Scalars (Primitive Values)

Scalars represent the basic data primitives. [link](https://yamlscript.org/doc/yaml/)

yaml

```
# Strings (Can be unquoted, single-quoted, or double-quoted)
string_unquoted: Hello World
string_single: 'Must use if value contains special symbols like :'
string_double: "Allows escaping characters like \n"

# Numbers
integer: 42
floating_point: 3.14159

# Booleans (Evaluates to true or false)
is_active: true
is_cached: false

# Null values
empty_field: null
missing_field: ~
```

Use code with caution.

***

### Multi-line Strings

YAML handles long, block-level strings gracefully using specific indicator symbols. [link](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html)

- **Literal Block Scalar (`|`)**: Preserves all newlines and trailing spaces exactly as typed.
- **Folded Block Scalar (`>`)**: Folds newlines into spaces, turning the block into a single long string paragraph. [link](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html)

yaml

```
literal_example: |
  This line will be line one.
  This line will be line two.

folded_example: >
  This long block of text
  will be compressed into
  a single sentence string.
```

Use code with caution.

***

### Advanced YAML Syntax

#### 1. Anchors (`&`) and Aliases (`*`)

Used to duplicate and reuse sections of your data to eliminate repetition (DRY concept). [link](https://www.akamai.com/docs/guides/yaml-reference/)

- `&`: Defines the anchor point name.
- `*`: References and injects the anchored data.

yaml

```
# Define reusable settings
default_config: &base_settings
  timeout: 30
  retry: 3

# Inject the settings elsewhere
api_service:
  host: "api.example.com"
  <<: *base_settings  # '<<' is the merge key used to unpack the map
```

Use code with caution.

#### 2. Explicit Tags (Data Typing)

YAML automatically infers data types, but you can force an explicit type using `!!` tags. [link](https://dev.to/educative/advanced-yaml-syntax-cheatsheet-59ij)

yaml

```
# Force a number to be parsed strictly as a string
version: !!str 1.0

# Force an ambiguous value to a boolean
feature_flag: !!bool "true"
```

Use code with caution.

#### 3. Node Comments

Any text on a line following an octothorpe (`#`) is treated as a comment and ignored by the parser. [link](https://yaml.org/spec/1.2.2/)

yaml

```
# This is a full-line comment
port: 8080 # This is an inline comment
```

Use code with caution.

***

### Structure Combos: List of Objects

The most common structural format found in deployment files (e.g., Kubernetes, GitHub Actions, Docker) combines lists and nested keys. [link](https://www.youtube.com/watch?v=BEki%5FrsWu4E\&vl=en-US)

yaml

```
users:
  - name: "Alice"
    role: "Admin"
  - name: "Bob"
    role: "Developer"
```

Use code with caution.

***

If you are currently constructing a file, tell me **what tool or platform** you are writing it for (e.g., Kubernetes, Ansible, Docker Compose) so I can provide a **tailored, production-ready template**.

AI can make mistakes, so double-check responses

- [link](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html)\
  YAML Syntax — Ansible Community Documentation\
  Apr 20, 2026 — YAML Basics. For Ansible, nearly every YAML file starts with a list. Each item in the list is a list of key/value pairs, commonly ...\
  Ansible documentation
- [link](https://www.youtube.com/watch?v=BEki%5FrsWu4E\&vl=en-US)\
  YAML Tutorial | Learn YAML in 10 Minutes\
  Dec 23, 2021 — All modern data engineers need to be able to work with YAML/YML because it has quickly become the go-to file type for configuratio...\
  10:08\
  YouTube·Kahan Data Solutions
- [link](https://yaml.org/spec/1.2.2/)\
  YAML Ain't Markup Language (YAML™) revision 1.2.2\
  Oct 1, 2021 — Chapter 2. Language Overview \* 2.1. Collections. YAML's block collections use indentation for scope and begin each entry on its ow...\
  YAML.org

Show all

# all yaml data types

YAML supports <mark><strong>three core categories of data types: scalars, sequences, and mappings</strong></mark>. These structural primitives allow YAML to native-encode data structures used across dynamic programming languages. [link](https://yaml.org/spec/1.2.2/)

Here is the complete breakdown of all YAML data types and primitives.

### 1. Scalars (Single Values)

Scalars represent atomic, individual values. YAML automatically determines their specific subtype based on formatting. [link](https://yaml.org/spec/1.2.2/)

- **Strings**: Plain text blocks. They can be unquoted, single-quoted, or double-quoted. YAML also uses pipe symbols (`|`) to keep line breaks and greater-than symbols (`>`) to squash them into single paragraphs. [link](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)
- **Integers**: Whole numeric values. This category natively accepts standard base-10 numbers, binary (`0b101`), octal (`0o27`), and hexadecimal configurations (`0x1A`). [link](https://en.wikipedia.org/wiki/YAML)
- **Floating-Point**: Numbers containing decimal points or exponential notations. It includes distinct placeholders for positive infinity (`.inf`), negative infinity (`-.inf`), and undefined operations (`.nan`). [link](https://harshitawrites.hashnode.dev/yaml-datatypes)
- **Booleans**: Logical states. Parsers read `true` or `false`. [link](https://www.kerno.io/blog/yaml-file-format-complete-guide)
- **Null**: Empty fields or non-existent values. Handled by entering the literal `null` word or a tilde symbol (`~`). [link](https://learn.getgrav.org/20/advanced/yaml)
- **Timestamps**: Absolute points in time. Recognized when using formatted patterns like date-only strings (`YYYY-MM-DD`) or complete ISO 8601 strings featuring local time zone adjustments. [link](https://www.lenovo.com/ca/en/glossary/yaml/)

### 2. Sequences (Lists / Arrays)

Sequences are ordered collections of index-accessible values. [link](https://yaml.org/spec/1.2.2/)

- **Block Sequences**: Indented series where each new entry begins with a dash followed by a single blank space.
- **Flow Sequences**: A compact, inline structure written within square brackets `[]` where individual elements are separated by commas. [link](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html)

### 3. Mappings (Hashes / Dictionaries / Objects)

Mappings represent unordered collections of unique key-value pairs. [link](https://yaml.org/spec/1.2.2/)

- **Block Mappings**: Standard structural layers utilizing colon-centered notation (`key: value`) separated across line changes and grouped via indentation levels.
- **Flow Mappings**: An inline configuration wrapped within standard curly braces `{}` with comma-delimited pairings. [link](https://en.wikipedia.org/wiki/YAML)

### 4. Advanced & Custom Types

YAML permits structural overrides or framework-specific extensions through custom tagging. [link](https://en.wikipedia.org/wiki/YAML)

- **Explicit Tags**: Forcing specific interpretations by appending structural prefixes. For example, writing `!!str 123` forces the parser to process a number sequence strictly as text. [link](https://harshitawrites.hashnode.dev/yaml-datatypes)
- **Binary Data**: Storing base64 encoded cryptographic elements or system file assets directly inside text fields, usually flagged explicitly via the `!!binary` prefix tag. [link](https://wikipedia.org/wiki/YAML)

Would you like me to **provide syntax examples** for any of these data types, or help you **convert a JSON payload** into a valid YAML structure? [link](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)

- [link](https://yaml.org/spec/1.2.2/)\
  YAML Ain't Markup Language (YAML™) revision 1.2.2\
  Oct 1, 2021 — YAML represents any native data structure using three node kinds: sequence - an ordered series of entries; mapping - an unordered ...\
  YAML.org
- [link](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)\
  YAML Tutorial: Everything You Need to Get Started in Minutes\
  Mar 8, 2023 — The “doe” is a key that points to a string value: “a deer, a female deer”. YAML supports more than just string values. The file st...\
  CloudBees
- [link](https://en.wikipedia.org/wiki/YAML)\
  YAML - Wikipedia\
  YAML. Article · Talk. Language; Loading… Download PDF; Watch · Edit. For the CSS framework, see YAML (framework). YAML (/ˈjæməl/ Y...\
  Wikipedia

Show all

## examples of each

Here are practical examples for every YAML data type, organized by their core categories.

### 1. Scalars (Single Values)

yaml

```
# Strings
plain_string: Hello World
single_quoted: 'Preserves literal \ characters'
double_quoted: "Allows escape sequences like \n newlines"
literal_block: |
  This keeps line breaks
  exactly as written.
folded_block: >
  This removes line breaks
  and creates one paragraph.

# Integers
canonical_int: 12345
binary_int: 0b1010
octal_int: 0o27
hex_int: 0x1A

# Floating-Point
canonical_float: 1230.15
exponential_float: 1.23e+3
fixed_infinity: .inf
not_a_number: .nan

# Booleans
boolean_true: true
boolean_false: false

# Nulls
null_word: null
null_tilde: ~

# Timestamps
date_only: 2026-08-12
iso_8601: 2026-08-12T08:13:00-07:00
```

Use code with caution.

### 2. Sequences (Lists)

yaml

```
# Block Sequence (Standard)
shopping_list:
  - Apples
  - Bananas
  - Oranges

# Flow Sequence (Inline)
inline_list: [Apples, Bananas, Oranges]
```

Use code with caution.

### 3. Mappings (Key-Value)

yaml

```
# Block Mapping (Standard)
user_profile:
  username: johndoe
  role: admin

# Flow Mapping (Inline)
inline_profile: { username: johndoe, role: admin }
```

Use code with caution.

### 4. Advanced & Custom Types

yaml

```
# Explicit Tags (Forcing a data type)
forced_string: !!str 12345
forced_float: !!float 42

# Binary Data (Base64 encoded)
gif_file: !!binary |
  R0lGODlhDAAMAIQAAP//wP///wJCcmstcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5
  BAEAAAAALAAAAAAMAAwAAAVKIC6Oz/ieaCqQCgADwRxLcKbLOa9TH2bA78DBU0hQ
  jEDgYwYgAhBTscAsEBgNoIEIkIDFiLHWUvEI9g6GgHBgE658SbdKAAA7
```

Use code with caution.

Would you like to see how to **nest these types** inside a complex configuration file, or do you want to **validate a specific YAML snippet** you are currently writing?

# yaml spec on indentation

The official [YAML Specification](https://yaml.org/spec/1.2.2/) dictates that <mark><strong>structure and hierarchy are defined by line indentation</strong></mark>, meaning leading whitespace is syntactically significant. [link](https://yaml.org/spec/1.2.2/)

### The Core Rules

- **Tabs are forbidden**: You must **never use tabs** for indentation. This ensures portability, as different systems and text editors render tab characters with varying widths. [link](https://github.com/yaml/yaml/issues/61)
- **Spaces only**: Indentation consists strictly of **one or more space characters** at the beginning of a line. [link](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)
- **No fixed number of spaces**: The specification **does not require a specific number of spaces** (like 2 or 4) per level. You can freely choose your indentation width. [link](https://stackoverflow.com/questions/42247535/yaml-how-many-spaces-per-indent)
- **Consistency is required**: Elements at the **exact same nesting level must share the exact same indentation** width. You can change the indent spacing for different nesting levels, but doing so is highly discouraged.
- **Relative indentation**: An indented block or child node must be indented with **more spaces than its parent node**. [link](https://stackoverflow.com/questions/68455579/how-to-preserve-all-leading-indents-in-yaml)

### 💡 The De Facto Convention

While the specification allows flexibility, the community and industry best practice is to **always use exactly 2 spaces per indentation level**. [link](https://www.rudderstack.com/docs/profiles/dev-docs/yaml-refresher/)

### Block Sequences (Lists) and Indentation

The dash character (`-`) used for list items **counts as part of the indentation**. Because of this, the specification allows two different visual styles for list formatting: [link](https://cloudslang-docs.readthedocs.io/en/v1.0/yaml%5Foverview.html)

**1. Indented Sequence (Recommended for clarity)**\
The sequence entry is indented relative to its parent key.

yaml

```
fruits:
  - apple
  - banana
```

Use code with caution.

**2. Zero-Indented Sequence (Valid specification syntax)**\
The dash aligns directly underneath the parent key. This is structurally valid because the dash acts as the indentation marker itself. [link](https://www.youtube.com/watch?v=ImHSpwUlNVc\&t=227)

yaml

```
fruits:
- apple
- banana
```

Use code with caution.

If you are writing a schema or setting up your project, would you like help configuring a tool like **yamllint** or **Prettier** to automatically enforce these spacing rules? [link](https://docs.ansible.com/projects/lint/rules/yaml/)

- [link](https://yaml.org/spec/1.2.2/)\
  YAML Ain't Markup Language (YAML™) revision 1.2.2\
  Oct 1, 2021 — 2.1. Collections. YAML's block collections use indentation for scope and begin each entry on its own line. Block sequences indicat...\
  YAML.org
- [link](https://stackoverflow.com/questions/42247535/yaml-how-many-spaces-per-indent)\
  YAML How many spaces per indent?\
  Feb 15, 2017 — YAML doesn't require a specific number of spaces for indentation. Indentation is defined as zero or more spaces at the start of a ...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/68455579/how-to-preserve-all-leading-indents-in-yaml)\
  How to preserve all leading indents in yaml? - Stack Overflow\
  Jul 20, 2021 — 1 Answer. ... SomeText: |1 This is some text that I would like for The leading indents to be preserved. It would be really nice fo...\
  Stack Overflow

Show all

## examples

### Basic Key-Value Nesting (2-Space Standard)

Each child key must be indented further than its parent.

yaml

```
# Correct: Consistent 2-space indentation
company:
  department:
    team: Engineering
    size: 15
```

Use code with caution.

yaml

```
# Incorrect: "size" is nested under nothing
company:
  department:
    team: Engineering
  size: 15
```

Use code with caution.

### Lists inside Maps

The hyphen (`-`) marks a list item. It requires at least one space after it.

yaml

```
# Correct: Standard indented list
servers:
  - web01
  - web02
```

Use code with caution.

yaml

```
# Correct: Zero-indented list (Valid, but less common)
servers:
- web01
- web02
```

Use code with caution.

yaml

```
# Incorrect: Tab character used instead of spaces
servers:
	- web01
```

Use code with caution.

### Maps inside Lists

When list items contain key-value pairs, the keys align with the hyphen or indent further.

yaml

```
# Correct: Nested maps inside a list
users:
  - name: Alice
    role: Admin
  - name: Bob
    role: User
```

Use code with caution.

### Multi-line Strings

Literal block scalars (`|`) and folded scalars (`>`) preserve structure based on the indentation of the string content.

yaml

```
# Correct: Content is indented past the parent key
description: |
  This is line one.
  This is line two.
```

Use code with caution.

Would you like me to validate a **specific YAML snippet** you are working on, or should we look at how **Kubernetes** or **GitHub Actions** uses these rules?

## yaml spec on omitting indentation for top level map

The YAML Specification explicitly allows you to **omit indentation for a top-level map** (also called a block mapping) because it sits at the "root" or document level.

### The Core Rule

- **Implicit Root Level:** The top-level mapping forms the outermost structure of the document, so it has a baseline indentation of **zero spaces**.
- **Subsequent Nesting Required:** While the top-level keys start at the very margin of the file, any maps or lists nested _inside_ them must be indented normally.

### Correct Example

The top-level keys (`apiVersion`, `kind`, `metadata`, `spec`) have zero indentation. Only their child elements are indented.

yaml

```
apiVersion: v1
kind: Pod
metadata:
  name: web-server
spec:
  containers:
    - name: nginx
      image: nginx:1.14.2
```

Use code with caution.

### Incorrect Example

You cannot add arbitrary indentation to top-level keys unless they are nested inside a document marker (`---`). Without a marker, this will cause a parsing error.

yaml

```
# ERROR: Arbitrary top-level indentation
  apiVersion: v1
  kind: Pod
```

Use code with caution.

### Multiple Top-Level Maps (Document Dividers)

If you want to include multiple top-level maps in a single file, you must separate them using the **three dashes (`---`) directive**. The maps still require zero indentation relative to the margin.

yaml

```
---
# Document 1
id: 1
name: Alice
---
# Document 2
id: 2
name: Bob
```

Use code with caution.

Are you troubleshooting a specific **parser error**, or would you like to see how this rule applies to **JSON-to-YAML conversion**?

- [link](https://github.com/yaml/pyyaml/issues/234)\
  Incorrect indentation with lists · Issue #234 · yaml/pyyaml\
  Nov 20, 2018 — The top level mapping has an indentation of zero ( 0 \* spaces ). The value for list\_of\_dict\_attr , the sequence, also has an inden...\
  \
  \
  GitHub
- [link](https://dev.to/msfaizi/how-to-write-a-yaml-configuration-file-a-step-by-step-guide-for-beginners-jf0)\
  How to write a YAML configuration file? | A Step-by-Step Guide for Beginners\
  Oct 9, 2023 — Use Indentation for Nested Data: If you have nested data structures like dictionaries or lists, use proper indentation to represen...\
  \
  \
  DEV Community
- [link](https://github.com/yaml/pyyaml/issues/234)\
  Incorrect indentation with lists · Issue #234 · yaml/pyyaml\
  Nov 20, 2018 — The top level mapping has an indentation of zero ( 0 \* spaces ). The value for list\_of\_dict\_attr , the sequence, also has an inden...\
  \
  \
  GitHub

Show all

## yaml spec on omitting indentation for second level map

According to the [YAML Specification](https://yaml.org/spec/1.2.2/), you **cannot omit indentation for a pure second-level map** if it sits directly underneath another map. YAML relies completely on indentation to establish child hierarchy. [link](https://stackoverflow.com/questions/66188060/dashes-and-indentations-in-yaml)

However, there is **one major exception** where a second-level map can look like its indentation was omitted: when it is nested inside a list. [link](https://stackoverflow.com/questions/66188060/dashes-and-indentations-in-yaml)

### The Exception: Compact Block Mapping (Maps inside Lists)

If your first-level element is a **sequence (list)**, the specification allows a **compact notation**. The hyphen (`-`) and its trailing space act as the structural indentation for that level. [link](https://stackoverflow.com/questions/66188060/dashes-and-indentations-in-yaml)

Because the hyphen handles the indentation context, the first key of your second-level map can sit on the exact same line, right after the hyphen. The subsequent keys of that same map then align directly underneath that first key, requiring **zero extra indentation relative to the hyphen**. [link](https://stackoverflow.com/questions/66188060/dashes-and-indentations-in-yaml)

#### Valid Compact Syntax

yaml

```
# Level 1: A list (sequence)
users:
  - name: Alice    # Level 2 map starts on the same line as the hyphen
    role: Admin    # These keys align exactly under the first key
    id: 101
```

Use code with caution.

#### Structurally Identical Expanded Syntax

Without using the compact notation exception, the exact same data structure requires an explicit indent for the second-level map:

yaml

```
users:
  -
    name: Alice
    role: Admin
    id: 101
```

Use code with caution.

### Where it is Forbidden (Map under a Map)

If your first-level element is a standard map, you **never** omit indentation for the second-level map. Doing so breaks the structure and causes a parsing error because the parser cannot distinguish a second-level key from a top-level key.

yaml

```
# INVALID SYNTAX (Will throw a parsing error)
user_profile:
name: Alice
role: Admin
```

Use code with caution.

yaml

```
# VALID SYNTAX (Must be indented)
user_profile:
  name: Alice
  role: Admin
```

Use code with caution.

### Alternative: Flow Style (Inline JSON-like Maps)

If you want a second-level map but absolutely hate adding vertical line indentation, you can bypass the block indentation rules entirely by using **Flow Style**. Flow style uses curly braces (`{}`) and commas, allowing you to compress the second-level map onto a single line without indentation. [link](https://yaml.org/spec/1.1/)

yaml

```
user_profile: { name: Alice, role: Admin }
```

Use code with caution.

Are you looking to use the **compact sequence notation** for readability, or are you trying to bypass deep indentation for highly nested configurations?

- [link](https://github.com/yaml/yaml-spec/issues/290)\
  GitHub\
  Not explicitly stated that content indentation level of 0 ... - GitHub\
  Jul 9, 2022 — The following YAML document is invalid because the content line of the block scalar does not have any indentation: | scalar I beli...
- [link](https://stackoverflow.com/questions/66188060/dashes-and-indentations-in-yaml)\
  Stack Overflow\
  dashes and indentations in yaml - Stack Overflow\
  Feb 13, 2021 — Show activity on this post. YAML documents consist of three types of nodes: Scalars, sequences and mappings. When using block synt...
- [link](https://yaml.org/spec/1.1/)\
  YAML.org\
  YAML Ain't Markup Language (YAML™) Version 1.1 - YAML.org\
  Jan 18, 2005 — 2.1. Collections. YAML's block collections use indentation for scope and begin each entry on its own line. Block sequences indicat...

Show all

## why indentation of list inside map can be omitted while map in map cant

The difference comes down to a core design choice in the YAML syntax: **a list item possesses a physical block indicator (`-`), while a map entry does not.** [link](https://yaml.org/spec/1.2.2/)

According to Section 8.2.1 of the [YAML Specification](https://yaml.org/spec/1.2.2/), the hyphen character plus its trailing space (`- `) are explicitly recognized by the parser as an indicator of structural depth. [link](https://stackoverflow.com/questions/17014460/yaml-indentation-for-array-in-hash)

### 1. Why a List inside a Map can omit indentation

When you place a list directly inside a map, the hyphen (`-`) acts as a structural anchor. The parser doesn't need extra spaces to know a new scope has started because **the hyphen itself acts as the visual and logical indentation marker.** [link](https://stackoverflow.com/questions/17014460/yaml-indentation-for-array-in-hash)

yaml

```
# The hyphen aligns with 'fruits', but the parser knows it's a child level
fruits:
- apple
- banana
```

Use code with caution.

- **How the parser sees it:** The key `fruits:` expects a value. It hits a line starting with `- `, which is an unambiguous sequence indicator. Because it is a completely different data type token, the parser knows the sequence belongs to the `fruits` key. [link](https://yaml.org/spec/1.2.2/)

### 2. Why a Map inside a Map CANNOT omit indentation

Map entries are written as `key: value` pairs. They do not possess a unique leading structural symbol like a hyphen. [link](https://yaml.org/spec/1.1/)

yaml

```
# INVALID: The parser cannot separate levels
user:
name: Alice
age: 30
```

Use code with caution.

- **How the parser sees it:** A colon (`:`) just denotes a regular key-value pair. Because `name` and `age` have zero indentation, they look identical to `user`. The parser evaluates them all as **sibling keys at the exact same root level**. It has no syntactic trigger to realize `name` should be a child of `user`. [link](https://www.geeksforgeeks.org/devops/fix-block-mapping-expected-error-yaml/)

### The Ultimate Comparison

| Context         | Example                  | Is it valid? | Why?                                                                            |
| --------------- | ------------------------ | ------------ | ------------------------------------------------------------------------------- |
| **List in Map** | `fruits:``- apple`       | **Yes**      | The `-` serves as a built-in structural boundary.                               |
| **Map in Map**  | `user:``name: Alice`     | **No**       | `name:` looks exactly like a top-level key.                                     |
| **Map in List** | `- name: Alice``age: 30` | **Yes**      | The `-` establishes the outer list item, allowing the map to inline next to it. |

Are you trying to optimize a file to **reduce its overall line indentations**, or are you currently debugging a **"block mapping expected"** parsing error?

- [link](https://stackoverflow.com/questions/17014460/yaml-indentation-for-array-in-hash)\
  Stack Overflow\
  YAML indentation for array in hash - Stack Overflow\
  Jun 9, 2013 — I think indentation is important in YAML. ... Why isn't there indentation for the array? I found this at http://www.yaml.org/YAML\_
- [link](https://www.geeksforgeeks.org/devops/fix-block-mapping-expected-error-yaml/)\
  GeeksforGeeks\
  How to Fix the "Block Mapping Expected" Error in YAML\
  Jul 23, 2025 — Common Causes and How to Fix Them \* Incorrect Indentation. YAML relies on indentation to represent the hierarchy of data. Incorrec...
- [link](https://yaml.org/spec/1.2.2/)\
  YAML.org\
  YAML Ain't Markup Language (YAML™) revision 1.2.2\
  Oct 1, 2021 — 2.1. ... YAML's block collections use indentation for scope and begin each entry on its own line. Block sequences indicate each en...

Show all

## what if you write nothing after a colon

If you write nothing after a colon, YAML interprets the value as **null**. This is explicitly defined in the YAML Specification as a **"Plain Null"** or an **Implicit Null**.

### How the Parser Sees It

When a parser reads a key with a blank value, it assigns it a `null` data type (which translates to `None` in Python, `null` in JavaScript/Java, or `nil` in Ruby).

yaml

```
# Both of these entries evaluate to exactly the same 'null' value
database_password:
api_key: null
```

Use code with caution.

***

### The Crucial Exception: Indentation Rules Change Everything

Writing nothing _directly_ after a colon behaves completely differently depending on what you put on the **very next line**.

#### 1. It acts as an Implicit Null (If followed by a sibling key)

If the next line stays at the same indentation level, the empty key remains `null`.

yaml

```
username: admin
password:          # Evaluates to null
email: admin@test.com
```

Use code with caution.

#### 2. It acts as a Parent Container (If followed by an indented child)

If you write nothing after the colon, but the next line is **indented further**, the colon acts as a container opener. The value of that key becomes the entire nested map or list underneath it.

yaml

```
# 'user_profile' has no value on its line, but its value is the map below it
user_profile:
  first_name: John
  last_name: Doe
```

Use code with caution.

#### 3. It acts as an Empty String (Only if explicitly quoted)

If you want the value to be an empty string `""` rather than `null`, you cannot leave it blank. You must use quotes.

yaml

```
middle_name: ""    # Evaluates to an empty string, NOT null
```

Use code with caution.

***

### Comparison of Parser Outputs

If you parsed these different blank scenarios into a programming language (like Python), here is how they would output:

yaml

```
case_1:
case_2:
  child: true
case_3: ""
```

Use code with caution.

python

```
# Python representation:
{
    "case_1": None,
    "case_2": {"child": True},
    "case_3": ""
}
```

Use code with caution.

Are you configuring an environment file where you want to leave an **optional setting blank**, or are you seeing an unexpected **empty value error** in your application?

## what if you linebreak indent and write some scalar after a colon

If you insert a line break, indent, and then write a single scalar (like a string, number, or boolean) after a colon, <mark>it is evaluated as a<span> </span><strong>Block Scalar</strong><span> </span>or an<span> </span><strong>Indented Block Value</strong></mark>.

The exact behavior depends entirely on whether you use a **Block Indicator** (`|` or `>`) or if you just write a **Plain Scalar**.

***

### Scenario 1: Writing a Plain Scalar (No Indicator)

If you simply line break, indent, and write a standard single-line scalar, YAML treats it as a **standard value assignment**. The line break is completely ignored by the parser.

yaml

```
# Input YAML
database_url:
  localhost:5432
```

Use code with caution.

- **How the parser reads it:** It acts exactly the same as `database_url: localhost:5432`.
- **The Indentation Rule:** You must indent it. If you do not indent it, the parser will treat `localhost:5432` as a syntax error or a new top-level map key.

***

### Scenario 2: Multi-line Plain Scalar (Implicit Folding)

If you continue writing on multiple lines, and every line is indented, YAML will automatically join the lines together with **spaces**.

yaml

```
# Input YAML
commit_message:
  This is a very long commit message
  that spans across multiple lines
  in the YAML file.
```

Use code with caution.

- **How it parses:** `"This is a very long commit message that spans across multiple lines in the YAML file."`
- **The Rule:** Newlines are converted to spaces. A blank line will be interpreted as a literal newline character (`\n`).

***

### Scenario 3: Using a Block Style Indicator (`|` or `>`)

To explicitly control how the line breaks and indentation are handled inside that scalar, you use a block indicator immediately after the colon.

#### 1. The Literal Block Indicator (`|`)

This preserves all newlines and indentation exactly as you typed them.

yaml

```
# Input YAML
code_snippet: |
  line_one = 1
  line_two = 2
```

Use code with caution.

- **How it parses:** `"line_one = 1\nline_two = 2\n"`

#### 2. The Folded Block Indicator (`>`)

This replaces single newlines with spaces but preserves blank lines. It is ideal for writing long paragraphs of text.

yaml

```
# Input YAML
paragraph: >
  This is line one.
  This is line two.
```

Use code with caution.

- **How it parses:** `"This is line one. This is line two.\n"`

***

### Common Trap: Unintended Nesting Errors

If your scalar contains a colon itself (like a URL or a MAC address), writing it on a new line without a block indicator can easily confuse the parser into thinking you are trying to create a nested map.

yaml

```
# ❌ PARSING ERROR: The parser thinks 'https' is a map key
website_link:
  https://example.com
```

Use code with caution.

yaml

```
#  VALID: Using quotes or an indicator fixes it
website_link:
  "https://example.com"
```

Use code with caution.

Are you trying to wrap a **long configuration string** (like an RSA key or SQL query) across multiple lines to make your file cleaner?

- [link](https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/data/yaml/strings.html)\
  Strings | Dev Cheatsheets\
  A scalar could by another type but only string is covered here.\
  \
  GitHub
- [link](https://blogs.perl.org/users/tinita/2018/03/strings-in-yaml---to-quote-or-not-to-quote.html)\
  Strings in YAML - To Quote or not to Quote | tinita \[blogs.perl.org]\
  Mar 3, 2018 — All continuation lines in a block scalar have to be indented at least as much as the first line.\
  \
  Perl Blogs
- [link](https://redocly.com/learn/yaml/blocks-and-flows)\
  Lesson 5: Block and flow scalars\
  May 28, 2025 — Lesson 5: Block and flow scalars Write a string across more than one line using literal blocks, folded blocks, or flows. This is a...\
  \
  Redocly

Show all

## what if you linebreak and write a plain scalar wo indentation after a colon

If you add a line break and write a plain scalar with **zero indentation** (pushing it all the way to the left margin), <mark>it breaks the structural relationship with the colon above it</mark>.

The parser will process this in one of two ways, depending on whether the parent key was already at the top level or nested.

***

### Case 1: The parent key is at the top level (Causes a Syntax/Parsing Error)

If the key before the colon has zero indentation, writing an unindented text block on the next line is invalid YAML syntax. The parser expects a value context but hits a completely unindented line, causing an immediate crash. [link](https://dev.to/kalkwst/a-gentle-introduction-to-the-yaml-format-bi6)

yaml

```
# ❌ PARSING ERROR (Block mapping expected / Bad indentation)
database_url:
localhost:5432
```

Use code with caution.

- **Why it fails:** The parser interprets `database_url:` as an implicit null because it has no value on its own line. Then, it evaluates `localhost:5432` as a brand new, independent top-level key-value pair. Because `database_url` was left null and has no content, many stricter parsers will instantly flag it as a formatting error. [link](https://blogs.perl.org/users/tinita/2018/03/strings-in-yaml---to-quote-or-not-to-quote.html)

***

### Case 2: The parent key is nested (Changes the Data Structure entirely)

If the parent key is already indented, writing a plain scalar without indentation on the next line means you have moved that text all the way back to the **root margin**.

Instead of being a value for the parent key, it becomes a **brand new top-level element**, completely detached from the structure above it.

yaml

```
# 📄 Valid YAML, but structurally broken
environment:
  database_url:
localhost:5432
```

Use code with caution.

#### How the Parser Sees Case 2

Because `localhost:5432` contains a colon, the parser reads it as a standalone key-value pair at the root level. Your intended `database_url` is left completely empty (`null`). [link](https://blogs.perl.org/users/tinita/2018/03/strings-in-yaml---to-quote-or-not-to-quote.html)

If you translated that YAML snippet into Python, the resulting dictionary structure shows how the child-parent relationship is completely destroyed:

python

```
# Python representation of the broken structure:
{
    "environment": {
        "database_url": None  # Left blank!
    },
    "localhost": 5432         # Separated completely!
}
```

Use code with caution.

### The Unbreakable Rule

For a multi-line plain scalar to successfully register as the text value of a key, **every single subsequent line must be indented further than the key itself.** The moment a line drops back to the left margin, it closes out the current block scope entirely. [link](https://dev.to/kalkwst/a-gentle-introduction-to-the-yaml-format-bi6)

Are you attempting to format a **long text block** and finding that your editor keeps auto-formatting it to the left margin, or are you running into a specific parser stack-trace?

- [link](https://stackoverflow.com/questions/3790454/how-do-i-break-a-string-in-yaml-over-multiple-lines)\
  Stack Overflow\
  How do I break a string in YAML over multiple lines?\
  Sep 24, 2010 — Use > if you want to break a string up for readability but for it to still be treated as a single-line string: interior line break...
- [link](https://blogs.perl.org/users/tinita/2018/03/strings-in-yaml---to-quote-or-not-to-quote.html)\
  Perl Blogs\
  Strings in YAML - To Quote or not to Quote | tinita \[blogs.perl.org]\
  Mar 3, 2018 — Because a plain scalar without quotes can conflict with YAML syntax elements, there are some exceptions where you can not use it. ...
- [link](https://dev.to/kalkwst/a-gentle-introduction-to-the-yaml-format-bi6)\
  DEV Community\
  A Gentle Introduction to the YAML format - DEV Community\
  Sep 9, 2023 — Basic Rules. First of all lets discuss some basic rules about working with YAML files: Whitespace and indentation matters and play...

## what if you add a linebreak after a colon before writing what you should write

Adding a line break after a colon <mark><strong>is perfectly valid and built into the YAML specification</strong></mark>, provided that whatever you write next follows the strict indentation rules.

The line break simply tells the parser: _"The value for this key starts on the next line."_

Here is exactly how the parser handles different data types when you insert that line break:

### 1. Writing a Nested Map (Dictionary)

This is the most common use of a line break. The child keys must be indented.

yaml

```
# Completely Valid
user_profile:
  name: Alice
  role: Admin
```

Use code with caution.

### 2. Writing a List (Sequence)

The line break is the standard way to begin a list of items.

yaml

```
# Completely Valid
shopping_list:
  - milk
  - bread
```

Use code with caution.

### 3. Writing a Plain Scalar (Single Line of Text/Number)

You can put a single text value on its own line after a line break, but **it must be indented**. The line break itself is discarded by the parser, and the text is read as a normal value.

yaml

```
# Completely Valid
database_host:
  localhost
```

Use code with caution.

- **Parser Result:** `{"database_host": "localhost"}`

### 4. Writing a Multi-line String (Block Scalars)

When using text indicators like `|` (literal) or `>` (folded), the indicator sits next to the colon, and the line break separates it from the actual content block.

yaml

```
# Completely Valid
motd: |
  Welcome to the server!
  Please be respectful.
```

Use code with caution.

***

### ⚠️ The Two Dangerous Traps

While the line break is valid, it becomes a **syntax error** if you forget to indent what comes next, or if you leave the file completely empty after the line break.

#### Trap A: The "Zero Indentation" Error

If you break the line and start writing text at the left margin, you break the relationship. The parser assumes the first key is empty (`null`) and treats the next line as a brand new root-level key.

yaml

```
# ❌ PARSING ERROR (or structural breakdown)
api_endpoint:
https://example.com
```

Use code with caution.

#### Trap B: The "Trailing Key" Error

If you insert a line break after a colon at the very end of a file and write absolutely nothing else, some strict parsers will throw an `unacceptable key` or `end of stream` error because they are expecting a value structure that never arrives.

Are you trying to make a **highly nested configuration file** look cleaner by breaking lines early, or are you designing a automation script that generates YAML layout dynamically?

- [link](https://softwareengineering.stackexchange.com/questions/341035/is-colon-in-python-blocks-technically-necesary)\
  syntax - Is colon in python blocks technically necesary?\
  Jan 27, 2017 — 4 Answers 4 Wait, you can have a statement after the colon on the same line? I was pretty sure it's not allowed. It is permitted, ...\
  \
  \
  Software Engineering Stack Exchange
- [link](https://community.atlassian.com/forums/Confluence-questions/How-do-I-add-a-newline-or-linebreak-in-a-Confiform-textarea-type/qaq-p/1743227)\
  How do I add a newline or linebreak in a Confiform textarea type field?\
  Jul 7, 2021 — The bolded part appears on one line, and then the value should appear in the next line.\
  \
  \
  Atlassian Community
- [link](https://www.reddit.com/r/css/comments/1qw4z5z/code%5Fto%5Fuse%5Fto%5Fwrap%5Ftext%5Fas%5Fyou%5Ftype%5Fwhitespace/)\
  Code to use to wrap text as you type - white-space: pre-line; : r/css\
  Feb 5, 2026 — The Simple Line Break ( ) The most common way to force text onto a new line without starting a new paragraph is the tag. It is a ...\
  \
  \
  Reddit

Show all

## what if you line break and write lorem ipsum wo indentation after a colon

If you add a line break and write "lorem ipsum" with **zero indentation** right after a colon, it will cause an immediate **syntax and parsing error**.

yaml

```
# ❌ CRASHES: Strictest Parsing Error
sample_text:
lorem ipsum
```

Use code with caution.

### Why the Parser Crashes

1. **The Colon Expects a Structure:** When the parser reads `sample_text:`, it registers a key. The line break tells it that the value is coming up next.
2. **Missing Indentation Token:** Because `lorem ipsum` has zero indentation, the parser treats it as a brand-new element at the root level of the document.
3. **No Key Identifier:** A plain text string like `lorem ipsum` at the root level is completely invalid because the root level requires either a map key (which must end with a colon) or a list marker (which must start with a hyphen). Because it has neither, the parser panics and throws an error like **"block mapping expected"**, **"bad indentation"**, or **"expected , but found "**.

### The Only Time It Won't Crash (But Will Still Be Broken)

If your string happens to contain a colon (e.g., `lorem: ipsum`), the parser won't crash, but it will **destroy your intended data structure**.

yaml

```
# 📄 Valid YAML syntax, but logically broken
sample_text:
lorem: ipsum
```

Use code with caution.

The parser will read this as two completely separate, independent top-level keys:

- `sample_text` is assigned a value of `null`.
- `lorem` becomes a new top-level key with the value `"ipsum"`.

### The Fix

To make `lorem ipsum` the actual value of your key on a new line, you must add at least **one space of indentation** (though two spaces is the industry standard).

yaml

```
#  CORRECT
sample_text:
  lorem ipsum
```

Use code with caution.

Are you working with a text editor that is accidentally stripping out your leading spaces when you hit enter, or are you pasting in a **large block of placeholder text**?

## yaml spec what if you line break and write lorem ipsum wo indentation after a colon

According to the [official YAML Specification](https://yaml.org/spec/1.2.2/), writing "lorem ipsum" on a new line with zero indentation directly after a colon <mark>results in a<span> </span><strong>fatal parsing crash</strong></mark>.

This scenario fails due to three specific mechanics defined in the spec:

### 1. The Block End Rule (Implicit Null)

When the parser reads `sample_text:`, it detects a map key. Because the line break occurs immediately and the next line features _lesser or equal_ indentation (dropping from 0 spaces to 0 spaces), the specification mandates that the value for `sample_text` is terminated immediately. [link](https://yaml.org/spec/1.2.2/)

- **The result:** `sample_text` is parsed as an **implicit null**. [link](https://developers.home-assistant.io/docs/documenting/yaml-style-guide/)

### 2. Forbidden Bare Scalars at Root

Once `sample_text` is closed out, the parser evaluates `lorem ipsum` as a completely new, top-level root element. [link](https://www.rudderstack.com/docs/profiles/dev-docs/yaml-refresher/)

- **The specification rule:** A document root consisting of a block mapping can _only_ accept valid map keys (which must end with a colon) or block sequence indicators (which must start with a hyphen).
- **The result:** A plain string (bare scalar) cannot sit nakedly at the root margin alongside a map key. [link](https://yaml.org/spec/1.2.2/)

### 3. The Specific Error Message

Because the parser encounters an unindented string where it explicitly expects either another map key or a document separator, the parser will fail. Depending on the engine you use, it will throw one of the following compliance errors: [link](https://github.com/eemeli/yaml/issues/176)

- `block mapping expected`
- `expected <block end>, but found <scalar>`
- `bad indentation`

### The Only Exception: The "Hidden Colon" Trap

The only way this structure will avoid a crash is if your text happens to contain a colon with a trailing space (e.g., `lorem: ipsum`). [link](https://hsf-training.github.io/hsf-training-cicd-github/04-understanding-yaml/index.html)

yaml

```
# Valid YAML, but structurally broken data
sample_text:
lorem: ipsum
```

Use code with caution.

If it contains a colon, the specification interprets it as a totally valid, independent top-level key. The hierarchy is still ruined, as the parser yields a flat dictionary: `{"sample_text": null, "lorem": "ipsum"}`. [link](https://www.rudderstack.com/docs/profiles/dev-docs/yaml-refresher/)

If you are generating these files dynamically and want to avoid structural drops like this, would you like to see how to structure your strings using **Flow Style (JSON-like braces)** or **Literal Blocks (`|`)** to safely pass multi-line text? [link](https://stackoverflow.com/questions/42124227/why-does-the-yaml-spec-mandate-a-space-after-the-colon)

- [link](https://github.com/eemeli/yaml/issues/176)\
  GitHub\
  Can't handle single-quoted multiline strings without indents #176\
  May 29, 2020 — Description. ... The following YAML throws a "Multi-line single-quoted string needs to be sufficiently indented" error. descriptio...
- [link](https://www.rudderstack.com/docs/profiles/dev-docs/yaml-refresher/)\
  RudderStack\
  YAML Best Practices | RudderStack Docs\
  A YAML file uses indentation, specific characters, and line breaks for representing various data structures. Sample YAML file. Bel...
- [link](https://stackoverflow.com/questions/11301650/how-to-escape-indicator-characters-colon-and-hyphen-in-yaml)\
  Stack Overflow\
  How to escape indicator characters (colon and hyphen) in YAML\
  Jul 2, 2012 — Basically, I used a list item with a pipe, like this: - | and then on a new line I indented the list item text so that the first c...

Show all

## yaml spec what if you write a colon at the end of the document

According to the [YAML Specification](https://yaml.org/spec/1.2.2/), writing a lone colon (`:`) at the very end of a document <mark>will result in either a<span> </span><strong>fatal parsing error</strong><span> </span>or an<span> </span><strong>empty key map entry</strong></mark>, depending on its indentation and whether it is prefixed by a string.

Here are the two exact scenarios defined by the specification:

### Scenario 1: A Naked Colon (`:`) at the End of the File

If you simply write a standalone colon on a new line with nothing else before it, the file will completely crash.

yaml

```
# ❌ FATAL ERROR: End of Stream / Mapping Expected
key1: value1
:
```

Use code with caution.

- **The Specification Mechanic:** A colon on its own is an **indicator token**. In a block mapping, a naked colon indicates an _explicit key-value pair_ where the key itself is missing. The parser expects a valid key to follow or precede it. Because the file ends immediately, the parser encounters an unexpected `End of Stream (EOS)` token while still trapped inside an incomplete structural block.
- **The Error:** Strictest parsers (like PyYAML or the Go `yaml` v3 package) will throw an error similar to `while scanning a simple key, could not find expected ':'` or `expected <block end>, but found <stream end>`.

***

### Scenario 2: A Key Followed by a Colon (`key:`) at the End of the File

If the colon is attached to a word (forming a map key) and sits at the very end of your document, the YAML specification treats it as **completely valid syntax**.

yaml

```
# 📄 VALID SYNTAX: Plain Null Mapping
key1: value1
last_key:
```

Use code with caution.

- **The Specification Mechanic:** According to the spec, a key followed by a colon and a newline opens a value context. If the file ends right there, the parser assigns an **Implicit Plain Null** to that key.

- **The Parser Output:** If you load this into a programming language, it parses into a clean, valid dictionary structure:\
  json

<!---->

```
{
  "key1": "value1",
  "last_key": null
}
```

Use code with caution.

### Structural Summary

| What is at the end? | Example     | YAML Spec Status | Result                                                |
| ------------------- | ----------- | ---------------- | ----------------------------------------------------- |
| **Naked Colon**     | `...``:`    | **Invalid**      | Syntax Error (`End of Stream` or `Missing Block End`) |
| **Key + Colon**     | `...``key:` | **Valid**        | Evaluates smoothly as an implicit `null` value        |

Are you writing a script that dynamically appends properties to a YAML file, or are you troubleshooting a **truncated file error** from an API payload?

- [link](https://redocly.com/blog/get-started-yaml)\
  YAML basics for Technical Writers\
  Jun 19, 2024 — This pattern of nested elements is what allows us to represent even quite complex data structures in YAML. You'll see a key, in th...\
  \
  \
  Redocly


