import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home/index.vue";

const routes = [
  {
    path: '/',
    redirect: {name: 'Home'},
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/componentPage',
    name: 'ComponentPage',
    component: () => import('../views/Components/index.vue'),
    children: [
      {
        path: '/componentPage/buttons',
        name: 'Buttons',
        component: () => import('../views/Components/Buttons/index.vue'),
      },
      {
        path: '/componentPage/form-card',
        name: 'FormCard',
        component: () => import('../views/Components/FormCard/index.vue'),
      },
      {
        path: '/componentPage/custom-title',
        name: 'CustomTitle',
        component: () => import('../views/Components/CustomTitle/index.vue'),
      },
      {
        path: '/componentPage/vehicle-number',
        name: 'VehicleNumber',
        component: () => import('../views/Components/VehicleNumber/index.vue'),
      },
      {
        path: '/componentPage/custom-noticebar',
        name: 'CustomNoticeBar',
        component: () => import('../views/Components/CustomNoticeBar/index.vue'),
      },
      {
        path: '/componentPage/start-evlaute',
        name: 'StartEvlaute',
        component: () => import('../views/Components/StartEvlaute/index.vue'),
      },
    ],
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory(import.meta.env.BASE_URL),
});

export default router;