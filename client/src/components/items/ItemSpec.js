import React from "react";
import DeleteFromCart from "../cart/DeleteFromCart";

const ItemSpec = ({ id, name, thumbnail, price, page }) => {
  return (
    <div className="item-div">
      <a className="item-link" href={`/items/${id}`}>
        <div>
          <img className="thumbnail-img" src={thumbnail} alt={name} />
          <h4>{name}</h4>
          <em>${price}</em>
        </div>
      </a>
      {page === "cart" && <DeleteFromCart itemId={id} />}
    </div>
  );
};

export default ItemSpec;
