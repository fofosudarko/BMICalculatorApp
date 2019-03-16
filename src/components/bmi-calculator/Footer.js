import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = props => (
  <View style={styles.footer}>
    <Text>Footer</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    height: '7%',
    backgroundColor: 'green'
  }
});

export default Footer;
