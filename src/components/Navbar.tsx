
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/tapnet-logo.png"
              alt="Tapnet Logo"
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Features
              </a>
              <a href="#integration" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Integrations
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Testimonials
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" className="mr-3">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started Free
            </Button>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a href="#features" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            Features
          </a>
          <a href="#integration" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            Integrations
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            Pricing
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            Testimonials
          </a>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <Button variant="outline" className="w-full mb-2">
              Login
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
