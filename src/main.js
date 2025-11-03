import { createApp } from 'vue'
import App from './App.vue'

App.data = function () {

    // la fonction pour définir l'information pour les produits
    return {
        url:"src/assets/images/socks_blue.jpeg"
    }
}

import './assets/main.css'

createApp(App).mount('#app')
