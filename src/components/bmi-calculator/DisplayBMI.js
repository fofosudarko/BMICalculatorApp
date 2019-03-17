import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BMIService from 'app/src/services/services';

class DisplayBMI extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { bmi } = this.props;

    return (
      <View style={styles.displayContainer}>
        {!bmi ? <Placeholder /> : <Display bmi={this.props.bmi} />}
      </View>
    );
  }
}

const Placeholder = props => (
  <View style={styles.innerDisplay}>
    <Text style={styles.placeholder}>Body Fat</Text>
    <Text style={styles.placeholder}>OK?</Text>
  </View>
);

const Display = ({ bmi }) => (
  <View style={styles.innerDisplay}>
    <Text style={styles.display}>BMI: {bmi}</Text>
    <Text style={styles.display}>
      You are {BMIService.getHealthStatus(bmi)}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  displayContainer: {
    width: '100%',
    height: '50%',
    padding: 20
  },
  innerDisplay: {
    backgroundColor: 'snow',
    borderColor: 'green',
    borderWidth: 3,
    borderRadius: 10,
    height: '100%',
    width: '100%',
    padding: 20,
    justifyContent: 'space-around'
  },
  placeholder: {
    fontSize: 70,
    textAlign: 'center',
    color: 'green'
  },
  display: {
    fontSize: 50,
    textAlign: 'center',
    color: 'green'
  }
});

export default DisplayBMI;
