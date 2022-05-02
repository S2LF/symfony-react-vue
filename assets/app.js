/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';

import 'axios/dist/axios.min.js';
// import './components/react/name';
// import './components/react/card';


import * as Vue from 'vue'

import Exemple from './components/vue/Exemple';


// new Vue({
//     el: '#app',
//     components: {Exemple},
// });

// Create an app using `createApp()` that uses the `hello` component
const app = Vue.createApp({
    // Displays "Hello, World" initially, changes based on input
    template: '<exemple></exemple>'
  });
  
  // Register the `hello` component
  app.component('exemple', {
    data: () => ({
      name: 'exemple'
    }),
    template: `
      <div>
        <div>
          <input v-model="name"></input>
        </div>
        <h1>Hello, {{name}}</h1>
      </div>
    `
  });
  
  app.mount('#app');