import React from 'react';
import data_prod from '../Assets/data_prod';
import Fournisseur from '../Fournisseur/Fournisseur';
import './Producteur.css';

const Producteurs = () => {
  return (
    <div className='producteurs' >
        <h2>Nos Producteurs</h2>     
      <div className="producteur-item" >
        {data_prod.map((item, a)=>{
            return <Fournisseur key={item.id} image={item.image} name={item.name} location={item.location} />
        })}
      </div>
    </div>
  )
}

export default Producteurs
