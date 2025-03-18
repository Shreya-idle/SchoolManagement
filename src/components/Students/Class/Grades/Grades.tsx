import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Grades: React.FC<{ grades: { subject: string; grade: string }[] }> = ({ grades }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Grades</Text>
      {grades.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{item.subject}</Text>
          <Text style={styles.cardText}>Grade: {item.grade}</Text>
        </View>
      ))}
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
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e2952',
  },
  cardText: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 4,
  },
});

export default Grades;
