
import React from "react";
import { Check } from "lucide-react";

const Features = () => {
  return (
    <div id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            All-in-One CRM Solution to Scale Your Marketing Agency
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Stop losing money with disconnected tools. Get everything you need in one platform.
          </p>
        </div>

        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="mb-12 lg:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Client & Contact Management
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">
                    <strong>Never lose a lead again</strong> with our centralized contact database
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">
                    <strong>Track all interactions</strong> from first touch to closed deal
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">
                    <strong>Custom fields</strong> tailored to your agency's specific needs
                  </p>
                </li>
              </ul>
            </div>
            <div className="mb-12 lg:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Project & Task Management
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">
                    <strong>Handle unlimited projects</strong> with custom workflows
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">
                    <strong>Assign tasks</strong> to team members with deadlines and priorities
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">
                    <strong>Real-time progress tracking</strong> for transparent client communication
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="mb-12 lg:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Communication Hub
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">
                    <strong>Centralize all client communications</strong> - email, chat, calls in one place
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">
                    <strong>Automated follow-ups</strong> that close more deals without the work
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">
                    <strong>Templates library</strong> for consistent, professional messaging
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Advanced Reporting
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">
                    <strong>Real-time agency dashboard</strong> for key performance metrics
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">
                    <strong>Custom report builder</strong> with white-labeled client reports
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">
                    <strong>Revenue forecasting</strong> to predict and optimize your cash flow
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <img
              className="mx-auto rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
              alt="Tapnet Dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
