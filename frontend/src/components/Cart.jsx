import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMemo } from "react";

export const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize cart from localStorage only
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      const initialCart = Array.isArray(JSON.parse(savedCart))
        ? JSON.parse(savedCart)
        : [];

      setCartItems(
        initialCart.map((item) => ({
          ...item,
          price: Number(item.price) || 0,
        }))
      );
    } catch (error) {
      console.error("Error loading cart:", error);
      setCartItems([]);
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      const initialCart = savedCart ? JSON.parse(savedCart) : [];

      // Ensure all prices are numbers
      const validatedCart = initialCart.map((item) => ({
        ...item,
        price:
          typeof item.price === "number" ? item.price : Number(item.price) || 0,
      }));

      // Merge with any incoming items from navigation state
      if (location.state?.cartItems) {
        const incomingItems = location.state.cartItems.map((item) => ({
          ...item,
          price:
            typeof item.price === "number"
              ? item.price
              : Number(item.price) || 0,
        }));

        const mergedCart = [...validatedCart];

        incomingItems.forEach((newItem) => {
          const existingIndex = mergedCart.findIndex(
            (item) =>
              item.productId === newItem.productId &&
              item.size === newItem.size &&
              item.color === newItem.color
          );

          if (existingIndex >= 0) {
            mergedCart[existingIndex].quantity = newItem.quantity ?? 1;
          } else {
            mergedCart.push({
              ...newItem,
              quantity: newItem.quantity || 1,
            });
          }
        });

        setCartItems(mergedCart);
        localStorage.setItem("cart", JSON.stringify(mergedCart));
      } else {
        setCartItems(validatedCart);
      }
    } catch (error) {
      console.error("Error loading cart:", error);
      setCartItems([]);
    } finally {
      setIsLoading(false);
    }
  }, [location.state]);

  // Save to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculate totals with proper number validation

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
      0
    );
  }, [cartItems]);

  const tax = useMemo(() => subtotal * 0.1, [subtotal]);
  const shipping = useMemo(() => (subtotal > 50 ? 0 : 5.99), [subtotal]);
  const total = useMemo(
    () => subtotal + tax + shipping,
    [subtotal, tax, shipping]
  );

  // Format price safely
  const formatPrice = (price) => {
    const num = typeof price === "number" ? price : Number(price) || 0;
    return num.toFixed(2);
  };

  // Handle quantity changes
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) newQuantity = 1;
    if (newQuantity > 99) newQuantity = 99;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (name) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item.name !== name);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage after state change
      return updatedCart;
    });
  };

  // Handle checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }
    navigate("/checkout", { state: { cartItems } });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading your cart...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 border-b">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Your Shopping Cart
            </h1>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              {cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)}{" "}
              items
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {cartItems.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow text-center max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven't added any items yet.
            </p>
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              onClick={() => navigate("/dashboard")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-full sm:w-1/4">
                    <img
                      src={item.image || "/placeholder-product.jpg"}
                      alt={item.name}
                      className="w-full h-32 object-contain rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <div className="text-gray-600">
                      <p>${formatPrice(item.price)} each</p>
                      {item.color && <p>Color: {item.color}</p>}
                      {item.size && <p>Size: {item.size}</p>}
                    </div>

                    <div className="flex items-center mt-4">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, (item.quantity || 1) - 1)
                        }
                        className="px-3 py-1 border rounded-l bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-t border-b text-center w-12">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, (item.quantity || 1) + 1)
                        }
                        className="px-3 py-1 border rounded-r bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <p className="text-lg font-semibold">
                      $
                      {formatPrice(
                        (Number(item.price) || 0) * (item.quantity || 1)
                      )}
                    </p>
                    <button
                      onClick={() => {
                        removeItem(item.name);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify(
                            cartItems.filter((i) => i.name !== item.name)
                          )
                        );
                      }}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>
                      Subtotal (
                      {cartItems.reduce(
                        (sum, item) => sum + (item.quantity || 1),
                        0
                      )}{" "}
                      items)
                    </span>
                    <span>${formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? "Free" : `$${formatPrice(shipping)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (10%)</span>
                    <span>${formatPrice(tax)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${formatPrice(total)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    cartItems.length === 0
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  Proceed to Checkout
                </button>

                {subtotal < 50 && (
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Add ${formatPrice(50 - subtotal)} more for free shipping
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
