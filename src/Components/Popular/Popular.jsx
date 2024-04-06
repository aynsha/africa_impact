import React from 'react';
import './Popular.css';
import data from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <>
     <div className='today'><p>Aujourd'hui</p><br /></div>
     <h3>Ventes Flash</h3>
     
 <div className='popular' >     
      <div className="popular-item">
        {data.map((item, a)=>{
            return <Item key={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
      <button>Voir Plus</button>
    </div>
    </>
  )
}

export default Popular
