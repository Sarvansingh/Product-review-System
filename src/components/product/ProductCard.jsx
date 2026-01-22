import PropTypes from "prop-types";
import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    return [1, 2, 3, 4, 5].map((star) => {
      const isFull = rating >= star;
      const isHalf = rating >= star - 0.5 && rating < star;

      if (isFull) {
        return <FaStar key={star} className="text-yellow-500" />;
      } else if (isHalf) {
        return (
          <div key={star} className="relative inline-block">
            <FaRegStar className="text-gray-300 absolute" />
            <FaStarHalf className="text-yellow-500 relative" />
          </div>
        );
      } else {
        return <FaRegStar key={star} className="text-gray-300" />;
      }
    });
  };

  return (
    <div className="bg-white border rounded-xl shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-t-xl"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold">{product.name}</h3>

        <p className="text-indigo-500 font-medium">₹{product.price.toLocaleString()}</p>

        <div className="flex items-center gap-1">
          {renderStars(product.rating)}
          <span className="text-sm ml-2">{product.rating}/5</span>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="text-teal-600 inline-block mt-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
