import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, totalAmount } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Your Shopping Cart is Empty</h2>
        <p>Go to the shop page to add some wonderful items.</p>
        <Link to="/shop" style={{ color: '#3498db', fontWeight: 'bold', textDecoration: 'none' }}>
          Shop Now ➡️
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '30px', maxWidth: '900px', margin: '0 auto' }}>
      <h2>Your Global Shopping Cart</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
        {cart.map((item) => (
          <div 
            key={item.id} 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #ddd',
              paddingBottom: '15px',
              flexWrap: 'wrap',
              gap: '15px'
            }}
          >
            <img src={item.thumbnail} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
            <div style={{ flex: '1', minWidth: '200px', marginLeft: '15px' }}>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '18px' }}>{item.title}</h3>
              <p style={{ margin: 0, color: '#666' }}>Price: ${item.price}</p>
              <p style={{ margin: 0, fontWeight: 'bold' }}>Quantity: {item.quantity}</p>
            </div>
            <div>
              <p style={{ fontWeight: 'bold', fontSize: '18px', margin: '0 0 10px 0' }}>
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: '#e74c3c',
                  color: '#fff',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Computation Summary Card */}
      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        textAlign: 'right',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{ margin: '0 0 10px 0' }}>Grand Total: ${totalAmount.toFixed(2)}</h3>
        <button 
          onClick={() => alert("Order successfully simulated!")}
          style={{
            backgroundColor: '#2ecc71',
            color: '#fff',
            border: 'none',
            padding: '12px 25px',
            fontSize: '16px',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;