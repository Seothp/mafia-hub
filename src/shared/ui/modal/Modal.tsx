import React, { ReactNode, Ref, RefObject, useEffect } from "react";

import { Portal } from "./Portal";

import styles from "./Modal.module.css";

type Props = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
};

export const Modal = ({ isOpen, children, onClose }: Props) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={styles.modal}>
        <div
          className={styles.modalOverlay}
          onClick={onClose}
          role="button"
        ></div>
        <div className={styles.modalContent} aria-modal={true}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
