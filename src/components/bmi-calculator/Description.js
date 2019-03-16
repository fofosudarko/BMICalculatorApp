import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Description = props => (
  <View style={styles.description}>
    <Text>Description</Text>
  </View>
);

const styles = StyleSheet.create({
  description: {
    flex: 1,
    width: '100%',
    height: '10%',
    padding: 10
  }
});

export default Description;
