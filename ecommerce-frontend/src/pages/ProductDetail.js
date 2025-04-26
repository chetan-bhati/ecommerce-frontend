import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getapi } from "../services/Api";

const ProductDetail = () => {
  const { productId } = useParams();
  const [productsdetails, setProductsDetails] = useState([]);

  useEffect(() => {
        getapi(`store/products/${productId}`)
              .then((data) => setProductsDetails(data))
              .catch((err) => console.log(err));
          }, [productId]);



  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(productsdetails);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>{productsdetails.name}</h1>
      <img src={productsdetails.image} alt={productsdetails.name} style={{ width: "100%", height: "auto" }} />
      <p>{productsdetails.description}</p>
      <p><strong>Price: {productsdetails.price}</strong></p>
      <button
        onClick={handleAddToCart}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
