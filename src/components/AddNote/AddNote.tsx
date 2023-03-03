import React from "react";
import { Props } from "./types";

export const AddNote: React.FC<Props> = ({
  handleSubmit,
  handleChange,
  note,
}) => {
  return (
    <form onSubmit={handleSubmit} data-testid="submit-button">
      <div>
        <label>Title</label>
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          data-testid="title-input"
          required
        />
      </div>
      <div>
        <label>Text</label>
        <textarea
          name="text"
          value={note.text}
          onChange={handleChange}
          data-testid="text-input"
          required
        />
      </div>
      <div>
        <button>Add Note</button>
      </div>
    </form>
  );
};
