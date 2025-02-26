import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <View>
        <Text>You need to log in to access this page.</Text>
      </View>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
