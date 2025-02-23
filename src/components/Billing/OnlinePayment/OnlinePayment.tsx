import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const OnlinePayment: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Online Payment</Text>
      <TextInput style={styles.input} placeholder="Enter Amount" />
      <TextInput style={styles.input} placeholder="Enter Card Number" />
      <Button title="Pay Now" onPress={() => console.log('Payment Initiated')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1e2952',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ced4da',
    marginBottom: 16,
  },
});

export default OnlinePayment;