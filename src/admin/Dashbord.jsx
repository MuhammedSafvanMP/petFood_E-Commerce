import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../pages/Header";
import Services from "../pages/Services";
import Footer from "../pages/Footer";

export default function Dashbord() {
  const Navigate = useNavigate();

  const admin = {
    name: "safu",
    email: "safu@gmail.com",
    password: "12345",
  };

  const handleAdmin = (e) => {
    e.preventDefault();

    if (
      e.target.name.value == admin.name &&
      e.target.email.value == admin.email &&
      e.target.password.value == admin.password
    )
      Navigate("/users");
    else alert("this admin not");
  };
  return (
    <>
      <Header />
      <section className="login-tabs padding-large">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 mt-5">
              <p className="mb-0">Admin Login</p>
              <hr className="my-1" />

              <form
                className="form-group flex-wrap"
                onSubmit={(e) => handleAdmin(e)}
              >
                <div className="form-input col-lg-12 my-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="form-control mb-3 p-4"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="form-control mb-3 p-4"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="form-control mb-3 p-4"
                  />

                  <div className="d-grid my-3">
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg rounded-1"
                    >
                      Sign Up
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
