import { Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import Subcontractors from "./pages/Subcontractors";
import Navbar from "./components/Mainlayout/Navbar";
import Buildingproductmanufctures from "./pages/Buildingproductmanufctures";
import Generalcontractors from "./pages/Generalcontractors";
import Suppliersdistributors from "./pages/Suppliersdistributors";
import Serviceproviders from "./pages/Serviceproviders";
import Hospitality from "./pages/Hospitality";
import Project_intelligence from "./pages/Project_intelligence";
import Faq from "./pages/Faq";
import Footer from "./components/Mainlayout/Footer";


function DefaultSEO() {
  return (
    <Helmet
      titleTemplate="%s | Bid Connectors"
      defaultTitle="Find Latest Construction Projects Faster And Win 95% Of Your Bids"
    >
      <meta
        name="description"
        content="Explore one of the biggest repositories for construction projects in the US and start bidding before others. Get expert insights from Bid Connector experts now!"
      />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="container py-5 text-center">
        <h1>404 — Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has moved.</p>
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <DefaultSEO />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions/subcontractors" element={<Subcontractors />} />
        <Route path="/solutions/building-product-manufacturers"
          element={<Buildingproductmanufctures />} />
        <Route path="/solutions/general-contractors" element={<Generalcontractors />} />
        <Route path="/solutions/suppliers-and-distributors-solutions" element={<Suppliersdistributors />} />
         <Route path="/solutions/service-providers" element={<Serviceproviders />} />
         <Route path="/solutions/hospitality" element={<Hospitality />} />
         <Route path="/products/project-intelligence" element={<Project_intelligence />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HelmetProvider>
  );
}

export default App;