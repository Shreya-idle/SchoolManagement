import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native';

// Define your root stack param list
type RootStackParamList = {
  Home: undefined;
  Dashboard: undefined;
  Students: undefined;
  Teachers: undefined;
  Applications: undefined;
  FeesManagement: undefined;
  // Add other screens as necessary

  // Define your screen names and params here
  // Example:
  // Home: undefined;
  // Profile: { userId: string };
};

// Define the type for your navigation prop
type AppNavigatorNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC<{ 
  children: React.ReactNode; 
  navigation: AppNavigatorNavigationProp; 
}> = ({ children, navigation }) => {
  return (
    <Stack.Navigator>
      {/* Define your screens here */}
      {children}
    </Stack.Navigator>
  );
};

export default AppNavigator;
