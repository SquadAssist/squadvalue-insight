import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const ContactButton = () => {
  return (
    <section className="pt-2 pb-6">
      <div className="container px-4 md:px-6">
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105"
            onClick={() => window.open('https://app.lemcal.com/@wout-pauwels', '_blank')}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Meeting
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactButton;