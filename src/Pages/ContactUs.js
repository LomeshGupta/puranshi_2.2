// Home.js
import React from "react";
import { Box } from "@mui/material";
import Bubbles from "../components/Bubbles";
import Navbar from "../Navbar";
import WhoWeAre from "../components/WhoWeAre";
import BusinessSummary from "../components/BusinessSummary";
import Footer from "../Footer";
import ContactFormCard from "../components/ContactForm";
import MarketingGoals from "../components/MarketingGoals";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <ContactFormCard />
      <Footer />
    </>
  );
};

export default ContactUs;
