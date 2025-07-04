
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingTier = ({
  name,
  price,
  originalPrice,
  period,
  description,
  features,
  highlighted = false,
  buttonText = "Get Started",
  limitedOffer = false,
}) => {
  return (
    <div
      className={`rounded-lg shadow-lg overflow-hidden ${
        highlighted ? "border-2 border-blue-500 ring-2 ring-blue-500 ring-opacity-50" : ""
      }`}
    >
      {highlighted && (
        <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">
          MOST POPULAR
        </div>
      )}
      <div className="bg-white p-8">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-5xl font-extrabold tracking-tight text-gray-900">${price}</span>
          {originalPrice && (
            <span className="ml-2 text-2xl font-medium text-red-500 line-through">${originalPrice}</span>
          )}
          {period && <span className="ml-1 text-xl font-medium text-gray-500">/{period}</span>}
        </div>
        {limitedOffer && (
          <p className="mt-2 text-sm text-red-600 font-medium">Limited time offer!</p>
        )}
        <p className="mt-5 text-lg text-gray-500">{description}</p>
        <Button
          className={`mt-8 w-full py-6 ${
            highlighted
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-50 hover:bg-gray-100 text-blue-600"
          }`}
        >
          {buttonText}
        </Button>
      </div>
      <div className="bg-gray-50 px-8 py-8">
        <h4 className="text-lg font-medium text-gray-900">What's included:</h4>
        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex">
              <Check
                className={`flex-shrink-0 h-6 w-6 ${
                  highlighted ? "text-blue-500" : "text-green-500"
                }`}
              />
              <span className="ml-3 text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <div id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            The Best CRM Solution for Marketing Agencies of Any Size and Expertise
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Pricing to meet your agency exactly where you are today - and grow with you tomorrow.
          </p>
        </div>

        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
          <PricingTier
            name="Founders"
            price="0"
            originalPrice="99"
            description="Limited time offer!"
            features={[
              "1 Team Member",
              "250 contacts",
              "Unlimited projects",
              "Email integration",
              "Basic reporting",
              "5 custom workflows",
              "Standard support"
            ]}
            buttonText="Start For Free"
            limitedOffer={true}
          />
          <PricingTier
            name="Startup"
            price="199"
            period="year"
            description="For startups just getting their systems in place."
            features={[
              "5 Team Members",
              "1000 contacts",
              "Unlimited projects",
              "Email integration",
              "Basic reporting",
              "5 custom workflows",
              "Standard support"
            ]}
            buttonText="Get Started Here"
          />
          <PricingTier
            name="Growth"
            price="499"
            period="year"
            description="For established startups ready to scale."
            features={[
              "15 Team Members",
              "10,000 contacts",
              "Unlimited projects",
              "Email & SMS integration",
              "Advanced reporting",
              "25 custom workflows",
              "Priority support",
              "White labeling"
            ]}
            highlighted={true}
            buttonText="Most Popular Plan"
          />
          <PricingTier
            name="Enterprise"
            price="999"
            period="year"
            description="Enterprise-grade features for large enterprise or multi-location."
            features={[
              "Unlimited Team",
              "Unlimited contacts",
              "Unlimited projects",
              "All integrations",
              "Custom reporting",
              "24/7 premium support",
              "White labeling",
              "API access",
              "Dedicated success manager"
            ]}
            buttonText="Get Started Now"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
