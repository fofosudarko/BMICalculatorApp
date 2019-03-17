import React, { Component } from 'react';
import { View, Alert, TextInput, Button, StyleSheet } from 'react-native';

class CalculateBMI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: null,
      height: null
    };

    this.weightPlaceholder = 'Enter your weight';
    this.heightPlaceholder = 'Enter your height';
  }

  onWeightInput = weight => {
    this.setState({ weight });
  };

  onHeightInput = height => {
    this.setState({ height });
  };

  onGetBMI = () => {
    let { height, weight } = this.state;
    let alertMessage = `
      Your height: ${height},
      Your weight: ${weight}
    `;

    Alert.alert('BMI', alertMessage);
  };

  render() {
    return (
      <View style={styles.calculator}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.weight}
            onChangeText={this.onWeightInput}
            placeholder={this.weightPlaceholder}
          />
          <TextInput
            style={styles.height}
            onChangeText={this.onHeightInput}
            placeholder={this.heightPlaceholder}
          />
          <Button title="Get BMI" color="green" onPress={this.onGetBMI} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
    width: '100%',
    height: '45%',
    justifyContent: 'center',
    padding: 20
  },
  formContainer: {
    flex: 1,
    height: '60%',
    justifyContent: 'space-between'
  },
  weight: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  height: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  submitContainer: {
    flex: 3,
    height: '30%'
  },
  submit: {}
});

export default CalculateBMI;
