import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import BMIService from "app/src/services/services";

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

const Placeholder = props => {
  const style = {
    backgroundColor: "snow",
    borderColor: "green"
  };

  const placeholderStyle = StyleSheet.flatten([styles.innerDisplay, style]);

  return (
    <View style={placeholderStyle}>
      <Text style={styles.placeholder}>Body Fat</Text>
      <Text style={styles.placeholder}>OK?</Text>
    </View>
  );
};

const Display = ({ bmi }) => {
  let healthStatus = BMIService.getHealthStatus(bmi);
  let displayStyle = StyleSheet.flatten([
    styles.innerDisplay,
    getHealthStatusStyle(healthStatus)
  ]);

  return (
    <View style={displayStyle}>
      <Text style={styles.display}>BMI: {bmi}</Text>
      <Text style={styles.display}>You are {healthStatus}!</Text>
    </View>
  );
};

const getHealthStatusStyle = healthStatus => {
  let style = {};

  switch (healthStatus) {
    case "overweight":
      style = {
        borderColor: "black",
        backgroundColor: "black"
      };
      break;
    case "underweight":
      style = {
        borderColor: "red",
        backgroundColor: "red"
      };
      break;
    case "healthy":
      style = {
        borderColor: "green",
        backgroundColor: "green"
      };
      break;
  }

  return style;
};

const styles = StyleSheet.create({
  displayContainer: {
    width: "100%",
    height: "50%",
    padding: 20
  },
  innerDisplay: {
    borderWidth: 3,
    borderRadius: 10,
    height: "100%",
    width: "100%",
    padding: 20,
    justifyContent: "space-around"
  },
  placeholder: {
    fontSize: 70,
    textAlign: "center",
    color: "green"
  },
  display: {
    fontSize: 50,
    textAlign: "center",
    color: "white"
  }
});

export default DisplayBMI;
