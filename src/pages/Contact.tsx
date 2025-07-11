
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

// Initialize EmailJS with your User ID
// In a production app, these should come from environment variables
const EMAILJS_SERVICE_ID = "service_hg6yrla"; // Replace with your actual EmailJS Service ID
const EMAILJS_TEMPLATE_ID = "template_vk5c7m9"; // Replace with your actual EmailJS Template ID
const EMAILJS_PUBLIC_KEY = "bUCGB5LFQr3DeMJDx"; 

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      to_email: "hello@squadassist.ai",
      message: message,
    };

    try {
      // Initialize EmailJS with the public key
      emailjs.init(EMAILJS_PUBLIC_KEY);
      
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      console.log('Email successfully sent!', response);
      
      // Success
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      // Reset form
      setEmail("");
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Failed to send email:", error);
      // Error
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-black text-white py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
                Contact SquadAssist
              </h1>
              <p className="text-lg md:text-xl text-gray-300 animate-fade-up" style={{ animationDelay: "200ms" }}>
                Ready to revolutionize your football transfer strategy? Get in touch with our team to learn how AI-powered analytics can transform your recruitment process.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Our Football Analytics Team</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="pl-10 block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    
                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="pl-10 block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    
                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        className="block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                        placeholder="How can we help with your transfer strategy?"
                      />
                    </div>
                    
                    {/* Submit Button */}
                    <div>
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send Message <Send className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Ready to Get Started?</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium">Email:</span> hello@squadassist.ai
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Location:</span> Leuven, Belgium
                    </p>
                    <p className="text-gray-600 mt-4">
                      Learn more about our <a href="/team" className="text-blue-600 hover:underline">expert team</a> or explore our <a href="/blog" className="text-blue-600 hover:underline">insights on football analytics</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
