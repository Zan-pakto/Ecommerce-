import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Description = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle cases where state might be undefined
  if (!location.state) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-500">
          No Product Data Found
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  const { name, dressname, price } = location.state;

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-5">
        {/* Image Section */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <img
            src={name}
            alt="Product Image"
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-2/5 mt-6 lg:mt-0 lg:ml-10 bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800">{dressname}</h1>
          <h2 className="text-2xl font-semibold text-blue-600 mt-2">{price}</h2>

          <p className="mt-4 text-gray-600">
            This is a premium product with high-quality materials and design.
            Elevate your style with this amazing piece.
          </p>

          <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
