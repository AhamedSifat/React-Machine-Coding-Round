import './Dialog.css';
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

function Dialog({ onClose, children }) {
  const contentRef = useRef();
  const backdropRef = useRef();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleClose = () => {
    contentRef.current.classList.add('hide-dialog');
    backdropRef.current.classList.add('hide-dialog');

    contentRef.current.addEventListener('animationend', onClose, {
      once: true,
    });
    backdropRef.current.addEventListener('animationend', onClose, {
      once: true,
    });
  };
  return createPortal(
    <div onClick={handleClose} ref={backdropRef} className='dialog-backdrop'>
      <div
        ref={contentRef}
        className='dialog-box'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
        <button className='close-dialog-button' onClick={handleClose}>
          Close Dialog
        </button>
      </div>
    </div>,
    document.getElementsByTagName('body')[0]
  );
}
Dialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Dialog;
