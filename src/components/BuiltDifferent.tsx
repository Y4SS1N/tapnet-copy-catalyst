
import React from "react";
import { Check } from "lucide-react";

const BuiltDifferent = () => {
  return (
    <div className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            Built Different <span className="text-blue-600">(For Startups Only)</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Most CRMs? Built for bloated teams and corporate nonsense.<br className="hidden sm:block" />
            <strong className="text-blue-600">This one's for the trenches.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {[
            "Visual pipeline that shows you exactly where the money is",
            "Instant deal tracking without hiring an \"ops person\"",
            "Automated follow-ups so you don't ghost your next investor",
            "Designed for speed — from demo to done"
          ].map((feature, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full p-2 sm:p-3 mr-3 sm:mr-4 mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 leading-tight">{feature}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white">
          <p className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-4">This isn't Salesforce.</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">It's the CRM your startup actually needs.</p>
        </div>
      </div>
    </div>
  );
};

export default BuiltDifferent;
