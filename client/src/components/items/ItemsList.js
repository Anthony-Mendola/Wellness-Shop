import React from "react";
import ItemSpec from "../items/ItemSpec";

//object destructuring to extract values from props
const ItemsList = ({ items, page }) => {
  return (
    <div className="page-container">
      {items.map(item => (
        <ItemSpec
          key={item.id}
          id={item.id}
          name={item.name}
          thumbnail={item.img_thumbnail}
          price={item.price}
          page={page}
        />
      ))}
    </div>
  );
};

export default ItemsList;

//Keys help React identify which items have changed/added/removed and give the elements a stable identity. 