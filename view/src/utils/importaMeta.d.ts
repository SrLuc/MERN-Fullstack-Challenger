declare global {
  interface ImportMetaEnv {
    VITE_GEOLOCATION_GOOGLE_API_KEY: string;
    VITE_API_URL: string;
    PORT?: string;
  }
}
