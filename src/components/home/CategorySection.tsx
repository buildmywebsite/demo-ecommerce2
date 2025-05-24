import { Link } from "wouter";
import { categories } from "@/data/categories";

const CategorySection = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer" onClick={() => window.location.href = `/products?category=${category.slug}`}>
                <div className="relative overflow-hidden rounded-lg h-80">
                  <img 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    src={category.image} 
                    alt={`${category.name} Category`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="text-sm text-white mt-1">Explore Collection</p>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
