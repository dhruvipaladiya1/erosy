import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import logo from "../Assets/Images/NewImages/logo.png"

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        document.querySelector('.scrollTopBtn')?.classList.add('show');
      } else {
        document.querySelector('.scrollTopBtn')?.classList.remove('show');
      }
    });
  }, [])

  return (
    <div className="page-wrapper">
      <footer className="ds page_footer section_padding_70">
        <Container>
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 pe-xl-5">
              <div class="widget widget_text">
                <a href="index.html" class="logo logo_image bottommargin_10">
                  <img src={logo} alt="" />
                </a>
                <p>Showing Female profiles: <a href="#!" data-toggle="modal" data-target="#myModal"><i class="fa fa-edit"></i></a></p>
                <p>Language: English (US): <a href="#!" data-toggle="modal" data-target="#myModal1"><i class="fa fa-edit"></i></a></p>
              </div>
            </div>

            <div class="col-xl-3 col-lg-2 col-md-6 col-sm-6">
              <h3 class="widget-title">Menu</h3>
              <div className='footer_lists'>
                <ul class="list2 bottommargin_0">
                  <li class=""><a href="#!">Home</a></li>
                  <li class=""><a href="#">Memberships & Pricing</a></li>
                  <li class=""><a href="#!">Sign Up</a></li>
                  <li class=""><a href="#!">Login</a></li>
                </ul>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 ps-xl-4 ps-lg-5">
              <h3 class="widget-title">Browse</h3>
              <div className='footer_lists'>
                <ul class="list2 bottommargin_0">
                  <li class=""><a href="#!">Locations</a></li>
                  <li class=""><a href="#">All Escorts</a></li>
                  <li class=""><a href="#!">Backpage Alternatives</a></li>
                  <li class=""><a href="#!">Help / Support</a></li>
                </ul>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <h3 class="widget-title">Resources</h3>
              <div className='footer_lists-div'>
                <ul class="list2 bottommargin_0">
                  <li class=""><a href="#!">Blog</a>
                  </li>
                  <li class=""><a href="#">TLC Donation Matching</a></li>
                  <li class=""><a href="#">Resources</a></li>
                  <li class=""><a href="#">#AcceptanceMatters</a></li>
                  <li class=""><a href="#">Escort Terms</a></li>
                  <li class=""><a href="#">Sex Work FAQ</a></li>
                  <li class=""><a href="#">Tryst Status</a></li>
                </ul>
              </div>
            </div>

          </div>
        </Container>
      </footer>

      <section class="ls page_copyright section_padding_20">
        <div class="container">
          <div class="row topmargin_5 bottommargin_5">
            <div class="col-sm-12 text-center">
              <p class="darklinks">&copy; Erosy 2025 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>

      <Button className='scrollTopBtn' onClick={() => scrollTop()}><i className="fa-solid fa-chevron-up"></i></Button>

    </div>
  )
}

export default Footer