// src/Card.js
import React from 'react';
import './Card.css'; // Optional: Create a CSS file for styling

const Card = ({ brand }) => {
  return (
    <div className="card">
      <img src={brand.image} alt={brand.name} className="card-image" />
      <h3 className="card-title">{brand.name}</h3>
      <a href={brand.link} target="_blank" rel="noopener noreferrer">
        <button className="card-button">Visit Site</button>
      </a>
    </div>
  );
};

export default Card;
