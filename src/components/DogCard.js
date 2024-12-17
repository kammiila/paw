import React from "react";
import "./../styles/DogCard.css";

function DogCard({ title, description, image }) {
  return (
    <div className="dog-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default DogCard;
