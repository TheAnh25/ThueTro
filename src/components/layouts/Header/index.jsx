import React from 'react'
import '../Header/Header.css'
import logo from '../../../assets/images/logo-user.jpg'
import FiltersForm from '../../FiltersForm'

const Header = () => {
  const handleFiltersChange = (newFilters) => {
    console.log('New Filters: ', newFilters)
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <a href="/">
            <h1>NHATROSV</h1>
          </a>
        </div>
        <div className="header__search">
          <form className="header__search__form">
            {/* <div className="header__search__form--content">
              <input
                id="textSearch"
                type="text"
                placeholder="Nhập khu vực, địa điểm cho dự án bạn muốn thuê"
              />
            </div> */}
            <FiltersForm onSubmit={handleFiltersChange} />
            <button type="submit" className="header__search__btn">
              <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
              <p>Tìm kiếm</p>
            </button>
          </form>
        </div>
        <div className="header__avatar">
          <ul className="header__avatar--list">
            <li className="header__avatar__user">
              <a href="/">
                <span>
                  <img className="image__user" src={logo} alt="" />
                </span>
                <p>Nguyễn Thế Anh</p>
              </a>
              <div className="header__info__menu">
                <ul className="header__info__menu--list">
                  <li className="header__info__menu--user">
                    <a href="/">
                      <span>
                        <img className="image__user" src={logo} alt="" />
                      </span>
                      <section>Nguyễn Thế Anh</section>
                    </a>
                  </li>
                  <li>
                    <i class="fa-solid fa-plus"></i>
                    <p>Đăng tin cho thuê</p>
                  </li>
                  <li>
                    <i class="fa-solid fa-list"></i>
                    <p>Quản lý cho thuê</p>
                  </li>
                  <li>
                    <i class="fa-solid fa-camera"></i>
                    <p>Thay ảnh đại diện</p>
                  </li>
                  <li>
                    <i class="fa-regular fa-pen-to-square"></i>
                    <p>Cập nhật thông tin</p>
                  </li>
                  <li>
                    <i class="fa-solid fa-lock"></i>
                    <p>Đổi mật khẩu</p>
                  </li>
                  <li>
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <p>Đăng xuất</p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header__avatar__follow">
              <span>
                <i class="fa-sharp fa-solid fa-heart"></i>
              </span>
            </li>
            <li className="header__avatar__post">
              <a href="/">
                <i class="fa-solid fa-plus"></i>
                <p>Đăng tin</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
