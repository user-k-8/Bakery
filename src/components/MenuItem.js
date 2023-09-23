import React from 'react'

const MenuItem = ({element}) => {
  return (
<>
   <div className='section-line'>
     <hr />
   </div>
    <section className='menu-item-container'>
      <div className='image-container'>
         <img src={element.img} alt=''/>
      </div>
      <div className='menu-text menu-item'>
          <h1 className='menu-heading'>{element.title}</h1>
          {element.shortDescription}
         <p> 1 Slice --- {element.slicePrice} <br/> Whole cake --- {element.cakePrice}</p>
      </div>
   </section>
</>
  )
}

export default MenuItem