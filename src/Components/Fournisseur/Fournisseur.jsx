import React from 'react';
import {Icon} from '@iconify/react';
import location from '@iconify/icons-mdi/location';
import './Fournisseur.css';
import data from '../Assets/data';
import ItemProducteur from '../Item_producteur/ItemProducteur';

const Fournisseur = (props) => {
  return (
    <div className='producteur'>
      <div className='profil'>
        <div className='avatar'>
            <img src={props.image} alt="" />
        </div>
        <h2>{props.name}</h2>
        <div className='location'>
         <Icon icon={location} className='location-icon' />
         <p>{props.location}</p>
         </div>
    </div>
    <div className="producteur-item" >
        {data.slice(0, 2).map((item, a)=>{
            return <ItemProducteur key={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Fournisseur
