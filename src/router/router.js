import {createRouter, createWebHistory} from 'vue-router'
import HeaderFooterLayout from "/@/components/layout/HeaderFooterLayout.vue";
import Home from "/@/components/page/Home.vue";
import Blog from '/@/components/page/Blog.vue';

const routes = [
  {
    path: "/",
    component: HeaderFooterLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/blog",
        name: "Blog",
        component: Blog,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
