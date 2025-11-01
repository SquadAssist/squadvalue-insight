import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PricingModal } from "./PricingModal";

export const PricingDropdown = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        className="text-white hover:text-white/80 font-medium button-transition"
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