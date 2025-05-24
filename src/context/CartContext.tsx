import { createContext, ReactNode, useState, useEffect } from 'react';
import { CartItem } from '../types/schema';
import { useToast } from '../hooks/use-toast';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  cartItemsCount: number;
  subtotal: number;
}

export const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  isCartOpen: false,
  toggleCart: () => {},
  cartItemsCount: 0,
  subtotal: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);
  
  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);
  
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  const addToCart = (item: CartItem) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.productId === item.productId);
      
      if (existingItemIndex !== -1) {
        // Item already exists in cart, increment quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        
        toast({
          title: "Item updated",
          description: `${item.name} quantity updated in your cart`,
        });
        
        return updatedItems;
      } else {
        // Item doesn't exist in cart, add it
        toast({
          title: "Item added",
          description: `${item.name} added to your cart`,
        });
        
        return [...prevItems, item];
      }
    });
    
    // Open the cart when an item is added
    setIsCartOpen(true);
  };
  
  const removeFromCart = (productId: number) => {
    setItems((prevItems) => {
      const item = prevItems.find((i) => i.productId === productId);
      
      if (item) {
        toast({
          title: "Item removed",
          description: `${item.name} removed from your cart`,
        });
      }
      
      return prevItems.filter((item) => item.productId !== productId);
    });
  };
  
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    
    setItems((prevItems) => 
      prevItems.map((item) => 
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };
  
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };
  
  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addToCart, 
        removeFromCart, 
        updateQuantity,
        clearCart,
        isCartOpen,
        toggleCart,
        cartItemsCount,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};