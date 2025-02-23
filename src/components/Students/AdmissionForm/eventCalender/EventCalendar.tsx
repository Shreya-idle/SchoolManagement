import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const EventCalendar: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Event Calendar</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Annual Day</Text>
        <Text style={styles.cardText}>Date: 2023-11-15</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sports Day</Text>
        <Text style={styles.cardText}>Date: 2023-12-10</Text>
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

export default EventCalendar;