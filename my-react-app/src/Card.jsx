import React from "react";
import profile from "./assets/profile.jpg";

export default function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profile} alt="profile picture" />
      <h2 className="card-title">ItzMeCedy</h2>
      <p className="card-description">
        I love to help businesses by creating and maintaining responsive
        websites, ensuring a seamless user experience. My hobby are playing
        mobile games and taking care of my pets.
      </p>
    </div>
  );
}
