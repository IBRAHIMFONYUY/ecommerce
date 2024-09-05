import { useState } from "react";
import React from "react";
const FavoriteButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div>
      
      <span
        style={{
          color: isFavorited ? 'red' : 'gray',
          cursor: 'pointer',
          fontSize:'50px'
        }}
        onClick={handleClick}
      >
        &#9825;
      </span>
    </div>
  );
};

export default FavoriteButton;
