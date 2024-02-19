import React, { useContext } from "react";
import { globalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import Services from "../pages/Services";
import Footer from "../pages/Footer";
import Header from "../pages/Header";

export default function Login() {
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

  const Navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let logemail = e.target.email.value;
    let logpassword = e.target.password.value;

    let userData = user.find((item) => item.email == logemail);

    if (userData && userData.password == logpassword) {
      setShow(userData);
      Navigate("/");
    } else {
      setShow(null);
      alert("invalid user");
    }
  };

  return (
    <>
      <Header />
      <section className="login-tabs padding-large">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 mt-5">
              <p className="mb-0"> Log-In With Email</p>
              <hr className="my-1" />

              <form
                className="form-group flex-wrap"
                onSubmit={(e) => handleLogin(e)}
              >
                <div className="form-input col-lg-12 my-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    className="form-control mb-3 p-4"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="form-control mb-3 p-4"
                    aria-describedby="passwordHelpBlock"
                  />

                  <div className="d-grid my-3">
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg rounded-1"
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Footer />
    </>
  );
}
