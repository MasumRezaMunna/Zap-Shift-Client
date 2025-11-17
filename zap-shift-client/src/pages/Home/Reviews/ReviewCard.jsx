import { FaQuoteLeft } from "react-icons/fa";

function ReviewCard({ review }) {
  const { userName, review: testimonial, user_photoURL } = review;
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-xl p-6 relative">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-blue-300 text-3xl absolute top-4 left-4" />

      {/* Text */}
      <p className="mt-6 text-gray-700">
        {testimonial}
      </p>

      {/* Separator */}
      <hr className="my-4 border-dashed border-gray-300" />

      {/* Author Info */}
      <div className="flex items-center space-x-4 mt-2">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-teal-900 flex items-center justify-center text-white font-bold">
          <img src={user_photoURL} alt="" />
        </div>

        {/* Name & Role */}
        <div>
          <h3 className="font-semibold text-gray-900"> {userName}</h3>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
}
export default ReviewCard;
