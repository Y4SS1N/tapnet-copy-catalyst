
import React from "react";
import { Check } from "lucide-react";

const BuiltDifferent = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Built Different (For Startups Only)
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Most CRMs? Built for bloated teams and corporate nonsense.<br />
            <strong>This one's for the trenches.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start">
              <Check className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Visual pipeline that shows you exactly where the money is</h3>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start">
              <Check className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Instant deal tracking without hiring an "ops person"</h3>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start">
              <Check className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Automated follow-ups so you don't ghost your next investor</h3>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start">
              <Check className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Designed for speed — from demo to done</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-700 mb-2">This isn't Salesforce.</p>
          <p className="text-xl font-bold text-blue-600">It's the CRM your startup actually needs.</p>
        </div>
      </div>
    </div>
  );
};

export default BuiltDifferent;
