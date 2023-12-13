import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './css/Rating.css'

export default function Rating() {
  return (
    <>
       <section class="rating-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="box rating-box-1">
                                <div class="rating-service">
                                    <span class="services">OUR BENEFITS</span>
                                </div>
                                <h2 data-aos="fade-up"  >What People Says?</h2>

                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="rating-box-2" data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="0">
                                <div class="rating-box-round">

                                </div>
                                <div class="rating-img">
                                    <img src="images/img15.jpg" alt="" />
                                </div>
                                <div class="rating-miniround">
                                    <img src="images/img16.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <Carousel >
                                <Carousel.Item >
                                    <div className='rating-box-3'>
                                        <div class="slide-box">
                                            <i class="fa-solid fa-star rating-star"></i>
                                            <i class="fa-solid fa-star rating-star"></i>
                                            <i class="fa-solid fa-star rating-star"></i>
                                            <i class="fa-solid fa-star rating-star"></i>
                                            <i class="fa-solid fa-star rating-star"></i>
                                            <p>
                                                I have been hiring people in this space for a number of years and I have never seen this level of
                                                professionalism. It really feels like you are working with a team that can get the job done.</p>
                                        </div>
                                        <div class="introduction">
                                            <div class="intro-card">
                                                <img src="images/imgg16.jpg" alt="" />
                                            </div>
                                            <div class="intro-detial">

                                                <h6>adrian parody</h6>
                                                <span>Co-Founder</span>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='rating-box-3'>
                                        <div class="slide-box">
                                            <i class="fa-solid fa-star rating-star"></i>
                                            <i class="fa-solid fa-star rating-star"></i>
                                            <i class="fa-solid fa-star rating-star"></i>
                                            <i class="fa-solid fa-star rating-star"></i>
                                            <i class="fa-solid fa-star rating-star"></i>
                                            <p>
                                                I have been hiring people in this space for a number of years and I have never seen this level of
                                                professionalism. It really feels like you are working with a team that can get the job done.</p>
                                        </div>
                                        <div class="introduction">
                                            <div class="intro-card">
                                                <img src="images/img17.jpg" alt="" />
                                            </div>
                                            <div class="intro-detial">

                                                <h6>adrian parody</h6>
                                                <span>Co-Founder</span>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}
