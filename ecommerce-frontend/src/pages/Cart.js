import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>Quantity: {product.quantity}</p>
                <p>${(product.price * product.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
