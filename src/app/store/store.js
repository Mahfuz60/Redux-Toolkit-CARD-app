import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../../component/features/BookSlice/BookSlice';

export const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});
