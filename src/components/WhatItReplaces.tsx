
import React from "react";
import { X } from "lucide-react";

const WhatItReplaces = () => {
  return (
    <div className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8">
            Here's What It Replaces
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {[
            "Endless spreadsheets",
            "Post-it notes on your MacBook",
            "Forgotten follow-ups",
            "Overpriced tools with 200 features you'll never use"
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 border-l-4 border-red-500 rounded-2xl p-6 sm:p-8 hover:bg-gray-750 transition-colors duration-300">
              <div className="flex items-center">
                <div className="bg-red-500 rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <X className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-medium text-red-200">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatItReplaces;
