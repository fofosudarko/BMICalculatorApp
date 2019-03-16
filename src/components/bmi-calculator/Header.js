import React from 'react';
import { View, StyleSheet } from 'react-native';

import Toolbar from 'app/src/components/bmi-calculator/Toolbar';

const Header = props => (
  <View style={styles.header}>
    <Toolbar />
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: '10%',
    backgroundColor: 'green'
  }
});

export default Header;
