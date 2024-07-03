import './App.css';
import './server.js';
import { Routes, Route } from 'react-router-dom';
import About from './pages/vans/About.jsx';
import Vans from './pages/vans/Vans.jsx';
import Home from './pages/vans/Home.jsx';
import VanDetail from './pages/vans/VanDetail.jsx';
import Layout from './components/Layout.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostLayout from './components/HostLayout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import HostVans from './pages/Host/HostVans.jsx';
import HostVanDetail from './pages/Host/HostVanDetail.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />}/>
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />
          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetail />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;