import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/pages/Home/Home';
import NavBar from './component/pages/NavBar/NavBar';
import NotFound from './component/pages/NotFound/NotFound';
import BookView from './component/features/books/BookView/BookView';
import AddBook from './component/features/books/AddBook/AddBook';
import EditBook from './component/features/books/EditBook/EditBook';
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/showBook' element={<BookView />} />
        <Route path='/addBook' element={<AddBook />} />
        <Route path='/editBook' element={<EditBook />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
