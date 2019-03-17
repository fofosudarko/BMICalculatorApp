// services.js

const calculateBMI = (weight = 1, height = 1) => {
  return (weight / Math.pow(height, 2)).toFixed(3);
};

const getHealthStatus = bmi => {
  let healthStatus = '';

  if (bmi >= 25) {
    healthStatus = 'overweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    healthStatus = 'healthy';
  } else {
    healthStatus = 'underweight';
  }

  return healthStatus;
};

export default {
  calculateBMI,
  getHealthStatus
};
