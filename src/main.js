import { createApp } from 'vue'
import './style.css'
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import {Button, Menu, SelectButton} from "primevue";


createApp(App)
    .use("i18n")
    .use(PrimeVue, {ripple: true, theme: {preset: Material}})
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component("avatar", Avatar)
    .component("pv-drawer", Drawer)
    .component("pv-card", Card)
    .component("pv-image", Image)
    .component("pv-toolbar", Toolbar)
    .component("pv-menu", Menu)
    .component("tooltip", Tooltip)
    .mount('#app')
