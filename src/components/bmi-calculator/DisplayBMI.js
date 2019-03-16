import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DisplayBMI = props => (
  <View style={styles.display}>
    <Text>Display BMI</Text>
  </View>
);

const styles = StyleSheet.create({
  display: {
    flex: 1,
    width: '100%',
    height: '45%',
    padding: 20
  }
});

export default DisplayBMI;
