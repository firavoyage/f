type Route = { path: string };

// 1. Create a raw object with an extra property
const rawInput = { path: "/", extraProp: "hello", typoKey: 123 };

// 2. Assign it to a variable typed as Route
const myRoute: Route = rawInput; // ✅ NO ERROR!
