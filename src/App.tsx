import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { submitNote, deleteNote } from "./redux/actions";
import ListNotes from './components/ListNotes/ListNotes';
import { NotesState } from "./redux/notesReducer";
import { AddNote } from './components/AddNote/AddNote'
import { v1 as uuidv1 } from 'uuid';

const App = () => {
  const [note, setNote] = useState({
    id: '',
    title: "",
    text: ""
  });
  const notes = useSelector((state: NotesState[]) => state);

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    let newNote: any = { ...note };
    newNote.id = uuidv1();
    newNote[name] = value;
    setNote(newNote);
  };

  const handleSubmit = () => {
    dispatch(submitNote(note));
    setNote({
      id: '',
      title: "",
      text: ""
    });
  };

  const onEditNote = (id: string) => {
    const note = notes.filter((note) => note.id === id);
    setNote({
      id: note[0].id,
      title: note[0].title,
      text: note[0].text
    })
    dispatch(deleteNote(note[0].id))
  };

  const onDeleteNote = (id: string) => {
    dispatch(deleteNote(id))
  };

  return (
    <div className="App">
      Notes
      <AddNote handleSubmit={handleSubmit} handleChange={handleChange} note={note}/>
      <ListNotes editNote={onEditNote} deleteNote={onDeleteNote}/>
    </div>
  );
}

export default App;
