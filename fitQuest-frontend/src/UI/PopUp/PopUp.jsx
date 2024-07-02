import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = ({ message, duration }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration - 750); // Start hiding 500ms before removal
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className={`PopUp ${visible ? 'show' : 'hide'}`}>
      {message}
    </div>
  );
};

export default Popup;