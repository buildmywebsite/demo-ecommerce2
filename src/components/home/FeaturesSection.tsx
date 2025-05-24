import { Package, Shield, RefreshCw, LifeBuoy } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Free shipping on all orders over $50. International shipping available.",
    icon: Package
  },
  {
    id: 2,
    title: "Secure Payments",
    description: "All payments are processed securely through encrypted channels.",
    icon: Shield
  },
  {
    id: 3,
    title: "Easy Returns",
    description: "30-day return policy for all products. No questions asked.",
    icon: RefreshCw
  },
  {
    id: 4,
    title: "Customer Support",
    description: "Dedicated customer support team available 24/7 to help you.",
    icon: LifeBuoy
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Shop With Us</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide the best shopping experience with premium quality products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900 text-primary dark:text-primary-foreground mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
