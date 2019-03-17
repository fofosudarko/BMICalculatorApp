import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  Alert
} from 'react-native';

import BMIService from 'app/src/services/services';

class CalculateBMI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: null,
      height: null
    };

    this.weightPlaceholder = 'Enter your weight in kilograms';
    this.heightPlaceholder = 'Enter your height in metres';
  }

  handleWeightInput = weight => {
    this.setState({ weight });
  };

  handleHeightInput = height => {
    this.setState({ height });
  };

  handleGetBMI = () => {
    let { weight, height } = this.state;

    if (!weight) {
      return Alert.alert('BMI', 'No weight entered!');
    }

    if (!height) {
      return Alert.alert('BMI', 'No height entered!');
    }

    let bmi = BMIService.calculateBMI(weight, height);

    Keyboard.dismiss();

    this.props.onGetBMI(bmi);
  };

  handleReset = () => {
    this.setState({
      weight: null,
      height: null
    });

    Keyboard.dismiss();

    this.props.onGetBMI(null);
  };

  render() {
    return (
      <View style={styles.calculator}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.metric}
            placeholder={this.weightPlaceholder}
            value={this.state.weight}
            keyboardType="decimal-pad"
            onChangeText={this.handleWeightInput}
          />
          <TextInput
            style={styles.metric}
            placeholder={this.heightPlaceholder}
            value={this.state.height}
            keyboardType="decimal-pad"
            onChangeText={this.handleHeightInput}
          />
          <Button title="Get BMI" color="green" onPress={this.handleGetBMI} />
          <Button title="Discard" color="red" onPress={this.handleReset} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calculator: {
    width: '100%',
    height: '40%',
    padding: 20
  },
  formContainer: {
    height: '100%',
    justifyContent: 'space-between'
  },
  metric: {
    height: 40,
    borderColor: 'green',
    borderWidth: 1,
    color: 'green',
    fontSize: 20,
    paddingLeft: 10
  }
});

export default CalculateBMI;
