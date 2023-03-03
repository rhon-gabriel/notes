export type Note = { id: string; title: string; text: string };
export type SubmitNoteType = { type: "SUBMIT_NOTE"; note: Note };
export type DeleteNoteType = { type: "DELETE_NOTE"; id: string };
export type Action = SubmitNoteType | DeleteNoteType;

export const submitNote = (note: Note): SubmitNoteType => ({
  type: "SUBMIT_NOTE",
  note,
});

export const deleteNote = (id: string): DeleteNoteType => {
  return {
    type: "DELETE_NOTE",
    id,
  };
};
