import React from 'react'
import Footer from '../Partials/footer/Footer';
import Welcome from './welcome/Welcome';
import Navbar  from '../Partials/Navbar/Navbar'

export default function () {
  return (
    <div>
         <Navbar/>
         <Welcome/>
         <Footer/>
    </div>
  )
}
