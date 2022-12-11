import { createStore } from 'vuex';
import { createApp } from 'vue';

import App from './App.vue';

const store =  createStore({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        
    }
})

const app = createApp({ App });

app.use(store)