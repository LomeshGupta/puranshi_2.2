// Home.js
import React from "react";
import { Box } from "@mui/material";
import Bubbles from "../components/Bubbles";
import Navbar from "../Navbar";
import WhoWeAre from "../components/WhoWeAre";
import BusinessSummary from "../components/BusinessSummary";
import Footer from "../Footer";
import MarketingGoals from "../components/MarketingGoals";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <Bubbles />
        <WhoWeAre />
      </Box>
      <BusinessSummary />
      <MarketingGoals />
      <Footer />
    </>
  );
};

export default AboutUs;
