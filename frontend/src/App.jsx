import Home from "./pages/Home"
import Tours from "./pages/Tours"
import Contact from "./pages/Contact"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Protected from "./components/Protected";
import About from "./pages/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route path="/" element={<Protected Component={Home} />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/about" element={<SignUpPage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/activate/:uid/:token" element={<ActivatePage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordPageConfirm />} /> */}
      </>
    )
  );

  return (<>

    <RouterProvider router={router} >
      
    </RouterProvider>
  </>
  );
}