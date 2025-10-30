import React, { useState } from 'react'
import Logo from "../Assets/Images/NewImages/logo.png"
import ROUTES from '../Configs/Route'
import { Link, useLocation } from 'react-router-dom'
import { Container, Offcanvas } from 'react-bootstrap'

const Header = () => {

  const userToken = localStorage.getItem('erosyUserToken');

  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileServiceMenuOpen, setMobileServiceMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMenuOpen(true)
  }

  const handleClose = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path ? 'current' : '';

  return (
    <>
      {/* <div className="page-wrapper">
        <div className='main-header'>
          <div className='main-menu header-sticky'>
            <div className='main-menu__wrapper'>
              <div className='container'>
                {userToken ?
                  <div className='main-menu__wrapper-inner'>
                    <div className="main-menu__left">
                      <div class="main-menu__logo">
                        <Link to={ROUTES.HOME}><img src={Logo} alt='Logo' width={140} /></Link>
                      </div>
                    </div>
                    <div className='main-menu__main-menu-box d-flex justify-content-end align-items-center'>
                      <ul className='main-menu__list me-4'>
                        <li className={isActive(ROUTES.HOME)}>
                          <Link to={ROUTES.HOME}>Home </Link>
                        </li>
                        <li>
                          <Link to=''>Membership & Pricing</Link>
                        </li>
                        <li className={isActive(ROUTES.LOCATIONS)}>
                          <Link to={ROUTES.LOCATIONS}>Locations</Link>
                        </li>
                        <li>
                          <Link to=''>TLC donation matching</Link>
                        </li>
                      </ul>

                      <div className="others-options me-4 mx-md-1">
                        <button className="searchbtn"><i className="fa-solid fa-magnifying-glass"></i></button>
                      </div>

                      <div className="others-options">
                        <div className="header-btn d-lg-block d-none mx-lg-4 mx-1">
                          <Link to={ROUTES.LOGIN} className='me-2'>Log in</Link> /
                          <Link to={ROUTES.SIGNUP} className='mx-2'>Sign up</Link>
                        </div>
                      </div>

                      <Link to={''} className='mobile-nav__toggler mx-0 mx-md-3' onClick={() => toggleMobileMenu()}>
                        <i className="fa fa-bars"></i></Link>
                    </div>
                  </div>
                  :
                  <div className='main-menu__wrapper-inner d-flex justify-content-between align-items-center'>
                    <div className="main-menu__left">
                      <div class="main-menu__logo">
                        <Link to={ROUTES.HOME}><img src={Logo} alt='Logo' width={140} /></Link>
                      </div>
                    </div>
                    <div className='main-menu__main-menu-box'>
                      <div className="others-options me-4 mx-md-1">
                        <button className="searchbtn"><i className="fa-solid fa-magnifying-glass"></i></button>
                      </div>
                    </div>

                    <div className='main-menu__main-menu-box'>
                      <div className="others-options">
                        <div className="header-btn d-lg-block d-none mx-lg-4 mx-1">
                          <Link to={ROUTES.LOGIN} className='me-2'>Log in</Link> /
                          <Link to={ROUTES.SIGNUP} className='mx-2'>Sign up</Link>
                        </div>
                      </div>

                      <Link to={''} className='mobile-nav__toggler mx-0 mx-md-3' onClick={() => toggleMobileMenu()}>
                        <i className="fa fa-bars"></i>
                      </Link>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <Offcanvas show={menuOpen} onHide={handleClose} className='mobile-menu'>
        <Offcanvas.Header>
          <Offcanvas.Title className='mobile-menu-title w-100'>
            <img src={Logo} alt='Logo' width={160} />
            <i className="fa-solid fa-xmark text-dark" onClick={() => handleClose()}></i>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='mobile-nav__container'>
            <ul className=''>
              <li className='current' onClick={() => setMenuOpen(false)}>
                <Link to={ROUTES.HOME}>Home</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <Link to=''>Membership & Pricing</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <Link to={ROUTES.LOCATIONS}>Locations</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <Link to=''>TLC donation matching</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <div className="header-btn d-lg-none d-block">
                  <a href="#!" className="style1">Login</a>
                </div>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <div className="header-btn d-lg-none d-block">
                  <a href="#!" className="style1">Sign up</a>
                </div>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas> */}



      <div className="page-wrapper">
        <div className='main-header'>
          <div className='main-menu header-sticky'>
            <div className='main-menu__wrapper'>
              <div className='container'>
                {/* {userToken ? */}
                <div className='main-menu__wrapper-inner'>
                  <div className="main-menu__left">
                    <div class="main-menu__logo">
                      <Link to={ROUTES.HOME}><img src={Logo} alt='Logo' width={140} /></Link>
                    </div>
                  </div>
                  <div className='main-menu__main-menu-box d-flex justify-content-end align-items-center'>
                    <Link to={''} className='mobile-nav__toggler mx-0 mx-md-3' onClick={() => toggleMobileMenu()}>
                      <i className="fa fa-bars"></i></Link>

                    <ul className='main-menu__list me-4'>
                      <li className={isActive(ROUTES.HOME)}>
                        <Link to={ROUTES.HOME}>HOME </Link>
                      </li>
                      <li>
                        <Link to=''>MEMBERSHIP & PRICING</Link>
                      </li>
                      <li className={isActive(ROUTES.LOCATIONS)}>
                        <Link to={ROUTES.LOCATIONS}>LOCATIONS</Link>
                      </li>
                      <li>
                        <Link to=''>TLC DONATION MATCHING</Link>
                      </li>
                    </ul>

                    <div className="others-options me-4 mx-md-1">
                      <div className="header-btn">Help / Support</div>
                    </div>
                  </div>
                </div>
                {/* :
                  <div className='main-menu__wrapper-inner d-flex justify-content-between align-items-center'>
                    <div className="main-menu__left">
                      <div class="main-menu__logo">
                        <Link to={ROUTES.HOME}><img src={Logo} alt='Logo' width={140} /></Link>
                      </div>
                    </div>

                    <div className='main-menu__main-menu-box'>
                      <div className="others-options">
                        <div className="header-btn d-lg-block d-none mx-lg-4 mx-1">
                          <Link to={ROUTES.LOGIN} className='me-2'>Log in</Link> /
                          <Link to={ROUTES.SIGNUP} className='mx-2'>Sign up</Link>
                        </div>
                      </div>

                      <Link to={''} className='mobile-nav__toggler mx-0 mx-md-3' onClick={() => toggleMobileMenu()}>
                        <i className="fa fa-bars"></i>
                      </Link>
                    </div>
                  </div>
                } */}
              </div>
            </div>
          </div>
        </div>
      </div>


      <Offcanvas show={menuOpen} onHide={handleClose} className='mobile-menu'>
        <Offcanvas.Header>
          <Offcanvas.Title className='mobile-menu-title w-100'>
            <img src={Logo} alt='Logo' width={160} />
            <i className="fa-solid fa-xmark text-dark" onClick={() => handleClose()}></i>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='mobile-nav__container'>
            <ul className=''>
              <li className='current' onClick={() => setMenuOpen(false)}>
                <Link to={ROUTES.HOME}>Home</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <Link to=''>Membership & Pricing</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <Link to={ROUTES.LOCATIONS}>Locations</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <Link to=''>TLC donation matching</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <div className="header-btn d-lg-none d-block">
                  <a href="#!" className="style1">Login</a>
                </div>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <div className="header-btn d-lg-none d-block">
                  <a href="#!" className="style1">Sign up</a>
                </div>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default Header
