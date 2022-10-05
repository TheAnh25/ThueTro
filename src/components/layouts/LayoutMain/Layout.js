import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Routers from '../../../routers/Routers'

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
