// Toast.jsx
import {useEffect} from 'react';
import './Toast.css';

const Toast = ({ message, duration, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(onDismiss, duration); //After the toast is created, we set the timer with duration, onDismiss will remove it from Toast Array in Toast Manager
    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  return (
    <div className="Toast" style={{ '--duration': `${duration}ms` }}>
      {message}
    </div>
  );
};

export default Toast;