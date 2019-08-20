import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/Home';
import Record from '@/page/Record';
import Success from '@/page/Success';
import Receive from '@/page/Receive';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        // 录音
        {
            path: '/Record',
            name: 'Record',
            component: Record
        },
        // 签到成功
        {
            path: '/Success',
            name: 'Success',
            component: Success
        },
        // 领取礼包
        {
            path: '/Receive',
            name: 'Receive',
            component: Receive
        },

    ]
});