import React from 'react'

export default function Footer() {
  return (
    <footer id="footer" className="my-5">
    <div className="container py-5 my-5">
      <div className="row">

        <div className="col-md-3">
          <div className="footer-menu">
            <img src="../images/chocolat/footerlogo.png" width={'100px'} alt="logo" />
            <p className="blog-paragraph fs-6 mt-3">Subscribe to our newsletter to get updates about our grand offers.</p>
            <div className="social-links">
              <ul className="d-flex list-unstyled gap-2">
                <li className="social">
                  <a>
                    <iconify-icon className="social-icon" icon="ri:facebook-fill"></iconify-icon>
                  </a>
                </li>
                <li className="social">
                  <a>
                    <iconify-icon className="social-icon" icon="ri:twitter-fill"></iconify-icon>
                  </a>
                </li>
                <li className="social">
                  <a>
                    <iconify-icon className="social-icon" icon="ri:pinterest-fill"></iconify-icon>
                  </a>
                </li>
                <li className="social">
                  <a>
                    <iconify-icon className="social-icon" icon="ri:instagram-fill"></iconify-icon>
                  </a>
                </li>
                <li className="social">
                  <a>
                    <iconify-icon className="social-icon" icon="ri:youtube-fill"></iconify-icon>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer-menu">
            <h3>Quick Links</h3>
            <ul className="menu-list list-unstyled">
              <li className="menu-item">
                <a href="#" className="nav-link">Home</a>
              </li>
              <li className="menu-item">
                <a href="#" className="nav-link">About us</a>
              </li>
              <li className="menu-item">
                <a href="#" className="nav-link">Offer </a>
              </li>
              <li className="menu-item">
                <a href="#" className="nav-link">Services</a>
              </li>
              <li className="menu-item">
                <a href="#" className="nav-link">Conatct Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer-menu">
            <h3>Help Center</h3>
              <ul className="menu-list list-unstyled">
                <li className="menu-item">
                  <a  className="nav-link">FAQs</a>
                </li>
                <li className="menu-item">
                  <a  className="nav-link">Payment</a>
                </li>
                <li className="menu-item">
                  <a  className="nav-link">Returns & Refunds</a>
                </li>
                <li className="menu-item">
                  <a  className="nav-link">Checkout</a>
                </li>
                <li className="menu-item">
                  <a  className="nav-link">Delivery Information</a>
                </li>
              </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div>
            <h3>Our Newsletter</h3>
            <p className="blog-paragraph fs-6">Subscribe to our newsletter to get updates about our grand offers.</p>
            <div className="search-bar border rounded-pill border-dark-subtle px-2">
              <form className="text-center d-flex align-items-center" action="" method="">
                <input type="text" className="form-control border-0 bg-transparent" placeholder="Enter your email here" />
                <iconify-icon className="send-icon" icon="tabler:location-filled"></iconify-icon>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>


    <div id="footer-bottom">
    <div className="container">
      <hr className="m-0" />
      <div className="row mt-3">
        <div className="col-md-6 copyright">
          <p className="secondary-font">© {new Date().getFullYear()} FOODU. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
  </footer>

  )
}
