// Home.js
import React from "react";
import { Box } from "@mui/material";
import Bubbles from "./Bubbles";
import LogoSection from "./LogoSection";

const Home = () => {
  return (
    <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <Bubbles />
      <LogoSection />
    </Box>
  );
};

export default Home;
