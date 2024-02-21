/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue';
import App from '@/App.vue';
import PrimeVue from 'primevue/config';

// theme
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.scss';
import '@/assets/app.scss';

import Button from 'primevue/button';

// components
import Form from '@/components/form/Form.vue';

import { APIService } from '@/services/APIService';

const app = createApp(App);
app.use(PrimeVue, {
  ripple: true
});

const apiService = new APIService();
app.provide('APIService', apiService);

app.component('Button', Button);

app.component('Form', Form);

app.mount('#app');
