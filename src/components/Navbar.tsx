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
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 lg:px-12", isScrolled ? "bg-white/80 backdrop-blur-md shadow-subtle" : "bg-transparent")}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/ed32cdc5-fc36-4568-9bbb-15e8c661a9b3.png" alt="SquadAssist Logo" className="h-8 md:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href={getLinkPath("features")} className="text-gray-800 hover:text-black font-medium button-transition">Features</a>
            <a href={getLinkPath("how-it-works")} className="text-gray-800 hover:text-black font-medium button-transition">How It Works</a>
            <Link to="/team" className="text-gray-800 hover:text-black font-medium button-transition">Our Team</Link>
            <Button>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out", isOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="flex flex-col space-y-6">
          <a href={getLinkPath("features")} className="text-xl font-medium text-gray-800" onClick={() => setIsOpen(false)}>
            Features
          </a>
          <a href={getLinkPath("how-it-works")} className="text-xl font-medium text-gray-800" onClick={() => setIsOpen(false)}>
            How It Works
          </a>
          <Link to="/team" className="text-xl font-medium text-gray-800" onClick={() => setIsOpen(false)}>
            Our Team
          </Link>
          <div className="flex flex-col space-y-4 pt-6">
            <Button onClick={() => setIsOpen(false)}>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;