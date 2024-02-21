import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { foodData } from "../data/data";
import { globalContext } from "../context/GlobalContext";

export default function Products() {
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

  const handleADD = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const image = formData.get("image");
    const title = formData.get("title");
    const price = formData.get("price");
    const category = formData.get("category");

    const newProduct = {
      id: Math.random() * 10,
      image: URL.createObjectURL(image),
      title: title,
      price: parseFloat(price),
      category: category,
    };

    setProducts([...products, newProduct]);

    e.target.reset();
  };

  const handleDelete = (id) => {
    setProducts((prevProduct) => prevProduct.filter((data) => data.id !== id));
  };

  const Navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    <span data-feather="home"></span>
                    Admin
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    <span data-feather="file"></span>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/users" className="nav-link">
                    <span data-feather="file"></span>
                    Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/products" className="nav-link">
                    <span data-feather="shopping-cart"></span>
                    Products
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <form className="container w-75" onSubmit={(e) => handleADD(e)}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Product name"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                placeholder="Product price"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                placeholder="Product category"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                accept="image/*"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              ADD
            </button>
          </form>

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
                      Category
                    </th>
                    <th scope="col" className="card-title text-uppercase"></th>
                  </tr>
                </thead>
                <tbody>
                  {products &&
                    products.map((product) => {
                      return (
                        <tr key={product.id}>
                          <td className="py-4">
                            <div className="cart-info d-flex flex-wrap align-items-center ">
                              <div className="col-lg-3">
                                <div className="card-image">
                                  <img
                                    src={product.image}
                                    alt="cloth"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-9">
                                <div className="card-detail ps-3">
                                  <h5 className="card-title">
                                    <NavLink className="text-decoration-none">
                                      {product.title}
                                    </NavLink>
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 align-middle">
                            <div className="total-price">
                              <span className="secondary-font fw-medium">
                                $ {product.price}.00
                              </span>
                            </div>
                          </td>
                          <td className="py-4 align-middle">
                            <div className="total-price">
                              <span className="secondary-font fw-medium">
                                {product.category}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 align-middle">
                            <div className="d-flex align-items-center">
                              <div className="me-4">
                                <button
                                  onClick={() =>
                                    Navigate(`/products/${product.id}`)
                                  }
                                  className="btn btn-dark p-3 text-uppercase fs-6 btn-rounded-none w-100"
                                >
                                  <FaRegEdit />
                                </button>
                              </div>
                              <div
                                className="cart-remove"
                                onClick={() => handleDelete(product.id)}
                                style={{cursor: "pointer"}}
                              >
                                <MdDelete style={{ fontSize: "3rem" }} />
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
