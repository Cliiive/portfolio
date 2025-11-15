// Ensure Node-like globals are available in the browser for libs like gray-matter
import { Buffer } from "buffer";

if (!(globalThis as any).Buffer) {
  (globalThis as any).Buffer = Buffer;
}

// Some packages also look for global
if (!(globalThis as any).global) {
  (globalThis as any).global = globalThis;
}
