import './App.css';
import './server.js';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Vans from './components/Vans';
import Home from './components/Home';
import VanDetail from './components/VanDetail.jsx';

function App() {

  return (
    <>
    <div className="site-wrapper">
      <header>
        <Link to={'/'} className='site-logo'>#VANLIFE</Link>
        <nav>
          <Link to={'/about'}>About</Link>
          <Link to={'/vans'}>Vans</Link>
        </nav>
      </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetail />} />
        </Routes>
      <footer>
          <p>&copy; 2024 #VANLIFE</p>
      </footer>
    </div>
    
    </>
  )
}

export default App;