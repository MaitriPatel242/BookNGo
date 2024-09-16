import Home from "./pages/Home"
import Tours from "./pages/Tours"
import Contact from "./pages/Contact"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import Signup from "./components/Signup";
import Login from "./components/Login";
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
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  </>
  );
}