import React from "react"
import Announcement from "./components/Announcement"
import { Catagories } from "./components/Catagories"
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"
import Home from "./pages/Home"

export default function App(){
  return(<div>
      <Announcement />
      <Navbar />
      <Slider />
      <Catagories />

  </div>)
}
