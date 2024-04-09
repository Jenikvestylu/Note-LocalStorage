import React from 'react';
import './Note.css';

function Note({ title, content }) {
  return (
    <div className="Note">
      <div className="NoteContent">
        <h3>{title}</h3>
        <hr/>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Note;
