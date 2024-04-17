import React from 'react'
import './ItemProducteur.css';
import cart from '@iconify/icons-mdi/cart-outline';
import { Icon } from '@iconify/react/dist/iconify.js';

const ItemProducteur = (props) => {
  return (
    <div className="item-producteur" >
    <div className='product'>
      <img src={props.image} alt="" />
      <p>{props.name} </p>
      <div className="product-prices">
        <div className="product-price-new">
            {props.new_price}
        </div>
        <div className="product-price-old">
            {props.old_price}
        </div>
      </div>
        <button>
          <Icon icon={cart} className='cart'/>Add to card</button>
    </div>
    </div>
  )
}

export default ItemProducteur
