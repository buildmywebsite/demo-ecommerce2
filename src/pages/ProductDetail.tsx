import { useState, useContext } from "react";
import { useRoute, Link } from "wouter";
import { Helmet } from "react-helmet";
import { Star, Truck, RotateCcw, Shield, Heart } from "lucide-react";
import { getProductById } from "@/data/products";
import { CartContext } from "@/context/CartContext";
import { formatCurrency } from "@/utils/formatters";
import ProductGallery from "@/components/products/ProductGallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const [, params] = useRoute("/product/:id");
  const productId = params?.id ? parseInt(params.id) : 0;
  const product = getProductById(productId);
  
  const { addToCart } = useContext(CartContext);
  const { toast } = useToast();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  
  // Handle case when product is not found
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Product Not Found</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          The product you are looking for does not exist or has been removed.
        </p>
        <Link href="/products">
          <Button className="mt-8">Continue Shopping</Button>
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    // Validate size selection if variants include sizes
    if (product.variants?.sizes && !selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive"
      });
      return;
    }
    
    // Validate color selection if variants include colors
    if (product.variants?.colors && !selectedColor) {
      toast({
        title: "Please select a color",
        variant: "destructive"
      });
      return;
    }
    
    // Add to cart
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      variant: {
        size: selectedSize || undefined,
        color: selectedColor || undefined
      }
    });
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <Helmet>
        <title>{`${product.name} | StyleHaven`}</title>
        <meta 
          name="description" 
          content={product.description.substring(0, 160)} 
        />
        <meta property="og:title" content={`${product.name} | StyleHaven`} />
        <meta property="og:description" content={product.description.substring(0, 160)} />
        <meta property="og:image" content={product.images[0]} />
        <meta property="og:type" content="product" />
      </Helmet>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/">
                <a className="hover:text-gray-900 dark:hover:text-white">Home</a>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span>/</span>
              <Link href="/products">
                <a className="hover:text-gray-900 dark:hover:text-white">Products</a>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span>/</span>
              <Link href={`/products?category=${encodeURIComponent(product.category)}`}>
                <a className="hover:text-gray-900 dark:hover:text-white">{product.category}</a>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span>/</span>
              <span className="text-gray-900 dark:text-white">{product.name}</span>
            </li>
          </ol>
        </nav>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
            
            <div className="mt-4 flex items-center space-x-2">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300 dark:text-gray-600'
                    }`} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">{product.rating} Stars</span>
              <span className="text-sm text-gray-400 dark:text-gray-500">|</span>
              <a href="#reviews" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground">
                Read Reviews
              </a>
            </div>
            
            <div className="mt-6">
              {product.originalPrice ? (
                <div className="flex items-center space-x-2">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{formatCurrency(product.price)}</p>
                  <p className="text-xl text-gray-500 dark:text-gray-400 line-through">{formatCurrency(product.originalPrice)}</p>
                  <span className="px-2 py-1 text-xs font-semibold rounded bg-rose-600 text-white">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
              ) : (
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{formatCurrency(product.price)}</p>
              )}
            </div>
            
            <div className="mt-6">
              <p className="text-base text-gray-700 dark:text-gray-300">{product.description}</p>
            </div>
            
            {/* Sizes */}
            {product.variants?.sizes && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">Size</h3>
                  <a href="#size-guide" className="text-sm font-medium text-primary hover:text-primary/90 dark:text-primary-foreground dark:hover:text-primary-foreground/90">
                    Size Guide
                  </a>
                </div>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-4">
                  {product.variants.sizes.map((size) => (
                    <div key={size}>
                      <RadioGroupItem 
                        value={size} 
                        id={`size-${size}`} 
                        className="sr-only peer"
                      />
                      <Label 
                        htmlFor={`size-${size}`}
                        className="flex items-center justify-center px-3 py-2 text-sm font-medium uppercase rounded-md border border-gray-200 dark:border-gray-700 peer-aria-checked:border-primary peer-aria-checked:bg-primary peer-aria-checked:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
            
            {/* Colors */}
            {product.variants?.colors && (
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Color</h3>
                <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="mt-2 flex space-x-2">
                  {product.variants.colors.map((color) => (
                    <div key={color}>
                      <RadioGroupItem 
                        value={color} 
                        id={`color-${color}`} 
                        className="sr-only peer"
                      />
                      <Label 
                        htmlFor={`color-${color}`}
                        className="flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md border border-gray-200 dark:border-gray-700 peer-aria-checked:border-primary peer-aria-checked:bg-primary peer-aria-checked:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        {color}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
            
            {/* Quantity and Add to Cart */}
            <div className="mt-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded">
                  <button 
                    className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={decreaseQuantity}
                    aria-label="Decrease quantity"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-gray-900 dark:text-white">{quantity}</span>
                  <button 
                    className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={increaseQuantity}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                
                <Button 
                  onClick={handleAddToCart}
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-white"
                >
                  Add to Cart
                </Button>
                
                <Button 
                  variant="outline"
                  size="icon"
                  aria-label="Add to wishlist"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Shipping and Returns */}
            <div className="mt-8">
              <Separator className="my-4" />
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Truck className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Free Shipping</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Free shipping on orders over $50. Delivery within 3-5 business days.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RotateCcw className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Easy Returns</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">30-day return policy. Free returns on all orders.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Secure Checkout</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">All payments are secured and encrypted.</p>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="w-full border-b border-gray-200 dark:border-gray-800">
              <TabsTrigger 
                value="description" 
                className="text-base py-3 px-6"
                data-tab="description"
              >
                Description
              </TabsTrigger>
              <TabsTrigger 
                value="details" 
                className="text-base py-3 px-6"
                data-tab="details"
              >
                Details & Care
              </TabsTrigger>
              <TabsTrigger 
                value="shipping" 
                className="text-base py-3 px-6"
                data-tab="shipping"
              >
                Shipping & Returns
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="text-base py-3 px-6"
                data-tab="reviews"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            <div className="py-6">
              <TabsContent value="description" data-tab-content="description">
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p className="text-gray-700 dark:text-gray-300">{product.description}</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    This {product.name.toLowerCase()} is designed to offer both style and comfort for everyday wear. Crafted with attention to detail and quality materials, it's a versatile addition to your wardrobe that can be dressed up or down for various occasions.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    The modern design is complemented by thoughtful features that enhance both functionality and appearance. Whether you're looking for something for daily use or a special occasion, this piece strikes the perfect balance.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="details" data-tab-content="details">
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Product Details</h3>
                  <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
                    <li>High-quality materials for durability and comfort</li>
                    <li>Thoughtfully designed with attention to detail</li>
                    <li>Versatile style that works for multiple occasions</li>
                    <li>Available in various sizes and colors to suit your preferences</li>
                    <li>Part of our {product.new ? 'new arrivals' : product.trending ? 'trending' : 'signature'} collection</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8">Care Instructions</h3>
                  <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
                    <li>Machine wash cold with like colors</li>
                    <li>Do not bleach</li>
                    <li>Tumble dry low</li>
                    <li>Cool iron if needed</li>
                    <li>Do not dry clean</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="shipping" data-tab-content="shipping">
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Shipping Information</h3>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    We offer the following shipping options for all orders:
                  </p>
                  <ul className="mt-2 space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
                    <li><strong>Standard Shipping (3-5 business days):</strong> Free on orders over $50, $4.99 for orders under $50</li>
                    <li><strong>Express Shipping (2-3 business days):</strong> $9.99</li>
                    <li><strong>Next Day Delivery (1 business day):</strong> $14.99</li>
                  </ul>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    Please note that shipping times are estimates and may vary based on your location and order processing times.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8">Return Policy</h3>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a hassle-free return policy:
                  </p>
                  <ul className="mt-2 space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
                    <li>Returns accepted within 30 days of delivery</li>
                    <li>Items must be unworn, unwashed, and with original tags attached</li>
                    <li>Free returns on all orders (return shipping label included)</li>
                    <li>Refunds processed within 5-7 business days after we receive your return</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="reviews" data-tab-content="reviews" id="reviews">
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">{product.rating}</div>
                      <div className="flex items-center mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${
                              i < Math.floor(product.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300 dark:text-gray-600'
                            }`} 
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Based on 24 reviews</div>
                    </div>
                    <div className="flex-1 ml-4">
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((star) => (
                          <div key={star} className="flex items-center">
                            <span className="text-sm text-gray-600 dark:text-gray-300 w-8">{star} star</span>
                            <div className="flex-1 h-4 mx-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-yellow-400"
                                style={{ 
                                  width: `${Math.random() * 100}%` 
                                }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-300 w-8 text-right">{Math.floor(Math.random() * 20)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Customer Reviews</h3>
                    <div className="mt-4 space-y-6">
                      <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                        <div className="flex items-center mb-2">
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">2 weeks ago</span>
                        </div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Excellent quality and great fit!</h4>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                          I'm really impressed with the quality and fit of this item. The material feels premium and comfortable. Definitely worth the price!
                        </p>
                        <div className="mt-2 flex items-center">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">Sarah T.</span>
                          <span className="mx-2 text-gray-500">|</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Verified Purchase</span>
                        </div>
                      </div>
                      
                      <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                        <div className="flex items-center mb-2">
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">1 month ago</span>
                        </div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Great product, fast shipping</h4>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                          The product arrived earlier than expected and looks exactly like the photos. Very happy with my purchase!
                        </p>
                        <div className="mt-2 flex items-center">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">Michael R.</span>
                          <span className="mx-2 text-gray-500">|</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Verified Purchase</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button variant="outline" className="w-full py-2">Load More Reviews</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
