import { useState } from "react";
import React from "react";
const AddButton = (add, remove) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const[button, setbutton]=useState("Add item")

  const handleClick = (add, remove) => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="counter"
    style={{
        backgroundColor: isFavorited ? 'white' : '',
        cursor: isFavorited ? 'pointer':'none',
      }}
    >
      <span onClick={handleClick} 
      style={{
        color: isFavorited ? 'green' : 'black',
        cursor: 'pointer',
      }}
      >
        {isFavorited ? 'Item Added' : (button)}
        {isFavorited ? (()=>add()) : (()=>remove())}
      </span>
      
    </div>
  );
};

export default AddButton;