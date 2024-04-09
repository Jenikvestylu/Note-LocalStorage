import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import NoteForm from './NoteForm';
import Note from './Note';
import './Note.css';


function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="App">
      <Navbar />
      <NoteForm addNote={addNote} />
      <hr />
      <div>
        {notes.map((note, index) => (
          <Note key={index} title={note.title} content={note.content} />
        ))}
      </div>
    </div>
  );
}

export default App;
