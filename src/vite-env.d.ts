
interface ImportMetaEnv {
  readonly VITE_API_TOKEN: string
  // more env variables...
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
