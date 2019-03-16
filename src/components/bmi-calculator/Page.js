import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from 'app/src/components/bmi-calculator/Header';
import Main from 'app/src/components/bmi-calculator/Main';
import Footer from 'app/src/components/bmi-calculator/Footer';

const Page = props => (
  <View style={styles.page}>
    <Header />
    <Main />
    <Footer />
  </View>
);

const styles = StyleSheet.create({
  page: {
    flex: 1
  }
});

export default Page;
