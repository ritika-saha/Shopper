import React from "react"

import Home from "./pages/Home"
import ProductList from './pages/ProductList';
import ViewProduct from './pages/ViewProduct';
import Signum from './Signum';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
//import { Switch } from "@mui/material";


//pushed to github

export default function App(){
  return(
   // <BrowserRouter>
  
    <Routes>
    <Route path="/" element={<Signum />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/productList" element={<ProductList />} />
    <Route path="/viewProduct" element={<ViewProduct />} />

    </Routes>
    //</BrowserRouter>
  )
}
