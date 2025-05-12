import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useState } from "react";

export const Description = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // Handle missing product data
  // if (

  // ) {
  //   return (
  //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
  //       <div className="max-w-md text-center bg-white p-8 rounded-xl shadow-md">
  //         <h1 className="text-2xl font-bold text-red-500 mb-4">
  //           Product Not Found
  //         </h1>
  //         <p className="text-gray-600 mb-6">
  //           We couldn't find the product details. Please try again.
  //         </p>
  //         <button
  //           onClick={() => navigate(-1)}
  //           className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
  //         >
  //           Return to Previous Page
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  const { name, dressname, price } = JSON.parse(
    localStorage.getItem("productdetails") || "{}"
  );
  const handleAddtocart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select both a color and a size before adding to the cart.");
      return;
    }

    // Retrieve existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Add the new item to the cart
    const newItem = {
      dressname,
      price,
      name,
      selectedColor,
      selectedSize,
    };

    // Append the new item to the existing cart
    const updatedCart = [...existingCart, newItem];

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert("Added to cart successfully!");
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="bg-white p-4 rounded-xl shadow-md max-w-md">
              <img
                src={name}
                alt={dressname}
                className="w-full h-auto rounded-lg object-contain max-h-96"
              />
              <div className="flex gap-2 mt-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="w-1/3 h-20 bg-gray-200 rounded-md cursor-pointer hover:opacity-80"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h1 className="text-3xl font-bold text-gray-800">{dressname}</h1>

              <div className="flex items-center mt-3 mb-4">
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                <span className="text-gray-500 ml-2">(24 reviews)</span>
              </div>

              <div className="text-2xl font-semibold text-blue-600 mb-6">
                {price}
                <span className="ml-2 text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  Free Shipping
                </span>
              </div>

              <p className="text-gray-600 mb-6">
                This premium product features high-quality materials and elegant
                design. Perfect for those who appreciate craftsmanship and
                style.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Color
                  </h3>
                  <div className="flex gap-2">
                    {["Black", "Gray", "Blue"].map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 ${
                          color === "Black"
                            ? "bg-black"
                            : color === "Gray"
                            ? "bg-gray-300"
                            : "bg-blue-500"
                        } ${
                          selectedColor === color
                            ? "border-blue-500 ring-2 ring-blue-200"
                            : "border-gray-300"
                        }`}
                        aria-label={`Select ${color} color`}
                      />
                    ))}
                  </div>
                  {selectedColor && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected:{" "}
                      <span className="font-medium">{selectedColor}</span>
                    </p>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Size
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-md transition-colors ${
                          selectedSize === size
                            ? "bg-blue-500 text-white border-blue-500"
                            : "border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  {selectedSize && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected:{" "}
                      <span className="font-medium">{selectedSize}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddtocart}
                  className="flex-1 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-colors duration-300"
                >
                  Add to Cart
                </button>
                <button className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  Wishlist
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Product Details
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="font-medium">Material:</span> 100% Premium
                  Cotton
                </li>
                <li>
                  <span className="font-medium">Care:</span> Machine wash cold
                </li>
                <li>
                  <span className="font-medium">Fit:</span> Regular fit
                </li>
                <li>
                  <span className="font-medium">Origin:</span> Ethically sourced
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
