import React from 'react'
import { PiBirdLight } from "react-icons/pi";
import { PiDogDuotone } from "react-icons/pi";
import { IoFishOutline } from "react-icons/io5";
import { PiCat } from "react-icons/pi";

export default function Catogories() {
  return (
    <section id="categories">
    <div class="container my-3 py-5">
      <div class="row my-5">
      
        <div class="col text-center">
          <a href="#" class="categories-item">
          < PiBirdLight style={{fontSize: "5.4rem", color: '#DEAD6F'}}  />
            <h5>Bird</h5>
          </a>
        </div>
        <div class="col text-center">
          <a href="#" class="categories-item">
            <PiDogDuotone style={{fontSize: "5.4rem", color: '#DEAD6F'}} />
            <h5>Dog </h5>
          </a>
        </div>
        <div class="col text-center">
          <a href="#" class="categories-item">
          <IoFishOutline style={{fontSize: "5.4rem", color: '#DEAD6F'}} />
            <h5>Fish </h5>
          </a>
        </div>
        <div class="col text-center">
          <a href="#" class="categories-item">
          <PiCat style={{fontSize: "5.4rem", color: '#DEAD6F'}} />
            <h5>Cat </h5>
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}
