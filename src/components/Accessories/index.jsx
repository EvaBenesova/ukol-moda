import React from 'react';

const Accessories = ( {image, name, description, price}) => {
   return(
      <div className='product'>
         <img className='product__image' src={image}></img>
         <h3 className='product__name'>{name}</h3>
         <p className='product__description'>{description}</p>
         <p className='product__price'>{price}</p>
      </div>
   )
 }

export default Accessories;
