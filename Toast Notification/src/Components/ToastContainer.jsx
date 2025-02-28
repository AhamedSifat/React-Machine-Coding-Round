import React, { useState } from 'react';

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    const id = Date.now();
    const newToast = { id, type, message, animateOut: false };
    setToasts((prev) => [...prev, newToast]);

    // Start slide-out animation after 4 seconds
    setTimeout(() => {
      triggerRemove(id);
    }, 4000);
  };

  const triggerRemove = (id) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, animateOut: true } : toast
      )
    );
  };

  const handleAnimationEnd = (id) => {
    // Remove toast from state once animation completes
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className='container'>
      <div className='toast-container'>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast ${toast.type} ${
              toast.animateOut ? 'slide-out' : 'slide-in'
            }`}
            onAnimationEnd={() =>
              toast.animateOut && handleAnimationEnd(toast.id)
            }
          >
            {toast.message}
            <span className='close' onClick={() => triggerRemove(toast.id)}>
              X
            </span>
          </div>
        ))}
      </div>
      <div className='btn-container'>
        <button onClick={() => addToast('success', 'Success Toast')}>
          Success Toast
        </button>
        <button onClick={() => addToast('warning', 'Warning Toast')}>
          Warning Toast
        </button>
        <button onClick={() => addToast('error', 'Error Toast')}>
          Error Toast
        </button>
      </div>
    </div>
  );
};

export default ToastContainer;
