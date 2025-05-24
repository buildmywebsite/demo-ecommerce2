import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const PromotionBanner = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white">Summer Sale</h2>
          <p className="mt-4 text-xl text-gray-300">Get up to 40% off on selected items. Limited time offer.</p>
          <div className="mt-6 flex">
            <Link href="/products?filter=sale">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Shop Now
              </Button>
            </Link>
            <Link href="/sale-info">
              <Button 
                size="lg"
                variant="outline"
                className="ml-4 border-gray-300 text-gray-300 bg-transparent hover:bg-gray-800"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
          <img 
            src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600" 
            alt="Summer Sale Collection" 
            className="rounded-lg w-full h-auto shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
