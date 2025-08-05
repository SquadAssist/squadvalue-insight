import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PricingModal } from "./PricingModal";

export const PricingDropdown = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        className="text-gray-800 hover:text-black font-medium button-transition"
        onClick={() => setIsModalOpen(true)}
      >
        Pricing
      </button>

      <PricingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};