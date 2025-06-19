import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favorites from './pages/Starred';
import { Routes, Route } from 'react-router';
import SetDetails from './pages/SetDetails';
import CardDetails from './pages/CardDetails';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <div className="app">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starred" element={<Favorites />} />
            <Route path="/:setId" element={<SetDetails />} />
            <Route path="/:setId/:cardNum" element={<CardDetails />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
