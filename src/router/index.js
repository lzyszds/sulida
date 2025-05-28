import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from "@/layout/Layout.vue"
import SubPageLayout from "@/layout/SubPageLayout.vue"
import { useStorage } from '@vueuse/core';

const token = useStorage('token', '')

const routes = [
    {
        path: '/',
        redirect: '/pages/index',
    },
    {
        path: "/pages",
        name: "pages",
        component: Layout,
        icon: "carbon:ibm-cloud-resiliency",
        meta: { title: "首页", },
        children: [
            {
                path: "index",
                name: '首页',
                namePath: "pages-index",
                component: () => import('@/pages/home/index.vue'),
            },
        ]
    },
    {
        path: "/subpage",
        name: "subpage",
        component: SubPageLayout,
        icon: "carbon:ibm-cloud-resiliency",
        children: [
            {
                path: "reservation",
                name: '订单预约',
                namePath: "subpage-reservation",
                component: () => import('@/pages/subpage/Reservation.vue'),
            },
            {
                path: "credit",
                name: '信用优化',
                namePath: "subpage-credit",
                component: () => import('@/pages/subpage/Credit.vue'),
            },
            {
                path: "consumption",
                name: '消费增值',
                namePath: "subpage-consumption",
                component: () => import('@/pages/subpage/Consumption.vue'),
            },
            {
                path: "fission",
                name: '裂变商家',
                namePath: "subpage-fission",
                component: () => import('@/pages/subpage/Fission.vue'),
            },
            {
                path: "data",
                name: '数据优化',
                namePath: "subpage-data",
                component: () => import('@/pages/subpage/Data.vue'),
            },
            {
                path: "teamDetail",
                name: '团队订单明细',
                namePath: "subpage-teamDetail",
                component: () => import('@/pages/subpage/TeamDetail.vue'),
            },
            {
                path: "storeAuth",
                name: '店铺认证',
                namePath: "subpage-storeAuth",
                component: () => import('@/pages/subpage/StoreAuth.vue'),
            },
        ]
    },
    {
        path: "/serviceCharge",
        name: "serviceCharge",
        component: SubPageLayout,
        icon: "carbon:ibm-cloud-resiliency",
        children: [
            {
                path: "teamServiceFee",
                name: '团队服务费统计',
                namePath: "serviceCharge-teamServiceFee",
                component: () => import('@/pages/service-charge/TeamServiceFee.vue'),
            },
            {
                path: "order",
                name: '我的订单',
                namePath: "serviceCharge-order",
                component: () => import('@/pages/service-charge/Order.vue'),
            },
             {
                path: "storeList",
                name: '店铺列表',
                namePath: "serviceCharge-storeList",
                component: () => import('@/pages/service-charge/StoreList.vue'),
            },
            {
                path: "withdrawal",
                name: '提现收益',
                namePath: "serviceCharge-Withdrawal",
                component: () => import('@/pages/service-charge/Withdrawal.vue'),
            },
            {
                path: "consDetails",
                name: '消费明细',
                namePath: "serviceCharge-consDetails",
                component: () => import('@/pages/service-charge/ConsDetails.vue'),
            },
            {
                path: "valueAddList",
                name: '增值清单',
                namePath: "serviceCharge-valueAddList",
                component: () => import('@/pages/service-charge/ValueAddList.vue'),
            },
            {
                path: "customerService",
                name: '联系客服',
                namePath: "serviceCharge-customerService",
                component: () => import('@/pages/service-charge/CustomerService.vue'),
            },

        ]
    },
    {
        path: "/team",
        name: "team",
        component: Layout,
        icon: "carbon:ibm-cloud-resiliency",
        meta: { title: "团队矩阵", },
        children: [
            {
                path: "index",
                name: '团队矩阵',
                namePath: "team-index",
                component: () => import('@/pages/team/index.vue'),
            },
        ]
    },
    {
        path: "/mine",
        name: "mine",
        component: Layout,
        icon: "carbon:ibm-cloud-resiliency",
        meta: { title: "我的", },
        children: [
            {
                path: "index",
                name: '我的',
                namePath: "mine-index",
                component: () => import('@/pages/mine/index.vue'),
            },
        ]
    },
    /* 登录 */
    {
        path: "/login",
        name: "login",
        component: () => import('@/pages/login/index.vue'),
        meta: { title: "账号登录", requireAuth: true },
    },
    /* 注册 */
    {
        path: "/register",
        name: "register",
        component: () => import('@/pages/login/Register.vue'),
        meta: { title: "账号注册", requireAuth: true },
    },

    /* 404 */
    {
        path: "/:catchAll(.*)",
        name: 'undefind404',
        component: () => import('@/pages/undefind/Undefined.vue') // 注意，没有重定向就会出现两个一模一样的home页面
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})



// 设置title
router.beforeEach((to, from, next) => {
    // NProgress.inc(0.2)
    // NProgress.configure({ easing: 'ease', speed: 600, showSpinner: false, parent: '#app' })
    // // 启动进度条
    // NProgress.start();
    next();

    // // 判断用户是否登录
    // let hasToken = false;


    // if (token.value) {
    //     hasToken = true;
    // } else {
    //     hasToken = false;
    // }

    // if (hasToken) {

    //     //console.log('yes login')
    //     if (to.path === '/login') {
    //         next('/');
    //     } else {
    //         next();
    //     }

    // } else {

    //     /* has no token*/
    //     if (to.path === '/login') {
    //         next()
    //     } else {
    //         next('/login')
    //     }

    // }
})

router.afterEach(() => {
    // 关闭进度条
    // NProgress.done()
})

export default router
