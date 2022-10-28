import { defineConfig, splitVendorChunkPlugin } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import mkcert from "vite-plugin-mkcert";

// console.log(mkcert);
// import { splitVendorChunkPlugin } from 'vite'
// optimizeDeps: {
//     include: ['vue3-grid-layout']
// },
// compilerOptions: {
//     isCustomElement: (tag) => {
//         return tag.startsWith("a-"); // (return true)
//     },
// },

// host: "localhost",
// hmr: {
//     host: "localhost",
//     protocol: "wss",
// },

// hmr: {
//     host: "localhost",
//     // protocol: "wss",
// },

// outDir,

export default defineConfig({
    server: {
        https: true,
        host: "localhost",
        hmr: {
            host: "localhost",
        },
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            output: {
                entryFileNames: "[name].js",
                chunkFileNames: "[name].js",
                assetFileNames: "[name].[ext]",
            },
        },
    },
    // resolve: {
    //     alias: {
    //       'vue-easy-lightbox': 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js'
    //     }
    // },
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
        mkcert(),
        splitVendorChunkPlugin(),
    ],
});
