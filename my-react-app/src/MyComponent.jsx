import React, { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("Cedrick");
  const updateName = () => {
    setName("Spongebob");
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
    </div>
  );
}
