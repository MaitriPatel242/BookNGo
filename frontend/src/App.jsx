import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Tour from "./components/Tour";
import Tour1 from "./components/Tour1";
import Explore from "./components/Explore";
import Blog from "./components/Blog";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
        <Route path="/" element={
          <>
            <Hero />
            <Popular />
            <Offers />
            <Tour />
            <Explore />
            <Blog />
            <Footer />
          </>
        } />
        <Route path="/tours" element={<Tour1 />} />
      </Routes>
    </Router>
    </>
  );
}