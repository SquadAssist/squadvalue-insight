
import { useEffect } from "react";
import { Linkedin, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { updatePageSEO, pageSEOConfigs } from "@/utils/seo";

const Team = () => {
  useEffect(() => {
    updatePageSEO(pageSEOConfigs.team);
  }, []);
  const teamMembers = [{
    name: "Wout Pauwels",
    role: "Co-Founder",
    bio: "Data Scientist and AI expert (summa cum laude from KU Leuven) with strategic consulting experience from McKinsey & Company. Specializes in machine learning applications for sports analytics and transfer market intelligence.",
    image: "/lovable-uploads/4f3f69f5-c537-41eb-a946-9ba68d273f92.png",
    linkedin: "https://www.linkedin.com/in/wout-pauwels/",
    email: "wout.pauwels@squadassist.ai"
  }, {
    name: "Maarten Wyns",
    role: "Co-Founder",
    bio: "Computer Engineer and Technology Leader (magna cum laude from KU Leuven) with an MBA from Vlerick Business School. Brings extensive experience in fintech scaling and software development to football analytics.",
    image: "/lovable-uploads/6ede69f2-1346-4897-9f8d-cd82ed409d9d.png",
    linkedin: "https://www.linkedin.com/in/maartenwyns/",
    email: "maarten.wyns@squadassist.ai"
  }];
  
  return <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block py-1 px-3 bg-black/5 rounded-full text-sm font-medium text-gray-800 mb-4 animate-fade-in">
              Meet Our Team
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-up" style={{
            animationDelay: "100ms"
          }}>
              Meet the SquadAssist Team
            </h1>
            <p className="text-lg text-gray-600 animate-fade-up" style={{
            animationDelay: "200ms"
          }}>
              Combining expertise in sports analytics, AI, and technology to revolutionize football transfer intelligence. Our team brings together cutting-edge data science and deep football industry knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => <div key={index} className="flex flex-col items-center bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden animate-fade-up" style={{
            animationDelay: `${300 + index * 200}ms`
          }}>
                <div className="w-full aspect-square relative overflow-hidden bg-gray-50">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role} at SquadAssist, AI-powered football transfer analytics platform`} 
                    className="w-full h-full object-contain" 
                    style={{ objectPosition: "center 40%" }}
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <div className="flex items-center justify-center text-gray-600 mb-4">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{member.role}</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={`mailto:${member.email}`} className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      <Footer />
    </>;
};

export default Team;
