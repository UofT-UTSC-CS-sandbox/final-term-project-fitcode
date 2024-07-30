// ToastManager.js
import React, { useState, useCallback } from "react";
import Toast from "./Toast";

let toastId = 0;

const ToastManager = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, duration = 3000) => {
    const id = ++toastId;
    setToasts((currentToasts) => [...currentToasts, { id, message, duration }]);
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  }, []);

  return {
    toasts: (
      <>
        {toasts.map(({ id, message, duration }) => (
          <Toast
            key={id}
            message={message}
            duration={duration}
            onDismiss={() => dismissToast(id)}
          />
        ))}
      </>
    ),
    showToast,
  };
};

export default ToastManager;
