// 组件库的入口
// 按需加载
export * from "./components/index";
// 全局注册
import components from "./components";
// 全局安装
const install = (app) => {
  if (install.installed) return;
  components.forEach((c) => app.use(c));
};
export default install;
