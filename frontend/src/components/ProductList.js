import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from backend API
    fetch("http://localhost:5123/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h2>Available Products</h2>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
