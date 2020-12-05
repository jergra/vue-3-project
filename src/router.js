
//import VueRouter from 'vue-router'
import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home'
import DcHeros from './pages/DcHeros'
import Calendar from './pages/Calendar'
import Markdown from './pages/Markdown'
import Slider from './pages/Slider'
import Calculator from './pages/Calculator'
import ReusableModal from './pages/ReusableModal'
import Chat from './pages/Chat'
import store from "./store/index"
import UserCrud from './pages/UserCrud'
import Tensorflow from './pages/Tensorflow'

const routes = [
    {path: '/', component: Home},
    {path: '/DcHeros', component: DcHeros},
    {path: '/Calendar', component: Calendar},
    {path: '/Markdown', component: Markdown},
    {path: '/Slider', component: Slider},
    {path: '/Calculator', component: Calculator, meta: { middleware: "auth" }},
    {path: '/ReusableModal', component: ReusableModal},
    {path: '/Chat', component: Chat, meta: {middleware: "auth"}},
    {path: '/UserCrud', component: UserCrud},
    {path: '/Tensorflow', component: Tensorflow}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, _, next) => {
    if (to.meta.middleware) {
      const middleware = require(`./middleware/${to.meta.middleware}`);
      if (middleware) {
        middleware.default(next, store);
      } else {
        next();
      }
    } else {
      next();
    }
  });

export default router