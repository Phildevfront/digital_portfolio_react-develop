import React, {useEffect, useState } from 'react'
import './works.css'

import CardWork from './CardWork'


const Works = () => {

  const [isLoading, setIsLoading] = useState(true) // loading des datas
  const [works, setWorks] = useState(true)

  useEffect(() => {
    fetch('http://localhost:1337/works',
    {
        method: "GET",
        headers: {
          'Accept': 'Application/json'
        }

    })
    .then(res => res.json())
    .then(response => {
        setWorks(response)
        setIsLoading(false)
    })
  },[])


  return (
    <section id="portfolio">
    <h5>My recent Work</h5>
    <h2>Portfolio</h2>
    <div className='container portfolio__container'>

        { isLoading ? 'Loading...' : works.map(work => <CardWork work={work} key={work.id}/> )}

      {/* <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG1} alt="img" />
        </div>
        <h3>Opéra National de Paris</h3>
        <div className="portfolio__item-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque minus voluptatum corrupti dicta laborum impedit a atque cum nobis. Corrupti veritatis nesciunt laboriosam libero iure doloribus aliquid temporibus quo.
          </p>
        </div>
        <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG1} alt="img" />
        </div>
        <h3>Chanel</h3>
        <div className="portfolio__item-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque minus voluptatum corrupti dicta laborum impedit a atque cum nobis. Corrupti veritatis nesciunt laboriosam libero iure doloribus aliquid temporibus quo.
          </p>
        </div>
        <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG1} alt="img" />
        </div>
        <h3>ORSC</h3>
        <div className="portfolio__item-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque minus voluptatum corrupti dicta laborum impedit a atque cum nobis. Corrupti veritatis nesciunt laboriosam libero iure doloribus aliquid temporibus quo.
          </p>
        </div>
        <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG1} alt="img" />
        </div>
        <h3>Dyptique</h3>
        <div className="portfolio__item-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque minus voluptatum corrupti dicta laborum impedit a atque cum nobis. Corrupti veritatis nesciunt laboriosam libero iure doloribus aliquid temporibus quo.
          </p>
        </div>
        <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG1} alt="img" />
        </div>
        <h3>Jessie Nottola</h3>
        <div className="portfolio__item-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque minus voluptatum corrupti dicta laborum impedit a atque cum nobis. Corrupti veritatis nesciunt laboriosam libero iure doloribus aliquid temporibus quo.
          </p>
        </div>
        <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG1} alt="img" />
        </div>
        <h3>Numéro (Agence Mazarine)</h3>
        <div className="portfolio__item-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque minus voluptatum corrupti dicta laborum impedit a atque cum nobis. Corrupti veritatis nesciunt laboriosam libero iure doloribus aliquid temporibus quo.
          </p>
        </div>
        <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article> */}
    </div>

    </section>
  )
}

export default Works