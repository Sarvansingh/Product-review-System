import PropTypes from "prop-types";

const ProductFilter = ({ searchItem, onSearchChange, filter, setFilter }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-neutral-200/40 p-4 rounded-lg mb-6 gap-4">
      
      {/* Search */}
      <input
        type="text"
        value={searchItem}
        onChange={onSearchChange}
        placeholder="Search products..."
        className="w-full md:w-1/3 px-3 h-11 rounded-md text-neutral-800 border border-neutral-300 focus:outline-none focus:border-teal-600"
      />

      {/* Filters */}
      <div className="flex items-center gap-4">
        <select
          value={filter.category}
          onChange={(e) =>
            setFilter({ ...filter, category: e.target.value })
          }
          className="p-2 rounded-md bg-neutral-100 border border-neutral-300"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
        </select>

        <select
          value={filter.minRating}
          onChange={(e) =>
            setFilter({ ...filter, minRating: Number(e.target.value) })
          }
          className="p-2 rounded-md bg-neutral-100 border border-neutral-300"
        >
          <option value={0}>All Ratings</option>
          <option value={3}>3★ & up</option>
          <option value={4}>4★ & up</option>
          <option value={5}>5★ only</option>
        </select>
      </div>
    </div>
  );
};

ProductFilter.propTypes = {
  searchItem: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    category: PropTypes.string,
    minRating: PropTypes.number,
  }).isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default ProductFilter;
