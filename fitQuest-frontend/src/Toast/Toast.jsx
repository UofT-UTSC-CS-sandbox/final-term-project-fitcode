// Toast.jsx
import React from 'react';
import './Toast.css';

const Toast = ({ message, duration, onDismiss }) => {
  React.useEffect(() => {
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  return (
    <div className="Toast" style={{ '--duration': `${duration}ms` }}>
      {message}
    </div>
  );
};

export default Toast;