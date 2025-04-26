import React, { useEffect, useState } from "react";
import { getapi } from "../services/Api";
import { Link } from "react-router-dom";


    const Product = () => {
        const [products, setProducts] = useState([]);
      
        useEffect(() => {
            getapi("store/products/")
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
        }, []);

  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
        <div className="product-list  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
            <div key={product.id} className="product" style={{ border: "1px solid #ccc", padding: "15px", width: "200px" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="text-gray-700 mt-2">${product.price}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
            </div>
        ))}
        </div>
    </div>
  );
};


export default Product;
