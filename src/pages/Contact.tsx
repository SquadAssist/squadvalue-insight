import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Send, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { validateBusinessEmail } from "@/utils/emailValidation";
import { updatePageSEO, pageSEOConfigs } from "@/utils/seo";

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
  const {
    toast
  } = useToast();
  useEffect(() => {
    updatePageSEO(pageSEOConfigs.contact);
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate email against spam domains
    const emailValidationError = validateBusinessEmail(email);
    if (emailValidationError) {
      toast({
        title: "Invalid Email",
        description: emailValidationError,
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      to_email: "hello@squadassist.ai",
      message: message
    };
    try {
      // Initialize EmailJS with the public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      console.log('Email successfully sent!', response);

      // Success
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default"
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
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="text-white py-20" style={{ backgroundImage: 'url(/lovable-uploads/a7aa749a-4229-4871-93f0-926dae7f7845.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-up" style={{
              animationDelay: "100ms"
            }}>
                Contact SquadAssist
              </h1>
              <p className="text-lg md:text-xl text-gray-300 animate-fade-up" style={{
              animationDelay: "200ms"
            }}>
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
                {/* Primary: Book a Meeting */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold mb-3">Schedule a Call</h2>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss how SquadAssist can help with your transfer strategy. Book a time that works for you.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto px-8 py-4 text-base"
                    onClick={() => window.open('https://app.lemcal.com/@wout-pauwels', '_blank')}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Meeting
                  </Button>
                </div>

                {/* Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-4 text-muted-foreground">or</span>
                  </div>
                </div>

                {/* Secondary: Email Form */}
                <div>
                  <h3 className="text-lg font-medium mb-2 text-center">Prefer Email?</h3>
                  <p className="text-sm text-muted-foreground text-center mb-6">
                    Send us a message and we'll get back to you as soon as possible.
                  </p>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="pl-10 block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-black focus:ring-black sm:text-sm" placeholder="Your name" />
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
                        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="pl-10 block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-black focus:ring-black sm:text-sm" placeholder="you@example.com" />
                      </div>
                    </div>
                    
                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={5} className="block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-black focus:ring-black sm:text-sm" placeholder="How can we help with your transfer strategy?" />
                    </div>
                    
                      {/* Submit Button */}
                      <div>
                        <Button type="submit" variant="outline" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </span> : <span className="flex items-center justify-center">
                              Send Message <Send className="ml-2 h-4 w-4" />
                            </span>}
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Ready to Get Started?</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium">Email:</span> hello@squadassist.ai
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Location:</span> Leuven, Belgium
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Contact;