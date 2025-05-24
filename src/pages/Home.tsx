import { Helmet } from "react-helmet";
import HeroCarousel from "@/components/home/HeroCarousel";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import PromotionBanner from "@/components/home/PromotionBanner";
import TrendingProducts from "@/components/home/TrendingProducts";
import FeaturesSection from "@/components/home/FeaturesSection";
import Newsletter from "@/components/home/Newsletter";
import InstagramFeed from "@/components/home/InstagramFeed";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>StyleHaven - Modern Fashion E-commerce</title>
        <meta
          name="description"
          content="StyleHaven is your destination for fashion-forward styles and quality products. Discover the latest trends in clothing, accessories, and more."
        />
        <meta property="og:title" content="StyleHaven - Modern Fashion E-commerce" />
        <meta 
          property="og:description" 
          content="Discover the latest trends in fashion with StyleHaven. Shop our curated collection of clothing, accessories, and footwear."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stylehaven.com" />
      </Helmet>
      
      <main>
        <HeroCarousel />
        <CategorySection />
        <FeaturedProducts />
        <PromotionBanner />
        <TrendingProducts />
        <FeaturesSection />
        <Newsletter />
        <InstagramFeed />
      </main>
    </>
  );
};

export default Home;
