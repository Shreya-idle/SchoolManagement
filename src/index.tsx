import { AppRegistry } from 'react-native';
import App from './App'; // Ensure App is exported as default

import appConfig from './app.json';
const appName = appConfig.expo.name; // Register the app with the name from app.json



AppRegistry.registerComponent(appName, () => App);
