import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuild: {
      loader: { ".js": "jsx" },
    },
  },
  resolve: {
    alias: {
      // Node.js polyfills needed by web3.js
      stream: "stream-browserify",
      assert: "assert",
      http: "stream-http",
      https: "https-browserify",
      os: "os-browserify/browser",
      url: "url",
      crypto: "crypto-browserify",
    },
  },
  define: {
    // web3.js expects these globals
    "process.env": {},
    global: "globalThis",
  },
  build: {
    outDir: "build",
    sourcemap: false,
  },
  server: {
    port: 3000,
  },
});
