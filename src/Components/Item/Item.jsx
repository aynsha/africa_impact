import React from 'react'
import './Item.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import cart from '@iconify/icons-mdi/cart-outline';

const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name} </p>
      <div className="item-prices">
        <div className="item-price-new">
            {props.new_price}
        </div>
        <div className="item-price-old">
            {props.old_price}
        </div>
      </div>
        <button>
          <Icon icon={cart} className='cart-ic'/>Add to card</button>
    </div>
  )
}

export default Item
