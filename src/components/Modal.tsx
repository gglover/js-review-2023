import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from './Modal.module.css';

export interface ModalProps {
  children: JSX.Element,
  open: boolean,
  onClose: () => void
};

export const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(
    () => {
      const listener = (event: MouseEvent | TouchEvent) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!modalRef.current || modalRef.current.contains(event.target as Element)) {
          return;
        }

        onClose();
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },   
    [modalRef, onClose]
  );

  if (!open) return null;

  return createPortal(
    <dialog open ref={modalRef} className={styles.modal}>
      { children }
    </dialog>, document.querySelector('body')!
  );
}