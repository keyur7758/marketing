import React from 'react'
import Card from './components/Card'
import { Cardprint, Cardprint2 } from './components/Box'
import Header from './components/Header'
import './css/Service.css'
import News2 from './News2'
import Footer from './components/Footer'
import Brand from './components/Brand'
import Digital from './components/Digital'

export default function Service() {
    return (
        <>
            <Header />
            
            <section className='service-area'>
                <div className='overlay'></div>
                <div className='container-fluid g-0'>
                    <div className='backfix-area'>
                        <div className='service-title' data-aos="fade-up" data-aos-duration="2000">
                            <h1>The Best Service Provider</h1>
                            <p>DIGITAL MARKETING</p>
                        </div>
                    </div>
                </div>
            </section>
            <Digital/>
            <Cardprint2 />
            <div className='container'>
             <News2  title1="Services" icon="fa-regular fa-face-smile"/>
             </div>
            <Brand/>
            <Footer/>
        </>
    )
}
