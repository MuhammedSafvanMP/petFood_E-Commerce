import React, { memo, useContext } from "react";
import { globalContext } from "../context/GlobalContext";
import { FaHeart } from "react-icons/fa";
import Services from "../pages/Services";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import { useNavigate } from "react-router-dom";

 function Cards() {
  const [
    handleAdd,
    handleLike,
    filteredData,
    setFilteredData,
    user,
    setUser,
    search,
    setSearch,
    handleSignup,
    show,
    setShow,
    products,
    setProducts,
  ] = useContext(globalContext);


  const Navigate = useNavigate()
  return (
    <>
    
      <section style={{ backgroundColor: "#eee" }}>
        <div className="text-center container py-5">
          <h4 className="mt-4 mb-5">
            <strong>Bestsellers</strong>
          </h4>

          <div className="row">
            {products
              .filter((val) => {
                if (search === "") return val;

                const lowerCaseSearch = search.toLowerCase();

                if (
                  val.title &&
                  val.title.toLowerCase().includes(lowerCaseSearch)
                ) {
                  return val;
                } else if (
                  val.category &&
                  val.category.toLowerCase().includes(lowerCaseSearch)
                ) {
                  return val;
                }

                return null;
              })

              .map((val) => {
                return (
                  <div className="col-lg-4 col-md-12 mb-4" key={val.id}>
                    <div className="card">
                      <div
                        className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                        data-mdb-ripple-color="light"
                      >
                        <img style={{cursor: "pointer"}} src={val.image} onClick={() => Navigate(`/product/${val.id}`)} className="w-100" />
                        <a>
                          <div className="mask">
                            <div className="d-flex justify-content-start align-items-end h-100">
                              <h5>
                                <span className="badge bg-primary ms-2">
                                  New
                                </span>
                              </h5>
                            </div>
                          </div>
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
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
                      <div className="d-flex flex-wrap mt-3">
                        <a
                          onClick={() => (show && show.name ? handleAdd(val.id) : Navigate('/signup'))}
                          className="btn-cart me-3 px-4 pt-3 pb-3"
                          style={{ cursor: "pointer" }}
                        >
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </a>
                        <a
                          onClick={() => (show && show.name ? handleLike(val.id) : Navigate('/signup'))}
                          className="btn-wishlist px-4 pt-3 "
                        >
                          <FaHeart
                            icon="fluent:heart-28-filled"
                            className="fs-5"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

     
    </>
  );
}

export default memo(Cards)