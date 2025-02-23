import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ParentTeacherMeeting: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parent Teacher Meeting</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Subject" />
      <TextInput style={styles.input} placeholder="Description" multiline />
      <Button title="Submit" onPress={() => console.log('Meeting Request Submitted')} />
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

export default ParentTeacherMeeting;