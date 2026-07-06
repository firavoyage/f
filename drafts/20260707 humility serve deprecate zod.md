zod examples

**[Zod](https://zod.dev/) is a TypeScript-first schema declaration and validation library** that provides strict runtime safety for external data like forms and API responses. It allows you to build a single schema blueprint, enforce data constraints, and automatically infer matching TypeScript types without code duplication. [link](https://www.youtube.com/watch?v=9UVPk0Ulm6U)

Here is a curated collection of foundational and advanced Zod patterns.

***

### 1. Basic Primitives & Type Inference

Define basic structures and extract standard TypeScript types using `z.infer`. [link](https://www.youtube.com/watch?v=9UVPk0Ulm6U)

typescript

```
import { z } from "zod";

// Define the blueprint schema
const UserSchema = z.object({
  id: z.string().uuid(),                  // Enforces UUID format
  username: z.string().min(3).max(20),     // Length limits
  email: z.string().email(),              // Validates email format
  age: z.number().int().positive(),       // Whole, positive number
  isActive: z.boolean().default(true),    // Falls back to true if omitted
  joinedAt: z.date().optional(),          // Allows undefined
});

// Automatically extract the TypeScript type
type User = z.infer<typeof UserSchema>;
/*
type User = {
  id: string;
  username: string;
  email: string;
  age: number;
  isActive: boolean;
  joinedAt?: Date | undefined;
}
*/
```

Use code with caution.

***

### 2. Validation Execution (`parse` vs `safeParse`)

Zod offers two core methods to evaluate your data depending on how you prefer to catch errors. [link](https://medium.com/@cibilex/zod-more-than-just-validation-part-1-2-7d4cba13851c)

### Option A: Strict Parsing (Throws Exceptions)

Throws a detailed `ZodError` instantly if validation fails. Ideal for server controllers and data pipelines. [link](https://zod.dev/basics)

typescript

```
try {
  const result = UserSchema.parse({ username: "bo", age: -5 });
} catch (error) {
  if (error instanceof z.ZodError) {
    console.log(error.format()); // Generates readable error mappings
  }
}
```

Use code with caution.

### Option B: Safe Parsing (Returns Status Object)

Returns a structured object with a boolean status flag. Ideal for frontend form elements and conditional flows. [link](https://www.youtube.com/watch?v=9UVPk0Ulm6U)

typescript

```
const result = UserSchema.safeParse(someUnknownData);

if (result.success) {
  console.log(result.data); // Safely typed payload
} else {
  console.log(result.error.issues); // Array containing failure reasons
}
```

Use code with caution.

***

### 3. Data Type Coercion

Forces input values into specific native types before parsing. Excellent for processing raw HTTP query parameters or FormData payloads. [link](https://didoesdigital.com/blog/zod-learn-by-example/)

typescript

```
const SearchParamsSchema = z.object({
  page: z.coerce.number().int().default(1),     // Converts "5" -> 5
  isJson: z.coerce.boolean(),                   // Converts "true" -> true
  timestamp: z.coerce.date(),                   // Converts ISO strings to Date object
});
```

Use code with caution.

***

### 4. Advanced Schemas: Enums, Unions & Intersections

Combine simpler validation primitives to build robust data models. [link](https://blog.logrocket.com/schema-validation-typescript-zod/)

### Literals and Enums

typescript

```
const RoleEnum = z.enum(["admin", "editor", "viewer"]); // Native string options
const StatusLiteral = z.literal("pending");            // Single allowed string value
```

Use code with caution.

### Discriminated Unions

Optimizes parsing performance by checking a single "discriminator" key first. Ideal for handling clean, type-safe API states. [link](https://dev.to/shaharke/zod-zero-to-hero-chapter-4-513c)

typescript

```
const NetworkResponseSchema = z.discriminatedUnion("status", [
  z.object({ status: z.literal("success"), data: z.array(z.string()) }),
  z.object({ status: z.literal("error"), message: z.string() }),
]);
```

Use code with caution.

### Composition (Extending and Merging)

Reuse logic from other schemas to minimize duplication. [link](https://www.contentful.com/blog/react-hook-form-validation-zod/)

typescript

```
const BaseProfile = z.object({ name: z.string() });
const ExtendedProfile = BaseProfile.extend({ age: z.number() }); // Appends items
```

Use code with caution.

***

### 5. Custom Business Logic (`refine` and `superRefine`)

Inject complex validation conditions that standard methods cannot catch. [link](https://www.contentful.com/blog/react-hook-form-validation-zod/)

### Password Confirmation Matching

typescript

```
const RegisterSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], // Highlights the specific field in error outputs
});
```

Use code with caution.

### Contextual Conditional Evaluation

Use `superRefine` when checking an active field depends on the state of a companion field.

typescript

```
const CheckoutSchema = z.object({
  paymentMethod: z.enum(["card", "paypal"]),
  cardNumber: z.string().optional(),
}).superRefine((val, ctx) => {
  if (val.paymentMethod === "card" && !val.cardNumber) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Card number is required for card payments",
      path: ["cardNumber"],
    });
  }
});
```

Use code with caution.

***

### 6. Value Modification (`transform`)

Mutate incoming data fields while verifying their structure. [link](https://www.contentful.com/blog/react-hook-form-validation-zod/)

typescript

```
const SearchQuerySchema = z.string()
  .trim()
  .toLowerCase()
  .transform((val) => val.split(" ")); // Breaks string into array

// Input: "  TypeScript JavaScript  " -> Output: ["typescript", "javascript"]
const tags = SearchQuerySchema.parse("  TypeScript JavaScript  ");
```

Use code with caution.

***

### 7. Form Validation Integration (React Hook Form)

Zod acts as the validation hub for major frontend interface builders via official framework connectors. [link](https://www.youtube.com/watch?v=U9PYyMhDc%5Fk\&t=1029)

typescript

```
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // Connects schema to state

const form = useForm({
  resolver: zodResolver(UserSchema), // Triggers Zod checking automatically
});
```

Use code with caution.

To continue tailoring these implementations, let me know:

- What **specific context** are you validating? (e.g., Express API requests, React forms, database interactions)

- Do you need assistance with **complex data nested structures**?

- Are you looking for help **customizing localization error strings**?

- [link](https://zod.dev/basics)\
  Basic usage - Zod\
  Copy markdown. This page will walk you through the basics of creating schemas, parsing data, and using inferred types. For complet...\
  Zod

- [link](https://www.youtube.com/watch?v=9UVPk0Ulm6U)\
  Zod Makes TypeScript Even Better\
  Nov 26, 2022 — zod is one of the newest. and hottest validation libraries out there but that's for good reason because it's absolutely amazing. a...\
  7:14\
  YouTube·Web Dev Simplified

- [link](https://didoesdigital.com/blog/zod-learn-by-example/)\
  Learn Zod by Example - DiDoesDigital\
  Mar 1, 2025 — A collection of examples. This schema accepts only strings and will transform the string “no” into null and otherwise return the o...\
  DiDoesDigital

Show all

## usage examples

### 1. Validating API Requests (Express / Hono)

Secure your backend endpoints by parsing incoming request payloads before executing controller logic.

typescript

```
import { z } from "zod";
import { Request, Response } from "express";

const CreateProductSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    price: z.number().positive("Price must be greater than 0"),
    tags: z.array(z.string()).nonempty("Provide at least one tag"),
  }),
});

export const handleCreateProduct = async (req: Request, res: Response) => {
  // safeParse prevents app crashes from unexpected client mutations
  const parsed = CreateProductSchema.safeParse({ body: req.body });

  if (!parsed.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: parsed.error.flatten().fieldErrors
    });
  }

  // parsed.data is fully typed and runtime-secured
  const { title, price, tags } = parsed.data.body;
  // Proceed with database insertion...
};
```

Use code with caution.

***

### 2. Form State Management (React Hook Form)

Connect data validations directly to UI form components to automate visual error state triggers.

typescript

```
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FeedbackSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, "Comment must be at least 10 characters long"),
});

type FeedbackInput = z.infer<typeof FeedbackSchema>;

export function FeedbackForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FeedbackInput>({
    resolver: zodResolver(FeedbackSchema),
  });

  const onSubmit = (data: FeedbackInput) => {
    console.log("Valid Form Payload:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="number" {...register("rating", { valueAsNumber: true })} />
      {errors.rating && <p>{errors.rating.message}</p>}

      <textarea {...register("comment")} />
      {errors.comment && <p>{errors.comment.message}</p>}

      <button type="submit">Submit Feedback</button>
    </form>
  );
}
```

Use code with caution.

***

### 3. Application Environment Configuration (`.env`)

Crash your application immediately at startup if critical system variables are missing or corrupted.

typescript

```
import { z } from "zod";

const EnvSchema = z.object({
  DATABASE_URL: z.string().url("Invalid database link blueprint"),
  PORT: z.coerce.number().int().default(3000),
  NODE_ENV: z.enum(["development", "production", "test"]),
  API_SECRET: z.string().min(16, "Secret key must be highly secure"),
});

// Parsed parameters automatically fall back to schema-defined defaults
const processEnvResult = EnvSchema.safeParse(process.env);

if (!processEnvResult.success) {
  console.error("❌ Invalid system environment configurations:", processEnvResult.error.format());
  process.exit(1);
}

// Global type-safe export reference for your codebase
export const ENV = processEnvResult.data;
```

Use code with caution.

***

### 4. Direct Database Row Mapping (Prisma / JSON fields)

Assert rigorous validation structures on complex raw JSON objects retrieved from databases.

typescript

```
import { z } from "zod";

const MetadataSchema = z.object({
  preferences: z.object({
    theme: z.enum(["light", "dark"]),
    notifications: z.boolean(),
  }),
  loginAttempts: z.array(z.string().datetime()),
});

async function getUserMetadata(userId: string) {
  const rawUser = await prisma.user.findUnique({ where: { id: userId } });

  // Cast and assert shape structures safely on unstructured JSON blobs
  const metadata = MetadataSchema.parse(rawUser?.metadata);

  // Typing validation allows explicit direct auto-complete paths
  if (metadata.preferences.theme === "dark") {
    // Implement operation logic...
  }
}
```

Use code with caution.

***

### 5. Consuming Third-Party API Payloads

Defend your frontend systems from broken rendering layout bugs caused by unexpected external API mutations.

typescript

```
import { z } from "zod";

const ExternalUserSchema = z.object({
  id: z.number(),
  name: z.string(),
  website: z.string().url().catch("https://fallback-url.com"), // Fallback if data is missing/malformed
});

const ExternalUserListSchema = z.array(ExternalUserSchema);

export async function fetchRemoteUsers() {
  const response = await fetch("https://typicode.com");
  const rawData = await response.json();

  // Validates structure array entries and strips unmapped parameter anomalies
  return ExternalUserListSchema.parse(rawData);
}
```

Use code with caution.

If you are building a specific pipeline, let me know:

- What **framework ecosystem** are you targeting? (Next.js, NestJS, Remix, etc.)

- Do you want to learn how to **transform properties** while validating?

- Are you handling **asynchronous validation** (e.g., checking database username uniqueness)?