import React, { useEffect,useContext } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; 
import { foodData } from '../data/data';
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { globalContext } from '../context/GlobalContext';



export default function BestRatingProdects() {

  const Navigate = useNavigate();
  const [ likeItem, setLikeItem] = useContext(globalContext)


  const handleLike = (id) => {
    const result = foodData.find((data) => data.id == id);
    if (!likeItem.some((item) => item.id === result.id)) {
      setLikeItem([...likeItem, result]);
    }
  }
  
  useEffect(() => {   
  }, [handleLike]);
   


  useEffect(() => {
    const swiper = new Swiper('.bestselling-swiper', {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }, []);
  
  
  

  return (
    <section id="bestselling" className="my-5 overflow-hidden">
    <div className="container py-5 mb-5">

      <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
        <h2 className="display-3 fw-normal">Best Rating products</h2>
        <div>
          <a  className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
            shop now
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
              <use xlink:href="#arrow-right"></use>
            </svg></a>
        </div>
      </div>

      <div className=" swiper bestselling-swiper">
        <div className="swiper-wrapper">
    {
        foodData&&
        foodData.filter(food => food.rating === 5).map((food) => {
          return(
            <div className="swiper-slide" key={food.id}>
            <div className="card position-relative">
              <a><img onClick={() => Navigate(`${food.id}`)}  src={food.image} className="img-fluid rounded-4" alt="image" /></a>
              <div className="card-body p-0">
                <a>
                  <h3 className="card-title pt-4 m-0"> {food.title} </h3>
                </a>

                <div className="card-text">
                <span className="rating secondary-font">
                          {Array.from({ length: food.rating }, (_, index) => (
                            <FaStar
                              key={index}
                              icon="clarity:star-solid"
                              className="text-primary"
                            />
                            
                          ))}
                        </span>

                  <h3 className="secondary-font text-primary">${food.price}.00</h3>

                  <div className="d-flex flex-wrap mt-3">
                    <a>
                      <h5 className="text-uppercase m-0">Add to Cart</h5>
                    </a>
                    <a  onClick={() => handleLike(food.id)}  className="btn-wishlist px-4 pt-3 ">
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
          )
        })
         
      }

        </div>
      </div>


    </div>
  </section>
  )
}
