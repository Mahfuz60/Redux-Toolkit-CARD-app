import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './EditBook.css';
import { updateBook } from '../../BookSlice/BookSlice';

const EditBook = () => {
  const location = useLocation();
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleUpdateBook = (e) => {
    e.preventDefault();
    dispath(updateBook({ id, title, author }));
    navigate('/showBook', { replace: true });
  };
  return (
    <div className='editBook-container'>
      <h1>Edits Book</h1>
      <form onSubmit={handleUpdateBook}>
        <div className='form-field'>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            id='title'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className='form-field'>
          <label htmlFor='author'>Author:</label>
          <input
            type='text'
            id='author'
            name='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button className='formBtn' type='submit'>
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
