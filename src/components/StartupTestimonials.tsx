
import React from "react";
import { Separator } from "@/components/ui/separator";

const startupTestimonials = [
  {
    id: 1,
    quote: "We closed 3 more deals in our first week using this. It just shows you what to focus on—nothing else.",
    author: "James",
    title: "SaaS Founder @ 3-person team",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "I tried HubSpot. It felt like using a spaceship to deliver pizza. This CRM just works.",
    author: "Ashley",
    title: "Marketplace Startup CEO",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "First CRM I've stuck with. Dead simple. Gave me instant clarity.",
    author: "Ali",
    title: "YC Alum",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop",
  },
];

const StartupTestimonials = () => {
  return (
    <div className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Proof <span className="text-blue-600">(Trust Builders)</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {startupTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
              <div className="flex items-center mb-6">
                <img
                  className="h-16 w-16 rounded-full object-cover mr-4 border-2 border-blue-200"
                  src={testimonial.avatar}
                  alt={testimonial.author}
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">💬 {testimonial.author}</div>
                  <div className="text-blue-600 font-medium">{testimonial.title}</div>
                </div>
              </div>
              <Separator className="my-6 bg-blue-200" />
              <p className="text-gray-700 text-lg italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartupTestimonials;
