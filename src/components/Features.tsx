
import React from "react";
import { Check, BarChart, Users, Calendar, MessageSquare, FileText, Target, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Visual Deal Pipeline",
      description: "See exactly where every deal stands with drag-and-drop pipeline management",
      highlight: "Track $450k+ deals instantly"
    },
    {
      icon: Users,
      title: "Contact & Account Management",
      description: "Complete customer profiles with interaction history and deal associations",
      highlight: "Never lose a lead again"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated follow-ups and meeting scheduling with Google Calendar sync",
      highlight: "3x faster booking"
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description: "All conversations in one place - email, WhatsApp, calls, and notes",
      highlight: "Zero missed messages"
    },
    {
      icon: FileText,
      title: "Quote & Proposal Builder",
      description: "Professional quotes and proposals with your branding in minutes",
      highlight: "Close deals 50% faster"
    },
    {
      icon: BarChart,
      title: "Analytics & Tracking",
      description: "Real-time insights on deal flow, conversion rates, and revenue forecasting",
      highlight: "Data-driven decisions"
    },
    {
      icon: Zap,
      title: "Task Automation",
      description: "Automated workflows, scoring rules, and intelligent follow-up sequences",
      highlight: "Save 10+ hours/week"
    },
    {
      icon: Check,
      title: "Team Collaboration",
      description: "Assign deals, share notes, and collaborate seamlessly across your team",
      highlight: "Perfect team sync"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⚡ Powerful Features
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Everything You Need to <span className="text-blue-600">Win More Deals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for startups who need results, not complexity. Every feature designed to make you faster and smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{feature.description}</p>
                <div className="inline-flex items-center text-blue-600 text-xs font-medium bg-blue-50 px-3 py-1 rounded-full">
                  {feature.highlight}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to See It in Action?
          </h3>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Join 10,000+ startups already using our CRM to close more deals and grow faster.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors inline-flex items-center">
            Start Free Trial
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
