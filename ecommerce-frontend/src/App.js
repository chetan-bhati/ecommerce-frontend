import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";

const products = [
  { id: 1, name: 'Product 1', description: 'Description of product 1', price: 19.99, image: 'image_url' },
  { id: 2, name: 'Product 2', description: 'Description of product 2', price: 29.99, image: 'image_url' },

];

function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product products={products} />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<h1>Wishlist Page</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/register" element={<h1>Register Page</h1>} />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
