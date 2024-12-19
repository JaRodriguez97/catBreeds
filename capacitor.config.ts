import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'catBreeds',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 5000, // Duración del splash en milisegundos (5 segundos)
      backgroundColor: '#1F1F1F', // Color de fondo
      androidSplashResourceName: 'splash',
      iosSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP', // Ajuste del splash
    },
  },
};

export default config;
