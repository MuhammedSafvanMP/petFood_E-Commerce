import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { FaUserCheck } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { MdHighQuality } from "react-icons/md";

export default function Services() {
  return (
    <section id="service">
    <div className="container py-5 my-5">
      <div className="row g-md-5 pt-4">
        <div className="col-md-3 my-3">
          <div className="card">
            <div>
            <TiShoppingCart style={{fontSize: "2.4rem", color: '#DEAD6F'}} />
            </div>
            <h3 className="card-title py-2 m-0">Free Delivery</h3>
            <div className="card-text">
              <p className="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-3">
          <div className="card">
            <div>
            <FaUserCheck  style={{fontSize: "2.4rem", color: '#DEAD6F'}} />
            </div>
            <h3 className="card-title py-2 m-0">100% secure payment</h3>
            <div className="card-text">
              <p className="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-3">
          <div className="card">
            <div>
            <BiSolidOffer style={{fontSize: "2.4rem", color: '#DEAD6F'}} />
            </div>
            <h3 className="card-title py-2 m-0">Daily Offer</h3>
            <div className="card-text">
              <p className="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-3">
          <div className="card">
            <div>
            <MdHighQuality style={{fontSize: "2.4rem", color: '#DEAD6F'}} />
            </div>
            <h3 className="card-title py-2 m-0">Quality guarantee</h3>
            <div className="card-text">
              <p className="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}
