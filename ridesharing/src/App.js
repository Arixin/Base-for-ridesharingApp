import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.js";
import Login from "./pages/Login/index.js";
import Main from "./pages/Main/index.js";
import Register from "./pages/RegisterForm/index.js";
import Profile from "./pages/Profile/index.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/main" element={<Main />} exact />
        <Route path="/profile" element={<Profile />} exact />
      </Routes>
    </Router>
  );
}

export default App;
