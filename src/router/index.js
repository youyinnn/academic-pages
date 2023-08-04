import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
// import Home from "@/views/Home.vue";
// import Script from "@/views/Script.vue";
// import Article from "@/views/Article.vue";
import NotFound from "@/views/NotFound.vue";

const base_url =
  process.env.NODE_ENV === "production"
    ? process.env.BASE_URL.replace("/dist/", "")
    : process.env.BASE_URL;

const routes = [
  {
    // path: "/articles",
    // name: "Home",
    // component: Home,
  },
  // {
  //   path: "/scripts",
  //   name: "ScriptInitial",
  //   component: Script,
  // },
  // {
  //   path: "/scripts/:scriptId",
  //   name: "Scripts",
  //   component: Script,
  // },
  // {
  //   path: "/article/:articleId",
  //   name: "Article",
  //   component: Article,
  // },
  {
    path: base_url,
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: base_url + ":pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
