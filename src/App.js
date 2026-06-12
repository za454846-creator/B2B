import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import Navbar from "./components/Navbar";
import Faq from "./pages/Faq";
import Footer from "./components/Mainlayout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;