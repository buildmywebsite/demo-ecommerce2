import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet";
import { products } from "@/data/products";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilter from "@/components/products/ProductFilter";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

const ProductsList = () => {
  const [location] = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Extract unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  // Available ratings for filter
  const ratings = [4, 3, 2, 1];
  
  // Price range
  const minPrice = Math.min(...products.map(product => product.price));
  const maxPrice = Math.max(...products.map(product => product.price));

  // Parse URL query parameters
  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    
    const params = new URLSearchParams(location.split('?')[1]);
    const categoryParam = params.get('category');
    const searchParam = params.get('search');
    const sortParam = params.get('sort');
    
    // Apply filters
    let result = [...products];
    
    if (categoryParam) {
      result = result.filter(product => product.category.toLowerCase().includes(categoryParam.toLowerCase()));
    }
    
    if (searchParam) {
      setSearchQuery(searchParam);
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchParam.toLowerCase()) ||
        product.description.toLowerCase().includes(searchParam.toLowerCase())
      );
    }
    
    if (sortParam) {
      setSortOrder(sortParam);
    }
    
    // Apply sorting
    result = sortProducts(result, sortOrder);
    
    setTimeout(() => {
      setFilteredProducts(result);
      setIsLoading(false);
    }, 500);
  }, [location]);

  // Apply sort order
  const sortProducts = (productsToSort, order) => {
    switch (order) {
      case "price-asc":
        return [...productsToSort].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...productsToSort].sort((a, b) => b.price - a.price);
      case "rating":
        return [...productsToSort].sort((a, b) => b.rating - a.rating);
      case "newest":
      default:
        return [...productsToSort].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const [path] = location.split('?');
    const params = new URLSearchParams(location.split('?')[1]);
    
    if (searchQuery) {
      params.set('search', searchQuery);
    } else {
      params.delete('search');
    }
    
    const queryString = params.toString();
    const newLocation = queryString ? `${path}?${queryString}` : path;
    
    window.history.pushState({}, '', newLocation);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
    
    const [path] = location.split('?');
    const params = new URLSearchParams(location.split('?')[1]);
    params.set('sort', value);
    
    const queryString = params.toString();
    window.history.pushState({}, '', `${path}?${queryString}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <Helmet>
        <title>Shop Products | StyleHaven</title>
        <meta
          name="description"
          content="Browse our collection of fashion-forward styles. Find clothing, accessories, and footwear for all occasions."
        />
      </Helmet>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Shop Products</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Browse our collection of fashion-forward styles</p>
        </div>
        
        {/* Search and Sort Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <form onSubmit={handleSearch} className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <button type="submit" className="sr-only">Search</button>
          </form>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={toggleFilter}
              className="md:hidden flex items-center gap-1"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:inline">Sort by:</span>
              <Select value={sortOrder} onValueChange={handleSortChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter sidebar - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-20">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Filters</h2>
              <ProductFilter 
                categories={categories} 
                minPrice={minPrice} 
                maxPrice={maxPrice} 
                ratings={ratings}
              />
            </div>
          </div>
          
          {/* Mobile filter drawer */}
          {isFilterOpen && (
            <>
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={toggleFilter}
                id="filter-overlay"
              />
              <div 
                className="fixed inset-y-0 left-0 max-w-xs w-full bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 md:hidden"
                id="filter-sidebar"
              >
                <ProductFilter 
                  categories={categories}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  ratings={ratings}
                  isMobile
                  onClose={toggleFilter}
                />
              </div>
            </>
          )}
          
          {/* Product grid */}
          <div className="flex-1">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Showing {filteredProducts.length} products
            </p>
            <ProductGrid products={filteredProducts} isLoading={isLoading} />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductsList;
