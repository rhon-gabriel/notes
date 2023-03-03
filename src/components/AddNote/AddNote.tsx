import React from "react";
import { Props } from "./types";
import styles from "./AddNote.module.scss";

export const AddNote: React.FC<Props> = ({
  handleSubmit,
  handleChange,
  note,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      data-testid="submit-button"
      className={styles.container}
    >
      <div className={styles.subContainer}>
        <input
          name="title"
          value={note.title}
          className={styles.title}
          onChange={handleChange}
          data-testid="title-input"
          placeholder="title..."
          required
        />
        <div className={styles.noteContainer}>
          <textarea
            name="text"
            className={styles.note}
            value={note.text}
            placeholder="Note..."
            onChange={handleChange}
            data-testid="text-input"
            required
          />
        </div>
        <button className={styles.submitButton}>Save</button>
      </div>
    </form>
  );
};
