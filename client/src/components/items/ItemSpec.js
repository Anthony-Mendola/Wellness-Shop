import React from "react";
import DeleteFromCart from "../cart/DeleteFromCart";
import { Link } from "react-router-dom";

const ItemSpec = ({ id, name, thumbnail, price, page }) => {
  return (
    <div className="item-div">
      <Link className="item-link" to={`/items/${id}`}>
        <img className="thumbnail-img" src={thumbnail} alt={name} />
      </Link>
      <div>

        <h4>{name}</h4>
        <em>${price}</em>
      </div>

      {page === "cart" && <DeleteFromCart itemId={id} />}
    </div >
  );
};

export default ItemSpec;
