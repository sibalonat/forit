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

// defineAsyncComponent

// for (const [key, component] of Object.entries(ARJS)) {
//     console.log(key);
//     VueApp.component(key, component);
// }
// VueApp.config.ignoredElements = [/^a-/];


// import AFrame from "aframe";
// import AFrameLookAtTheComponent from "aframe-look-at-component";
// import { AScene, AImage, ACamera } from "aframe";

// console.log(AScene);
// import ARJS from "@ar-js-org/ar.js/aframe/build/aframe-ar-nft";
// import { AScene, AImage, ACamera } from "@ar-js-org/ar.js";
// import AR from "@ar-js-org/ar.js";

//vuexr
// VueApp.use(AFrame);
// VueApp.use(AFrame);
// VueApp.use(AFrameLookAtTheComponent);
// VueApp.use(ARJS);
// VueApp.component("a-scene", AScene);
// VueApp.component("a-image", AImage);
// VueApp.component("a-camera", ACamera);

// import Datepicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css'

// import drag from "v-drag"

import VueSignaturePad from "vue-signature-pad";

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

        VueApp.use(VueSignaturePad);

        VueApp.mount(el);

        return VueApp;
    },
});

// app.config.globalProperties.$route = route

InertiaProgress.init({ color: "#4B5563" });
