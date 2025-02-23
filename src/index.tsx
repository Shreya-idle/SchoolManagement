import '@expo/metro-runtime';
import { AppRegistry } from 'react-native';

import App from './App'; // Import the main App component
import appConfig from './app.json'; // Import app.json as a default import

const appName = appConfig.name; // Access 
// Register the App component as the root component
AppRegistry.registerComponent(appName, () => App);

// Export a default component (optional, but required if this is your entry point)
const Root = () => <App />;
export default Root;
