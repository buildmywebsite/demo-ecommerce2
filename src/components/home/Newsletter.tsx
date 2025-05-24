import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-xl text-primary-100 max-w-2xl mx-auto">
            Stay updated with our latest collections, exclusive offers, and style tips.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center max-w-lg mx-auto">
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-white sm:max-w-xs border-white dark:border-white rounded-md dark:bg-gray-800 dark:text-white"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-primary hover:bg-primary-50 dark:bg-white dark:text-primary dark:hover:bg-gray-100"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          </form>
          
          <p className="mt-3 text-sm text-primary-200">
            We care about your data. Read our 
            <a href="#" className="font-medium text-white underline ml-1">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
