import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from './CartContext';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}><h3>Loading product details...</h3></div>;
  }

  if (!product) {
    return <div style={{ padding: '20px', textAlign: 'center' }}><h3>Product not found!</h3></div>;
  }

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/shop" style={{ textDecoration: 'none', color: '#3498db', fontWeight: 'bold' }}>
        ⬅ Back to Shop
      </Link>
      
      <div style={{ display: 'flex', gap: '30px', marginTop: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src={product.thumbnail} 
            alt={product.title} 
            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
          />
        </div>

        <div style={{ flex: '1', minWidth: '300px' }}>
          <span style={{ backgroundColor: '#eee', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', textTransform: 'uppercase', fontWeight: 'bold' }}>
            {product.category}
          </span>
          <h2 style={{ fontSize: '28px', margin: '10px 0' }}>{product.title}</h2>
          <p style={{ color: '#666', lineHeight: '1.6' }}>{product.description}</p>
          <h3 style={{ color: '#2ecc71', fontSize: '24px', margin: '15px 0' }}>${product.price}</h3>
          
          <button 
            style={{
              backgroundColor: '#2ecc71',
              color: '#fff',
              border: 'none',
              padding: '12px 20px',
              fontSize: '16px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              width: '100%'
            }}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;