import React from "react";

export default function Button() {
  const handleClick = () => console.log("ouch");
  return (
    <div>
      <button onClick={handleClick}>Ouch</button>
    </div>
  );
}
