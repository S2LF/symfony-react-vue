import './styles/app.scss';

import './bootstrap';

import 'axios/dist/axios.min.js';
import './components/react/name';
import './components/react/card';

import NameVue from './components/vue/nameVue'

import {createApp} from 'vue'


// Create an app using `createApp()` that uses the `hello` component
createApp(NameVue).mount('#app');

// app.mount('#app');