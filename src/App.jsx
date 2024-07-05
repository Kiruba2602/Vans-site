import './App.css';
import './server.js';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import About from './pages/About.jsx';
import Vans, { loader as vansLoader } from './pages/vans/Vans.jsx';
import Home from './pages/Home.jsx';
import VanDetail, { loader as vanDetailLoader } from './pages/vans/VanDetail.jsx';
import Layout from './components/Layout.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostLayout from './components/HostLayout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import HostVans, { loader as HostVansLoader } from './pages/Host/HostVans.jsx';
import HostVanDetail, { loader as HostVanDetailLoader } from './pages/Host/HostVanDetail.jsx';
import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import NotFound from './components/NotFound.jsx';
import Error from './components/Error.jsx';
import Login, { loader as LoginLoader} from './pages/Login.jsx';
import { requireAuth } from './utils.js';
 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />} errorElement={<Error/> }>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />}/>
      <Route path='login' element={<Login />} loader={LoginLoader} />
      <Route path='vans' element={<Vans />} loader={vansLoader} />
      <Route path='vans/:id' element={<VanDetail />} loader={vanDetailLoader} />
      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} loader={ async () => {await requireAuth(); return null} } />
        <Route path='income' element={<Income />} loader={ async () => {await requireAuth(); return null} } />
        <Route path='vans' element={<HostVans />} loader={HostVansLoader} />
        <Route path='vans/:id' element={<HostVanDetail />} loader={HostVanDetailLoader}>
          <Route index element={<HostVanInfo />} loader={ async () => {await requireAuth(); return null} } />
          <Route path='pricing' element={<HostVanPricing />} loader={ async () => {await requireAuth(); return null} } />
          <Route path='photos' element={<HostVanPhotos />} loader={ async () => {await requireAuth(); return null} } />
        </Route>
        <Route path='reviews' element={<Reviews />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  ));

function App() {
 

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;