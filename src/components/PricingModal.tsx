import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ClubInquiryModal } from "./ClubInquiryModal";
import { IndividualInquiryModal } from "./IndividualInquiryModal";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PricingModal = ({ isOpen, onClose }: PricingModalProps) => {
  const [isClubModalOpen, setIsClubModalOpen] = useState(false);
  const [isIndividualModalOpen, setIsIndividualModalOpen] = useState(false);

  const handleClubClick = () => {
    onClose();
    setIsClubModalOpen(true);
  };

  const handleIndividualClick = () => {
    onClose();
    setIsIndividualModalOpen(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Select Your Category</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Please select which category best describes you:
            </p>
            
            <div className="space-y-3">
              <Button
                className="w-full justify-start"
                variant="outline"
                asChild
                onClick={onClose}
              >
                <Link to="/pricing/agents">
                  Agent
                </Link>
              </Button>
              
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={handleClubClick}
              >
                Club
              </Button>
              
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={handleIndividualClick}
              >
                Individual
              </Button>
            </div>
            
            <div className="flex justify-end">
              <Button
                variant="ghost"
                onClick={onClose}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ClubInquiryModal 
        isOpen={isClubModalOpen} 
        onClose={() => setIsClubModalOpen(false)} 
      />
      
      <IndividualInquiryModal 
        isOpen={isIndividualModalOpen} 
        onClose={() => setIsIndividualModalOpen(false)} 
      />
    </>
  );
};