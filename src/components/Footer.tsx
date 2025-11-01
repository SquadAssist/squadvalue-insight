
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  const [showCookieDialog, setShowCookieDialog] = useState(false);
  
  // Function to trigger the cookie preferences dialog
  const openCookiePreferences = () => {
    // Create a custom event that will be caught by the CookieConsent component
    window.dispatchEvent(new CustomEvent('openCookiePreferences'));
  };

  return (
    <footer className="bg-[#1a1d4a] border-t border-white/10">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <img 
              src={logoWhite}
              alt="SquadAssist Logo" 
              className="h-10 mb-4"
            />
            <p className="text-white/70 mb-6 max-w-md">
              SquadAssist helps football clubs make better transfer decisions through AI-powered player valuation and performance prediction.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/squadassist-ai" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {/* <li><Link to="/team" className="text-white/70 hover:text-white transition-colors">Our Team</Link></li> */}
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-white/70 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} SquadAssist. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><Link to="/privacy-policy" className="text-white/70 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="/terms-of-service" className="text-white/70 hover:text-white transition-colors">Terms</Link></li>
              <li><Link to="/cookie-policy" className="text-white/70 hover:text-white transition-colors">Cookies</Link></li>
              <li><button onClick={openCookiePreferences} className="text-white/70 hover:text-white transition-colors">Cookie Preferences</button></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
