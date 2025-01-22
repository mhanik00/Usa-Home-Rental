import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { properties } from '../utils/mockData';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === Number(id));

  if (!property) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900">Property not found</h2>
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 bg-gray-100 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image Carousel */}
          <div className="h-[400px] md:h-[500px]">
            <Slider {...sliderSettings}>
              {property.images.map((image, index) => (
                <div key={index} className="h-[400px] md:h-[500px]">
                  <img
                    src={image}
                    alt={`${property.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Property Details */}
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {property.title}
                </h1>
                <p className="text-xl text-gray-600">{property.location}</p>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                ${property.price.toLocaleString()}/month
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">{property.bedrooms}</div>
                <div className="text-gray-600">Bedrooms</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">{property.bathrooms}</div>
                <div className="text-gray-600">Bathrooms</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">{property.sqft.toLocaleString()}</div>
                <div className="text-gray-600">Square Feet</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-600">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-600"
                  >
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Location</h2>
              <div className="h-[300px] bg-gray-200 rounded-lg">
                <iframe
                  title="Property Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(
                    property.location
                  )}`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Contact Button */}
            <div className="flex justify-center">
              <button
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => {/* Implement contact functionality */}}
              >
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PropertyDetails;
