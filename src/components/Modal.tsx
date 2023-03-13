import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export interface ModalProps {
  children: JSX.Element,
  open: boolean,
  onClose: () => void
};

export const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

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
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [modalRef, onClose]
  );

  if (!open) return null;

  return createPortal(
    <div ref={modalRef} className="modal">
      { children }
    </div>, document.querySelector('body')!
  );
}