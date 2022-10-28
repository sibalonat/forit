import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

//pinia
import { createPinia } from "pinia";
const pinia = createPinia();

// grid layout
import VueGridLayout from "vue-grid-layout";
import { GridItem, GridLayout } from "vue-grid-layout";

// vue signature
import VueSignaturePad from "vue-signature-pad";

// modal
import { modal } from "momentum-modal";
// console.log(modal);
// console.log(ModalPluginOptions);

// images
// import VImagesPreview from "v3-img-preview";
// import VueEasyLightbox from 'vue-easy-lightbox'
// import Lightbox from 'vue-lightbox-lite'
// import 'vue-lightbox-lite/dist/index.css'


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
        VueApp.use(modal, {
            resolve: (name) =>
                resolvePageComponent(
                    name,
                    import.meta.glob("./Pages/**/*.vue")
                ),
        });

        //vue grid layout
        VueApp.use(VueGridLayout);
        VueApp.component("grid-layout", GridLayout);
        VueApp.component("grid-item", GridItem);

        // VueApp.use(AR);

        VueApp.use(VueSignaturePad);
        VueApp.use(pinia);
        // VueApp.use(Lightbox);
        // VueApp.use(VImagesPreview, {
        //     keyboard: false,
        //     escClose: false,
        //     showToolbar: false,
        //     showArrowBtn: false,
        // });

        VueApp.mount(el);

        return VueApp;
    },
});

// app.config.globalProperties.$route = route

InertiaProgress.init({ color: "#4B5563" });
