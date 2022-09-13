import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import mkcert from "vite-plugin-mkcert";

// optimizeDeps: {
//     include: ['vue3-grid-layout']
// },

// host: "localhost",
// hmr: {
//     host: "localhost",
//     protocol: "wss",
// },

export default defineConfig({
    server: {
        https: true,
        host: "localhost",
        hmr: {
            host: "localhost",
            // protocol: "wss",
        },
    },
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
                compilerOptions: {
                    isCustomElement: (tag) => {
                        return tag.startsWith("a-"); // (return true)
                    },
                },
            },
        }),
        mkcert(),
    ],
});
