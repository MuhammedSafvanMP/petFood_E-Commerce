import React from 'react'
import 'swiper/swiper-bundle.css';
import { foodData } from '../data/data';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


export default function SingleProduct() {
   const { id } = useParams();
   const product = foodData.find((data) => data.id == id);
  return (
    <section id="selling-product">
    <div className="container my-md-5 py-5">
      <div className="row g-md-5">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-md-12">
              
              <div className="swiper product-large-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img width={"80%"} src={`.${product.image}`} className="img-fluid"  />
                  </div>

                </div>
              </div>
            </div>
          

          </div>

        </div>
        <div className="col-lg-6 mt-5 ">
          <div className="product-info">
            <div className="element-header">
              <h2 itemprop="name" className="display-6"> {product.title} </h2>
              <div className="rating-container d-flex gap-0 align-items-center">
              <span className="rating secondary-font">
                          {Array.from({ length: product.rating }, (_, index) => (
                            <FaStar
                              key={index}
                              icon="clarity:star-solid"
                              className="text-primary"
                            />
                            
                          ))}
                        </span>
              </div>
            </div>
            <div className="product-price pt-3 pb-3">
              <strong className="text-primary display-6 fw-bold">${product.price}.00</strong><del className="ms-2">$240.00</del>
            </div>
            <p>Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea
              blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris,
              cras egestas quam venenatis neque.</p>
            <div className="cart-wrap">
             
            
              <div className="product-quantity pt-2">
                <div className="stock-number text-dark"><em>2 in stock</em></div>
                <div className="stock-button-wrap">

                  <div className="input-group product-qty align-items-center w-25">
                    <span className="input-group-btn">
                      <button type="button" className="quantity-left-minus btn btn-light btn-number" data-type="minus">
                      <FaPlusSquare />
                      </button>
                    </span>
                    <input type="text" id="quantity" name="quantity"
                      className="form-control input-number text-center p-2 mx-1" value="1" />
                    <span className="input-group-btn">
                      <button type="button" className="quantity-right-plus btn btn-light btn-number" data-type="plus"
                        data-field="">
                       <FaMinusSquare />
                      </button>
                    </span>
                  </div>

                  <div className="d-flex flex-wrap pt-4">
                    <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                      <h5 className="text-uppercase m-0">Add to Cart</h5>
                    </a>
                    <a  className="btn-wishlist px-4 pt-3 ">
                    <FaHeart
                      icon="fluent:heart-28-filled"
                      className="fs-5"        
                    />
                   </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
