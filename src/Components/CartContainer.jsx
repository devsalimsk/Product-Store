// src/components/CartContainer.jsx
import React, { useState } from 'react';
import Product from './Product';
import { FaShoppingCart } from 'react-icons/fa';

const CartContainer = ({ products }) => {
  const [cartCount, setCartCount] = useState(0);

  // Increment cart count when a product is added to the cart
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="relative p-8">
      {/* Cart icon with item count */}
      <div className="absolute top-0 right-4 flex items-center text-blue-600">
        <FaShoppingCart size={24} />
        <span className="ml-2 text-lg font-semibold">{cartCount}</span>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default CartContainer;
