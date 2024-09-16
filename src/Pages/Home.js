// Home.js
import React from "react";
import { Box } from "@mui/material";
import Bubbles from "../components/Bubbles";
import Navbar from "../Navbar";
import ExperientialMarketingSection from "../components/LogoSection";
import AboutUsSection from "../components/AboutUs";
import EngagementStats from "../components/Enagagement";
import Partners from "../components/Brands";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <Bubbles />
        <ExperientialMarketingSection />
      </Box>
      <AboutUsSection />
      <EngagementStats />
      <Partners />
      <Footer />
    </>
  );
};

export default Home;
