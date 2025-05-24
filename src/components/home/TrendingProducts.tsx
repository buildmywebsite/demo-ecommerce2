import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { getTrendingProducts } from "@/data/products";

const TrendingProducts = () => {
  const trendingProducts = getTrendingProducts();

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Trending Now</h2>
          <Link href="/products?filter=trending">
            <a className="text-primary hover:text-primary/90 dark:text-primary-foreground dark:hover:text-primary-foreground/90 font-medium flex items-center">
              View all
              <ChevronRight className="h-5 w-5 ml-1" />
            </a>
          </Link>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} horizontal />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
