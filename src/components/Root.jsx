import React from 'react'
import Nav from './nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

export default function Root() {
  return (
    <div>
        <Nav/>
  <main>
    <Outlet/>
  </main>
  <Footer/>
    </div>
  )
}
