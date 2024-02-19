import React from "react";

export default function Carousal() {
  return (
    <section id="banner" style={{ background: "#F9F3EC" }}>
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <div className="container d-flex flex-column align-items-center">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="../images/caro1.jpg"
                  className="d-block w-100"
                  alt="First slide"
                />
              </div>
            </div>
            <div className="content-wrapper col-md-7 p-5 mb-5 text-center">
              <div className="secondary-font text-primary text-uppercase mb-4">
                Save 10 - 20 % off
              </div>
              <h2 className="banner-title display-1 fw-normal">
                Best destination for{" "}
                <span className="text-primary">your pets</span>
              </h2>
              <a
                href="#"
                className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
              >
                shop now
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mb-1"
                >
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <div className="container d-flex flex-column align-items-center">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="../images/caro3.webp"
                  className="d-block w-100"
                  alt="First slide"
                />
              </div>
            </div>
            <div className="content-wrapper col-md-7 p-5 mb-5 text-center">
              <div className="secondary-font text-primary text-uppercase mb-4">
                Save 10 - 20 % off
              </div>
              <h2 className="banner-title display-1 fw-normal">
                Best destination for{" "}
                <span className="text-primary">your pets</span>
              </h2>
              <a
                href="#"
                className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
              >
                shop now
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mb-1"
                >
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="container d-flex flex-column align-items-center">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="../images/caro4.avif"
                  className="d-block w-100"
                  alt="First slide"
                />
              </div>
            </div>
            <div className="content-wrapper col-md-7 p-5 mb-5 text-center">
              <div className="secondary-font text-primary text-uppercase mb-4">
                Save 10 - 20 % off
              </div>
              <h2 className="banner-title display-1 fw-normal">
                Best destination for{" "}
                <span className="text-primary">your pets</span>
              </h2>
              <a
                href="#"
                className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
              >
                shop now
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mb-1"
                >
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  );
}
