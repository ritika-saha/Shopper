import React from "react"
import Announcement from "./components/Announcement"
import { Catagories } from "./components/Catagories"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import { Products } from "./components/Products"
import Slider from "./components/Slider"
import Home from "./pages/Home"

export default function App(){
  return(<div>
      <Announcement />
      <Navbar />
      <Slider />
      <Catagories />
      <Products />
      <Newsletter />
      <Footer />

  </div>)
}
