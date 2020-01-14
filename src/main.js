import Vue from 'vue'
import VueRouter from 'vue-router'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import App from './App.vue'
import Child from './components/Child.vue';
import Home from './components/homepage.vue';
import Friends from './components/friends.vue';
import Groups from './components/groups.vue';
import Pay from './components/pay.vue';
import Ask from './components/ask.vue';
import Profile from './components/profile.vue';
import OneGroup from './components/onegroup.vue';
import FriendDebt from './components/debtfriend.vue';
import AddFriend from './components/addfriend.vue';
import AddGroup from './components/creategroup.vue';
import SignUp from './components/signup.vue';
import ContactUs from './components/contact.vue';
import './../node_modules/bulma/css/bulma.css';
import Meta from 'vue-meta'
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.use(Meta)
Vue.use(VueRouter)
Vue.use(VueChartkick, {adapter: Chart})
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBGCql0HlN4C_D7B2BcIIhtuFvjrdfvoew',
    libraries: 'places'
	},
})

Vue.config.productionTip = false

const routes = [
 {path: '/home', component: Home},
 {path: '/', component:Child},
 {path: '/friends', component: Friends},
 {path: '/groups', component: Groups},
 {path: '/pay', component: Pay},
 {path: '/ask', component: Ask},
 {path: '/profile', component: Profile},
 {path: '/debtfriend', component: FriendDebt},
 {path: '/addfriend', component: AddFriend},
 {path: '/addgroup', component: AddGroup},
 {path: '/onegroup', component: OneGroup},
 {path: '/signup', component: SignUp},
 {path: '/contact', component: ContactUs}
]

var router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: createEle => createEle(App),
  router: router,
})
