
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [showCookieDialog, setShowCookieDialog] = useState(false);
  
  // Function to trigger the cookie preferences dialog
  const openCookiePreferences = () => {
    // Create a custom event that will be caught by the CookieConsent component
    window.dispatchEvent(new CustomEvent('openCookiePreferences'));
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/ed32cdc5-fc36-4568-9bbb-15e8c661a9b3.png" 
              alt="SquadAssist Logo" 
              className="h-10 mb-4"
            />
            <p className="text-gray-600 mb-6 max-w-md">
              SquadAssist helps football clubs make better transfer decisions through AI-powered player valuation and performance prediction.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/squadassist-ai" target="_blank" rel="noopener noreferrer" className="p-2 bg-black/5 rounded-full hover:bg-black/10 transition-colors">
                <Linkedin className="h-5 w-5 text-gray-700" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {/* <li><Link to="/team" className="text-gray-600 hover:text-black transition-colors">Our Team</Link></li> */}
              <li><Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-gray-600 hover:text-black transition-colors">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-600 hover:text-black transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-600 hover:text-black transition-colors">Cookie Policy</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-black transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} SquadAssist. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-black transition-colors">Privacy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-600 hover:text-black transition-colors">Terms</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-600 hover:text-black transition-colors">Cookies</Link></li>
              <li><button onClick={openCookiePreferences} className="text-gray-600 hover:text-black transition-colors">Cookie Preferences</button></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
