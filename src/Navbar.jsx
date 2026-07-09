import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Navbar() {
  const { totalQuantity } = useCart();

  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>ShopZone</Link>
      <Link to="/shop" style={{ color: '#fff', textDecoration: 'none' }}>Shop</Link>
      <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>
        Cart ({totalQuantity})
      </Link>
    </nav>
  );
}

export default Navbar;