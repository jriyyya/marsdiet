/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_CLIENTID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
