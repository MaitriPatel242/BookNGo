import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Tour from "./components/Tour";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    }), []
  }
  );
  return (
    <>
      <Header />
      <Hero />
      <Popular />
      <Offers />
      <Tour />
    </>
  )
}