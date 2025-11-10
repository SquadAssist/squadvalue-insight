import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { validateBusinessEmail } from "@/utils/emailValidation";
import { Calendar } from "lucide-react";

const formSchema = z.object({
  email: z.string()
    .email("Please enter a valid email address")
    .refine((email) => !validateBusinessEmail(email), {
      message: "Please use a business email address. Disposable email addresses are not allowed."
    })
});
interface ClubInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const ClubInquiryModal = ({
  isOpen,
  onClose
}: ClubInquiryModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const {
    toast
  } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.functions.invoke('send-club-inquiry', {
        body: {
          email: values.email
        }
      });
      if (error) {
        throw error;
      }
      setShowBooking(true);
    } catch (error) {
      console.error("Error sending inquiry:", error);
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleBookingClose = () => {
    setShowBooking(false);
    form.reset();
    onClose();
  };

  return (
    <>
      <Dialog open={isOpen && !showBooking} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>I'm interested</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">We would like to first get to know your needs. Please leave your e-mail here and we'll reach out.</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField control={form.control} name="email" render={({
                field
              }) => <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showBooking} onOpenChange={handleBookingClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Thanks for your interest!</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Choose a time to meet with us so we can see how we can best help you.
            </p>
            
            <div className="flex flex-col gap-3">
              <Button 
                onClick={() => window.open('https://app.lemcal.com/@wout-pauwels', '_blank')}
                className="w-full"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book a Meeting
              </Button>
              <Button 
                variant="outline"
                onClick={handleBookingClose}
                className="w-full"
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};