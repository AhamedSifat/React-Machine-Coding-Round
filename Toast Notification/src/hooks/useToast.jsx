import { useState } from 'react';

const useToast = (initialPosition = { top: '0.5rem', right: '0.5rem' }) => {
  const [toasts, setToasts] = useState([]);
  const [position, setPosition] = useState(initialPosition);

  const addToast = (type, message, duration = 4000) => {
    const id = Date.now();
    const newToast = { id, type, message, animateOut: false };
    setToasts((prev) => [...prev, newToast]);

    // Automatically trigger removal after duration
    setTimeout(() => {
      triggerRemove(id);
    }, duration);
  };

  const triggerRemove = (id) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, animateOut: true } : toast
      )
    );
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // The ToastContainer component rendered using the hook's state
  const ToastContainerComponent = () => (
    <div className='toast-container' style={position}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast ${toast.type} ${
            toast.animateOut ? 'slide-out' : 'slide-in'
          }`}
          onAnimationEnd={() => toast.animateOut && removeToast(toast.id)}
        >
          {toast.message}
          <span onClick={() => triggerRemove(toast.id)}>X</span>
        </div>
      ))}
    </div>
  );

  return { addToast, setPosition, ToastContainerComponent };
};

export default useToast;
