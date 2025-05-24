import { Link, useLocation } from "wouter";
import { User } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const [location] = useLocation();

  if (!isOpen) return null;

  return (
    <div className="sm:hidden">
      <div className="pt-2 pb-3 space-y-1">
        <Link href="/" className={`${
          location === "/"
            ? "bg-primary-50 border-primary-600 text-primary-700 dark:bg-gray-800 dark:border-primary-500 dark:text-primary-500"
            : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}>
          Home
        </Link>
        <Link href="/products" className={`${
          location === "/products"
            ? "bg-primary-50 border-primary-600 text-primary-700 dark:bg-gray-800 dark:border-primary-500 dark:text-primary-500"
            : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}>
          Shop
        </Link>
        <Link href="/categories" className={`${
          location === "/categories"
            ? "bg-primary-50 border-primary-600 text-primary-700 dark:bg-gray-800 dark:border-primary-500 dark:text-primary-500"
            : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}>
          Categories
        </Link>
        <Link href="/about" className={`${
          location === "/about"
            ? "bg-primary-50 border-primary-600 text-primary-700 dark:bg-gray-800 dark:border-primary-500 dark:text-primary-500"
            : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}>
          About
        </Link>
        <Link href="/contact" className={`${
          location === "/contact"
            ? "bg-primary-50 border-primary-600 text-primary-700 dark:bg-gray-800 dark:border-primary-500 dark:text-primary-500"
            : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}>
          Contact
        </Link>
      </div>
      <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center px-4">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
              <User className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </div>
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800 dark:text-gray-200">Guest User</div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Sign in to your account</div>
          </div>
        </div>
        <div className="mt-3 space-y-1">
          <Link href="/signin" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
            Sign In
          </Link>
          <Link href="/register" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
            Create Account
          </Link>
          <Link href="/wishlist" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
            Wishlist
          </Link>
          <Link href="/orders" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
            Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
