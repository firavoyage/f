// Target overloaded function
function process(x: string): string;
function process(x: number): number;
function process(x: any): any { return x; }

// Wrapped function preserves both signatures
const safeProcess = handle(process);

const strResult = safeProcess("test"); // Typed as result<string>
const numResult = safeProcess(123);    // Typed as result<number>
