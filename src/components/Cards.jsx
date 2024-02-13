import React, { useContext } from 'react'
import { globalContext } from '../context/GlobalContext'
import { foodData } from '../data/data'

export default function Cards() {

  const [likeItem, setLikeItem, addCart, setAddCart,handleAdd, handleLike, filteredData, setFilteredData, formData, setFormData, loginData, setLoginData, user, setUser,search, setSearch] = useContext(globalContext)

  return (
    <section style={{ backgroundColor: "#eee" }}>
    <div className="text-center container py-5">
      <h4 className="mt-4 mb-5"><strong>Bestsellers</strong></h4>
  
      <div className="row">
        {
         foodData.filter((val) => {
          if (search === "") return val;
        
          const lowerCaseSearch = search.toLowerCase();
        
          if (val.title && val.title.toLowerCase().includes(lowerCaseSearch)) {
            return val;
          } else if (val.category && val.category.toLowerCase().includes(lowerCaseSearch)) {
            return val;
          }
        
          return null;
        })
        
          .map(val => {
            return(
              <div className="col-lg-4 col-md-12 mb-4" key={val.id}>
              <div className="card">
                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light">
                  <img src={val.image}
                    className="w-100" />
                  <a >
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5><span className="badge bg-primary ms-2">New</span></h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask" style= {{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">{val.title}</h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>{val.category}</p>
                  </a>
                  <h6 className="mb-3">${val.price}.00</h6>
                </div>
              </div>
            </div>
            )
          })
        }
       

      </div>
  
     
    </div>
  </section>
  )
}
