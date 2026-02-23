import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import React from 'react';
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Login from "./pages/Login";
import Cart from "./pages/cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from 'react-toastify';

function App() {
const notify = () => toast("Wow so easy!");
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw]lg:px-[9vw]" >
        <ToastContainer/>
        <Navbar />
        <SearchBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />


        </Routes>

        <Footer />
      </div>

    </>
  )
}

export default App
