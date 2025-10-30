import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, FormGroup, InputGroup, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { validateNoWhiteSpace } from '../../Configs/Utils/APIs/Admin_Api';

const Login = () => {

  const { register, handleSubmit, formState: { errors }, setValue, setError, clearErrors } = useForm({});
  const [loading, setLoading] = useState(false)

  const generateCaptcha = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState("");

  const onSubmit = async (data) => {
    if (userCaptcha !== captcha) {
      setError("captcha", { type: "manual", message: "Captcha does not match" });
      return;
    }

    alert("Form submitted successfully!");
  }

  // const [isChecked, setIsChecked] = useState(false);
  // const [showError, setShowError] = useState(false);

  // const handleCheckboxChange = (e) => {
  //   setIsChecked(e.target.checked);
  //   if (e.target.checked) {
  //     setShowError(false);
  //   }
  // };


  return (
    <div className="page-wrapper">
      <section className='author-wrap ptb-40 mt-5'>
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                <h1 className='mt-4 mb-5'>Log in</h1>
                <Row>
                  <Col md={12}>
                    <Form.Group className='mb-3 '>
                      <Form.Label>Email Address</Form.Label>
                      <InputGroup>
                        <Form.Control type='text' {...register("emailAddress", { required: true })} placeholder='Email Address' autoComplete='false' />
                      </InputGroup>
                      <p className='error-message'>{errors.emailAddress && <p>Email Address is required</p>}</p>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className='mt-3'>
                      <Form.Label>Password</Form.Label>
                      <InputGroup>
                        <Form.Control type='text' {...register("password", { required: true })} placeholder='Password' autoComplete='false' />
                      </InputGroup>
                      <p className='error-message'>{errors.password && <p>Password is required</p>}</p>
                    </Form.Group>
                  </Col>
                  <Col md={12} className='mt-3'>
                    <Form.Group>
                      <Form.Label>* Please enter the characters shown inside the blue box</Form.Label>
                      <br />
                      <div className='reCaptcha-div'>
                        {/* {captcha} */}
                        {captcha.split("").map((char, index) => (
                          <span
                            key={index}
                            style={{
                              display: "inline-block",
                              transform: `rotate(${Math.random() * 20 - 10}deg)`, // random rotation for each character
                              position: "relative",
                              top: `${Math.random() * 5 - 2}px`, // slight vertical movement to overlap characters
                              left: `${Math.random() * 3 - 1.5}px`, // slight horizontal movement
                              fontSize: `${Math.random() * 4 + 24}px`, // slight size variation for each character
                            }}
                          >
                            {char}
                          </span>
                        ))}
                      </div>
                      <Form.Control
                        className='mt-2'
                        type='text'
                        placeholder='Enter captcha'
                        value={userCaptcha}
                        onChange={(e) => setUserCaptcha(e.target.value)}
                      />
                      {errors.captcha && <p className='error-message'>{errors.captcha.message}</p>}
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <div class="form-check mt-4 mb-3 p-0 mx-4">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required />
                      <label class="form-check-label fw-bold fs-5" for="flexCheckDefault">Remember me for 14 days</label>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div class="serch-w text-center mt-3 w-25">
                      <a href="#!" class="home-btn home-serch fs-4">Log in</a>
                    </div>
                  </Col>
                  <Col md={12} className='mt-4'>
                    <div>
                      <a href="#!" class="see_all_btn me-2">Forgot your password?</a>
                      <a href="#!" class="see_all_btn">Didn't receive confirmation instructions?</a>
                      <a href="#!" class="see_all_btn">I need help recovering access to my account</a>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <h1 className='mt-4 mb-5'>Sign up</h1>
                <p>Erosy.link is one of the fastest-growing escort platforms in the world. Built by the same team behind Switter!</p>
                <p>Please select which type of account you'd like to sign up for:</p>
                <div class="d-flex flex-wrap gap-3">
                  <a href="#!" class="see_all_btn">I am a provider</a>
                  <a href="#!" class="see_all_btn">I am a client</a>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>
    </div>
  )
}

export default Login
