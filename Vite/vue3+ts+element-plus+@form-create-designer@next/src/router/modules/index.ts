import login from "@/views/login/index.vue";
import layout from "@/layout/default/index.vue";

export const routers = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/main",
    name: "main",
    component: layout,
    redirect: "/department",
    children: [
      {
        path: "/department",
        name: "department",
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/department/index.vue"),
      },
      {
        path: "/departmentEdit",
        name: "departmentEdit",
        component: () => import("@/views/department/edit.vue"),
      },
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/user/index.vue"),
      },
      {
        path: "/userEdit",
        name: "userEdit",
        component: () => import("@/views/user/edit.vue"),
      },
      {
        path: "/analysis",
        name: "analysis",
        component: () => import("@/views/analysis/index.vue"),
      },
      {
        path: "/analysisEdit",
        name: "analysisEdit",
        component: () => import("@/views/analysis/edit.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/AboutView.vue"),
  },
];

export default routers;
