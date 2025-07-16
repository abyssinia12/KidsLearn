import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost", // or true to expose to network
    port: 5173,
    open: true, // auto-open in browser
    strictPort: true, // fail if 5173 is in use
  },
});
