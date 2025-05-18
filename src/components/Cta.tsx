
import React from "react";
import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Grow your marketing agency with Tapnet</span>
          <span className="block text-blue-200">
            Manage everything in one place to multiply your revenue
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-blue-100">
          Starting, growing and scaling a marketing agency is a path filled with obstacles and challenges - but your CRM shouldn't be one of them. With Tapnet, you'll have one centralized platform to handle every aspect of your client relationships, delivery, and operations.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50">
              Start Your Free 14-Day Trial
            </Button>
          </div>
          <div className="ml-3 inline-flex">
            <Button variant="outline" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-blue-700">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
