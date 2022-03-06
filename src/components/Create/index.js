import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { addDoc, colRef} from '../../config';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title: title,
      content: body,
      createdAt: new Date(),
    })
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        alert('Error');
      });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          rows="10"
          cols="100"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default Create;
