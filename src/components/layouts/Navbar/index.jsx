import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
      <ul class="navbar__links">
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/">Phòng trọ</Link>
        </li>
        <li>
          <Link to="/">Căn hộ chung cư</Link>
        </li>
        <li>
          <Link to="/">Ở ghép</Link>
        </li>
        <li>
          <Link to="/">Nhà mặt phố</Link>
        </li>
        <li>
          <Link to="/Contact">Liên hệ</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
