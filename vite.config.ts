import path from "path"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite" // Using v4 plugin
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
