import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'catBreeds',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#1F1F1F',
      androidSplashResourceName: 'splash',
      iosSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP', 
    },
  },
};

export default config;
