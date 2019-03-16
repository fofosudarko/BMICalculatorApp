import React from 'react';
import { View, StyleSheet } from 'react-native';

import Description from 'app/src/components/bmi-calculator/Description';
import Calculator from 'app/src/components/bmi-calculator/CalculateBMI';
import Display from 'app/src/components/bmi-calculator/DisplayBMI';

const Main = props => (
  <View style={styles.main}>
    <Description />
    <Calculator />
    <Display />
  </View>
);

const styles = StyleSheet.create({
  main: {
    height: '83%',
    alignItems: 'flex-start',
    backgroundColor: 'transparent'
  }
});

export default Main;
