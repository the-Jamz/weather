import React from 'react';
import AlertSvg from '../../assets/vectors/alert.svg';
import './Alert.css';

const Alert = ({ message }) => {
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
      {message !== 'Clear' && <img src={AlertSvg} className="alert-icon" />}
      <span className="alert-text">{message}</span>
    </div>
  );
};

export default Alert;
