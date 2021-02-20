import React from 'react';
import './Card.styles.css';

export default function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card__content">
        <h1>{title.replace('&#39;', '')}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
