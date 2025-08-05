import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PricingModal } from "./PricingModal";

export const PricingDropdown = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button 
        variant="ghost" 
        className="text-gray-800 hover:text-black font-medium hover:bg-transparent button-transition"
        onClick={() => setIsModalOpen(true)}
      >
        Pricing
      </Button>

      <PricingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};