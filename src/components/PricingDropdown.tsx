import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ClubInquiryModal } from "./ClubInquiryModal";

export const PricingDropdown = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-gray-800 hover:text-black font-medium hover:bg-transparent button-transition">
            Pricing
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem asChild>
            <Link to="/pricing/agents" className="w-full cursor-pointer">
              Agent
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer"
          >
            Club
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ClubInquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};