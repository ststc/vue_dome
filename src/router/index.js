import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import index from "../page/index"
import datetime from '../page/datetime'


export default new Router({
    routes: [
        {
            path: '/', //创建表单*(只给管理员进入)
            name: 'index',
            component: index
        },
        {
            path:"/datetime",
            name:'datetime',
            component:datetime
        }
    ]
})