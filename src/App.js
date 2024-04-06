import React from 'react';
import './App.css';
import Navbars from './Components/Navbar/Navbars';
import {Routes, Route}  from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <>
      <Navbars />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>} >
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<LoginSignup/>} />
     </Routes>
     
     <Footer />
    </>
  )
}

export default App
