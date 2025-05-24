import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">StyleHaven</h3>
            <p className="text-gray-400">Your destination for fashion-forward styles and quality products.</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Linkedin">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/products?filter=new" className="text-gray-400 hover:text-white transition-colors duration-300">New Arrivals</Link></li>
              <li><Link href="/products?category=women" className="text-gray-400 hover:text-white transition-colors duration-300">Women's Clothing</Link></li>
              <li><Link href="/products?category=men" className="text-gray-400 hover:text-white transition-colors duration-300">Men's Clothing</Link></li>
              <li><Link href="/products?category=accessories" className="text-gray-400 hover:text-white transition-colors duration-300">Accessories</Link></li>
              <li><Link href="/products?category=footwear" className="text-gray-400 hover:text-white transition-colors duration-300">Footwear</Link></li>
              <li><Link href="/products?filter=sale" className="text-gray-400 hover:text-white transition-colors duration-300">Sale Items</Link></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</Link></li>
              <li><Link href="/shipping-returns" className="text-gray-400 hover:text-white transition-colors duration-300">Shipping & Returns</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</Link></li>
              <li><Link href="/size-guide" className="text-gray-400 hover:text-white transition-colors duration-300">Size Guide</Link></li>
              <li><Link href="/order-tracking" className="text-gray-400 hover:text-white transition-colors duration-300">Order Tracking</Link></li>
              <li><Link href="/gift-cards" className="text-gray-400 hover:text-white transition-colors duration-300">Gift Cards</Link></li>
            </ul>
          </div>
          
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">Our Story</Link></li>
              <li><Link href="/sustainability" className="text-gray-400 hover:text-white transition-colors duration-300">Sustainability</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</Link></li>
              <li><Link href="/press" className="text-gray-400 hover:text-white transition-colors duration-300">Press</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} StyleHaven. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" alt="PayPal" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="American Express" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
