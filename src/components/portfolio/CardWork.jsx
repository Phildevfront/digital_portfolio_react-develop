import React from "react";
import './cardwork.css';
import {API_URL} from "../../config.js";


export default function CardWork({work}) {
	return (

		<article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={ API_URL + work.image.formats.small.url }  alt="img" />
        </div>
        <h3>{work.title}</h3>
        <div className="portfolio__item-content">
          <p>
            {work.content}
          </p>
        </div>
        <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>
	)
}