// 导入样式
import "../packages/theme/src/index.css";

// 组件库的入口
// 按需加载
export * from "./components/index";
// 全局注册
import components from "./components";
import type { App } from "vue";
// 全局安装
const install = (app: App) => {
  if ((install as any).installed) return;
  components.forEach((c) => app.use(c));
};
export default install;
