
import React from "react";

const Stats = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Helping You Grow With <span className="text-blue-600">Tapnet</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <p className="text-2xl font-bold text-blue-600">10,000+</p>
            <p className="text-gray-600 font-medium">USERS</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <p className="text-2xl font-bold text-blue-600">5,000+</p>
            <p className="text-gray-600 font-medium">BUSINESSES</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <p className="text-2xl font-bold text-blue-600">2M+</p>
            <p className="text-gray-600 font-medium">LEADS</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <p className="text-2xl font-bold text-blue-600">10M+</p>
            <p className="text-gray-600 font-medium">CONVERSATIONS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
