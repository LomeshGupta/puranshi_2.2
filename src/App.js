// App.js
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import OurTeam from "./Pages/OurTeams.js";
import Work from "./Pages/Work.js";
import Blogs from "./Pages/Blogs.js";
import ScrollToTop from "./ScrollToTop.js";
import PageNotFound from "./components/NotFound.js";

const App = () => {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Navbar /> */}
          <ScrollToTop />
        </Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/staffing" element={<OurTeam />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
