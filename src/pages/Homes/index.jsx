import React from 'react'
import Helmet from '../../components/Helmet/Helmet'
import Feed from '../../Products/Feed'
import '../Homes/Homes.css'

const Home = () => {
  return (
    <Helmet title="Home">
      <div className="Homes">
        <Feed />
      </div>
    </Helmet>
  )
}

export default Home
