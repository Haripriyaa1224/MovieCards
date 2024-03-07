import React from 'react'
import './Card.css'
import { faShareNodes, faHeart, faComment } from '@fortawesome/free-solid-svg-icons'
// import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Card = (props) => {
    console.log(props)
  return (
   <>
   <div className="card-container">
    <div id="left">
        <div id="left-top">
            <img src={props.image_links[0]}></img>
            <div id="left-top-content">
                <h3 id="title" className='container-text'>{props.title}</h3>
                <p id="year" className='container-text'>{props.year}, {props.director}</p>
               <div id="dp-flex"> <span id="duration" className='container-text'>{props.duration}</span> <span className='container-text'>{props.genre.join(', ')}</span></div>
            </div>
        </div>
        <div id="left-mid">
            <p className='container-text'>{props.synopsis}</p>
        </div>
        <div id="left-bot">
            <span><FontAwesomeIcon icon={faShareNodes} /></span>
            <span><FontAwesomeIcon icon={faHeart} /></span>
            <span><FontAwesomeIcon icon={faComment} /></span>
        </div>
    </div>
    <div id="right" class="pickgradient">
        <img src={props.image_links[1]}></img>
        <div class="overlay"></div>
    </div>
    
   </div>
   </>
  )
}

//Movie name added from json