import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getapi } from "../services/Api";

const Home = () => {
   const [products, setProducts] = useState([]);
        
          useEffect(() => {
              getapi("store/products/")
              .then((data) => setProducts(data))
              .catch((err) => console.log(err));
          }, []);

  return (
    <div>
      <h1>Welcome to Our E-Commerce Store</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "15px", width: "200px" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
