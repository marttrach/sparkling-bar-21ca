import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 如果你是部署到自訂網域（如 book.junchan.blog），請用 base: "/"
export default defineConfig({
  base: "/", // <--- 加上這一行是關鍵
  plugins: [react()],
});