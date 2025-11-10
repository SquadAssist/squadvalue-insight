import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface ClubInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const ClubInquiryModal = ({
  isOpen,
  onClose
}: ClubInquiryModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Thanks for your interest!</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Choose a time to meet with us so we can see how we can best help you.
          </p>
          
          <Button 
            onClick={() => window.open('https://app.lemcal.com/@wout-pauwels', '_blank')}
            className="w-full"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Book a Meeting
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};