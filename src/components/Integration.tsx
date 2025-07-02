
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Integration = () => {
  return (
    <div id="integration" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              Integrate Essential Business Processes
            </h2>
            <p className="text-base sm:text-lg text-gray-500 mb-6 lg:mb-0">
              Connect your favorite tools and automate your entire business with Tapnet's powerful integration ecosystem.
            </p>
            <div className="mt-6 lg:mt-8">
              <Button className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                Explore Integrations <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {["Google", "Slack", "Zoom", "Mailchimp", "Stripe", "QuickBooks", 
                "Asana", "Trello", "HubSpot", "Zapier", "Microsoft", "Shopify"].map((tool) => (
                <div key={tool} className="flex items-center justify-center h-16 sm:h-20 bg-white rounded-lg shadow-sm">
                  <span className="text-xs sm:text-sm font-medium text-gray-800 text-center px-2">{tool}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 text-center">
              And 50+ more integrations to power your agency workflows!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
