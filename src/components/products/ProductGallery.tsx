import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (image: string, index: number) => {
    setMainImage(image);
    setActiveIndex(index);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Main image */}
      <div className="aspect-w-1 aspect-h-1 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        <img
          id="main-product-image"
          src={mainImage}
          alt={productName}
          className="w-full h-full object-center object-cover"
        />
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(image, index)}
              className={`relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden focus:outline-none ${
                activeIndex === index ? 'ring-2 ring-primary' : ''
              }`}
              data-thumbnail
            >
              <img
                src={image}
                alt={`${productName} - View ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
