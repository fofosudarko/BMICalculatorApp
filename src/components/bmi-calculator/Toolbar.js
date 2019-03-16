import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Toolbar = props => (
  <View style={styles.toolbar}>
    <Text style={styles.title}>Title</Text>
  </View>
);

const styles = StyleSheet.create({
  toolbar: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10
  },
  title: {
    flex: 1,
    width: '40%',
    height: '100%'
  }
});

export default Toolbar;
