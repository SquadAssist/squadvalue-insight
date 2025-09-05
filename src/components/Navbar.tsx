import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { PricingDropdown } from "./PricingDropdown";
import { PricingModal } from "./PricingModal";
import { ClubInquiryModal } from "./ClubInquiryModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [isClubModalOpen, setIsClubModalOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Helper function to determine the correct link path
  const getLinkPath = (anchor: string) => {
    if (location.pathname === '/') {
      return `#${anchor}`;
    } else {
      return `/#${anchor}`;
    }
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/ed32cdc5-fc36-4568-9bbb-15e8c661a9b3.png" 
                alt="SquadAssist Logo" 
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href={getLinkPath("features")} 
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Features
              </a>
              <a 
                href={getLinkPath("how-it-works")} 
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                How It Works
              </a>
              <PricingDropdown />
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
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
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-25"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-16 right-4 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-xl border border-gray-200">
            <div className="flex flex-col">
              {/* Navigation Links */}
              <div className="px-4 py-4 space-y-4">
                <a 
                  href={getLinkPath("features")} 
                  className="block text-base font-medium text-gray-900 py-2 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </a>
                <a 
                  href={getLinkPath("how-it-works")} 
                  className="block text-base font-medium text-gray-900 py-2 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  How It Works
                </a>
                
                {/* Pricing Section */}
                <div className="space-y-2">
                  <button 
                    className="block text-base font-medium text-gray-900 py-2 text-left hover:text-blue-600"
                    onClick={() => {
                      setIsOpen(false);
                      setIsPricingModalOpen(true);
                    }}
                  >
                    Pricing
                  </button>
                  <div className="ml-4 space-y-2">
                    <Link 
                      to="/pricing/agents" 
                      className="block text-sm text-gray-600 py-1 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Agent
                    </Link>
                    <button 
                      className="block text-sm text-gray-600 py-1 text-left hover:text-blue-600"
                      onClick={() => {
                        setIsOpen(false);
                        setIsClubModalOpen(true);
                      }}
                    >
                      Club
                    </button>
                  </div>
                </div>

                {/* Contact Button */}
                <div className="pt-4 border-t border-gray-100">
                  <Button asChild className="w-full" size="sm">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Modals */}
      <PricingModal 
        isOpen={isPricingModalOpen} 
        onClose={() => setIsPricingModalOpen(false)} 
      />
      
      <ClubInquiryModal 
        isOpen={isClubModalOpen} 
        onClose={() => setIsClubModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;