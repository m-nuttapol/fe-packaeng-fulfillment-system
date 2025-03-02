import React, { useEffect, useState } from "react";
import { getProducts, addProduct } from "../services/api";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: "", price: "" });

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    const handleAddProduct = async () => {
        const addedProduct = await addProduct(newProduct);
        setProducts([...products, addedProduct]);
        setNewProduct({ name: "", price: "" });
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>{p.name} - ${p.price}</li>
                ))}
            </ul>

            <h3>Add Product</h3>
            <input
                type="text"
                placeholder="Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <button onClick={handleAddProduct}>Add</button>
        </div>
    );
};

export default ProductList;
