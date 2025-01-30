import './bootstrap';
import '../css/app.css';
import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'
import { route } from "ziggy-js";
import Layout from './Shared/Layout.vue'; 

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
    let page = pages[`./Pages/${name}.vue`];

    if (page.default.layout === undefined) {
        page.default.layout = Layout;
    }

    return page;
  },

  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .mixin({ methods: { route } })
      .use(plugin)
      .component('Link', Link)
      .component('Head', Head)
      .mount(el);
  },
  title: title => "Alfa - " + title,
  progress: {
    delay: 250,
    color: '#00FF00',
    includeCSS: true,
    showSpinner: true,
  },
});
