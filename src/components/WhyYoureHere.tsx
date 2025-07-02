
import React from "react";
import { X, CheckCircle } from "lucide-react";

const WhyYoureHere = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Why You're Here
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-800 mb-4">Your Current Reality</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-red-700">You've got leads slipping through the cracks.</span>
              </div>
              <div className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-red-700">You forget who you followed up with.</span>
              </div>
              <div className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-red-700">You've got 12 tabs open just to track 1 sale.</span>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4">What You Need</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-green-700">You don't need another tool.</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-green-700">You need control.</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-green-700">And this CRM gives it to you—without wasting a week "setting it up."</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyYoureHere;
