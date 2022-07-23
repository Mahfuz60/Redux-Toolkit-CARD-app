import React, { useState } from 'react';
import './AddBook.css';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../../BookSlice/BookSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispath = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author };
    dispath(addBook(book));
    navigate('/showBook', { replace: true });
  };
  return (
    <div className='addBook-container'>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
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
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
