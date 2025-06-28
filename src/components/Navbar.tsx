
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-4 px-6 lg:px-12",
      isScrolled 
        ? "glass-premium shadow-premium backdrop-blur-xl" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/ed32cdc5-fc36-4568-9bbb-15e8c661a9b3.png" 
              alt="SquadAssist Logo" 
              className="h-8 md:h-10 transition-all duration-300 hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href={getLinkPath("features")} 
              className="text-slate-700 hover:text-navy-primary font-medium transition-all duration-300 hover:scale-105"
            >
              Features
            </a>
            <a 
              href={getLinkPath("how-it-works")} 
              className="text-slate-700 hover:text-navy-primary font-medium transition-all duration-300 hover:scale-105"
            >
              How It Works
            </a>
            <Link 
              to="/team" 
              className="text-slate-700 hover:text-navy-primary font-medium transition-all duration-300 hover:scale-105"
            >
              Our Team
            </Link>
            <Button className="bg-navy-primary hover:bg-navy-primary/90 text-white shadow-lg hover:shadow-xl button-premium">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-700 focus:outline-none p-2 rounded-lg hover:bg-white/50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "fixed inset-0 glass-premium z-40 flex flex-col pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col space-y-6">
          <a 
            href={getLinkPath("features")} 
            className="text-xl font-medium text-slate-700 hover:text-navy-primary transition-colors" 
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a 
            href={getLinkPath("how-it-works")} 
            className="text-xl font-medium text-slate-700 hover:text-navy-primary transition-colors" 
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </a>
          <Link 
            to="/team" 
            className="text-xl font-medium text-slate-700 hover:text-navy-primary transition-colors" 
            onClick={() => setIsOpen(false)}
          >
            Our Team
          </Link>
          <div className="flex flex-col space-y-4 pt-6">
            <Button 
              className="bg-navy-primary hover:bg-navy-primary/90 text-white shadow-lg button-premium" 
              onClick={() => setIsOpen(false)}
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
