import React from 'react';
import './Alert.css'; // Your CSS file

const Alert = ({ message }) => {
  // If you need a state to handle the visibility
  const [isVisible, setIsVisible] = React.useState(true);
  if (!message) {
    return null;
  }

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

  return (
    <div className={getAlertClass(message)}>
      {message !== 'Clear' && <img src="/vectors/alert.svg" className="alert-icon" />}
      <span className="alert-text">{message}</span>
    </div>
  );
};

export default Alert;
