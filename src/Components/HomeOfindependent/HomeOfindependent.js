import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import exchange from "../../Assets/Images/exchange.png"
import "../../Assets/Css/home.css"
import FilterModal from './FilterModal'
import CustomModal from '../../Configs/CustomModal/CustomModal'

const HomeOfindependent = () => {

  const [showFilterModal, setShowFilterModal] = useState(false)

  return (
    <>
      <section className="seller-wrap ptb-40">
        <Container>
          <div className="section-title text-center mb-40">
            <h2>Home of the independent escort</h2>
            <h5>Listing thousands of independent adult entertainers. Escorts, BDSM, kink, video, massage and much more.</h5>
          </div>

          <div class="box-m">
            <div class="row align-items-center justify-content-center g-4">
              <div class="col-lg-5 col-sm-10">
                <div class="input-box">
                  <div class="input-w position-relative">
                    <i class="fa-solid fa-location-dot"></i>
                    <input type="text" class="user-input1" />
                  </div>
                  <div>
                    <span>|</span>
                  </div>
                  <div class="home-slect">
                    <select class="home-form-control">
                      <option>Anywhere</option>
                      <option>Anywhere</option>
                      <option>Anywhere</option>
                      <option>Anywhere</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-sm-2">
                {/* <div className='d-flex justify-content-end align-items-end gap-4'>
                  <div class="colmm">
                    <a href="#!" class="see_all_btn">Female</a>
                    <a href="#!" class="see_all_btn">Male</a>
                    <a href="#!" class="see_all_btn">Non-binary</a>
                    <a href="#!" class="see_all_btn">Trans Only</a>
                  </div>
                  <div class="serch-w text-center">
                    <a href="#!" class="home-btn home-serch">Search</a>
                  </div>
                </div> */}

                <div class="row">
                  <div class="col-md-9 d-none d-md-none d-lg-block">
                    <div class="colmm">
                      <a href="#!" class="see_all_btn">Female</a>
                      <a href="#!" class="see_all_btn">Male</a>
                      <a href="#!" class="see_all_btn">Non-binary</a>
                      <a href="#!" class="see_all_btn">Trans Only</a>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="serch-w text-center">
                      <a href="#!" class="home-btn home-serch">Search</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-md-4 text-center">
              <button onClick={() => { setShowFilterModal(true) }} class="mb-3 text-decoration-none main-home-btn">
                <img src={exchange} className='me-3' /> <strong className='home-more'>More Filter</strong> <span class="home-src" id="countValue">0</span>
              </button>
            </div>
          </div>

        </Container>
      </section>

      <CustomModal display={showFilterModal} handleClose={() => setShowFilterModal(!showFilterModal)} size='xl' className='userModal' centered backdrop="static">
        <FilterModal
          setShowFilterModal={setShowFilterModal}
        />
      </CustomModal>
    </>
  )
}

export default HomeOfindependent
