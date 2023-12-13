import React from 'react'
import Marquee from 'react-fast-marquee'
import './css/News.css'

export default function News(props) {
  return (
   <>
   <section className='marequee-area'>
                <Marquee >
                <h4>{props.head1}</h4>
                <i class="fa-solid fa-globe carousel-icon"></i>
                <h4>{props.head2}</h4>
                <i class="fa-solid fa-globe carousel-icon"></i>
                <h4>{props.head3}</h4>
                <i class="fa-solid fa-globe carousel-icon"></i>
                <h4>{props.head4}</h4>
                <i class="fa-solid fa-globe carousel-icon"></i>
                <h4>{props.head5}</h4>
                <i class="fa-solid fa-globe carousel-icon"></i>
                <h4>{props.head1}</h4>
                <i class="fa-solid fa-globe carousel-icon"></i>
                <h4>{props.head2}</h4>
                <i class="fa-solid fa-globe carousel-icon"></i>
                <h4>{props.head3}</h4>
                <i class="fa-solid fa-globe carousel-icon"></i>
                <h4>{props.head4}</h4>
                <i class="fa-solid fa-globe carousel-icon"></i>
                <h4>{props.head5}</h4>
                <i class="fa-solid fa-globe carousel-icon"></i>
            
                </Marquee>
                </section>
       

   </>
  )
}
