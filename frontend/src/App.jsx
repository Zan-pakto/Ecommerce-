import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashBoard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashBoard></DashBoard>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
      </Routes>
    </Router>
  );
}

export default App;
