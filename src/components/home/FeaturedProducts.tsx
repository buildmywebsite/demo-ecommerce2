import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/data/products";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">New Arrivals</h2>
          <div 
            className="text-primary hover:text-primary/90 dark:text-primary-foreground dark:hover:text-primary-foreground/90 font-medium flex items-center cursor-pointer"
            onClick={() => window.location.href = "/products?filter=new"}
          >
            View all
            <ChevronRight className="h-5 w-5 ml-1" />
          </div>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
