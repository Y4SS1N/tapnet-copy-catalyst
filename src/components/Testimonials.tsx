
import React from "react";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    id: 1,
    quote: "Within 30 days of implementing Tapnet, we consolidated 5 different tools and increased our client conversion rate by 43%. The ROI has been incredible.",
    author: "Michael Thompson",
    title: "CEO, Digital Edge Marketing",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "As an agency owner, I was drowning in admin work. Tapnet automated 80% of our client onboarding process and gave me back 15 hours per week. Game changer!",
    author: "Sarah Johnson",
    title: "Founder, Elevate Social Media",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "After trying 4 different CRMs, we finally found Tapnet. It's the only platform genuinely built for agencies. Our team adopted it in days, not months.",
    author: "David Chen",
    title: "Operations Director, Growth Partners",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Customer Feedback: Here's What They're Saying
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Don't just take our word for it - see how Tapnet is transforming marketing agencies worldwide.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full object-cover mr-4"
                  src={testimonial.avatar}
                  alt={testimonial.author}
                />
                <div>
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.title}</div>
                </div>
              </div>
              <Separator className="my-4" />
              <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
