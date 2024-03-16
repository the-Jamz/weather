import React from 'react';
import './Alert.css'; // Your CSS file

const Alert = ({ message }) => {
  // If you need a state to handle the visibility
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    // isVisible && (uncomment this if using the dismiss functionality)
    <div className="alert">
      <img src="/vectors/alert.svg" className="alert-icon" />
      <span className="alert-text">{message}</span>
    </div>
  );
};

export default Alert;
