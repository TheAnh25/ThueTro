import React from 'react'
import '../Error404/Error404.css'
import Helmet from '../../components/Helmet/Helmet'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <Helmet title="404 Not found">
      <div className="Container__NotFound">
        <div className="NotFound">
          <span className="NotFound__text">404 SORRY</span>
          <p className="NotFound__find">we couldn't find that page</p>
          <p className="NotFound__search">
            Try searching or go to{' '}
            <span className="NotFound__home">
              <Link to="/">NhaTroSV's home page.</Link>
            </span>
          </p>
        </div>
        <Link to="/">
          <img
            src="https://topshare.vn/wp-content/uploads/2021/01/Hinh-nen-den-trang-buon-cuc-dep-12.jpg"
            alt=""
            className="NotFound__img"
          />
        </Link>
      </div>
    </Helmet>
  )
}

export default Error404
