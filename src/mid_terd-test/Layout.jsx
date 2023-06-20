import React from 'react'

  
import Content from './component/Content/Content'
import "./Layout.scss"
import Footer from './component/Footer/Footer'
import Navbar1 from './component/Navbar/Navbar1'
import Navbar2 from './component/Navbar/Navbar2'
export default function Layout() {
  return (
    <div className='main__body'>
      <Navbar1></Navbar1>
      <Navbar2></Navbar2>
        <Content></Content>
        <Footer></Footer>
    </div>
  )
}
