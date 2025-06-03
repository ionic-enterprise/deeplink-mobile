import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.csdeeplinkdemo',
  appName: 'deeplink-mobile',
  webDir: 'www/browser',
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
  },
};

export default config;
