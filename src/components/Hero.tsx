
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-600 to-blue-700 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">The ONLY CRM Solution</span>
              <span className="block text-blue-200">Marketing Agencies Actually Need</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100 font-medium">
              Why use 6 different tools when ONE does it all? Tapnet is the all-in-one CRM platform that eliminates wasted time, creates more profit, and helps you scale your agency without the headache.
            </p>
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Button className="w-full flex items-center justify-center px-8 py-6 text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 md:py-6 md:text-lg md:px-10">
                  Get Started Free For 14 Days
                </Button>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center lg:justify-start space-x-4 text-sm text-blue-100">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-blue-300 mr-1" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-blue-300 mr-1" />
                <span>Free For 14 Days</span>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                  alt="Tapnet CRM Dashboard"
                />
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <Button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
