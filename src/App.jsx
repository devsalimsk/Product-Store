// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CartContainer from './Components/CartContainer';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar with cart icon */}
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Products</h1>

        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : (
          // Pass fetched products to CartContainer
          <CartContainer products={products} />
        )}
      </main>
    </div>
  );
}
