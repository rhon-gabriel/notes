import React, { useState } from 'react';
import './App.css';
import { useDispatch } from "react-redux";
import { submitNote } from "./redux/actions";
import { AddNote } from './components/AddNote/AddNote'
import { v1 as uuidv1 } from 'uuid';

const App = () => {
  const [note, setNote] = useState({
    id: '',
    title: "",
    text: ""
  });

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

  return (
    <div className="App">
      Notes
      <AddNote handleSubmit={handleSubmit} handleChange={handleChange} note={note}/>
    </div>
  );
}

export default App;
