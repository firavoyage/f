grpc in swe example

1:30 AM

In software engineering (SWE), **gRPC** (Google Remote Procedure Call) is a modern open-source framework used to enable high-performance communication between distributed services. It allows a client application to directly call methods on a server application as if it were a local object, making it a cornerstone for building efficient microservices. \[[1](https://grpc.io/docs/what-is-grpc/introduction/), [2](https://www.ibm.com/think/topics/grpc), [3](https://www.wantedly.com/companies/wantedly/post%5Farticles/219429), [4](https://aws.amazon.com/compare/the-difference-between-grpc-and-rest/), [5](https://lnash94.medium.com/grpc-with-low-code-a-modern-approach-to-scalable-apis-bd4bcf3684f9)]

How gRPC Works: A Simple Example

The core of gRPC is the **Protocol Buffer (.proto)** file. Instead of manually writing JSON parsers, you define your service and data structure once, and gRPC generates the client and server code for you. \[[1](https://grpc.io/docs/languages/node/basics/), [2](https://www.cncf.io/blog/2021/08/04/grpc-in-action-example-using-java-microservices/), [3](https://grpc.io/docs/what-is-grpc/introduction/)]

1\. Define the Interface (.proto) \[[1](https://www.gocodeo.com/post/what-is-grpc-high-performance-communication-for-microservices)]

Imagine a simple service that adds two numbers. You define this in a `sum.proto` file: \[[1](https://medium.com/@ma9458596/rest-who-grpc-just-stole-the-spotlight-8776b4faebd7)]

protobuf

```
syntax = "proto3";

// The request message containing two numbers
message SumRequest {
  int32 num1 = 1;
  int32 num2 = 2;
}

// The response message containing the result
message SumResponse {
  int32 result = 1;
}

// The service definition
service SumService {
  rpc Add (SumRequest) returns (SumResponse);
}
```

Use code with caution.

2\. Generate Code

You use the [Protocol Buffer compiler (protoc)](https://grpc.io/docs/what-is-grpc/introduction/) to generate "stubs" (client side) and "skeletons" (server side) in your language of choice, such as Java, Python, or Go. \[[1](https://grpc.io/docs/what-is-grpc/introduction/), [2](https://medium.com/@ma9458596/rest-who-grpc-just-stole-the-spotlight-8776b4faebd7)]

3\. Implement and Call

- **The Server:** You implement the `Add` logic (e.g., `return num1 + num2`) and start a gRPC server on a specific port.
- **The Client:** You use the generated stub to call the `Add` method. From the client's perspective, it looks like a standard function call: `response = stub.Add(request)`. \[[1](https://medium.com/@alexshamrai/grpc-testing-intro-grpc-basics-7e25c3a7987a), [2](https://daily.dev/blog/build-a-grpc-service-in-nodejs), [3](https://medium.com/@mishra.sunny/building-a-basic-grpc-service-using-python-part-2-add-tests-7b5d7ebac6b5), [4](https://medium.com/@ma9458596/rest-who-grpc-just-stole-the-spotlight-8776b4faebd7)]

Key Benefits for Software Engineers

- **Performance:** Uses HTTP/2 for transport, which is faster and more efficient than HTTP/1.1 used by standard REST.
- **Strong Typing:** Because contracts are defined in `.proto` files, errors are caught at compile time rather than runtime.
- **Polyglot Support:** A server written in Go can easily communicate with a client written in Java or C++ because the communication protocol is standardized.
- **Streaming:** Supports four types of communication: Unary (1 request, 1 response), Server Streaming, Client Streaming, and Bidirectional Streaming. \[[1](https://blog.postman.com/what-is-grpc/), [2](https://grpc.io/docs/what-is-grpc/core-concepts/), [3](https://semaphore.io/blog/grpc), [4](https://grpc.io/docs/languages/node/basics/), [5](https://www.ibm.com/think/topics/grpc)]

Real-World Usage

Many big tech companies use gRPC for internal service-to-service communication. For instance, Netflix utilizes gRPC to handle its massive internal traffic more efficiently than traditional REST APIs. \[[1](https://www.youtube.com/watch?v=oOv9QuzcUDQ#:~:text=Why%20Big%20Tech%20Companies%20Use%20gRPC?%20%7C,deeply%20understand%20%2A%2AgRPC%2A%2A%20%E2%80%94%20one%20of%20the), [2](https://www.linkedin.com/posts/bytemonk%5Fnetflix-streams-15-of-global-internet-traffic-activity-7405450955946659840--rZp), [3](https://cloud.google.com/blog/products/api-management/bridge-the-gap-between-grpc-and-rest-http-apis?gl=us), [4](https://medium.com/@mgaurang123/grpc-the-modern-way-your-services-should-be-talking-to-each-other-4be4475dc447), [5](https://sharmaricha7724.medium.com/getting-started-with-grpc-d9fe217b40ef)]

Are you looking for a **step-by-step implementation** in a specific programming language like **Python, Java, or Go**?

- [link](https://grpc.io/docs/languages/node/basics/)\
  Basics tutorial | Node - gRPC\
  Why use gRPC? Our example is a simple route mapping application that lets clients get information about features on their route, c...\
  gRPC
- [link](https://grpc.io/docs/what-is-grpc/introduction/)\
  Introduction to gRPC\
  In addition, the latest Google APIs will have gRPC versions of their interfaces, letting you easily build Google functionality int...\
  gRPC
- [link](https://grpc.io/docs/what-is-grpc/core-concepts/)\
  Core concepts, architecture and lifecycle - gRPC\
  gRPC lets you define four kinds of service method: \* Unary RPCs where the client sends a single request to the server and gets a s...\
  gRPC

Show all

alternatives. like trpc?

3:27 AM

While gRPC is excellent for high-performance microservices, there are several alternatives that might better suit your project depending on your tech stack and performance needs.

1\. tRPC (TypeScript RPC) \[[1](https://www.youtube.com/watch?v=jd5JwXoDXFo), [2](https://www.wallarm.com/what/trpc-protocol)]

[tRPC](https://trpc.io/) is a popular alternative specifically for **TypeScript-only** projects. Unlike gRPC, it doesn't require a separate `.proto` file or code generation. \[[1](https://medium.com/@princekumar161999/building-scalable-apis-with-grpc-and-trpc-the-next-step-beyond-rest-94830faac313), [2](https://www.wallarm.com/what/trpc-protocol), [3](https://medium.com/@yadavshubham4062/grpc-trpc-http-comparison-014eae9f3d89)]

- **Best For:** Full-stack TypeScript apps (e.g., Next.js, React, Node.js).
- **Key Advantage:** It uses "inference" to share types between your backend and frontend automatically. If you change a function on the server, your frontend will immediately show a TypeScript error until you fix it.
- **Limitation:** It only works with TypeScript; you can't use it to communicate between a Java backend and a Python client. \[[1](https://medium.com/@ramazankurnaz74/trpc-vs-grpc-choosing-the-right-api-protocol-for-your-next-project-11581ea8459c), [2](https://www.youtube.com/watch?v=7undQz4u1t0), [3](https://medium.com/@princekumar161999/building-scalable-apis-with-grpc-and-trpc-the-next-step-beyond-rest-94830faac313), [4](https://www.wallarm.com/what/trpc-protocol)]

2\. Connect

[Connect](https://connectrpc.com/) (by Buf) is a modern, lightweight alternative that is fully compatible with gRPC but easier to use in browsers. \[[1](https://www.reddit.com/r/golang/comments/1c1hwbf/is%5Fgrpc%5Fa%5Fgood%5Falternative%5Ffor%5Frest%5Fwhen%5Fbuilding/)]

- **Best For:** Web applications that want gRPC-like performance without needing complex proxies.
- **Key Advantage:** It allows services to speak gRPC, gRPC-Web, and its own Connect protocol (which is just plain JSON over HTTP) simultaneously. \[[1](https://www.reddit.com/r/golang/comments/1c1hwbf/is%5Fgrpc%5Fa%5Fgood%5Falternative%5Ffor%5Frest%5Fwhen%5Fbuilding/)]

3\. Apache Thrift

Originally developed at Facebook, [Apache Thrift](https://thrift.apache.org/) is the closest direct competitor to gRPC for multi-language systems. \[[1](https://pflb.us/blog/grpc-alternatives/)]

- **Best For:** Large-scale, internal microservices using many different languages (C++, Java, Python, PHP, etc.).
- **Key Advantage:** It supports more transport protocols (like TCP or HTTP) and more data formats than gRPC, giving you more flexibility. \[[1](https://www.g2.com/products/grpc/competitors/alternatives), [2](https://pflb.us/blog/grpc-alternatives/)]

4\. GraphQL

While not strictly "RPC," [GraphQL](https://graphql.org/) is often used as an alternative for client-to-server communication. \[[1](https://pflb.us/blog/grpc-alternatives/)]

- **Best For:** Complex frontends that need to fetch specific data from multiple sources in a single request.
- **Key Advantage:** Clients can request exactly the fields they need, preventing "over-fetching" (getting too much data). \[[1](https://kabisa.nl/tech/grpc-vs-its-alternatives-rest-graphql-etc/), [2](https://www.youtube.com/watch?v=lZ3OlYgQ5mM\&t=34), [3](https://pflb.us/blog/grpc-alternatives/)]

Summary Comparison Table

| Feature \[[1](https://dev.to/pockit%5Ftools/rest-vs-graphql-vs-trpc-vs-grpc-in-2026-the-definitive-guide-to-choosing-your-api-layer-1j8m), [2](https://pflb.us/blog/grpc-alternatives/), [3](https://medium.com/@yadavshubham4062/grpc-trpc-http-comparison-014eae9f3d89), [5](https://medium.com/@princekumar161999/building-scalable-apis-with-grpc-and-trpc-the-next-step-beyond-rest-94830faac313)] | gRPC               | tRPC                | Connect           | GraphQL             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------- | ----------------- | ------------------- |
| **Language Support**                                                                                                                                                                                                                                                                                                                                                                                    | Polyglot (Any)     | **TypeScript Only** | Polyglot (Any)    | Polyglot (Any)      |
| **Contract Type**                                                                                                                                                                                                                                                                                                                                                                                       | .proto file        | inferred TS types   | .proto file       | Schema (SDL)        |
| **Protocol**                                                                                                                                                                                                                                                                                                                                                                                            | HTTP/2 (Binary)    | HTTP/1.1 (JSON)     | HTTP/1.1 or 2     | HTTP (JSON)         |
| **Best Use Case**                                                                                                                                                                                                                                                                                                                                                                                       | Fast Microservices | Full-stack TS Web   | Browser-to-Server | Data-rich Frontends |

\[Sources: [PFLB Guide](https://pflb.us/blog/grpc-alternatives/), [AWS Comparison](https://aws.amazon.com/compare/the-difference-between-grpc-and-rest/), [Medium: gRPC vs tRPC](https://medium.com/@ramazankurnaz74/trpc-vs-grpc-choosing-the-right-api-protocol-for-your-next-project-11581ea8459c)] \[[1](https://medium.com/@yadavshubham4062/grpc-trpc-http-comparison-014eae9f3d89)]

Are you building a **monorepo with TypeScript** or a **distributed system** with multiple different languages?

- [link](https://www.reddit.com/r/golang/comments/1c1hwbf/is%5Fgrpc%5Fa%5Fgood%5Falternative%5Ffor%5Frest%5Fwhen%5Fbuilding/)\
  Is gRPC a good alternative for Rest when building APIs with Go : r/golang - Reddit\
  Grpc web is the most common one, you either need a proxy in between your browser and your server that does the translation, or add...\
  Reddit
- [link](https://medium.com/@ramazankurnaz74/trpc-vs-grpc-choosing-the-right-api-protocol-for-your-next-project-11581ea8459c)\
  tRPC vs gRPC: Choosing the Right API Protocol for Your Next Project - Medium\
  What is gRPC? gRPC (Google Remote Procedure Call) is a high-performance, open-source RPC framework created by Google. Unlike tRPC,\
  Medium
- [link](https://medium.com/@princekumar161999/building-scalable-apis-with-grpc-and-trpc-the-next-step-beyond-rest-94830faac313)\
  Building Scalable APIs with gRPC and tRPC: The Next Step Beyond ...\
  In this setup, both backend and frontend can be generated from the same contract — no manual synchronization or misaligned data st...\
  Medium

Show all

trpc example

In **tRPC**, the "magic" is that your backend types are automatically shared with your frontend without any manual code generation or `.proto` files.

Here is a simplified example of how it works in a typical **Node.js (Server) + React (Client)** setup.

1\. The Server (Defining the Router)

On the backend, you define a "router" which is essentially a collection of functions (procedures).

typescript

```
// server.ts
import { initTRPC } from '@trpc/server';
import { z } from 'zod'; // Used for schema validation

const t = initTRPC.create();

export const appRouter = t.router({
  // A query to get a user by ID
  getUser: t.procedure
    .input(z.string()) // Validates that the input is a string
    .query(async (opts) => {
      const { input } = opts;
      return { id: input, name: 'Alex', role: 'Engineer' };
    }),
});

// Export the type of the router for the frontend to use
export type AppRouter = typeof appRouter;
```

Use code with caution.

2\. The Client (Using the Types)

On the frontend, you import only the **Type** (not the code) of the router. This gives you full autocomplete and error checking.

typescript

```
// client.tsx
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './server'; // Import ONLY the type

const trpc = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: 'http://localhost:3000' })],
});

async function main() {
  // 1. Full autocomplete here for 'getUser'
  // 2. TypeScript will error if you pass a number instead of a string
  const user = await trpc.getUser.query('id_123');

  console.log(user.name); // 'Alex' (fully typed!)
}
```

Use code with caution.

Why this is better than REST for TypeScript:

- **Zero-effort Sync:** If you rename `name` to `fullName` in the backend `server.ts`, your `client.tsx` will immediately show a red squiggly line (compile error).
- **No Runtime Overhead:** Since it’s just TypeScript types, there’s no extra binary layer or heavy boilerplate like gRPC.
- **Auto-completion:** Your IDE knows exactly what your API returns without you having to define separate interfaces on the frontend.

Comparison Note

While **gRPC** uses a `.proto` file as the "Source of Truth" for any language, **tRPC** uses your **TypeScript code itself** as the "Source of Truth" for your frontend.

Would you like to see how to set this up within a specific framework like **Next.js** or a **standard Express** server?