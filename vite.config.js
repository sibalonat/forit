import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
// optimizeDeps: {
//     include: ['vue3-grid-layout']
// },

// resolve: {
//     alias: {
//         "@": fileURLToPath(new URL("./resources/js", import.meta.url))
//     }
// }

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.js",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
