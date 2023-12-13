import React from 'react'
import '../css/About.css'
import News2 from '../News2';
import Header from './Header';
import Blog from './Blog';
import Footer from './Footer';
import Rating from '../Rating';
import Award from './Award';

export default function About() {
    return (
        <>
            <Header />
            <section className='about-area'>
                <div className='about-img'>
                    <div className='service-title'data-aos="fade-up" data-aos-duration="2000">
                        <h1>The Writers of History.</h1>
                        <p>No Risk, No Reward.</p>
                    </div>
                </div>
            </section>

            <div className='stick-2-area'>
                <div className='container'>
                    <News2 title1="About us" icon="fa-regular fa-face-smile" />
                </div>
            </div>
            <div className='blog-area'>
                <Blog src1="images/KEYUR.png" date1="JULY 18, 2023" title1="Business meeting 2023" address1="in rajkot gujarat." src2="images/KEYUR.png" title2="Free advertising for" text2="your online business." heading2="Our Team" />
            </div>
            
            <Award />
            <Rating />
            <Footer />

        </>
    )
}
