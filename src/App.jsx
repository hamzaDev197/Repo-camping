
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Home from "./Components/outlet/Home/Home"
import Navbar from './Components/NavBar/Navbar';
import Footer from "./Components/outlet/Footer/Footer"
import Register from "./Components/Register/Register"
import Login from "./Components/Login/Login"
import Profile from './Components/Profile/Profile';
import ListProducts from './Components/List-Product/ListProducts';
import EditProfile from './Components/Profile/Edit-profile/EditProfile';
import Auth from './Components/Auth/Auth';

const Layout = () => {

  return (
    < >
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />
    }, {
      path: '/Login',
      element: <Login />
    }
      , {
      path: '/create-account',
      element: <Register />
    }
      , {
      path: '/profile/:id?',
      element: <Auth element={Profile} />,
      children: [
        {
          path: 'edit-profile',
          element: <EditProfile />
        }
      ]
    }, {
      path: '/products',
      element: <ListProducts />
    }
    ]
  }])

  return (
    <RouterProvider router={router} />
  )
}

export default App
