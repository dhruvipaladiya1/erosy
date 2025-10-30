import React from 'react'
import { Accordion, Form, Modal } from 'react-bootstrap'
import "../../Assets/Css/home.css"

const FilterModal = () => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title className='text-dark fw-bold'>Place A Bid</Modal.Title>
      </Modal.Header>
      <Form className='p-2'>
        <Modal.Body>
          <>
            <div class="row align-items-center justify-content-center g-4">
              <div class="col-lg-5 col-sm-10">
                <div class="input-box">
                  <div class="input-w">
                    <i class="fa-solid fa-location-dot"></i>
                    <input type="text" class="user-input1" />
                    <div class="suggestions"></div>
                  </div>
                  <div><span>|</span></div>
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
                <div class="row">
                  <div class="col-md-9 d-none d-md-none d-lg-block">
                    <div class="colmm">
                      <a href="#!" class="see_all_btn " data-value="Female">Female</a>
                      <a href="#!" class="see_all_btn" data-value="Male">Male</a>
                      <a href="#!" class="see_all_btn" data-value=" Non-binary">Non-binary</a>
                      <a href="#!" class="see_all_btn" data-value="Trans Only">Trans Only</a>
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

            {/* <div class="row">
              <div class="col-md-12">
                <div class="d-flex justify-content-between flex-wrap">
                  <div><div class="mt-2 mb-2 selected-values"></div></div>
                  <div class="mt-2 mb-2">
                    <span class="text-c clear-all">x Clear All</span>
                  </div>
                </div>
              </div>
            </div> */}

            <div className='row mt-3'>
              <div className='col-md-4'>
                {/* <Accordion defaultActiveKey={['0']} alwaysOpen className='doctor_accordion'>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>KeyWords</Accordion.Header>
                    <Accordion.Body>
                      <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                          <p>Prepaid mobile recharge is a way to pay in advance for talk time, data or SMS before usage. With CardsPe, you recharge your number (or another's) using safe, online methods.</p>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion alwaysOpen className='doctor_accordion mt-3'>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Service Type</Accordion.Header>
                    <Accordion.Body>
                      <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                          <p>Absolutely. CardsPe uses encryption, secure payment gateways (UPI, bank cards, net banking) and strict verification measures (like OTP) to ensure your online mobile recharge is protected.</p>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion> */}

                <Accordion alwaysOpen className="filter-AccordionDiv">
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                      Keywords <i class="fa-solid fa-arrow-down mx-2 accordion-icon"></i>
                    </Accordion.Header>
                    <Accordion.Body className="mb-3">
                      <div>123</div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion alwaysOpen className="filter-AccordionDiv">
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>
                      <div className='d-flex justify-content-between'>
                        <span>Service Type <i class="fa-solid fa-arrow-down mx-2 accordion-icon"></i></span>
                        <span>ANY</span>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="mb-3">
                      <div>123</div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion alwaysOpen className="filter-AccordionDiv">
                  <Accordion.Item eventKey='2'>
                    <Accordion.Header>
                      Caters to: <i class="fa-solid fa-arrow-down mx-2 accordion-icon"></i>
                    </Accordion.Header>
                    <Accordion.Body className="mb-3">
                      <div>123</div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>


                <Accordion alwaysOpen className="filter-AccordionDiv">
                  <Accordion.Item eventKey='3'>
                    <Accordion.Header>
                      Hourly rate: <i class="fa-solid fa-arrow-down mx-2 accordion-icon"></i>
                    </Accordion.Header>
                    <Accordion.Body className="mb-3">
                      <div>123</div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className='col-md-4'></div>
              <div className='col-md-4'></div>
            </div>

          </>
        </Modal.Body>
      </Form>
    </>
  )
}

export default FilterModal
