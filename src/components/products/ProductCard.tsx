import { useContext } from "react";
import { Link } from "wouter";
import { Product } from "@shared/schema";
import { CartContext } from "@/context/CartContext";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/formatters";

interface ProductCardProps {
  product: Product;
  horizontal?: boolean;
}

const ProductCard = ({ product, horizontal = false }: ProductCardProps) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1
    });
  };

  if (horizontal) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden group">
        <div className="relative">
          <div className="aspect-w-4 aspect-h-3">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="object-cover w-full h-full"
            />
          </div>
          {product.new && (
            <div className="absolute top-2 left-2">
              <span className="bg-primary text-white px-2 py-1 text-xs font-semibold rounded-sm">New</span>
            </div>
          )}
          {product.sale && (
            <div className="absolute top-2 left-2">
              <span className="bg-rose-600 text-white px-2 py-1 text-xs font-semibold rounded-sm">Sale</span>
            </div>
          )}
          {product.trending && (
            <div className="absolute top-2 left-2">
              <span className="bg-yellow-500 text-white px-2 py-1 text-xs font-semibold rounded-sm">Trending</span>
            </div>
          )}
          <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              className="bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
              aria-label="Add to wishlist"
            >
              <Heart className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div
            className="cursor-pointer"
            onClick={() => window.location.href = `/product/${product.id}`}
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-foreground transition-colors duration-200">
              {product.name}
            </h3>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{product.category}</p>
          <div className="flex justify-between items-center mt-3">
            <div>
              {product.originalPrice ? (
                <>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{formatCurrency(product.price)}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-through">{formatCurrency(product.originalPrice)}</p>
                </>
              ) : (
                <p className="text-lg font-bold text-gray-900 dark:text-white">{formatCurrency(product.price)}</p>
              )}
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 dark:text-gray-300">{product.rating}</span>
            </div>
          </div>
          <Button 
            onClick={handleAddToCart}
            className="mt-4 w-full bg-primary hover:bg-primary/90 text-white"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden group">
      <div className="relative">
        <div
          className="block aspect-w-3 aspect-h-4 cursor-pointer"
          onClick={() => window.location.href = `/product/${product.id}`}
        >
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="object-cover w-full h-full"
          />
        </div>
        {product.new && (
          <div className="absolute top-2 left-2">
            <span className="bg-primary text-white px-2 py-1 text-xs font-semibold rounded-sm">New</span>
          </div>
        )}
        {product.sale && (
          <div className="absolute top-2 left-2">
            <span className="bg-rose-600 text-white px-2 py-1 text-xs font-semibold rounded-sm">Sale</span>
          </div>
        )}
        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            className="bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
            aria-label="Add to wishlist"
          >
            <Heart className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div
          className="cursor-pointer"
          onClick={() => window.location.href = `/product/${product.id}`}
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-foreground transition-colors duration-200">
            {product.name}
          </h3>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{product.category}</p>
        <div className="flex justify-between items-center mt-3">
          <div>
            {product.originalPrice ? (
              <>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{formatCurrency(product.price)}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-through">{formatCurrency(product.originalPrice)}</p>
              </>
            ) : (
              <p className="text-lg font-bold text-gray-900 dark:text-white">{formatCurrency(product.price)}</p>
            )}
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 dark:text-gray-300">{product.rating}</span>
          </div>
        </div>
        <Button 
          onClick={handleAddToCart}
          className="mt-4 w-full bg-primary hover:bg-primary/90 text-white"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
