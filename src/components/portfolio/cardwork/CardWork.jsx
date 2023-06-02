import React from "react";
import './cardwork.css';
import {API_URL} from "../../../config";


export default function CardWork({work}) {
	return (
    <div>
		<article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img className='portfolio__src-image' src= {work.image !== null ? API_URL + work.image[0].formats.small.url : "..."} alt="pict" />
        </div>
        <h3 className='portfolio__item-title'>{work.title}</h3>
        <div className="portfolio__item-content">
          <p>
            {work.content}
          </p>
        </div>
        <div className="portfolio__read-more">
          <span>
            {/* <a href="" >Read More</a> */}
            {/* <button className='btn btn-primary' target='_blank' rel="noreferrer">{work.url}</button> */}
          </span>

        </div>
      </article>
    </div>
	)
}