import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalculateBMI = props => (
  <View style={styles.calculator}>
    <Text>Calculate BMI</Text>
  </View>
);

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
    width: '100%',
    height: '45%',
    justifyContent: 'space-between',
    padding: 20
  }
});

export default CalculateBMI;
