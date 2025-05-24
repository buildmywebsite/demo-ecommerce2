import { useContext, useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { CartContext } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, RefreshCw, ArrowLeft } from "lucide-react";
import { formatCurrency } from "@/utils/formatters";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, subtotal } = useContext(CartContext);
  const { toast } = useToast();
  const [promoCode, setPromoCode] = useState("");
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);

  const handleApplyPromoCode = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!promoCode) {
      toast({
        title: "Enter a promo code",
        description: "Please enter a valid promo code to apply.",
        variant: "destructive"
      });
      return;
    }
    
    setIsApplyingPromo(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Invalid promo code",
        description: "The promo code you entered is invalid or expired.",
        variant: "destructive"
      });
      
      setIsApplyingPromo(false);
    }, 1000);
  };

  // Calculate shipping cost (free shipping over $50)
  const shippingCost = subtotal >= 50 ? 0 : 4.99;
  
  // Calculate tax (assume 8% tax rate)
  const taxRate = 0.08;
  const taxAmount = subtotal * taxRate;
  
  // Calculate total
  const total = subtotal + shippingCost + taxAmount;

  return (
    <>
      <Helmet>
        <title>Your Cart | StyleHaven</title>
        <meta 
          name="description" 
          content="Review and edit items in your shopping cart before checking out. Free shipping on orders over $50."
        />
      </Helmet>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
            <div className="flex justify-center">
              <div className="h-24 w-24 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4">
                <ShoppingBag className="h-12 w-12 text-gray-400 dark:text-gray-500" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Your cart is empty</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                    Cart Items ({items.reduce((total, item) => total + item.quantity, 0)})
                  </h2>
                </div>
                
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {items.map((item) => (
                    <li key={item.productId} className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link href={`/product/${item.productId}`}>
                            <a className="text-base font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-foreground">
                              {item.name}
                            </a>
                          </Link>
                          {item.variant && (
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              {item.variant.size && `Size: ${item.variant.size}`}
                              {item.variant.size && item.variant.color && ' / '}
                              {item.variant.color && `Color: ${item.variant.color}`}
                            </p>
                          )}
                          <div className="flex items-center mt-2">
                            <button 
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="mx-2 text-gray-700 dark:text-gray-300">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-base font-medium text-gray-900 dark:text-white">
                            {formatCurrency(item.price * item.quantity)}
                          </p>
                          <button 
                            onClick={() => removeFromCart(item.productId)}
                            className="mt-2 flex items-center text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 flex flex-wrap gap-4 items-center justify-between">
                  <Button 
                    variant="outline" 
                    className="flex items-center"
                    onClick={() => clearCart()}
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Clear Cart
                  </Button>
                  
                  <Link href="/products">
                    <Button 
                      variant="ghost" 
                      className="flex items-center"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Order Summary</h2>
                </div>
                
                <div className="px-6 py-4 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                    <span className="text-gray-900 dark:text-white font-medium">{formatCurrency(subtotal)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {shippingCost === 0 ? 'Free' : formatCurrency(shippingCost)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Tax (8%)</span>
                    <span className="text-gray-900 dark:text-white font-medium">{formatCurrency(taxAmount)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between">
                    <span className="text-gray-900 dark:text-white font-medium">Total</span>
                    <span className="text-primary font-bold">{formatCurrency(total)}</span>
                  </div>
                  
                  {/* Promo Code */}
                  <form onSubmit={handleApplyPromoCode} className="mt-4">
                    <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Promo Code
                    </label>
                    <div className="flex space-x-2">
                      <Input
                        id="promo-code"
                        type="text"
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        type="submit"
                        variant="secondary"
                        disabled={isApplyingPromo}
                      >
                        {isApplyingPromo ? 'Applying...' : 'Apply'}
                      </Button>
                    </div>
                  </form>
                  
                  <div className="mt-6">
                    <Link href="/checkout">
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white py-3 flex items-center justify-center"
                      >
                        Proceed to Checkout
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                  <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <p className="flex items-center">
                      <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Free shipping on orders over $50
                    </p>
                    <p className="flex items-center">
                      <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      30-day easy returns
                    </p>
                    <p className="flex items-center">
                      <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Secure checkout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Cart;
