
import React from "react";

const Stats = () => {
  return (
    <div className="bg-white py-16 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Helping You Grow With <span className="text-blue-600">Tapnet</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { number: "10,000+", label: "USERS" },
            { number: "5,000+", label: "BUSINESSES" },
            { number: "2M+", label: "LEADS" },
            { number: "10M+", label: "CONVERSATIONS" }
          ].map((stat, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-2xl text-center border border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
              <p className="text-gray-600 font-medium text-sm tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
