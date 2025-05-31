import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: true, // Allows access from other devices on the network
    strictPort: true, // Ensures the port is not used by another process
  },
  plugins: [react(), tailwindcss()],
});
