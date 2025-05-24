import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Summer Collection",
    description: "Discover our new range of lightweight, breathable styles perfect for warm days.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
    primaryCta: {
      text: "Shop Now",
      link: "/products?category=summer"
    },
    secondaryCta: {
      text: "View Lookbook",
      link: "/lookbook/summer"
    }
  },
  {
    id: 2,
    title: "Men's Collection",
    description: "Elevated basics and statement pieces designed for the modern man.",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
    primaryCta: {
      text: "Shop Men's",
      link: "/products?category=men"
    },
    secondaryCta: {
      text: "New Arrivals",
      link: "/products?category=men&filter=new"
    }
  },
  {
    id: 3,
    title: "Accessories",
    description: "Complete your look with our selection of premium accessories.",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
    primaryCta: {
      text: "Shop Accessories",
      link: "/products?category=accessories"
    },
    secondaryCta: {
      text: "Gift Ideas",
      link: "/gift-guide"
    }
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gray-900">
      <div className="relative h-[500px] overflow-hidden">
        {/* Carousel */}
        <div className="h-full">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`carousel-slide h-full relative ${index === currentSlide ? 'block' : 'hidden'}`}
            >
              <img 
                className="absolute inset-0 h-full w-full object-cover" 
                src={slide.image} 
                alt={`${slide.title} Featured Hero Image`} 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="text-center sm:text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{slide.title}</h1>
                  <p className="text-xl text-white mb-8 max-w-xl">{slide.description}</p>
                  <div>
                    <Link href={slide.primaryCta.link}>
                      <Button 
                        size="lg" 
                        className="bg-primary hover:bg-primary/90 text-white"
                      >
                        {slide.primaryCta.text}
                      </Button>
                    </Link>
                    <Link href={slide.secondaryCta.link}>
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="ml-4 border-white text-white hover:bg-white hover:text-gray-900"
                      >
                        {slide.secondaryCta.text}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <button 
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -mt-6 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full focus:outline-none transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -mt-6 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full focus:outline-none transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-5 w-full flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button 
              key={index} 
              onClick={() => goToSlide(index)}
              className={`carousel-indicator w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
