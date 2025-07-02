
import React from "react";
import { X } from "lucide-react";

const WhatItReplaces = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Here's What It Replaces
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center">
              <X className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
              <span className="text-lg font-medium text-red-800">Endless spreadsheets</span>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center">
              <X className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
              <span className="text-lg font-medium text-red-800">Post-it notes on your MacBook</span>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center">
              <X className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
              <span className="text-lg font-medium text-red-800">Forgotten follow-ups</span>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center">
              <X className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
              <span className="text-lg font-medium text-red-800">Overpriced tools with 200 features you'll never use</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatItReplaces;
