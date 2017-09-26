// Routes
const home = { template: '<div>Home</div>' };
const characterRoute = { template: '<div></div>' };

const routes = [
  { path: '/', component: home },
  { path: '/character', component: characterRoute },
  { path: '*', redirect: '/' },
];

// Initilize router
const router = new VueRouter({
  routes
});

Vue.extend('character-view', {
  template: '<div>Character View</div>',
});

// Initilize app
const app = new Vue({
  el: '#app',
  router,
})
