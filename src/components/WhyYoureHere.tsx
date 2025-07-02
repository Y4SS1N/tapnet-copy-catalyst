
import React from "react";
import { X, CheckCircle } from "lucide-react";

const WhyYoureHere = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Why You're Here
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white border-l-4 border-red-500 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-red-800 mb-6">Your Current Reality</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <span className="text-lg text-red-700">You've got leads slipping through the cracks.</span>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <span className="text-lg text-red-700">You forget who you followed up with.</span>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <span className="text-lg text-red-700">You've got 12 tabs open just to track 1 sale.</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white border-l-4 border-green-500 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-6">What You Need</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-lg text-green-700">You don't need another tool.</span>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-lg text-green-700">You need control.</span>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-lg text-green-700">And this CRM gives it to you—without wasting a week "setting it up."</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyYoureHere;
