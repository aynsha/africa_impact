import React, { useState } from "react";
import './Navbar.css';
import logo from "../Assets/logo.png";
import {Icon} from '@iconify/react';
import cart from '@iconify/icons-mdi/cart-outline';
import account from "@iconify/icons-mdi/account-outline";
import search from "@iconify/icons-mdi/search";
import setting from "@iconify/icons-mdi/settings-outline"
import { Link } from "react-router-dom";
import shop from '@iconify/icons-mdi/shop-outline';
import bell from '@iconify/icons-mdi/bell-outline';
import banner1 from '../Assets/banner1.jpg';
import "bootstrap/dist/css/bootstrap.css";


const Navbars = () => {
  const [categories, setCategories] = useState({ 
  categorie1: '',
  categorie2: '',
  categorie3: '',
  categorie4: '',
  categorie5: '',
  categorie6:'',
  categorie7:'',
  categorie8:'',
  categorie9:'',
  categorie10:'',
});

  const handleChange = (e, categorie) => {
    setCategories({
      ...categories,
      [categorie]: e.target.value,
    });
  };
  return (
    <>
    <div id="navbar" className="navbar-fixed-top">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <div class="search-bar">
        <div class="search-category">
          <input type="text" placeholder="Catégorie" />
        </div>
        <div class="search-location">
          <input type="text" placeholder="Localisation" />
        </div>
        <div class="search-icon">
          <button>
            <Icon icon={search} className="icon-search" />
          </button>
        </div>
      </div>
      <div className="nav-login-cart" >
      <Link to="">
          <Icon icon={setting} className="black-icon" />
        </Link>
      <Link to="">
          <Icon icon={bell} className="black-icon"/>
        </Link>
        <Link to="/login">
          <Icon icon={account} className="black-icon" />
        </Link>
        <Link to="/cart">
          <Icon icon={cart} className="black-icon" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
    <div id="navbar-category" >
      <select value={categories.categorie1} onChange={(e) => handleChange(e, 'categorie1')}>
        <option value="" > Tout les produits</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        </select>
        <select value={categories.categorie2} onChange={(e) => handleChange(e, 'categorie2')}>
        <option value=""> Solutions</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <select value={categories.categorie3} onChange={(e) => handleChange(e, 'categorie3')}>
        <option value=""> Services </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <select value={categories.categorie4} onChange={(e) => handleChange(e, 'categorie4')}>
        <option value=""> Made in Africa </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        </select>
        <select value={categories.categorie5} onChange={(e) => handleChange(e, 'categorie5')}>
        <option value=""> Annuaire </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
        <select value={categories.categorie6} onChange={(e) => handleChange(e, 'categorie6')}>
        <option value=""> Partenariat </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
        <select value={categories.categorie7} onChange={(e) => handleChange(e, 'categorie7')}>
        <option value=""> RFQ </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
        <select value={categories.categorie8} onChange={(e) => handleChange(e, 'categorie8')}>
        <option value="">DwlApp </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
        <select value={categories.categorie9} onChange={(e) => handleChange(e, 'categorie9')}>
        <option value=""> Apps </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
        <button>
          <Icon icon={shop} className="boutique" />
          Boutique
        </button>
      
          {categories.categorie1 && <div >
            <img src={banner1} alt="" style={{width:'100%'}}/>
            {categories.categorie1}</div>}
          {categories.categorie2 && <div>Contenu pour catégorie 2: {categories.categorie2}</div>}
          {categories.categorie3 && <div>Contenu pour catégorie 3: {categories.categorie3}</div>}
          {categories.categorie4 && <div>Contenu pour catégorie 4: {categories.categorie4}</div>}
          {categories.categorie5 && <div>Contenu pour catégorie 5: {categories.categorie5}</div>} 
  </div>
    </>
  );
};

export default Navbars;
