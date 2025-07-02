
import React from "react";
import { Button } from "@/components/ui/button";

const ZeroRiskCta = () => {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-8">
            Zero-Risk Trial
          </h2>
          
          <div className="space-y-2 mb-8 text-xl text-blue-100">
            <p>No contracts.</p>
            <p>No commitments.</p>
            <p>No credit card.</p>
          </div>
          
          <div className="space-y-2 mb-8 text-lg text-blue-100">
            <p>Sign up.</p>
            <p>Plug it in.</p>
            <p>If it doesn't help you win—just bounce. No hard feelings.</p>
          </div>

          <div className="flex justify-center mb-6">
            <Button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50">
              🔥 Get Your Free Trial – Start Now
            </Button>
          </div>
          
          <p className="text-xl font-bold text-blue-200">
            This is what startup momentum feels like.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZeroRiskCta;
