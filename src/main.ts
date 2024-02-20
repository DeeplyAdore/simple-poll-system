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
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

// components
import Form from '@/components/form/Form.vue';
import FormSelection from '@/components/form/FormSelection.vue';

import { APIService } from '@/services/APIService';

const app = createApp(App);
app.use(PrimeVue, {
  ripple: true
});

const apiService = new APIService();
app.provide('APIService', apiService);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('Toast', Toast);
app.use(ToastService);

app.component('Form', Form);
app.component('FormSelection', FormSelection);

app.mount('#app');
