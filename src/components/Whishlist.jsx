import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { globalContext } from '../context/GlobalContext';
import { MdDelete } from "react-icons/md";

export default function Wishlist() {

  const [ likeItem, setLikeItem] = useContext(globalContext)

  const handleDelete = (id) => {
     setLikeItem(prevLikeItem => prevLikeItem.filter((value) => value.id !== id))
  }
 

  return (    
    <section id="Wishlist" className="py-5 my-5">
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="card-title text-uppercase">
               Product
              </th>
              <th scope="col" className="card-title text-uppercase">
                Unit Price
              </th>
              <th scope="col" className="card-title text-uppercase">
                Stock Status
              </th>
              <th scope="col" className="card-title text-uppercase"></th>
            </tr>
          </thead>
          <tbody>
            {
            
            likeItem &&
            likeItem.map((data) => {
                return(
                  <tr key={data.id}>
                  <td className="py-4">
                    <div className="cart-info d-flex flex-wrap align-items-center ">
                      <div className="col-lg-3">
                        <div className="card-image">
                          <img
                            src={data.image}
                            alt="cloth"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <div className="card-detail ps-3">
                          <h5 className="card-title">
                            <NavLink
                              className="text-decoration-none"
                            >
                              {data.title}{' '}
                            </NavLink>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 align-middle">
                    <div className="total-price">
                      <span className="secondary-font fw-medium">
                        ${data.price}.00
                      </span>
                    </div>
                  </td>
                  <td className="py-4 align-middle">
                    <div className="total-price">
                      <span className="secondary-font fw-medium">In Stoke</span>
                    </div>
                  </td>
                  <td className="py-4 align-middle">
                    <div className="d-flex align-items-center">
                      <div className="me-4">
                        <button className="btn btn-dark p-3 text-uppercase fs-6 btn-rounded-none w-100">
                          Add to cart
                        </button>
                      </div>
                      <div className="cart-remove">
                      <MdDelete style={{fontSize: "3rem"}} onClick={() => handleDelete(data.id)} />
                      </div>
                    </div>
                  </td>
                </tr>
                )
            })
          }  
            
              
          
          </tbody>
        </table>
      </div>
    </section>
  );
}
