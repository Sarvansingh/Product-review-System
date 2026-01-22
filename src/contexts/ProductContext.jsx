import { createContext, useContext, useState, useEffect } from 'react';
import { productData as fallbackData } from '../constants/data';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/products`);
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        // map _id to id for compatibility with existing components
        setProducts(data.map(p => ({ ...p, id: p._id, reviews: p.reviews.map(r => ({ ...r, id: r._id, date: r.createdAt ? new Date(r.createdAt).toLocaleDateString() : '' })) })));
      } catch (err) {
        console.error('Fetching products failed, using fallback data:', err.message);
        setProducts(fallbackData.map(p => ({ ...p, id: p.id })));
      }
    };

    fetchProducts();
  }, []);

  const addReview = async (productId, review) => {
    try {
      const res = await fetch(`${API_URL}/api/products/${productId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
      });
      if (!res.ok) throw new Error('Failed to add review');
      const updatedProduct = await res.json();
      // keep id property consistent
      const normalized = { 
        ...updatedProduct, 
        id: updatedProduct._id,
        reviews: updatedProduct.reviews.map(r => ({ ...r, id: r._id, date: r.createdAt ? new Date(r.createdAt).toLocaleDateString() : '' }))
      };
      setProducts(prev => prev.map(p => (p.id === normalized.id ? normalized : p)));
    } catch (err) {
      console.error('Add review failed, updating locally as fallback:', err.message);
      // fallback local update
      setProducts(prevProducts =>
        prevProducts.map(product =>
          product.id === productId
            ? {
                ...product,
                reviews: [...product.reviews, review],
                rating: calculateRating([...product.reviews, review])
              }
            : product
        )
      );
    }
  };

  const calculateRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return Math.round((sum / reviews.length) * 10) / 10;
  };

  return (
    <ProductContext.Provider value={{ products, addReview }}>
      {children}
    </ProductContext.Provider>
  );
};