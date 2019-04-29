import Home from './components/Home'
import About from './components/About'
import Stats from './components/Stats'

let NotFound = () => import(/* webpackChunkName: "loaders" */ './components/NotFound');
 

export default {
  mode: 'history',

  linkActiveClass: 'font-bold',

  routes: [ 
    {
      path: '/',
      component: Home,
    },

    {
      path: '/about',
      component: About,
    },

    {
      path: '/stats',
      component: Stats,
    },

    {
      path: '*',
      component: NotFound,
    },
  ]
}
