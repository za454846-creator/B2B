import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Mainlayout/Footer";
import Loader from "./components/Mainlayout/Loader"; //  import loader

function App() {
  const location = useLocation(); //  route change detect
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); //  loader time (adjust kar sakte ho)

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />} {/*  loader show */}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;