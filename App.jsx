import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext'; // Context ko import kiya
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import ProductDetail from './ProductDetail';
import Cart from './Cart';

function App() {
  return (
    <CartProvider> {/* Pure application tree ko wrap kar diya */}
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;