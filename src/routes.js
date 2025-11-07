const router = new Router(outlet, {
  baseUrl: '/Real-Estate-Lint-Element-3-FrontEnd/'
});

router.setRoutes([
  { path: '/home', component: 'home-view', action: () => import('./components/home-view.js') },
  { path: '/favorited', component: 'favorited-view', action: () => import('./components/favorited-view.js') },
  { path: '/', redirect: '/home' },
  { path: '(.*)', redirect: '/home' }
]);   