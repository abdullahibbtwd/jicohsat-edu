import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Services from './component/Services/Services'
import Banner from './component/Banner/Banner'
import Facilities from './component/Facilities/Facilities'
import Campus from './component/Campus/Campus'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import Login from "./component/Login/Login"
import { createBrowserRouter, Routes, Route, RouterProvider, BrowserRouter, } from 'react-router-dom';
import Register from './component/Register/Register'

const Layout = () => {
  return (
    <>
      <Hero/>
      <Services/>
      <Banner/>
      <Facilities/>
      <Campus/>
      <Contact/>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/Dashboard",
    
  }


])

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      <RouterProvider router={router}  basename="/" />
    </main>
  )
}

export default App
