import React, { useEffect, useRef, useState } from "react";
import { Modal } from "../../../shared/ui/modal";
import { addTournament } from "../model";

import styles from "./AddTournamentButton.module.css";

export const AddTournamentButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      inputRef?.current?.focus();
    }
  }, [isModalOpen]);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (inputValue) {
      addTournament({ name: inputValue });
      setIsModalOpen(false);
      setInputValue("");
    }
  };

  return (
    <>
      <button onClick={handleClick}>add tournament</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className={styles.modalTitle}>Add tournament</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            value={inputValue}
            onChange={({ target: { value } }) => setInputValue(value)}
            type="text"
            placeholder="Nickname"
            ref={inputRef}
          />
          <button type="submit" className={styles.submitButton}>
            add
          </button>
        </form>
      </Modal>
    </>
  );
};
