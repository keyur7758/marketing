import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import newlineBr from 'newline-br';
import News from '../News'
import '../css/Home.css'
import News2 from '../News2';
import Blog from './Blog';
import Footer from './Footer';
import Header from './Header';
import { Cardprint } from './Box';
import Brand from './Brand';
import Rating from '../Rating';
import Award from './Award';
import Digital from './Digital';

export default function Home() {
    const options = {
        items: 2,
        autoplayTimeout: 2000,
        loop: true,
        nav: false,
        dots: false,
        rewind: true,
        autoplay: true,
        responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            992: {
              items: 2
            },
            768: {
              items: 2
            },
    
            1000: {
              items: 2
            }
          }
    };
    return (
        <>
            <Header />
            <section class="back-img">
                <div class="header-area" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                    <div class="container">
                        <div class="row g-0">
                            <div class="col-lg-10 col-md-6">
                                <div class="box">
                                    <h2>HIGH END</h2>
                                    <span class="CREATIVE">CREATIVE</span>
                                    <h2 id='heading-h2'>  AGENCY</h2>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6">
                                <div class="header-area-box">
                                    <div class="img">
                                        <img src="images/smokey.png" alt="" />
                                        <i class="fa-solid fa-arrow-down icon-arrow"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vc-area">
                    <div class="container-fluid g-0">
                        <div class="row  g-0 ">
                            <div class="col-lg-5 col-md-12">
                                <div class="vc-info" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                                    <div class="box">
                                        <p>Through our years of experience, we've also learned that while </p>
                                        <p>  each channel has its own set of
                                            advantages.</p>
                                        <div class="buttons">
                                            <a class="round" href="#">
                                                <span class="btn-1">Watch</span>
                                                <span class="fa-solid fa-circle-play play-icon"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="img-box">
                                    <img src="images/img1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Digital/>

            <section class="revenue-area">
                <div class="container">
                    <div class="row g-0">
                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <div class="box">
                                <div class="img2-box" data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"  >
                                    <img class="img2" src="images/img2.jpg" alt="" />
                                </div>
                                <div class="img3-box" data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                    <img src="images/img3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6  col-md-6">
                            <div class="box">
                                <div className='revenue-box'>
                                    <h3 data-aos="zoom-in-up" data-aos-duration="1000"> Unlock Revenue Growth </h3>
                                    <h3> for Your Business.</h3>

                                    <div class="info-box" data-aos="fade-up" data-aos-duration="1000">
                                        <div class="revenue-title-1">
                                            <img src="images/img4.png" alt="" />
                                            <div class="revenue-info">
                                                <h3>High Standerd</h3>
                                                <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                                <p> et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                        <div class="revenue-title-1">
                                            <img src="images/img5.png" alt="" />
                                            <div class="revenue-info">
                                                <h3>Ease of Communication</h3>
                                                <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                                <p> et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='stick-area'>
                <section class="details-area">
                    <div class="stick-1">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-6">
                                    <div class="box">
                                        <i class="fa-solid fa-code details-icon"></i>
                                        <h4 class="d-h1">Javascript</h4>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6">
                                    <div class="box">
                                        <i class="fa-solid fa-microchip details-icon"></i>
                                        <h4 class="d-h3">PhP</h4>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6">
                                    <div class="box">
                                        <i class="fa-brands fa-python details-icon"></i>
                                        <h4 class="d-h2">Python</h4>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6">
                                    <div class="box">
                                        <i class="fa-solid fa-wand-magic-sparkles details-icon"></i>
                                        <h4 class="d-h4">Graphic</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <News head1="Web Development" head2="Digital Marketing" head3="Product Desgin" head4="Mobile Solutions" head5="UI-UX Experience" />
            </div>

          <Digital/>
            <Cardprint />

            <div className='slider-area'>
                <OwlCarousel options={options}>
                    <div class="item">
                        <img src="images/img7.jpg" alt="" />
                        <div class="text-box">
                            <div class="gallrey-title">
                                <h6>WEB DESIGN</h6>
                                <h4>Color Intergration</h4>
                            </div>
                            <div class="date-box">
                                <span>2023</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images/img8.jpg" alt="" />
                        <div class="text-box">
                            <div class="gallrey-title">
                                <h6>WEB DESIGN</h6>
                                <h4>Color Intergration</h4>
                            </div>
                            <div class="date-box">
                                <span>2023</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images/img9.jpg" alt="" />
                        <div class="text-box">
                            <div class="gallrey-title">
                                <h6>WEB DESIGN</h6>
                                <h4>Color Intergration</h4>
                            </div>
                            <div class="date-box">
                                <span>2023</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images/img10.jpg" alt="" />
                        <div class="text-box">
                            <div class="gallrey-title">
                                <h6>WEB DESIGN</h6>
                                <h4>Color Intergration</h4>
                            </div>
                            <div class="date-box">
                                <span>2023</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images/img11.jpg" alt="" />
                        <div class="text-box">
                            <div class="gallrey-title">
                                <h6>WEB DESIGN</h6>
                                <h4>Color Intergration</h4>
                            </div>
                            <div class="date-box">
                                <span>2023</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images/img12.jpg" alt="" />
                        <div class="text-box">
                            <div class="gallrey-title">
                                <h6>WEB DESIGN</h6>
                                <h4>Color Intergration</h4>
                            </div>
                            <div class="date-box">
                                <span>2023</span>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>

            <div className='news-area'>
                <div className='container'>
                    <div className='news-content'>
                        <News2 title1="Amazing Design" icon="fa-solid fa-globe carousel-icon" />
                    </div>
                </div>
            </div>

            <Brand />
            <Rating />
            <Award />
            <div className='bloging-area'>
                <Blog src1="images/img18.jpg" date1="JULY 18, 2023" title1="Business meeting 2023" address1="in rajkot gujarat." src2="images/img19.jpg" title2="Free advertising for" text2="your online business." heading2="Latest News" />
            </div>
            <Footer />
        </>
    )
}
