import React from 'react'
import '../ProductItemTest/ProductItemTest.css'
import products from '../../assets/images/data-fake/products'

const ProductItemTest = () => {
  return (
    <>
      {products.length &&
        products.map((product) => (
          <div className="Product">
            <div className="ContainerProductTest">
              <div className="Product__Image">
                <a href="/ProductItemTest">
                  <img src={product.image} alt="" />
                </a>
              </div>
              <div className="ProductInfo">
                <div className="ProductTitle">
                  <div className="ProductTitle__Content">
                    <a href="/">{product.title}</a>
                  </div>
                  <div className="ProductTitle__price">
                    <p>{product.price}</p>
                  </div>
                </div>
                <div className="ProductAddress__Des">
                  <div className="ProductAddress">
                    <div className="ProductAddress__Icon">
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                    </div>
                    <div className="ProductAddress__Content">
                      <p>{product.address}</p>
                    </div>
                  </div>
                  <div className="ProductAddress__detail">
                    {product.description}
                  </div>
                </div>
                <div className="Product__Description">
                  <div className="">
                    <p className="Product__Acreage">
                      Diện tích: {product.square}
                      <sup>2</sup>
                    </p>
                  </div>
                  <div className="Product__Area">
                    <p>Quận/Huyện: {product.address}</p>
                  </div>
                  <div className="Product__Date">
                    <p className="Product__Date--time">{product.date}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <hr
                font-weight="400"
                width="65%"
                size="1px"
                align="center"
                color="gray"
              ></hr>
            </div>
          </div>
        ))}
    </>
  )
}

export default ProductItemTest
