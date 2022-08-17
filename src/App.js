import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Challenge from "./pages/Challenge";
import Footer from "./components/Footer";
// import Submissions from './pages/Submissions';
import Register from "./routes/Register";
import Login from "./routes/Login";
import "./App.css";
function App() {
  return (
    <>
      <Nav />
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Challenge />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

