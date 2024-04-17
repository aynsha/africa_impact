import React from 'react';
import banner1 from '../Components/Assets/img/banner1.png';
import { Link } from 'react-router-dom';
import './CSS/LoginSignup.css';
import { useState } from 'react';

const LoginSignup = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    // Ajoutez ici la logique de gestion de la soumission du formulaire
  };

  const toggleForm = () => {
    setIsSigningUp(!isSigningUp);
    setIsForgotPassword(false); // Réinitialiser le formulaire de mot de passe oublié lors du basculement
  };

  const toggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
    setIsSigningUp(false); // Réinitialiser le formulaire d'inscription lors du basculement
  };

  return (
    <div className='content-login'>
      <div className='banner'>
        <img src={banner1} alt="" />
      </div>
      <div className='form-connect'>
        <h2>{isSigningUp ? "S'inscrire" : isForgotPassword ? 'Réinitialiser le mot de passe' : 'Se Connecter'}</h2>
        <p>
          {isSigningUp
            ? 'Déjà un compte ?'
            : isForgotPassword
              ? 'Retour à la connexion '
              : 'Vous n’avez pas de compte ? Veuillez vous '}
          <Link
            style={{ color: 'var(--main-yellow)' }}
            to="#"
            onClick={isForgotPassword ? toggleForgotPassword : toggleForm}
          >
            {isSigningUp ? 'Se connecter' : isForgotPassword ? 'Se connecter' : 'inscrire'}
          </Link>
        </p>
        {isForgotPassword ? (
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Votre email'
              required
            /><br />
            <button type='submit'>Réinitialiser le mot de passe</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            {isSigningUp && (
              <input
                type='text'
                id='username'
                name='username'
                placeholder="Nom et Prénom"
                required
              />
            )}
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Votre email'
              required
            /><br />
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Votre mot de passe'
              required
            /><br />
            <button type='submit'>
              {isSigningUp ? "S'inscrire" : "Se Connecter"}
            </button>
          </form>
        )}
        {!isSigningUp && !isForgotPassword && (
          <Link to="#" className='update-pwd' onClick={toggleForgotPassword}>
            Mot de passe oublié ?
          </Link>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;