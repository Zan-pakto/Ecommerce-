import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashBoard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashBoard></DashBoard>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </Router>
  );
}

export default App;
