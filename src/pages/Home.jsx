import { useState } from "react";
import ProductFilter from "../components/filter/ProductFilter";
import ProductCard from "../components/product/ProductCard";
import { useProducts } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useProducts();
  const [searchItem, setSearchItem] = useState("");
  const [filter, setFilter] = useState({
    category: "",
    minRating: 0,
  });

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchItem.toLowerCase());

    const matchCategory =
      filter.category === "" || product.category === filter.category;

    const matchRating = product.rating >= filter.minRating;

    return matchSearch && matchCategory && matchRating;
  });

  return (
    <div className="w-full px-16 py-10 space-y-8">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-teal-600">
        Product Reviews
      </h1>

      {/* Filters */}
      <ProductFilter
        searchItem={searchItem}
        onSearchChange={(e) => setSearchItem(e.target.value)}
        filter={filter}
        setFilter={setFilter}
      />

      {/* Products */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-neutral-500 mt-10">
          No products found
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
