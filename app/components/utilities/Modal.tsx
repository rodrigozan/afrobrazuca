import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import styles from '../../../styles/components/Modal.module.scss'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  fadeType: 'fade-in' | 'fade-out';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, fadeType, children }) => {
  if (!isOpen) return null;
  return (
    <div className={`${styles.modalBackground} ${isOpen ? fadeType : ''}`} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="btn btn-danger" onClick={onClose}>
          <FontAwesomeIcon icon={fas.faXmark} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
