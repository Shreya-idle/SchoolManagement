import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

const PersonalInformation: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Personal Information</Text>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Date of Birth" />
      <TextInput style={styles.input} placeholder="Gender" />
      <TextInput style={styles.input} placeholder="Blood Group" />
      <TextInput style={styles.input} placeholder="Allergies" />
    </ScrollView>
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

export default PersonalInformation;