import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Description from 'app/src/components/bmi-calculator/Description';
import Calculator from 'app/src/components/bmi-calculator/CalculateBMI';
import Display from 'app/src/components/bmi-calculator/DisplayBMI';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bmi: null
    };
  }

  handleGetBMI = bmi => {
    this.setState({ bmi });
  };

  render() {
    return (
      <View style={styles.main}>
        <Description />
        <Calculator onGetBMI={this.handleGetBMI} />
        <Display bmi={this.state.bmi} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: '83%',
    alignItems: 'flex-start',
    backgroundColor: 'transparent'
  }
});

export default Main;
