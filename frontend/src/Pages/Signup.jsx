import { useState } from "react";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-t from-purple-300 to-white p-4 w-full">
      <div className="flex w-[65%] rounded-2xl bg-white shadow-lg">
        <div className="w-full sm:items-center p-10 md:w-1/2  items-center">
          <h2 className="mb-4 text-3xl  text-gray-800 text-center font-bold">
            Signup
          </h2>
          <p className="mb-8 text-sm text-gray-500 text-center font-bold">
            Welcome Please enter your details
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-600 font-bold"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-600 font-bold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-600 font-bold"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 pr-10 focus:border-purple-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-4 text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                navigate("/dashboard");
              }}
              type="submit"
              className="w-full rounded-lg bg-purple-500 p-3 text-white font-bold text-xl transition-transform hover:bg-purple-600"
            >
              Log in
            </button>
          </form>
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-gray-400">Or Continue With</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="flex items-center space-x-2 rounded-lg border p-3 text-gray-600 hover:border-purple-500">
              <FaGoogle /> <span>Google</span>
            </button>
            <button className="flex items-center space-x-2 rounded-lg border p-3 text-gray-600 hover:border-purple-500">
              <FaFacebookF /> <span>Facebook</span>
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600 font-semibold">
            Already have an account?{" "}
            <a
              onClick={() => {
                navigate("/login");
              }}
              className="text-purple-500 hover:underline cursor-pointer
              "
            >
              Login
            </a>
          </p>
        </div>

        <div className=" invisble lg:visible w-1/2 rounded-r-2xl overflow-hidden">
          <img
            src="./signup.avif"
            alt="Fitness"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
