const instagramImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Instagram Feed Image 1 - Model in styled outfit"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Instagram Feed Image 2 - Accessories arranged artistically"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Instagram Feed Image 3 - Model with a styled outfit"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Instagram Feed Image 4 - Carefully arranged products"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Instagram Feed Image 5 - Detailed jewelry"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Instagram Feed Image 6 - Lifestyle shot with products"
  }
];

const InstagramFeed = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Follow Us on Instagram</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">@StyleHaven</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {instagramImages.map((image) => (
            <a 
              key={image.id} 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block aspect-w-1 aspect-h-1 overflow-hidden"
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
