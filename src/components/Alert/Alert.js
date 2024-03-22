import React from 'react';
import AlertSvg from '../../assets/vectors/alert.svg';
import './Alert.css';

// Function to determine the class based on the weather condition
const getAlertClass = (message) => {
  switch (message.toLowerCase()) {
    case 'rain':
    case 'drizzle':
      return 'alert drizzle';
    case 'snow':
    case "thunderstorm":
      return 'alert red';
    case 'clear':
      return 'alert clear';
    case 'clouds':
      return 'alert clear';
    default:
      return 'alert';
  }
};

const Alert = ({ message }) => {
    if (!message) {
      // Do not render the component if the message is empty
      return null;
    }

  // Return the alert component with the appropriate warning message and class
  return (
    <div className={getAlertClass(message)}>
      {message !== 'Clear' && <img src={AlertSvg} className="alert-icon" alt={message} />}
      <span className="alert-text">{message}</span>
    </div>
  );
};

export default Alert;
