import React from 'react'
import '../css/Card.css'


export default function Card(props) {
  return (
    <>
      <div class="col-lg-4 col-md-6   mt-3  card-border" data-aos="fade-right" data-aos-duration="2000" >
        <div class="box">
          <div class="img-box">
            <img src={props.data.images} alt="" />
            <h6>{props.data.title1}</h6>
            <h3>{props.data.title2}</h3>
            <h5>{props.data.title3}</h5>
            <div class="card-btn card-btn-1">
              <p class="card-p1">READ MORE</p>
              <span>
                <i class="fa-solid fa-chevron-right card-icon"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
