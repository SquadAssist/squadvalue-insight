
import { Linkedin } from "lucide-react";

const Footer = () => {
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
              <li><a href="#about" className="text-gray-600 hover:text-black transition-colors">About Us</a></li>
              <li><a href="#team" className="text-gray-600 hover:text-black transition-colors">Our Team</a></li>
              <li><a href="#careers" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#blogs" className="text-gray-600 hover:text-black transition-colors">Blog</a></li>
              <li><a href="#case-studies" className="text-gray-600 hover:text-black transition-colors">Case Studies</a></li>
              <li><a href="#football-insights" className="text-gray-600 hover:text-black transition-colors">Football Insights</a></li>
              <li><a href="#privacy" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} SquadAssist. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><a href="#privacy" className="text-gray-600 hover:text-black transition-colors">Privacy</a></li>
              <li><a href="#terms" className="text-gray-600 hover:text-black transition-colors">Terms</a></li>
              <li><a href="#cookies" className="text-gray-600 hover:text-black transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
