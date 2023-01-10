import React from "react";
import { useState } from "react";
const Item = ({ name, category }) => {
  const [item, setInCart] = useState(false);

  const inCart = item ? "in-cart" : null;

  const handleCartData = () => {
    setInCart(!item);
  };

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartData}>
        {item ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
};

export default Item;
