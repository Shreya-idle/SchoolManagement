import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';

const TeacherInformation: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Teacher Information</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter full name" />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter email" />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input} placeholder="Enter phone number" />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Qualification</Text>
        <TextInput style={styles.input} placeholder="Enter qualification" />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Experience (Years)</Text>
        <TextInput style={styles.input} placeholder="Enter experience" />
      </View>
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
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ced4da',
  },
});

export default TeacherInformation;