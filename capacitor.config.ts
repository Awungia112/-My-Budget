import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.vercel.my_budget_amber',
  appName: 'My Budget',
  webDir: 'dist',
  ios: {
    deploymentTarget: '13.0'
  }
};

export default config;
