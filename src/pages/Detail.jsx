import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa6";
import { useProducts } from "../contexts/ProductContext";

const Detail = () => {
  const { id } = useParams();
  const { products, addReview } = useProducts();
  const product = products.find(p => p.id === id || p.id === Number(id));

  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    comment: ''
  });
  const [showForm, setShowForm] = useState(false);

  const StarRating = ({ rating, onRatingChange, interactive = false }) => {
    const [hoverRating, setHoverRating] = useState(0);

    const handleStarClick = (starValue, isHalf = false) => {
      const newRating = isHalf ? starValue - 0.5 : starValue;
      onRatingChange(newRating);
    };

    const displayRating = interactive && hoverRating > 0 ? hoverRating : rating;

    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFull = displayRating >= star;
          const isHalf = displayRating >= star - 0.5 && displayRating < star;

          return (
            <div key={star} className="relative">
              {interactive ? (
                <>
                  {/* Half star click area */}
                  <div
                    className="absolute left-0 w-1/2 h-full cursor-pointer z-10"
                    onClick={() => handleStarClick(star, true)}
                    onMouseEnter={() => setHoverRating(star - 0.5)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                  {/* Full star click area */}
                  <div
                    className="absolute right-0 w-1/2 h-full cursor-pointer z-10"
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                </>
              ) : null}

              <div className="relative">
                {isFull ? (
                  <FaStar className="text-yellow-500 text-2xl" />
                ) : isHalf ? (
                  <div className="relative">
                    <FaRegStar className="text-gray-300 text-2xl absolute" />
                    <FaStarHalf className="text-yellow-500 text-2xl relative" />
                  </div>
                ) : (
                  <FaRegStar className="text-gray-300 text-2xl" />
                )}
              </div>
            </div>
          );
        })}
        <span className="ml-2 text-sm text-gray-600">
          {displayRating} star{displayRating !== 1 ? 's' : ''}
        </span>
      </div>
    );
  };

  if (!product) {
    return <p className="p-10 text-center">Product not found</p>;
  }

  return (
    <div className="px-16 py-10 space-y-10">
      <div className="grid grid-cols-5 gap-12 items-center">
        
        <div className="col-span-3 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg max-w-md w-full h-auto object-cover shadow-lg"
          />
        </div>

        <div className="col-span-2 space-y-4">
          <h2 className="text-4xl font-bold text-teal-600">
            {product.name}
          </h2>

          <StarRating rating={product.rating} />
          <span className="ml-2">{product.rating}/5</span>

          <p className="text-xl font-bold">₹{product.price.toLocaleString()}</p>
          <p className="text-neutral-500">{product.description}</p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-teal-600">Reviews ({product.reviews.length})</h3>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
          >
            {showForm ? 'Cancel' : 'Write a Review'}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-4">Write Your Review</h4>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (reviewForm.name && reviewForm.comment) {
                addReview(product.id, {
                  ...reviewForm,
                  id: Date.now(),
                  date: new Date().toLocaleDateString()
                });
                setReviewForm({ name: '', rating: 5, comment: '' });
                setShowForm(false);
              }
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rating</label>
                <StarRating
                  rating={reviewForm.rating}
                  onRatingChange={(rating) => setReviewForm({...reviewForm, rating})}
                  interactive={true}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Comment</label>
                <textarea
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm({...reviewForm, comment: e.target.value})}
                  className="w-full p-2 border rounded-md h-24"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
              >
                Submit Review
              </button>
            </form>
          </div>
        )}

        {/* Display Reviews */}
        <div className="space-y-4">
          {product.reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet. Be the first to review!</p>
          ) : (
            product.reviews.map(review => (
              <div key={review.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="font-semibold">{review.name}</h5>
                    <StarRating rating={review.rating} />
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
