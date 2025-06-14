import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favorites from './pages/Starred';
import { Routes, Route } from 'react-router';
import SetDetails from './pages/SetDetails';
import CardDetails from './pages/CardDetails';

function App() {

  return (
    <>
      <div className="app">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
             <Route path="/favorites" element={<Favorites />}/>
             <Route path="/:setId" element={<SetDetails />}/>
             <Route path="/:packId/:cardNum" element={<CardDetails />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
