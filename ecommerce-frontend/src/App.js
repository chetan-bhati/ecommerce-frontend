import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import CreateCategory from "./forms/CreateCategory";
import Container from "./services/Container";
import Category from "./components/Category";

function App() {
  return (
    <CartProvider>
    <Router>
      <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<Category />} />
        <Route path="/create-category" element={<CreateCategory />} />
        <Route path="/wishlist" element={<h1>Wishlist Page</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/register" element={<h1>Register Page</h1>} />
      </Routes>
      </Container>
    </Router>
    </CartProvider>
  );
}

export default App;
