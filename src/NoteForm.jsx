import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      addNote({
        title: title,
        content: content
      });

      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="NoteForm">
      <label>Název Poznámky</label>
      <p/>
      <input 
        value={title} 
        onChange={handleTitleChange} 
        placeholder="Zadejte název poznámky" 
      />
      <p/>
      <label>Obsah</label>
      <p/>
      <div className='obsahformu'>
        <textarea 
        value={content} 
          onChange={handleContentChange} 
          placeholder="Zadejte obsah" 
        />
        <button onClick={handleSubmit}>Potvrdit</button>
      </div>
    </div>
  );
}

export default NoteForm;
