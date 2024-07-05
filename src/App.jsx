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
import Dashboard, { loader as dashboardLoader } from './pages/Host/Dashboard.jsx';
import HostVans, { loader as HostVansLoader } from './pages/Host/HostVans.jsx';
import HostVanDetail, { loader as HostVanDetailLoader } from './pages/Host/HostVanDetail.jsx';
import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import NotFound from './components/NotFound.jsx';
import Error from './components/Error.jsx';
import Login, { action as loginAction} from './pages/Login.jsx';
import AuthRequired from './components/AuthRequired.jsx';
 
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
      action={loginAction}
    />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route
      path="vans/:id"
      element={<VanDetail />}
      errorElement={<Error />}
      loader={vanDetailLoader}
    />

    <Route element={<AuthRequired />}>
      <Route path="host" element={<HostLayout />} >
        <Route
          index
          element={<Dashboard />}
          errorElement={<Error />}
          loader={dashboardLoader}
        />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route
          path="vans"
          element={<HostVans />}
          errorElement={<Error />}
          loader={HostVansLoader}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          errorElement={<Error />}
          loader={HostVanDetailLoader}
        >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
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