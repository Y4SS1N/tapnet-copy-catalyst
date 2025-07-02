
import React from "react";
import { Button } from "@/components/ui/button";

const ZeroRiskCta = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 sm:mb-12">
            Zero-Risk Trial
          </h2>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-8 sm:mb-12 text-lg sm:text-xl lg:text-2xl text-blue-100">
            <div className="bg-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
              <p className="font-bold">No contracts.</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
              <p className="font-bold">No commitments.</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
              <p className="font-bold">No credit card.</p>
            </div>
          </div>
          
          <div className="mb-8 sm:mb-12 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            <p className="mb-2">Sign up.</p>
            <p className="mb-2">Plug it in.</p>
            <p>If it doesn't help you win—just bounce. No hard feelings.</p>
          </div>

          <div className="mb-6 sm:mb-8 px-4 sm:px-0">
            <Button className="text-lg sm:text-xl font-bold px-8 sm:px-12 py-4 sm:py-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto">
              🔥 Get Your Free Trial – Start Now
            </Button>
          </div>
          
          <p className="text-xl sm:text-2xl font-bold text-blue-200 px-4 sm:px-0">
            This is what startup momentum feels like.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZeroRiskCta;
