import React from "react";
import { useSelector } from "react-redux";
import { NotesState } from "../../redux/notesReducer";
import styles from "./ListNotes.module.scss";
import { Props } from "./types";

const ListNotes: React.FC<Props> = ({ editNote, deleteNote }) => {
  const notes = useSelector((state: NotesState[]) => state);

  return (
    <div className={styles.listNotes}>
      {notes.map((note: any) => (
        <div className={styles.note} key={note.id}>
          <p>{note.title}</p>
          <p>{note.text}</p>
          <div className={styles.actionsContainer}>
            <button
              className={styles.editButton}
              onClick={() => editNote(note.id)}
            >
              Edit
            </button>
            <button
              className={styles.deleteButton}
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListNotes;
