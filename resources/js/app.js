import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';


// import Datepicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css'

// import drag from "v-drag"

import VueSignaturePad from 'vue-signature-pad';

// import GridLayout from 'v3-grid-layout'
// import 'v3-grid-layout/dist/style.css'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {

        const VueApp = createApp({ render: () => h(app, props) })
        VueApp.config.globalProperties.$route = route
        VueApp.use(plugin)
        VueApp.use(ZiggyVue, Ziggy)
        // VueApp.use(drag)
        VueApp.use(VueSignaturePad)

        VueApp.mount(el)
        return VueApp
    },
});

// app.config.globalProperties.$route = route

InertiaProgress.init({ color: '#4B5563' });
