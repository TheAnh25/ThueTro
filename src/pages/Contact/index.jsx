import React from 'react'
import Helmet from '../../components/Helmet/Helmet'
import '../Contact/Contact.css'

const Contact = () => {
  return (
    <>
      <Helmet title="Contact">
        <div className="container__Contact">
          <div className="container__Contact--info">
            <h2>Thông Tin Liên Hệ</h2>
            <ul className="info">
              <li className="li__Contact">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <p>
                  441/32/33 Điện Biên Phủ Phường 25, Bình Thạnh, Thành Phố Hồ
                  Chí Minh
                </p>
              </li>
              <li className="li__Contact">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <p>nguyenducgiau9999@gmail.com</p>
              </li>
              <li className="li__Contact">
                <i className="fa fa-phone-square" aria-hidden="true"></i>
                <p>039-660-7573</p>
              </li>
            </ul>
          </div>
          <ul className="sci">
            <li className="li__Contact">
              <a href="/">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="li__Contact">
              <a href="/">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li className="li__Contact">
              <a href="/">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li className="li__Contact">
              <a href="/">
                <i className="fa fa-pinterest" aria-hidden="true"></i>
              </a>
            </li>
            <li className="li__Contact">
              <a href="/">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </Helmet>
    </>
  )
}

export default Contact
