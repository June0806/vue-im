import Vue from 'vue'
import Router from 'vue-router'
import imServer from '@/components/imServer/imServer'
import imClient from '@/components/imClient/imClient'
import imLogin from '@/components/imServer/imLogin'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: 'imServer' },
        { path: '/imServer', name: 'imServer', component: imServer },
        { path: '/imClient', name: 'imClient', component: imClient },
        { path: '/login', name: 'imLogin', component: imLogin },
    ]
})