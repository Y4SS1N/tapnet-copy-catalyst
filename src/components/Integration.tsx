
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Integration = () => {
  return (
    <div id="integration" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Integrate Essential Business Processes
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Connect your favorite tools and automate your entire business with Tapnet's powerful integration ecosystem.
            </p>
            <div className="mt-8">
              <Button className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700">
                Explore Integrations <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-7">
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
              {["Google", "Slack", "Zoom", "Mailchimp", "Stripe", "QuickBooks", 
                "Asana", "Trello", "HubSpot", "Zapier", "Microsoft", "Shopify"].map((tool) => (
                <div key={tool} className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-800">{tool}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500 text-center">
              And 50+ more integrations to power your agency workflows!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
