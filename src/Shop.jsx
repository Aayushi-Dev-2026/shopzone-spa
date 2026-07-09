import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Taaki har product par click karke uske detail page par ja sakein

function Shop() {
  const [products, setProducts] = useState([]); // Products data store karne ke liye state
  const [loading, setLoading] = useState(true); // Loading state dikhane ke liye

  // API se data fetch karne ke liye useEffect
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // API se aaya products array state mein save kiya
        setLoading(false);
      })
      .catch((err) => {
        console.error("Data fetch karne mein dikkat aayi bhyii:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}><h3>Products load ho rahe hain bhyii, thoda intezar karein...</h3></div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>ShopZone Inventory</h2>
      
      {/* Products Grid System */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '10px'
      }}>
        {products.map((product) => (
          <div 
            key={product.id} 
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              textAlign: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'between'
            }}
          >
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              style={{ width: '100%', height: '180px', objectFit: 'contain', marginBottom: '10px' }} 
            />
            <h3 style={{ fontSize: '16px', margin: '10px 0' }}>{product.title}</h3>
            <p style={{ fontWeight: 'bold', color: '#2ecc71' }}>${product.price}</p>
            
            {/* Dynamic Routing Button: Yeh user ko /product/:id par bhejega */}
            <Link 
              to={`/product/${product.id}`} 
              style={{
                marginTop: 'auto',
                backgroundColor: '#3498db',
                color: '#fff',
                padding: '8px 12px',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;