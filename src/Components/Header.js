import React, { useState } from 'react'
import Logo from "../Assets/Images/logo.png"
import ROUTES from '../Configs/Route'
import { Link } from 'react-router-dom'
import { Offcanvas } from 'react-bootstrap'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileServiceMenuOpen, setMobileServiceMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMenuOpen(true)
  }

  const handleClose = () => setMenuOpen(false);

  return (
    <>
      <div className="page-wrapper">
        <div className='main-header'>
          <div className='main-menu header-sticky'>
            <div className='main-menu__wrapper'>
              <div className='container'>
                <div className='main-menu__wrapper-inner'>
                  <div className="main-menu__left">
                    <div class="main-menu__logo">
                      <Link to={ROUTES.HOME}><img src={Logo} alt='Logo' width={140} /></Link>
                    </div>
                  </div>
                  <div className='main-menu__main-menu-box'>
                    <Link to={''} className='mobile-nav__toggler' onClick={() => toggleMobileMenu()}>
                      <i className="fa fa-bars"></i></Link>
                    <ul className='main-menu__list'>
                      <li className='current'>
                        <Link to={ROUTES.HOME}>Home </Link>
                      </li>
                      <li>
                        <Link to=''>Membership & Pricing</Link>
                      </li>
                      <li>
                        <Link to={ROUTES.LOCATIONS}>Locations</Link>
                      </li>
                      <li>
                        <Link to=''>TLC donation matching</Link>
                      </li>
                      <li>
                        <Link to=''><i className="fa-solid fa-magnifying-glass"></i></Link>
                      </li>
                      <li>
                        <Link to=''>Login / Sign Up</Link>
                      </li>
                    </ul>
                  </div>
                </div>
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
              <li className='current'>
                <Link to={ROUTES.HOME}>Home</Link>
              </li>
              <li>
                <Link to=''>Membership & Pricing</Link>
              </li>
              <li>
                <Link to={ROUTES.LOCATIONS}>Locations</Link>
              </li>
              <li>
                <Link to=''>TLC donation matching</Link>
              </li>
              <li>
                <Link to=''>Login / Sign Up</Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header
