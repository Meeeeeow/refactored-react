import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import shopData from "./shop.data";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    for (const category of shopData) {
      const foundProduct = category.items.find(
        (item) => item.id === parseInt(id)
      );
      if (foundProduct) {
        setProduct(foundProduct);
        break;
      }
    }
  }, [id]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Product Details</h1>
      {product ? (
        <div className="flex flex-col md:flex-row items-center">
          <div className="border mb-4 md:mr-8 md:mb-0">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full md:w-64"
            />
          </div>
          <div>
            <p className="font-semibold">Name: {product.name}</p>
            <p className="font-semibold">Price: ${product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
