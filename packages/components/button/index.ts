import { componentInstall } from "@up-ui/utils";

import Button from "./src/index.vue";
// 提供按需加载的方式
export const UButton = componentInstall(Button);
// 导出组件
export default UButton;
