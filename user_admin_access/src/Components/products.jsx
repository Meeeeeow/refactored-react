import React from "react";
import shopData from "./shop.data";
import ProductList from "./productList";

const Products = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Products</h1>
      {shopData.map((category) => (
        <ProductList
          key={category.id}
          title={category.title}
          items={category.items}
        />
      ))}
    </div>
  );
};

export default Products;
