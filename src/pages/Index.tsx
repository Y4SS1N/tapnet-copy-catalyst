
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyYoureHere from "@/components/WhyYoureHere";
import BuiltDifferent from "@/components/BuiltDifferent";
import Features from "@/components/Features";
import WhatItReplaces from "@/components/WhatItReplaces";
import StartupTestimonials from "@/components/StartupTestimonials";
import Integration from "@/components/Integration";
import Pricing from "@/components/Pricing";
import ZeroRiskCta from "@/components/ZeroRiskCta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <WhyYoureHere />
      <BuiltDifferent />
      <Features />
      <WhatItReplaces />
      <StartupTestimonials />
      <Integration />
      <Pricing />
      <ZeroRiskCta />
      <Footer />
    </div>
  );
};

export default Index;
