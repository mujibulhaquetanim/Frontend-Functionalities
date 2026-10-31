import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import assetOptimizer from "./plugins/asset-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Converts oversized images to WebP and reports file sizes after every build.
    // Set ASSET_BUDGET_STRICT=1 to fail the build when a file is over budget.
    assetOptimizer(),
  ],
});
