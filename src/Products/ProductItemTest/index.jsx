import React from 'react'
import '../ProductItemTest/ProductItemTest.css'

const ProductItemTest = () => {
  return (
    <div className="ContainerProductTest">
      <div className="ProductImage">
        <img
          src="https://datnendep.vn/wp-content/uploads/2019/10/anh-phong-tro-1_1545126166.jpg"
          alt=""
        />
      </div>
      <div className="ProductInfo">
        <div className="ProductTitle">
          <div className="ProductTitle__Content">
            <a href="/">
              Cho thuê nhà 4 phòng ngủ đường lê đức thọ - quận gò vấp
            </a>
          </div>
          <div className="ProductTitle__price">
            <p>12 triệu</p>
          </div>
        </div>
        <div className="ProductAddress">
          <div>
            <div className="ProductAddress__Icon">
              <i className="fa-sharp fa-solid fa-location-dot"></i>
            </div>
            <div className="ProductAddress__Content">
              <p>Quận gò vấn</p>
            </div>
          </div>
          <div className="ProductAddress__detail">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            tenetur quaerat perferendis suscipit architecto, neque perspiciatis
            nobis rem accusantium commodi!
          </div>
        </div>
        <div className="Product__Description">
          <div className="">
            <span className="Product__Acreage">
              Diện tích: 0m
              <p className="Product__Acreage--Square">2</p>
            </span>
          </div>
          <div className="Product__Area">
            <p>Quận/Huyện: Quận Gò Vấp</p>
          </div>
          <div className="Product__Date">
            <p className="Product__Date--time">03/10/2022</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItemTest
