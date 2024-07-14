import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';

import App from './App.vue';
import './app.css';

const app = createApp(App);
const history = createWebHistory();
const router = createRouter({ history, routes });

app.use(router);

app.mount(`#app`);
