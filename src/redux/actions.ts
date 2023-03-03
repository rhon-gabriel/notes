export type Note = { id: string; title: string; text: string };
export type SubmitNoteType = { type: "SUBMIT_NOTE"; note: Note };
export type Action = SubmitNoteType

export const submitNote = (note: Note): SubmitNoteType => ({
  type: "SUBMIT_NOTE",
  note,
});