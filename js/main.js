import bookApp from './pages/book-app.cmp.js';
import appHeader from './cmp/app-header.cmp.js';
import appFooter from './cmp/app-footer.cmp.js';
import { router } from './routes.js';

const options = {
    el: '#app',
    router,
    template: `
    <section>
            <app-header />
            <router-view />
            <app-footer />
        </section>
    `,
    components: {
        bookApp,
        appHeader,
        appFooter
    }
};

new Vue(options);