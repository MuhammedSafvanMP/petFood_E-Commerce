import React, { useContext, useState, useEffect } from "react";
import { globalContext } from "../context/GlobalContext";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function AddToCart() {
  const [likeItem, setLikeItem, addCart, setAddCart] =
    useContext(globalContext);
    const [total, setTotal] = useState(0);

    const handlePrice = () => {
      const totalPrice = addCart.reduce((acc, item) => acc + item.price * item.amount, 0);
      setTotal(totalPrice);
    };
  
    useEffect(() => {
      handlePrice();
    });

    const handleDelete = (id) => {
      setAddCart(prevAddCart => prevAddCart.filter((value) => value.id !== id))
   }
  
  // Calculate the total price using reduce
  // const calculateTotal = () => {
  //   const totalPrice = addCart.reduce(
  //     (acc, cartItem) => acc + cartItem.price,
  //     0
  //   );
  //   setTotal(totalPrice, "total price");
  // };




  // ... rest of your component

  // console.log(Object.values(addCart), 'HELLO');

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3">
                      <a href="#!" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>
                        Continue shopping
                      </a>
                    </h5>
                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have {addCart.length} items in your cart</p>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="text-muted">Sort by:</span>
                          <a href="#!" className="text-body">
                            price <i className="fas fa-angle-down mt-1"></i>
                          </a>
                        </p>
                      </div>
                    </div>

                    {addCart &&
                      addCart.map((cart) => {
                        return (
                          <div className="card mb-3" key={cart.id}>
                            <div className="card-body">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                  <div>
                                    <img
                                      src={cart.image}
                                      className="img-fluid rounded-3"
                                      alt="Shopping item"
                                      style={{ width: "65px" }}
                                    />
                                  </div>
                                  <div className="ms-3">
                                    <h5> {cart.title} </h5>
                                   
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                  <div className="input-group product-qty align-items-center w-25">
                                    <span className="input-group-btn">
                                      <button
                                        type="button"
                                        className="quantity-left-minus btn btn-light btn-number"
                                        data-type="minus"
                                      >
                                        <FaPlusSquare />
                                      </button>
                                    </span>
                                    <input
                                      type="text"
                                      id="quantity"
                                      name="quantity"
                                      className="form-control input-number text-center p-2 mx-1"
                                      value="1"
                                    />
                                    <span className="input-group-btn">
                                      <button
                                        type="button"
                                        className="quantity-right-plus btn btn-light btn-number"
                                        data-type="plus"
                                        data-field=""
                                      >
                                        <FaMinusSquare />
                                      </button>
                                    </span>
                                  </div>
                                  <div style={{ width: "80px" }}>
                                    <h5 className="mb-0">$ {cart.price} </h5>
                                  </div>
                                  <a style={{ color: "#cecece" }}>
                                  <MdDelete style={{fontSize: "3rem", color: "black", cursor: "pointer"}} onClick={() => handleDelete(cart.id)} />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                    {/* Repeat similar structure for other items... */}
                  </div>

                  <div className="col-lg-5">
                    <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        {/* Remaining code for card details */}

                        <a type="submit" className="text-white">
                          <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                        </a>
                        <a type="submit" className="text-white">
                          <i className="fab fa-cc-visa fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-amex fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-paypal fa-2x"></i>
                        </a>

                        <form className="mt-4">
                          <div className="form-outline form-white mb-4">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              size="17"
                              placeholder="Cardholder's Name"
                            />
                            <label className="form-label" htmlFor="typeName">
                              Cardholder's Name
                            </label>
                          </div>

                          <div className="form-outline form-white mb-4">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              size="17"
                              placeholder="1234 5678 9012 3457"
                              minLength="19"
                              maxLength="19"
                            />
                            <label className="form-label" htmlFor="typeText">
                              Card Number
                            </label>
                          </div>

                          <div className="row mb-4">
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input
                                  type="text"
                                  className="form-control form-control-lg"
                                  placeholder="MM/YYYY"
                                  size="7"
                                  id="exp"
                                  minLength="7"
                                  maxLength="7"
                                />
                                <label className="form-label" htmlFor="typeExp">
                                  Expiration
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input
                                  type="password"
                                  className="form-control form-control-lg"
                                  placeholder="&#9679;&#9679;&#9679;"
                                  size="1"
                                  minLength="3"
                                  maxLength="3"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="typeText"
                                >
                                  Cvv
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">$4798.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">$4818.00</p>
                        </div>

                        <button
                          type="button"
                          className="btn btn-info btn-block btn-lg"
                        >
                          <div className="d-flex justify-content-between">
                            <span>${total}.00</span>
                            <span>
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
