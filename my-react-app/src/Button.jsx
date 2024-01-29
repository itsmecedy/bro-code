import React from "react";

export default function Button() {
  const imageUrl = "./src/assets/profile.jpg";

  const handleClick = (e) => (e.target.style.display = "none");
  return (
    <div>
      <img onClick={(e) => handleClick(e)} src={imageUrl} />
    </div>
  );
}
