import React, { useEffect, useState } from 'react'
import CardMonial from '../testimonials/cardmonial/CardMonial'
import './testimonials.css'

// Import Swiper styles



import { Swiper } from 'swiper/react';

import { Pagination } from "swiper";

const Testimonials = () => {

  const [isLoading, setIsLoading] = useState(true) // loading des datas
  const [testimonials, setTestimonials] = useState(true)

  useEffect(() => {
    fetch('http://localhost:1337/testimonials',
    {
        method: "GET",
        headers: {
          'Accept': 'Application/json'
        }

    })
    .then(res => res.json())
    .then(response => {
        setTestimonials(response)
        setIsLoading(false)
    })

  },[])

  return (
    <section id="testimonials">
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >


        { isLoading ? 'Loading...' : testimonials.map(testimonial => <CardMonial testimonial={testimonial} key={testimonial.id}/> )}

      </Swiper>

    </section>
  )
}

export default Testimonials