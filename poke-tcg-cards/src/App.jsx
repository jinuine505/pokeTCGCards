import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Routes, Route } from 'react-router'
import SetDetails from './pages/SetDetails'

function App() {

  return (
    <>
      <div className="app">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
             <Route path="/favorites" element={<Favorites />}/>
             <Route path="/:packId" element={<SetDetails />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
