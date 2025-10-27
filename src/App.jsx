import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBanner from "./components/TopBanner";
import BenefitsBar from "./components/BenefitsBar";

function App() {
  return (
    <Router>
      <TopBanner />
      <Navbar />
      <Routes>
        <Route path="/Ecommerce-Vivawear" element={<Home />} />
      </Routes>
      <BenefitsBar />
      <Footer />
    </Router>
  );
}

export default App;
