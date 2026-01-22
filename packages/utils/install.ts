import type { App, Plugin } from "vue";

export const componentInstall = (component: any): Plugin => {
  component.install = (app: App) => {
    app.component(component.name, component);
  };
  return component;
};
