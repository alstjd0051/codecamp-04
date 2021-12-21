module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "miiinsseong-deploy",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/board": { page: "/board" },
    "/404": {page: "/404"},
  }),
}