import React, { useState } from 'react'
import { Link } from "react-router-dom";
import marque from "../Assets/marque.png";
import './Footer.css';

const Footer = () => {
    const [menu, setMenu] = useState("accueil");
  return (
    <footer> 
    <div className="nav-menu">
    <div className="logo-footer">
      <Link to="/">
      <img src={marque} alt=""/>
      </Link>
      <p>ImpactAfrica est une plateforme panafricaine dédiée à la vente de produits et services en Afrique</p>
      </div>
      <div className='les-links'>
        <div className='a-propos'>
      <h3>A Propos</h3>
      <ul>
        <li onClick={() => {setMenu("accueil");}} >
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Notre Impact
          </Link>
          {menu === "acccueil" ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu("contact");}}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/contact">
            Nous contactez
          </Link>
          {menu === "contact" ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu("aPropos");}}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/aPropos">
          Notre Vision/ Mission
          </Link>
          {menu === "aPropos" ? <hr /> : <></>}
        </li>
      </ul>
      </div>
      <div className='services'>
      <h3>Nos Services</h3>
      <ul>
        <li onClick={() => {setMenu("");}} >
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Marketing Digital
          </Link>
          {menu === "" ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu("");}}>
          <Link style={{ textDecoration: "none", color: "white" }} to="">
            Demande de devis
          </Link>
          {menu === "" ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu("");}}>
          <Link style={{ textDecoration: "none", color: "white" }} to="">
          Partenariat
          </Link>
          {menu === "" ? <hr /> : <></>}
        </li>
      </ul>
      </div>
      <div className='mention-legal'>
      <h3>Mentions légales</h3>
      <ul>
        <li onClick={() => {setMenu("");}}>
          <Link style={{ textDecoration: "none", color: "white" }} to="">
            Conditions d'utilisation
          </Link>
          {menu === "" ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu("");}}>
          <Link style={{ textDecoration: "none", color: "white" }} to="">
          Confidentialité
          </Link>
          {menu === "" ? <hr /> : <></>}
        </li>
      </ul>
      </div>
      <div className='support'>
      <h3>Support</h3>
      <ul>
        <li onClick={() => {setMenu("");}}>
          <Link style={{ textDecoration: "none", color: "white" }} to="">
          Centre d’aide
          </Link>
          {menu === "" ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu("");}}>
          <Link style={{ textDecoration: "none", color: "white" }} to="">
          Méthodes de Paiement
          </Link>
          {menu === "" ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu("");}}>
          <Link style={{ textDecoration: "none", color: "white" }} to="">
          Transport / Logistique
          </Link>
          {menu === "" ? <hr /> : <></>}
        </li>
      </ul>
      </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
