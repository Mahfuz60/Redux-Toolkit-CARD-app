import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import NavBar from './component/NavBar/NavBar';
import AddBook from './component/pages/AddBook/AddBook';
import ShowBook from './component/pages/ShowBook/ShowBook';
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/showBook' element={<ShowBook />} />
        <Route path='/' element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
