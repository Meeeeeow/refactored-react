/* eslint-disable react/prop-types */
import React from "react";
import ProductSingle from "./productSingle";

const ProductList = ({ title, items }) => (
  <div className="flex flex-col mb-2">
    <h1 className="mb-4 text-2xl">{title.toUpperCase()}</h1>
    <div className="flex justify-between mb-3">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <ProductSingle key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default ProductList;
