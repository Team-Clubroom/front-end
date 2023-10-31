import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  return {
    server: {
      proxy: {
        "/api": {
          // TODO: load this url from .env
          target: isDev
            ? "http://127.0.0.1:5000"
            : "http://capstone-api-env-01.eba-cp4z6h2m.us-east-2.elasticbeanstalk.com",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [react()],
  };
});
