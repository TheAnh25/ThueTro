import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      {/* FOOTER SCROLL TO TOP  */}
      <div onClick={() => window.scrollTo(0, 0)} className="btn__backtop">
        Back to top
      </div>
      {/* FOOTER BLOCK 1  */}
      <div className="footer__wrap">
        <div className="footer__content">
          <div className="footer__content--base">
            <h4 className="footer__content--title">Socials Contact</h4>
            <ul className="footer__content--list">
              <li>Phone</li>
              <li>Email</li>
              <li>Zalo</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>About NhaTroSV</li>
            </ul>
          </div>
          <div className="footer__content--base">
            <h4 className="footer__content--title">Customer Support</h4>
            <ul className="footer__content--list">
              <li>Trung tâm hỗ trợ</li>
              <li>An toàn mua bán</li>
              <li>Qui định cần biết</li>
              <li>Qui chế quyền riêng tư</li>
            </ul>
          </div>
          <div className="footer__content--base">
            <h4 className="footer__content--title">About NhaTroSV</h4>
            <ul className="footer__content--list">
              <li>Giới thiệu</li>
              <li>Tuyển dụng</li>
              <li>Truyền thông</li>
              <li>Block</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright w-full bg-[#131A22] flex flex-col items-center  py-[10px] md:py-[20px] justify-center text-white">
        <span>
          ©copyright 2022 - TheAnh25 -{' '}
          <a
            className="text-blue-400 hover:underline"
            href="https://github.com/TheAnh25"
            target={'_blank'}
          >
            Github
          </a>
        </span>
        <span className="technology text-blue-400 mt-1">
          Reactjs - Javascript - Css - Orthers
        </span>
      </div>
    </footer>
  )
}

export default Footer
