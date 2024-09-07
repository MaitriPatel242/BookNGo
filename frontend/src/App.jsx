import Home from "./pages/Home"
import Tours from "./pages/Tours"
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (<>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
      <Footer />
    </Router>
  </>
  );
}