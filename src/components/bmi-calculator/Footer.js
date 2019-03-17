import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import utils from 'app/src/utils/utils';

const Footer = props => (
  <View style={styles.footer}>
    <Text style={styles.text}>&copy;&nbsp;{utils.getYear()}</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    height: '7%',
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    width: '50%',
    height: '100%',
    alignSelf: 'center',
    alignContent: 'flex-end',
    padding: 5,
    fontSize: 25,
    color: 'white',
    textAlign: 'center'
  }
});

export default Footer;
