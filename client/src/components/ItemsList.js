import React from "react";
import ItemSpec from "../components/ItemSpec";

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
