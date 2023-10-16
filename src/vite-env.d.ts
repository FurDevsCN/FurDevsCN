/// <reference types="vite/client" />
declare module "*.vue" {
  import { ComponentOptions } from "vue";
  const componentOptions: ComponentOptions;
  export default componentOptions;
}

interface ImportMetaEnv {
  readonly VITE_GITHUB_TOKEN: string; // Readonly<string>
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
