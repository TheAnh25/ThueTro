import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Homes from '../pages/Homes'
import Feed from '../Products/Feed'
import Contact from '../pages/Contact'
import ProductItemTest from '../Products/ProductItemTest'
import Error404 from '../pages/Error404'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Homes />} />
      <Route path="/Feed" element={<Feed />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/ProductItemTest" element={<ProductItemTest />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default Routers
