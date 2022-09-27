import "./bootstrap";
import "../css/app.css";

import { createApp, defineAsyncComponent, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

import VueGridLayout from "vue-grid-layout";
// --host
import { GridItem, GridLayout } from "vue-grid-layout";

// import { TroisJSVuePlugin } from 'troisjs';
// import { VideoTexture } from "troisjs";
// console.log(VideoTexture);
// import { TroisJSVuePlugin, VideoTexture } from 'troisjs';
// import { TroisJSVuePlugin } from 'troisjs';
// import { VideoTexture } from "troisjs";
// import { VideoTexture } from "troisjs";
// import {  } from "../../node_modules/troisjs";
// const VideoTexture = defineAsyncComponent(() => import("../../node_modules/troisjs"));
// const TroisJSVuePlugin = defineAsyncComponent(() => import("troisjs"));
// console.log(TroisJSVuePlugin[install]);
// console.log(TroisJSVuePlugin.export);
// console.log(TroisJSVuePlugin, Texture, VideoTexture);
// console.log(TroisJSVuePlugin);
// import { VideoTexture } from 'troisjs/src/materials';

import VueSignaturePad from "vue-signature-pad";
// import install from "vue-signature-pad";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, app, props, plugin }) {
        const VueApp = createApp({ render: () => h(app, props) });
        VueApp.config.globalProperties.$route = route;
        VueApp.use(plugin);
        VueApp.use(ZiggyVue, Ziggy);

        //vue grid layout
        VueApp.use(VueGridLayout);
        VueApp.component("grid-layout", GridLayout);
        VueApp.component("grid-item", GridItem);

        // VueApp.use(AR);

        VueApp.use(VueSignaturePad);
        // VueApp.use(TroisJSVuePlugin);
        // VueApp.use(VideoTexture);
        // VueApp.component("VideoTexture", VideoTexture);
        // console.log(VueApp);

        VueApp.mount(el);

        return VueApp;
    },
});

// app.config.globalProperties.$route = route

InertiaProgress.init({ color: "#4B5563" });
