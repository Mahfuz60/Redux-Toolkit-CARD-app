import React from 'react';
import './BooksView.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../../BookSlice/BookSlice';
import { Link } from 'react-router-dom';

const BookView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  const handleBookDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className='booksView'>
      <h1>List of Books</h1>

      <div className='booksTable'>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => {
                const { id, author, title } = book;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td className='tableBtn'>
                      <Link to='/editBook' className='edit-link' state={{ id, author, title }}>
                        <button>Edit</button>
                      </Link>
                      <button onClick={() => handleBookDelete(id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookView;
