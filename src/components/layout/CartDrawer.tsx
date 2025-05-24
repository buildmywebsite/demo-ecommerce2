import { useContext } from "react";
import { Link } from "wouter";
import { CartContext } from "@/context/CartContext";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { formatCurrency } from "@/utils/formatters";
import { Button } from "@/components/ui/button";

const CartDrawer = () => {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    isCartOpen, 
    toggleCart, 
    subtotal 
  } = useContext(CartContext);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isCartOpen ? 'block' : 'hidden'}`} 
        onClick={toggleCart}
      />
      
      {/* Cart drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Cart Header */}
          <div className="px-4 py-6 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Your Cart ({items.length})
              </h2>
              <button 
                onClick={toggleCart}
                className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200"
                aria-label="Close cart"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-hidden">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">Your cart is empty</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Looks like you haven't added any products to your cart yet.</p>
                <Button
                  onClick={toggleCart}
                  className="mt-6"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              items.map((item) => (
                <div 
                  key={item.productId} 
                  className="flex space-x-4 border-b border-gray-200 dark:border-gray-700 pb-4"
                >
                  <div className="flex-shrink-0 w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                      {item.name}
                    </h3>
                    {item.variant && (
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {item.variant.size && `Size: ${item.variant.size}`}
                        {item.variant.size && item.variant.color && ' / '}
                        {item.variant.color && `Color: ${item.variant.color}`}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded">
                        <button 
                          className="px-2 py-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-2 py-1 text-sm text-gray-900 dark:text-gray-100">
                          {item.quantity}
                        </span>
                        <button 
                          className="px-2 py-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {formatCurrency(item.price)}
                      </p>
                    </div>
                  </div>
                  <button 
                    className="text-gray-400 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
                    onClick={() => removeFromCart(item.productId)}
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))
            )}
          </div>
          
          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between">
                <span className="text-base font-medium text-gray-900 dark:text-gray-100">Subtotal</span>
                <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              
              {/* Shipping */}
              <div className="flex justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">Shipping</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Calculated at checkout</span>
              </div>
              
              {/* Total */}
              <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
                <span className="text-base font-medium text-gray-900 dark:text-gray-100">Total</span>
                <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              
              {/* Checkout Button */}
              <Link href="/checkout">
                <Button
                  className="w-full"
                  onClick={toggleCart}
                >
                  Proceed to Checkout
                </Button>
              </Link>
              
              {/* Continue Shopping */}
              <button 
                onClick={toggleCart}
                className="w-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 underline text-sm"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
