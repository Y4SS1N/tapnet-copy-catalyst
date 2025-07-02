
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-300/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            <span className="block">Still Running Your Startup</span>
            <span className="block text-blue-200">on Chaos and Hope?</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 mb-8">
            Here's the CRM That Fixes It—Fast.
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-blue-100 font-medium mb-12 max-w-3xl mx-auto">
            We built the simplest, most ruthless CRM for early-stage startups. No fluff. No learning curve. Just pure speed, visibility, and deal flow.
          </p>
          
          <div className="mb-8">
            <Button className="text-lg md:text-xl font-bold px-12 py-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200">
              👉 Start Your Free Trial – No Card Required
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-blue-200">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-lg">No Credit Card Required</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-lg">Setup in Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
