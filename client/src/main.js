import "./style.css";

import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import vue3GoogleLogin from "vue3-google-login";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
	store.router = markRaw(router);
});

app.use(router);
app.use(pinia);
app.use(vue3GoogleLogin, {
	clientId:
		"409067629664-91n0gidb32utmt03ibtguksk01a1c5jd.apps.googleusercontent.com",
});

app.mount("#app");
