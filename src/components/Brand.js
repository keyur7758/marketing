import React from 'react'
import '../css/Brand.css'

export default function Brand() {
  return (
   <>
            <section class="branding-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="box" data-aos="fade-up" data-aos-duration="2000">
                                <div class="b-round">
                                    <span class="benefit-title">SERVICES</span>
                                </div>
                                <p class="branding-area-para">We help you to go online and increase your conversion rate Better design for
                                    your digital products</p>
                                <div class="branding-title branding-title-border">
                                    <span class="branding-num">01</span>
                                    <h2>UI/UX Design</h2>
                                </div>
                                <div class="branding-title branding-title-border">
                                    <span class="branding-num">02</span>
                                    <h2> Branding</h2>
                                </div>
                                <div class="branding-title branding-title-border">
                                    <span class="branding-num">03</span>
                                    <h2>Development</h2>
                                </div>
                                <div class="branding-title">
                                    <span class="branding-num">04</span>
                                    <h2>Marketing</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="box" data-aos="fade-up" data-aos-duration="2000">
                                <div class="img-box-1">
                                    <img src="images/13.jpg " class="img-fluid" alt="" />
                                </div>
                                <div class="img-box-2">
                                    <img src="images/img4.png" alt="" />
                                    <p>We are a creative studio specializing in design, development and strategy many different skills and
                                        disciplines in the production of all web.</p>
                                    <p class="branding-area-btn">READ MORE</p>
                                    <span>
                                        <i class="fa-solid fa-chevron-right branding-area-btn-arrow "></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
   </>
  )
}
