import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import auction from "../Assets/Images/auction/auction-item-1.jpg"
import shape6 from "../Assets/Images/shape-6.png"
import blog1 from "../Assets/Images/blog/blog-1.jpg"
import blog2 from "../Assets/Images/blog/blog-2.jpg"
import blog3 from "../Assets/Images/blog/blog-3.jpg"
import blog4 from "../Assets/Images/blog/blog-4.jpg"
import blog5 from "../Assets/Images/blog/blog-5.jpg"
import blog6 from "../Assets/Images/blog/blog-6.jpg"
import archive from "../Assets/Images/the-archive-decrim-beaf42f4a11e1a2336b5.jpg"
import HomeOfindependent from './HomeOfindependent/HomeOfindependent';

const Home = () => {

  const authors = [
    {
      id: 1,
      name: "Asian Persuasion",
      location: "Long Island, NY, US",
      status: "Available",
      about: "Sensual. Sophisticated. Sweetly intoxicating. ...",
    },
    {
      id: 2,
      name: "Bella Rose",
      location: "Los Angeles, CA, US",
      status: "Available",
      about: "Playful and elegant with a charming smile...",
    },
    {
      id: 3,
      name: "Chloe Summers",
      location: "Miami, FL, US",
      status: "Offline",
      about: "Adventurous spirit with a taste for the finer things...",
    },
    {
      id: 4,
      name: "Luna Noir",
      location: "Chicago, IL, US",
      status: "Available",
      about: "Mysterious and alluring — the perfect companion.",
    },
  ];

  const people = [
    {
      id: 1,
      name: "Aroun Hoffman",
      location: "CEO - IBAT",
      about: "On the other hand, we denounce with righteous indig aet nation an like men who are so beguiled anzed by techa armus of pleasure of the ment so blinded by their desire, that they cannot dolor ipsum dolor sit.",
    },
    {
      id: 2,
      name: "Helen Hugh",
      location: "Manager - Olle",
      about: "On the other hand, we denounce with righteous indig aet nation an like men who are so beguiled anzed by techa armus of pleasure of the ment so blinded by their desire, that they cannot dolor ipsum dolor sit.",
    },
    {
      id: 3,
      name: "Waren Peace",
      location: "Director - Microsoft",
      about: "On the other hand, we denounce with righteous indig aet nation an like men who are so beguiled anzed by techa armus of pleasure of the ment so blinded by their desire, that they cannot dolor ipsum dolor sit.",
    },
    {
      id: 4,
      name: "Ash Wednesday",
      location: "Enterprenaur",
      about: "On the other hand, we denounce with righteous indig aet nation an like men who are so beguiled anzed by techa armus of pleasure of the ment so blinded by their desire, that they cannot dolor ipsum dolor sit.",
    },
    {
      id: 5,
      name: "Jhon Withland",
      location: "Enterprenaur",
      about: "On the other hand, we denounce with righteous indig aet nation an like men who are so beguiled anzed by techa armus of pleasure of the ment so blinded by their desire, that they cannot dolor ipsum dolor sit.",
    },
    {
      id: 6,
      name: "Kai Green",
      location: "Business Analyst",
      about: "On the other hand, we denounce with righteous indig aet nation an like men who are so beguiled anzed by techa armus of pleasure of the ment so blinded by their desire, that they cannot dolor ipsum dolor sit.",
    },
  ]

  const erosyLink = [
    {
      id: 1,
      img: blog1,
      title: "Instructor's Guide To Making And Selling",
      category: "Artwork",
      comments: 1,
    },
    {
      id: 2,
      img: blog2,
      title: "Canada Is A Great Source For NFT Industry",
      category: "Modern Art",
      comments: 1,
    },
    {
      id: 3,
      img: blog3,
      title: "12 Tips For Avoiding Scams And Staying",
      category: "Creative",
      comments: 1,
    },
    {
      id: 4,
      img: blog4,
      title: "A Portrait Of The Year That Changed Everything",
      category: "Art",
      comments: 2,
    },
    {
      id: 5,
      img: blog5,
      title: "The NFT Services Provided For Design",
      category: "Digital",
      comments: 2,
    },
    {
      id: 6,
      img: blog6,
      title: "NFTs Are Too Important For Best Artist",
      category: "Art Work",
      comments: 2,
    },
  ]

  return (
    <>
      <div className="page-wrapper">
        {/* <!-- Hero Section Start --> */}
        <section className="hero-wrap style2 bg-f"></section>
        {/* <!-- Hero Section End --> */}


        {/* <!-- Seller Section Start --> */}
        <HomeOfindependent />
        {/* <!-- Seller Section End --> */}


        {/* <!-- Available now Section Start --> */}
        <section className="author-wrap ptb-40 bg-light">
          <Container>
            <div className="section-title mb-20 text-center">
              <h2>Available now</h2>
            </div>

            <div className="row justify-content-center">
              {authors.map((author) => (
                <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                  <div className="author-card style2">
                    <div className="author-card-img">
                      <img src={auction} alt="Image" />
                      <span className="followers">Escort</span>
                      <span className="followers min">
                        <a href="#!" title="login"><i className="fa-solid fa-star text-dark"></i></a>
                      </span>
                    </div>
                    <div className="author-info-wrap">
                      <div className="author-info">
                        <div className="author-name">
                          <h3 className='mb-2'><a href="#!"> {author?.name}</a></h3>
                          <span className="mb-1 overflow-ellipsis d-inline-flex align-items-baseline gap-1">
                            <i className="fa-solid fa-house"></i>{author?.location}
                          </span>
                          <span className="mb-1 flex-shrink-0 gap-1"><i className="available-now ms-2 me-1"></i>{author?.status}</span>
                          <p className="thumb__about font-size-small">{author?.about}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div class="text-center mt-4">
              <a href="#!" class="see_all_btn style1">See All</a>
            </div>

          </Container>
        </section>
        {/* <!-- Available now Section End --> */}


        {/* <!-- Recently active Section Start --> */}
        <section className="author-wrap ptb-40 bg-light">
          <Container>
            <div className="section-title mb-20 text-center">
              <h2>Recently active</h2>
            </div>

            <div className="row justify-content-center">
              {authors.map((author) => (
                <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                  <div className="author-card style2">
                    <div className="author-card-img">
                      <img src={auction} alt="Image" />
                      <span className="followers">Escort</span>
                      <span className="followers min">
                        <a href="#!" title="login"><i className="fa-solid fa-star text-dark"></i></a>
                      </span>
                    </div>
                    <div className="author-info-wrap">
                      <div className="author-info">
                        <div className="author-name">
                          <h3 className='mb-2'><a href="#!"> {author?.name}</a></h3>
                          <span className="mb-1 overflow-ellipsis d-inline-flex align-items-baseline gap-1">
                            <i className="fa-solid fa-house"></i>{author?.location}
                          </span>
                          <span className="mb-1 flex-shrink-0 gap-1"><i className="available-now ms-2 me-1"></i>{author?.status}</span>
                          <p className="thumb__about font-size-small">{author?.about}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div class="text-center mt-4">
              <a href="#!" class="see_all_btn style1">See All</a>
            </div>

          </Container>
        </section>
        {/* <!-- Recently active Section End --> */}


        {/* <!-- Find just Section End --> */}
        <section class="author-wrap ptb-40 ">
          <Container>
            <div class="section-title mb-20 text-center">
              <h2>Find just what you're looking for on Erosy</h2>
            </div>

            <div class="row">
              <div class="col-md-4">
                <h4 className='find-look'>By Gender </h4>
                <div class="">
                  <div class="d-flex flex-wrap gap-3">
                    <a href="#!" class="see_all_btn">Female escorts</a>
                    <a href="#!" class="see_all_btn">Male escorts</a>
                    <a href="#!" class="see_all_btn">Non-binary</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <h4 className='find-look'>By Category</h4>
                <div class="">
                  <div class="d-flex flex-wrap gap-3">
                    <a href="#!" class="see_all_btn">Trans escorts</a>
                    <a href="#!" class="see_all_btn">Hispanic escorts</a>
                    <a href="#!" class="see_all_btn">Asian escorts</a>
                    <a href="#!" class="see_all_btn">Black escorts</a>
                    <a href="#!" class="see_all_btn">Busty escorts</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <h4 className='find-look'>By Country</h4>
                <div class="">
                  <div class="d-flex flex-wrap gap-3">
                    <a href="#!" class="see_all_btn">United States</a>
                    <a href="#!" class="see_all_btn">Canada</a>
                    <a href="#!" class="see_all_btn">Non-binaryAustralia</a>
                  </div>
                </div>
              </div>
            </div>

          </Container>
        </section>
        {/* <!-- Find just Section End --> */}


        {/* <!-- people say Section Start --> */}
        <section class="testimonial-wrap ps-ptb-40 bg-light">
          <Container>
            <div class="section-title mb-40 text-center">
              <h2>What people say about Erosy</h2>
            </div>

            <div className="landing-min-h position-relative">
              <Swiper
                watchSlidesProgress={true}
                spaceBetween={30}
                speed={1500}
                slidesPerView={2}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  992: { slidesPerView: 2 },
                }}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="people-slider-say owl-carousel-say"
              >
                {people.map((person) => (
                  <SwiperSlide key={person.id}>
                    <div className="people-card-say">
                      <img src={shape6} alt="Image" class="shape-one-say" />
                      <div class="quote-icon-say">
                        <i class="fa-solid fa-quote-right"></i>
                      </div>
                      <p class="client-quote-say">{person.about}</p>
                      <div class="client-info-say">
                        <h3>{person.name}</h3>
                        <span>{person.location}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </Container>
        </section>
        {/* <!-- people say Section End --> */}


        {/* <!-- What to expect Section Start --> */}
        <section class="hw-wrap ptb-40">
          <Container>
            <div class="section-title text-center mb-20">
              <h2>What to expect when booking a sex worker?</h2>
              <p>We know how daunting it can be to see a sex worker for the first<br /> time, so we’ve put together a super handy Client Guide to help ensure everything runs smoothly. Here are a few quick tips about what to expect!</p>
            </div>
            <div class="row justify-content-center mt-4">
              <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                <div class="hw-card style3">
                  <h3 class="hw-title"><i class="fa-solid fa-scissors"></i> Screening</h3>
                  <p>Other hand we denoce ighteous and tion and dso beguilde ralized</p>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                <div class="hw-card style3">
                  <h3 class="hw-title"><i class="fa-solid fa-credit-card"></i> Payment</h3>
                  <p>Other hand we denoce ighteous and tion and dso beguilde ralized</p>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                <div class="hw-card style3">
                  <h3 class="hw-title"><i class="fa-solid fa-business-time"></i> Time</h3>
                  <p>Other hand we denoce ighteous and tion and dso beguilde ralized</p>
                </div>
              </div>
            </div>
            <div class="text-center mt-4">
              <a href="#!" class="see_all_btn style1">Read more on our Client Guide</a>
            </div>
          </Container>
        </section>
        {/* <!-- What to expect Section End --> */}


        {/* <!-- A Erosy with Section Start --> */}
        <section class="nft-wrap ptb40 bg-albastor ptb-40">
          <Container>
            <div class="section-title text-center mb-40">
              <h2>A Erosy with, our interview series</h2>
              <p>Get to know your favourite escorts, BDSM and massage providers from across the globe with our interview series, A Erosy with!</p>
            </div>
            <div class="row justify-content-center">
              <div class="col-xxl-3 col-xl-4 col-lg-6">
                <div class="hw-card style2">
                  <div class="hw-img"><img src={auction} alt="Image" /></div>
                  <div class="hw-info">
                    <h3 class="hw-title">Set Up Your Wallet</h3>
                    <p>Other hand we denoce ighteous indig tion and dso beguilde ralized</p>
                  </div>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-4 col-lg-6">
                <div class="hw-card style2">
                  <div class="hw-img"><img src={auction} alt="Image" /></div>
                  <div class="hw-info">
                    <h3 class="hw-title">Set Up Your Wallet</h3>
                    <p>Other hand we denoce ighteous indig tion and dso beguilde ralized</p>
                  </div>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-4 col-lg-6">
                <div class="hw-card style2">
                  <div class="hw-img"><img src={auction} alt="Image" /></div>
                  <div class="hw-info">
                    <h3 class="hw-title">Set Up Your Wallet</h3>
                    <p>Other hand we denoce ighteous indig tion and dso beguilde ralized</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* <!-- A Erosy with Section End --> */}


        {/* <!-- Erosy.link Section Start --> */}
        <section class="blog-wrap ptb-40">
          <Container>
            <div class="row mb-40">
              <div class="col-lg-9">
                <div class="section-title">
                  <h2>Erosy.link Sex Worker Blog</h2>
                </div>
              </div>
            </div>
          </Container>

          <div className="container-fluid px-0">
            <div className="position-relative">
              <Swiper
                watchSlidesProgress={true}
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                navigation={true}
                speed={1700}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3.5 },
                }}
                modules={[Navigation]}
                className="blog-slider owl-carousel-blog"
              >
                {erosyLink.map((post) => (
                  <SwiperSlide key={post.id}>
                    <div class="blog-card style1">
                      <div class="blog-img">
                        <img src={post?.img} alt="Image" />
                        <a class="blog-cat" href="posts-by-category.html">{post?.category}</a>
                      </div>
                      <div class="blog-info">
                        <ul class="blog-metainfo  list-style p-0">
                          <li><i class="fa-regular fa-user"></i><a href="posts-by-author.html">Admin</a></li>
                          <li><i class="fa-solid fa-comment-dots"></i>{post?.comments}</li>
                        </ul>
                        <h3><a href="blog-details-right-sidebar.html">{post?.title}</a></h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        {/* <!-- Erosy.link Section End --> */}


        {/* <!-- Why does Section Start --> */}
        <section class="blog-wrap ptb-40">
          <Container>
            <div class="row">
              <div class="col-md-6">
                <div class="conten">
                  <h4 className='mb-2'>Why does sex work need to be decriminalised, not just legalised?</h4>
                  <p>The criminalisation of sex work, sex workers and/or their clients needlessly harms vulnerable people. Advocating against evidence based policy, abolitionists have falsely touted the legalisation of sex work as the best way to achieve harm minimisation. However, creating a narrow path of ‘legal’ sex work necessitates the creation of illegal sex work which presents the same issues that we have now. The so-called ‘Nordic’ model (aka the “Entrapment model”, “Swedish Model” or “Equality Model”) that some nations in Europe have adopted, does not criminalise providers but instead targets clients. This model</p>
                </div>
              </div>
              <div class="col-md-6 workersClass">
                <h4 class="mb-3">Sex Workers on Decriminalisation</h4>
                <a title="Watch Sex Wokers talk about descriminalisation on The Archive's YouTube channel" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=FhxH9GHO9ew">
                  <img src={archive} class="media-responsive" alt="Thumbnail from episode 6 showing Frenchy Paradise, stripper" />
                </a>
              </div>
            </div>

          </Container>
        </section>
        {/* <!-- Why does Section End --> */}

      </div>
    </>
  )
}

export default Home
