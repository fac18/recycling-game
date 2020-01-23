import React from "react";

const Item = currentItem => {
  return <img src={currentItem.item.src} alt="Drag me to the right bin!" />;
};

export default Item;
