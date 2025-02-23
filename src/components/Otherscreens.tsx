import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header.tsx'; // Ensure Header is also converted to TypeScript


// Define props for the OtherScreen component
type OtherScreenProps = {
  onLogout: () => void;
};

const OtherScreen: React.FC<OtherScreenProps> = ({ onLogout }) => {
  return (
    <View style={styles.container}>
      <Header onLogout={onLogout} />
      <View style={styles.content}>
        <Text>This is another screen!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OtherScreen;
