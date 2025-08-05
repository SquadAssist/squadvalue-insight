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
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address")
});
interface IndividualInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const IndividualInquiryModal = ({
  isOpen,
  onClose
}: IndividualInquiryModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      } = await supabase.functions.invoke('send-individual-inquiry', {
        body: {
          email: values.email
        }
      });
      if (error) {
        throw error;
      }
      toast({
        title: "Thank you!",
        description: "We've received your inquiry and will reach out soon."
      });
      form.reset();
      onClose();
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
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>I'm interested</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-muted-foreground">We'ld love to understand how this can benefit you. Leave your e-mail address and we will be in touch to understand your needs.</p>
          
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
    </Dialog>;
};