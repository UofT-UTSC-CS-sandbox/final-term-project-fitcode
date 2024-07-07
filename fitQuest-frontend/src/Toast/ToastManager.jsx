// ToastManager.js
import React, { useState, useCallback } from 'react';
import Toast from './Toast';

let toastId = 0;

const ToastManager = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, duration = 3000) => {
    const id = ++toastId;
    setToasts(currentToasts => [...currentToasts, { id, message, duration }]);
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
  }, []);

  return {
    toasts: (
      <div className="ToastContainer">
        {toasts.map(({ id, message, duration }) => (
          <Toast
            key={id}
            message={message}
            duration={duration}
            onDismiss={() => dismissToast(id)}
          />
        ))}
      </div>
    ),
    showToast
  };
};

export default ToastManager;