import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { properties } from '../utils/mockData';

function Properties() {
  const [displayCount, setDisplayCount] = useState(9);
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    bedrooms: ''
  });

  const handleSeeMore = () => {
    setDisplayCount(prev => Math.min(prev + 9, properties.length));
  };

  const filteredProperties = properties.filter(property => {
    const matchLocation = !filters.location || 
      property.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchPrice = !filters.priceRange || matchPriceRange(property.price, filters.priceRange);
    const matchBedrooms = !filters.bedrooms || 
      property.bedrooms === parseInt(filters.bedrooms) || 
      (filters.bedrooms === '4+' && property.bedrooms >= 4);
    
    return matchLocation && matchPrice && matchBedrooms;
  });

  const displayedProperties = filteredProperties.slice(0, displayCount);

  const matchPriceRange = (price, range) => {
    const ranges = {
      '0-1000': price <= 1000,
      '1000-2000': price > 1000 && price <= 2000,
      '2000-3000': price > 2000 && price <= 3000,
      '3000+': price > 3000
    };
    return ranges[range];
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white dark:bg-gray-900 flex-1 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                placeholder="City or State"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Price Range
              </label>
              <select
                id="price"
                name="priceRange"
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg"
              >
                <option value="">Any Price</option>
                <option value="0-1000">$0 - $1,000</option>
                <option value="1000-2000">$1,000 - $2,000</option>
                <option value="2000-3000">$2,000 - $3,000</option>
                <option value="3000+">$3,000+</option>
              </select>
            </div>
            <div>
              <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Bedrooms
              </label>
              <select
                id="bedrooms"
                name="bedrooms"
                value={filters.bedrooms}
                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg"
              >
                <option value="">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index % 3 * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ${property.price.toLocaleString()}/month
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{property.location}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{property.bedrooms} beds</span>
                  <span>{property.bathrooms} baths</span>
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
                <Link
                  to={`/properties/${property.id}`}
                  className="block w-full text-center bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        {displayCount < filteredProperties.length && (
          <div className="mt-12 text-center">
            <motion.button
              onClick={handleSeeMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
            >
              See More Properties
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Properties;
