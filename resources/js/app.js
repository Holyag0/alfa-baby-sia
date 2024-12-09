import './bootstrap';
import '../css/app.css';
import { createApp, h } from 'vue'
import { createInertiaApp,Link, Head  } from '@inertiajs/vue3'
import {route} from "ziggy-js";
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },

  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .mixin({ methods: { route } })
      .use(plugin)
      .component('Link', Link)
      .component('Head', Head)
      .mount(el)
  },
  
}) 