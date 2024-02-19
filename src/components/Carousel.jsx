import React from "react";

export default function Carousal() {
  const carouselData = [
    {
      id: 0,
      img: "../images/caro.webp",
      offer: "Save 10 - 20 % off",
      title: {
        black: "Best destination for",
        yellow: "your pets",
      },
    },
    {
      id: 1,
      img: "../images/caro1.jpg",
      offer: "Save 10 - 20 % off",
      title: {
        black: "Best destination for",
        yellow: "your pets",
      },
    },
    {
      id: 3,
      img: "../images/caro3.webp",
      offer: "Save 10 - 20 % off",
      title: {
        black: "Best destination for",
        yellow: "your pets",
      },
    },
  ];

  return (
    <section
      id="carouselExampleIndicators"
      style={{ background: "#F9F3EC" }}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {carouselData &&
          carouselData.map((caro) => {
            return (
              <div className="carousel-item active" key={caro.id}>
                <div className="swiper-slide py-5">
                  <div className="row banner-content align-items-center">
                    <div className="img-wrapper col-md-5">
                      <img
                        src={caro.img}
                        width={"70%"}
                        alt="Banner 1"
                        className="img-fluid"
                      />
                    </div>
                    <div className="content-wrapper col-md-7 p-5 mb-5">
                      <div className="secondary-font text-primary text-uppercase mb-4">
                        {caro.offer}
                      </div>
                      <h2 className="banner-title display-1 fw-normal">
                        {" "}
                        {caro.title.black}{" "}
                        <span className="text-primary">
                          {" "}
                          {caro.title.yellow}{" "}
                        </span>
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
            );
          })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
}
