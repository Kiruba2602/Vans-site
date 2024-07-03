import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {

  return (
    <>
    <header>
      <Link to={'/'}>#VANLIFE</Link>
      <nav>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
      </nav>
    </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;