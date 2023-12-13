import React from 'react'
import Marquee from 'react-fast-marquee'
import './css/News2.css'

export default function News2(props) {
  return (
   <>
    <div className='news-area'>
   <Marquee>
   <h4 className='amazing-1'>{props.title1}</h4>
   <i class={"carousel-icon " + props.icon}></i>
   <h4 className='amazing'>{props.title1}</h4>
   <i class={"carousel-icon " + props.icon}></i>
   <h4 className='amazing-1'>{props.title1}</h4>
  <i class={"carousel-icon " + props.icon}></i>
   <h4 className='amazing'>{props.title1}</h4>
  <i class={"carousel-icon " + props.icon}></i>
   <h4 className='amazing-1'>{props.title1}</h4>
  <i class={"carousel-icon " + props.icon}></i>
   <h4 className='amazing'>{props.title1}</h4>
  <i class={"carousel-icon " + props.icon}></i>
   </Marquee>
   </div>
   </>
  )
}
