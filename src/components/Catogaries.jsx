import React from 'react'
import { PiBirdLight } from "react-icons/pi";
import { PiDogDuotone } from "react-icons/pi";
import { IoFishOutline } from "react-icons/io5";
import { PiCat } from "react-icons/pi";

export default function Catogories() {
  return (
    <section id="categories">
    <div className="container my-3 py-5">
      <div className="row my-5">
      
        <div className="col text-center">
          <a  className="categories-item">
          < PiBirdLight style={{fontSize: "5.4rem", color: '#DEAD6F'}}  />
            <h5>Bird</h5>
          </a>
        </div>
        <div className="col text-center">
          <a  className="categories-item">
            <PiDogDuotone style={{fontSize: "5.4rem", color: '#DEAD6F'}} />
            <h5>Dog </h5>
          </a>
        </div>
        <div className="col text-center">
          <a className="categories-item">
          <IoFishOutline style={{fontSize: "5.4rem", color: '#DEAD6F'}} />
            <h5>Fish </h5>
          </a>
        </div>
        <div className="col text-center">
          <a  className="categories-item">
          <PiCat style={{fontSize: "5.4rem", color: '#DEAD6F'}} />
            <h5>Cat </h5>
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}
