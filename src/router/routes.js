const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../pages/Home.vue"),
      },
      {
        path: "/explore",
        name: "Explore",
        component: () => import("../pages/Explore.vue"),
      },
      {
        path: "/notifications",
        name: "Notifications",
        component: () => import("../pages/Notifications.vue"),
      },
      {
        path: "/messages",
        name: "Messages",
        component: () => import("../pages/Messages.vue"),
      },
      {
        path: "/book-marks",
        name: "BookMarks",
        component: () => import("../pages/BookMarks.vue"),
      },
      {
        path: "/twitter-blue",
        name: "TwitterBlue",
        component: () => import("../pages/TwitterBlue.vue"),
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("../pages/Profile.vue"),
      },
      {
        path: "/more",
        name: "More",
        component: () => import("../pages/More.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
