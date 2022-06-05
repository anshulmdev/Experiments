import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import "prismjs";
import "prismjs/themes/prism.css";
// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";
// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import Apply from "@/views/auth/Apply.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";

// Assignments

import Mcq from "@/views/admin/Mcq.vue";
import Coding from "@/views/admin/Coding.vue"
import Regex from "@/views/admin/Regex.vue";
import Rest from "@/views/admin/Rest.vue";

//Support
import Ticket from "@/views/admin/Ticket.vue"

// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/coding/:id",
        component: Coding,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/mcq",
        component: Mcq,
      },
      {
        path: "/admin/regex",
        component: Regex,
      },
      {
        path: "/admin/rest",
        component: Rest,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/ticket",
        component: Ticket,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login/:id",
        component: Login,
      },
      {
        path: "/apply/:id",
        component: Apply,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
