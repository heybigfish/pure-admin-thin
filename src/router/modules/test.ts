const Layout = () => import("@/layout/index.vue");

export default {
  path: "/test",
  name: "Test",
  component: Layout,
  redirect: "/test/index",
  meta: {
    icon: "ep:home-filled",
    title: "测试页面",
    rank: 0
  },
  children: [
    {
      path: "/test/index",
      name: "testIndex",
      component: () => import("@/views/test/index.vue"),
      meta: {
        title: "测试页面"
      }
    }
  ]
} satisfies RouteConfigsTable;
