import React from 'react'

const Card = ({element}) => {
  return (
    <>
      <article>    
                <h2>{element.heading}</h2>
                <img src={element.img}  alt="breadbasket"/>
                <p>{element.description} </p>
                <p className='card-footer'>{element.footer}</p>
        </article>
    </>
  )
}

export default Card