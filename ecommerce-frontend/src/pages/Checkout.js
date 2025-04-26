import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    paymentMethod: "",
  });
  const navigate = useNavigate();

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      cart: cart.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
      totalAmount: getTotalAmount(),
      shippingAddress: formData.address,
      paymentMethod: formData.paymentMethod,
    };

    try {
      const response = await fetch("http://localhost:8000/api/checkout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Order placed successfully!");
        navigate("/thank-you");
      } else {
        alert("There was an error placing your order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("There was an error placing your order.");
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add items to the cart before proceeding to checkout.</p>
      ) : (
        <div>
          <h3>Review Your Cart</h3>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <h3>Total: ${getTotalAmount()}</h3>

          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Address:
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Email:
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Payment Method:
                <select
                  value={formData.paymentMethod}
                  onChange={(e) =>
                    setFormData({ ...formData, paymentMethod: e.target.value })
                  }
                >
                  <option value="credit">Credit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </label>
            </div>
            <button type="submit">Place Order</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
