import { Switch } from "@mui/material"
import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Announcement from "../components/Announcement"
import { Catagories } from "../components/Catagories"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { Products } from "../components/Products"
import Slider from "../components/Slider"


export default function Home(){
  return(
    <div>
      
<Announcement />
<Navbar />
<Slider />
<Catagories />
<Products />
<Newsletter />
<Footer />
</div>
 )
}

