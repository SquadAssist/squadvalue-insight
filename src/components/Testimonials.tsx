
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SquadAssist has transformed our recruitment process. We've seen a 30% improvement in transfer success rate since implementing their AI platform.",
      author: "Thomas Meyer",
      position: "Sporting Director",
      club: "FC Bundesliga",
    },
    {
      quote: "The player value predictions are remarkably accurate. We avoided several costly mistakes and found hidden gems that have become key players for our squad.",
      author: "Carlos Rodriguez",
      position: "Technical Director",
      club: "La Liga Club",
    },
    {
      quote: "As a data-driven club, we needed a solution that could integrate with our existing systems. SquadAssist not only delivered but exceeded our expectations.",
      author: "James Wilson",
      position: "Head of Recruitment",
      club: "Premier League Team",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block py-1 px-3 bg-black/5 rounded-full text-sm font-medium text-gray-800 mb-4 animate-fade-in">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Trusted by Football Professionals
          </h2>
          <p className="text-lg text-gray-600 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Hear from the sporting directors and recruitment teams who have transformed their transfer strategies with SquadAssist.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden py-10">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full px-4"
                >
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-subtle relative">
                    <Quote className="absolute text-black/5 h-24 w-24 -top-4 -left-4 transform -rotate-12" />
                    <div className="relative z-10">
                      <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-black rounded-full mr-4"></div>
                        <div>
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-gray-600">{testimonial.position}, {testimonial.club}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev} 
              className="p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-colors",
                    index === currentIndex ? "bg-black" : "bg-black/20"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next} 
              className="p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
