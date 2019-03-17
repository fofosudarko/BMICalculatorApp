import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Toolbar = props => (
  <View style={styles.toolbar}>
    <Text style={styles.title}>BMI</Text>
  </View>
);

const styles = StyleSheet.create({
  toolbar: {
    width: '100%',
    height: '100%',
    padding: 10
  },
  title: {
    width: '40%',
    height: '100%',
    color: 'white',
    fontSize: 40,
    textAlign: 'justify'
  }
});

export default Toolbar;
