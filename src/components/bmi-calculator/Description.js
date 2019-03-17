import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Description = props => (
  <View style={styles.description}>
    <Text style={styles.text}>BMI Calculator App</Text>
  </View>
);

const styles = StyleSheet.create({
  description: {
    flex: 1,
    width: '100%',
    height: '10%',
    padding: 10
  },
  text: {
    color: 'green',
    textAlign: 'center',
    fontSize: 30
  }
});

export default Description;
