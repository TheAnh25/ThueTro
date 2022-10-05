import React from 'react'
import '../Contact/Contact.css'

const Contact = () => {
  return (
    <>
      <section className="Contact">
        <div className="container__Contact">
          <div className="container__Contact--info">
            <div>
              <h2>Thông Tin Liên Hệ</h2>
              <ul className="info">
                <li className="li__Contact">
                  <span>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  <span>
                    441/32/33 Điện Biên Phủ
                    <br />
                    Phường 25, Bình Thạnh,
                    <br />
                    Thành Phố Hồ Chí Minh
                  </span>
                </li>
                <li className="li__Contact">
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                  <span>nguyenducgiau9999@gmail.com</span>
                </li>
                <li className="li__Contact">
                  <span>
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                  </span>
                  <span>039-660-7573</span>
                </li>
              </ul>
            </div>
            <ul className="sci">
              <li className="li__Contact">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li className="li__Contact">
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li className="li__Contact">
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li className="li__Contact">
                <a href="#">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </li>
              <li className="li__Contact">
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="containerForm">
            <h2>Gửi Lời Nhắn</h2>
            <div class="formBox">
              <div class="inputBox w50">
                <input type="text" name="" required />
                <span>Họ</span>
              </div>
              <div class="inputBox w50">
                <input type="text" name="" required />
                <span>Tên</span>
              </div>
              <div class="inputBox w50">
                <input type="text" name="" required />
                <span>Email</span>
              </div>
              <div class="inputBox w50">
                <input type="text" name="" required />
                <span>Số Điện Thoại</span>
              </div>
              <div class="inputBox w100">
                <textarea name="" required></textarea>
                <span>Lời Nhắn Của Bạn</span>
              </div>
              <div class="inputBox w100">
                <input type="submit" value="Gửi" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
