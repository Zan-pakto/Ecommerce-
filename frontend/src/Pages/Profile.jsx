import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    // Load user data
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }

    // In a real app, you would fetch orders from an API
    setOrders([
      {
        id: "ORD-123456",
        date: "2023-05-15",
        total: 125.99,
        status: "Delivered",
        items: 3,
      },
      {
        id: "ORD-789012",
        date: "2023-06-22",
        total: 89.5,
        status: "Shipped",
        items: 2,
      },
    ]);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">ShopEase</h1>
          <div className="flex gap-4">
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-indigo-600 hover:text-indigo-800"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Profile Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Profile Header */}
          <div className="bg-indigo-600 p-6 text-white">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-400 flex items-center justify-center text-2xl font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-indigo-100">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-6 grid md:grid-cols-2 gap-8">
            {/* Personal Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Personal Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500">Full Name</p>
                  <p className="font-medium">{user.name}</p>
                </div>
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                <div>
                  <p className="text-gray-500">Member Since</p>
                  <p className="font-medium">June 2023</p>
                </div>
              </div>
            </div>

            {/* Order History */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Order History</h3>
              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="border rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium">Order #{order.id}</p>
                          <p className="text-gray-500 text-sm">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">
                            ${order.total.toFixed(2)}
                          </p>
                          <p
                            className={`text-sm ${
                              order.status === "Delivered"
                                ? "text-green-500"
                                : order.status === "Shipped"
                                ? "text-blue-500"
                                : "text-gray-500"
                            }`}
                          >
                            {order.status}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        {order.items} item{order.items !== 1 ? "s" : ""}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">
                  You haven't placed any orders yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
