import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "BaseLayout",
    meta: {
      title: "首页",
      keepAlive: true,
    },
    component: () => import("../views/BaseLayout/index"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/Home/index.vue"),
      },
      {
        path: "/search",
        name: "search",
        // component: () => import("../views/Home/index.vue"),
        component: () => import("../views/Vant/index"),
      },
      {
        path: "/friends",
        name: "friends",
        component: () => import("../views/Home/index.vue"),
      },
      {
        path: "/setting",
        name: "setting",
        component: () => import("../views/Home/index.vue"),
      },
    ],
  },
  {
    path: "/vant",
    name: "vant",
    meta: {
      title: "Vant Demo",
      keepAlive: true,
    },
    component: () => import("../views/PageLayout/index"),
    children: [
      // {
      //   meta: {
      //     title: "基础组件-Button 按钮",
      //   },
      //   path: "/vant/normal/button",
      //   name: "normal-button",
      //   component: () => import("../views/Vant/normal/button/index"),
      // },
      {
        meta: {
          title: "基础组件",
        },
        path: "/vant/normal",
        name: "normal",
        component: () => import("../views/Vant/normal/index"),
        children: [
          {
            meta: {
              title: "基础组件-Button 按钮",
            },
            path: "/vant/normal/button",
            name: "normal-button",
            component: () => import("../views/Vant/normal/button/index"),
          },
        ],
      },

      {
        meta: {
          title: "表单组件",
        },
        path: "/vant/form",
        name: "form",
        component: () => import("../views/Vant/form/index"),
      },
      {
        meta: {
          title: "反馈组件",
        },
        path: "/vant/fallBack",
        name: "fallBack",
        component: () => import("../views/Vant/fallBack/index"),
      },
      {
        meta: {
          title: "展示组件",
        },
        path: "/vant/show",
        name: "show",
        component: () => import("../views/Vant/show/index"),
      },
      {
        meta: {
          title: "导航组件",
        },
        path: "/vant/nav",
        name: "nav",
        component: () => import("../views/Vant/nav/index"),
      },
      {
        meta: {
          title: "业务组件",
        },
        path: "/vant/business",
        name: "business",
        component: () => import("../views/Vant/business/index"),
      },
    ],
  },
  {
    path: "/vLogin",
    name: "vLogin",
    meta: {
      title: "登录",
      keepAlive: true,
    },
    component: () => import("../views/Login/vue/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true,
    },
    component: () => import("../views/Login/index"),
  },
  {
    // path: "*",// Uncaught Error: Catch all routes ("*") must now be defined using a param with a custom regexp.
    path: "/:catchAll(.*)",
    name: "404",
    meta: {
      title: "404",
      keepAlive: true,
    },
    component: () => import("../views/SinglePage/404"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
