/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_GITHUB_TOKEN: string; // Readonly<string>
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
