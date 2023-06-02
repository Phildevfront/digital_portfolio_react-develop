import React from "react";

import './cardmonial.css';
import {API_URL} from "../../../config";

import { SwiperSlide } from 'swiper/react';



const CardMonial = ({testimonial,index}) => {
  return (

	<SwiperSlide  className="testimonial">
	  <div className="client__avatar">
        <img src={testimonial.avatar !== null ? API_URL + testimonial.avatar.url : "..."} alt="Avatar" />
    </div>
    <h5 className="client__name">{testimonial.name}</h5>
    <small className='client__review'>
      {testimonial.review}
    </small>
  </SwiperSlide>


  )
}

export default CardMonial