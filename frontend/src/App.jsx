import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashBoard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Shoppingcart } from "./Pages/Shoppingcart";
import { Description } from "./Pages/Description";
import { Checkout } from "./Pages/Checkout";
import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/dashboard" element={<DashBoard></DashBoard>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/cart" element={<Shoppingcart />} />
        <Route path="/description" element={<Description />} />
        <Route path="/checkout" element={<Checkout></Checkout>} />
        <Route path="/profilee" element={<Profile></Profile>} />
      </Routes>
    </Router>
  );
}

export default App;
