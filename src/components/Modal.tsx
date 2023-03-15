import cn from 'clsx';
import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from 'react-transition-group';

import Button from './Button';
import X from './icons/X';

import styles from './Modal.module.css';
import utilStyles from '../assets/utils.module.css';

interface ModalProps {
  open: boolean,
  onClose: () => void
  children?: JSX.Element,
};

const MOUNT_NODE = document.body;
const TRANSITION_TIME = 100;

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [transitionIn, setTransitionIn] = useState(open);
  
  useEffect(() => {
    setTransitionIn(open);

    if (!open) { return; }

    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!modalRef.current || modalRef.current.contains(event.target as Element)) {
        return;
      }

      setTransitionIn(false);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    const prevOverflow = MOUNT_NODE.style.overflow;
    MOUNT_NODE.style.overflow = 'hidden';

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);

      MOUNT_NODE.style.overflow = prevOverflow;
    };
  }, [open]);

  return createPortal(
    <CSSTransition
      nodeRef={modalRef}
      in={transitionIn}
      onExited={onClose}
      classNames={{ enterDone: utilStyles.slideFadeEnabled }}
      timeout={TRANSITION_TIME}
    >
      <dialog open={open} ref={modalRef} className={cn(styles.modal, utilStyles.slideFade)}>
        <Button
          classes={styles.button}
          circular
          icon={<X/>}
          onClick={ () => { setTransitionIn(false); } }
        ></Button>
        { children }
      </dialog>
    </CSSTransition>, MOUNT_NODE
  );
}
