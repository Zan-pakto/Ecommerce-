import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashBoard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Shoppingcart } from "./Pages/Shoppingcart";
import { Description } from "./Pages/Description";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashBoard></DashBoard>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/cart" element={<Shoppingcart />} />
        <Route path="/description" element={<Description />} />
      </Routes>
    </Router>
  );
}

export default App;
