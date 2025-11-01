import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <section className="pt-2 pb-6">
      <div className="container px-4 md:px-6">
        <div className="flex justify-center">
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactButton;