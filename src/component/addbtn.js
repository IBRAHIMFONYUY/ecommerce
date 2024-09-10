import { useState } from "react";
import React from "react";
const AddButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const[button, setbutton]=useState("Add item")

  const handleClick = () => {
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
        
      </span>
      
    </div>
  );
};

export default AddButton;
