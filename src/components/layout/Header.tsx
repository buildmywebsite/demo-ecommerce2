import { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { CartContext } from "@/context/CartContext";
import { ThemeContext } from "@/context/ThemeContext";
import MobileMenu from "./MobileMenu";
import { Search, User, Heart, ShoppingBag, Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location] = useLocation();
  const { cartItemsCount, toggleCart } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Search for:", searchQuery);
  };

  // Close mobile menu when changing location
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary dark:text-primary-foreground">StyleHaven</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className={`${
                location === "/" 
                  ? "border-primary text-gray-900 dark:text-white" 
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Home
              </Link>
              <Link href="/products" className={`${
                location === "/products" 
                  ? "border-primary text-gray-900 dark:text-white" 
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Shop
              </Link>
              <Link href="/categories" className={`${
                location === "/categories" 
                  ? "border-primary text-gray-900 dark:text-white" 
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Categories
              </Link>
              <Link href="/about" className={`${
                location === "/about" 
                  ? "border-primary text-gray-900 dark:text-white" 
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                About
              </Link>
              <Link href="/contact" className={`${
                location === "/contact" 
                  ? "border-primary text-gray-900 dark:text-white" 
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Contact
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            {/* Search */}
            <div className="hidden sm:flex items-center relative">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search products..." 
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-gray-200 w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </form>
            </div>
            
            {/* Theme Toggle */}
            <button 
              onClick={() => toggleTheme()}
              className="ml-3 p-1 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
            
            {/* Account */}
            <div className="ml-3 relative hidden sm:block">
              <button 
                type="button" 
                className="p-1 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                aria-label="User account"
              >
                <User className="h-6 w-6" />
              </button>
            </div>
            
            {/* Wishlist */}
            <div className="ml-3 relative hidden sm:block">
              <button 
                type="button" 
                className="p-1 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                aria-label="Wishlist"
              >
                <Heart className="h-6 w-6" />
              </button>
            </div>
            
            {/* Cart */}
            <div className="ml-3 relative">
              <button 
                type="button" 
                onClick={() => toggleCart()}
                className="p-1 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                aria-label="Shopping cart"
              >
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white w-4 h-4 rounded-full text-xs flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
                <ShoppingBag className="h-6 w-6" />
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden ml-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                aria-label="Open mobile menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <MobileMenu isOpen={isMobileMenuOpen} />
    </header>
  );
};

export default Header;
