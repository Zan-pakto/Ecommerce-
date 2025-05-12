import "../custom.css";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
export const Home = () => {
  const naviagete = useNavigate();
  function handleSignup() {
    naviagete("/signup");
    console.log("Signup button clicked");
  }
  function handleLogin() {
    naviagete("/login");
    console.log("Login button clicked");
  }
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <div className="flex justify-between p-4 navbar bg-white shadow-md">
        <div className="text-2xl font-bold text-blue-900">
          <img
            src="./th.jpeg"
            className="w-16 ml-4 cursor-pointer"
            alt="Logo"
          />
        </div>
        <div className="flex gap-4">
          <div>
            <button
              onClick={handleLogin}
              className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hover:cursor-pointer transition-transform duration-300 bounce-on-hover"
            >
              Log in
            </button>
          </div>
          <div>
            <button
              onClick={handleSignup}
              className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hover:cursor-pointer transition-transform duration-300 bounce-on-hover"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 typewriter">
                Welcome to Shopify
              </h1>
              <p className="text-xl mb-8">
                Discover amazing products at unbeatable prices
              </p>
              <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 bounce-on-hover">
                Shop Now
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="../public/landing.png"
                alt="Hero"
                className="rounded-lg shadow-xl animate-bounce "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Electronics", "Fashion", "Home & Living"].map((category) => (
              <div
                key={category}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{category}</h3>
                <button
                  onClick={handleSignup}
                  className="text-blue-900 hover:text-blue-700 hover:cursor-pointer"
                >
                  Explore →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers today!
          </p>
          <button
            onClick={handleSignup}
            className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 hover:cursor-pointer bounce-on-hover"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <Footer />
      </footer>
    </div>
  );
};
