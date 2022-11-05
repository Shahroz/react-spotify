import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    open: false,
  },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
});
