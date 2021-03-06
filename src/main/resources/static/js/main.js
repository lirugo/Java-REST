import Vue from 'vue'
import VueResource from 'vue-resource'
import App from 'pages/App.vue'
import { connect } from 'utils/ws'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

if(frontendData.profile)
    connect()

Vue.use(VueResource)

new Vue({
    el: '#app',
    render: a => a(App)
})