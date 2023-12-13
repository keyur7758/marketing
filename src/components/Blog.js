import React from 'react'
import '../css/Blog.css'


export default function Blog(props) {
    return (
        <>
            <section class="blog-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6"  >
                            <div class="blog-box">
                                <div class="blog-round">
                                    <span class="blog-title">SERVICES</span>
                                </div>
                                <h3>{props.heading2}</h3>

                                <div class="business-box">
                                    <div class="business-img" >
                                        <img src={props.src1} data-aos="fade-up" data-aos-duration="2000" alt="" />
                                    </div>
                                    <div class="business-details">
                                        <p>{props.date1}</p>
                                        <h5>{props.title1} </h5>
                                        <h5>in rajkot gujarat.</h5>
                                        <div class="business-btn">
                                            <a href="#">
                                                <li>Design</li>
                                            </a>
                                            <a href="#">
                                                <li class="market-btn">Marketing</li>
                                            </a>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="blog-box">
                                <div class="blog-news">
                                    <span class="blog-circle fa-solid fa-circle"></span>
                                    <h6>View All Our News </h6>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                                <div class="blog-box-card-2">
                                    <div class="business-box">
                                        <div class="business-img">
                                            <img src={props.src2} data-aos="fade-up" data-aos-duration="2000" alt="" />
                                        </div>
                                        <div class="business-details">
                                            <p>{props.date1}</p>
                                            <h5>{props.title2}</h5>
                                            <h5> {props.text2}</h5>
                                            <div class="business-btn">
                                                <a href="#">
                                                    <li>Design</li>
                                                </a>
                                                <a href="#">
                                                    <li class="market-btn">Marketing</li>
                                                </a>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
