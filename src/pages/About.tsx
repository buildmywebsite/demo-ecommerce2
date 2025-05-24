import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About StyleHaven | Our Story</title>
        <meta 
          name="description" 
          content="Learn more about StyleHaven, our mission, values, and the story behind our fashion brand. Discover why we're passionate about providing quality fashionable products." 
        />
      </Helmet>
      
      <main>
        {/* Hero Section */}
        <section className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold">Our Story</h1>
              <p className="mt-4 text-xl text-gray-300">
                Discover the journey that brought StyleHaven to life and our mission to bring quality fashion to everyone.
              </p>
            </div>
          </div>
        </section>
        
        {/* Company Vision */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
                <Separator className="my-4" />
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  At StyleHaven, we believe that fashion is more than just clothing—it's a form of self-expression that empowers individuals to present their authentic selves to the world.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  Our vision is to create a world where everyone has access to quality, stylish clothing that makes them feel confident and comfortable, regardless of their budget or style preferences.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  We're dedicated to offering thoughtfully designed pieces that stand the test of time both in quality and style, while maintaining our commitment to ethical production and sustainable practices.
                </p>
              </div>
              <div className="relative h-96 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800" 
                  alt="StyleHaven clothing production" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Timeline */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Journey</h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                From a small startup to a beloved fashion brand, our path has been shaped by passion and persistence.
              </p>
            </div>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-200 dark:bg-gray-700"></div>
              
              <div className="space-y-16">
                {/* 2015 */}
                <div className="relative">
                  <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-4">
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-8">
                      <div className="inline-block bg-primary text-white px-3 py-1 rounded-md text-sm font-semibold mb-2">2015</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">The Beginning</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        StyleHaven started as a small online boutique with a curated collection of items sourced from independent designers. Founded by fashion enthusiasts with a vision for accessible style.
                      </p>
                    </div>
                    <div className="md:pl-8 flex md:justify-start justify-center">
                      <div className="w-64 h-48 rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200" 
                          alt="StyleHaven founders" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 2017 */}
                <div className="relative">
                  <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-4">
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-8 md:order-1 order-2">
                      <div className="md:hidden inline-block bg-primary text-white px-3 py-1 rounded-md text-sm font-semibold mb-2">2017</div>
                      <div className="md:block hidden w-64 h-48 rounded-lg overflow-hidden ml-auto">
                        <img 
                          src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200" 
                          alt="StyleHaven first collection" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:pl-8 order-1 md:order-2">
                      <div className="hidden md:inline-block bg-primary text-white px-3 py-1 rounded-md text-sm font-semibold mb-2">2017</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">First Original Collection</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        We launched our first original collection, designed in-house with a focus on quality fabrics and timeless styles. This marked our transition from a curator to a creator of fashion.
                      </p>
                      <div className="md:hidden block mt-4 w-64 h-48 rounded-lg overflow-hidden mx-auto">
                        <img 
                          src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200" 
                          alt="StyleHaven first collection" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 2019 */}
                <div className="relative">
                  <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-4">
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-8">
                      <div className="inline-block bg-primary text-white px-3 py-1 rounded-md text-sm font-semibold mb-2">2019</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sustainability Commitment</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        We made a public commitment to sustainability, introducing eco-friendly materials and transparent production practices. This initiative reduced our carbon footprint by 40%.
                      </p>
                    </div>
                    <div className="md:pl-8 flex md:justify-start justify-center">
                      <div className="w-64 h-48 rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1582539961127-064249bc6253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200" 
                          alt="StyleHaven sustainable practices" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 2021 */}
                <div className="relative">
                  <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-4">
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-8 md:order-1 order-2">
                      <div className="md:hidden inline-block bg-primary text-white px-3 py-1 rounded-md text-sm font-semibold mb-2">2021</div>
                      <div className="md:block hidden w-64 h-48 rounded-lg overflow-hidden ml-auto">
                        <img 
                          src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200" 
                          alt="StyleHaven global expansion" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:pl-8 order-1 md:order-2">
                      <div className="hidden md:inline-block bg-primary text-white px-3 py-1 rounded-md text-sm font-semibold mb-2">2021</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Global Expansion</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        StyleHaven expanded to international markets, bringing our vision for accessible fashion to customers around the world. We now ship to over 50 countries.
                      </p>
                      <div className="md:hidden block mt-4 w-64 h-48 rounded-lg overflow-hidden mx-auto">
                        <img 
                          src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200" 
                          alt="StyleHaven global expansion" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Today */}
                <div className="relative">
                  <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-4">
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-8">
                      <div className="inline-block bg-primary text-white px-3 py-1 rounded-md text-sm font-semibold mb-2">Today</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">The Future Is Bright</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Today, StyleHaven continues to grow with a community of over 1 million customers who share our passion for quality fashion. We're excited about the future and continuing to innovate in the fashion industry.
                      </p>
                    </div>
                    <div className="md:pl-8 flex md:justify-start justify-center">
                      <div className="w-64 h-48 rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200" 
                          alt="StyleHaven today" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Values</h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                These core principles guide everything we do at StyleHaven.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900 text-primary dark:text-primary-foreground rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quality First</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We believe in creating products that last. Every piece we design is made with quality materials and craftsmanship that stands the test of time.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900 text-primary dark:text-primary-foreground rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sustainability</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We're committed to reducing our environmental impact by using sustainable materials, ethical manufacturing processes, and eco-friendly packaging.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900 text-primary dark:text-primary-foreground rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Inclusivity</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Fashion is for everyone. We design our collections to be accessible and inclusive, embracing diversity in sizes, styles, and price points.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Meet Our Team</h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                The passionate individuals behind StyleHaven who bring our vision to life every day.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                    alt="Sarah Johnson - Founder & CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Sarah Johnson</h3>
                  <p className="text-primary font-medium">Founder & CEO</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    With over 15 years of experience in fashion, Sarah founded StyleHaven with a vision to make quality fashion accessible to everyone.
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                    alt="Michael Chen - Creative Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Michael Chen</h3>
                  <p className="text-primary font-medium">Creative Director</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Michael leads our design team, bringing his unique aesthetic and innovative approach to every collection we launch.
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                    alt="Olivia Martinez - Head of Sustainability" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Olivia Martinez</h3>
                  <p className="text-primary font-medium">Head of Sustainability</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Olivia spearheads our sustainability initiatives, ensuring that we minimize our environmental footprint while maximizing our positive impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Journey</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Be part of the StyleHaven community and stay updated with our latest collections, sustainability initiatives, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Shop Collection
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
