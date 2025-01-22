import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { 
  HomeIcon, 
  MapPinIcon, 
  PhoneIcon,
  ChevronLeftIcon,
  ChevronRightIcon 
} from '@heroicons/react/24/outline';
import { preloadImages } from '../utils/preloadImages';
import { properties } from '../utils/mockData';
import StatsSection from '../components/StatsSection';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1920',
  ];

  const searchBackgroundImages = [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920',
  ];

  const [searchImageIndex, setSearchImageIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Property Investor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200",
      quote: "Finding our dream rental home was effortless with this platform. The virtual tours and detailed property information made our decision-making process so much easier.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Professional",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200",
      quote: "The customer service is outstanding. They helped us find the perfect home in a great neighborhood, and the whole process was smooth from start to finish.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200",
      quote: "What sets them apart is their attention to detail and personalized approach. They truly understand what their clients are looking for in a rental property.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: HomeIcon,
      title: 'Premium Properties',
      description: 'Access to exclusive properties in prime locations across the USA',
    },
    {
      icon: MapPinIcon,
      title: 'Prime Locations',
      description: 'Properties in the most desirable neighborhoods and communities',
    },
    {
      icon: PhoneIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your rental needs',
    },
  ];

  useEffect(() => {
    const loadImages = async () => {
      await preloadImages(backgroundImages);
      setImagesLoaded(true);
    };
    loadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  useEffect(() => {
    if (!imagesLoaded) return;

    const searchInterval = setInterval(() => {
      setSearchImageIndex((prevIndex) => 
        prevIndex === searchBackgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(searchInterval);
  }, [imagesLoaded]);

  const sliderRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 bg-white dark:bg-secondary-900"
    >
      {/* Hero Section with Background Carousel */}
      <div className="relative h-[600px] overflow-hidden">
        {/* Background Images */}
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
          </motion.div>
        ))}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentImageIndex === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
            >
              Find Your Perfect Home
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-2xl text-white/90"
            >
              Discover premium rental properties in prime locations across the United States
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-x-4"
            >
              <Link
                to="/properties"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Browse Rentals
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white dark:bg-secondary-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Why Choose USA Rentals?
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              We provide the best rental experience with premium properties and exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-center p-6 rounded-lg bg-secondary-50 dark:bg-secondary-800 hover:shadow-lg cursor-pointer transition-all duration-200"
              >
                <benefit.icon className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection
        stats={[
          { value: 1500, label: "Properties Available" },
          { value: 98, label: "Customer Satisfaction" },
          { value: 500, label: "Cities Covered" },
          { value: 10000, label: "Happy Customers" }
        ]}
      />

      {/* Featured Properties Section */}
      <div className="py-16 bg-secondary-50 dark:bg-secondary-800/50 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Explore our handpicked selection of premium rental properties
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative px-16">
              <button 
                className="absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-white dark:bg-secondary-800 p-3 rounded-full shadow-lg hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-all duration-200 hover:scale-110 group"
                onClick={() => sliderRef?.current?.slickPrev()}
              >
                <ChevronLeftIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </button>

              <button 
                className="absolute right-0 z-10 top-1/2 -translate-y-1/2 bg-white dark:bg-secondary-800 p-3 rounded-full shadow-lg hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-all duration-200 hover:scale-110 group"
                onClick={() => sliderRef?.current?.slickNext()}
              >
                <ChevronRightIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </button>

              <Slider
                ref={sliderRef}
                dots={false}
                infinite={true}
                speed={800}
                slidesToShow={3}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={4000}
                arrows={false}
                cssEase="cubic-bezier(0.87, 0.03, 0.41, 0.9)"
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                    }
                  },
                  {
                    breakpoint: 640,
                    settings: {
                      slidesToShow: 1,
                    }
                  }
                ]}
                className="featured-properties-slider"
              >
                {properties.map((property) => (
                  <div key={property.id} className="px-4">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white dark:bg-secondary-900 rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="relative h-64">
                        <img
                          src={property.images[0]}
                          alt={property.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          ${property.price.toLocaleString()}/month
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                          {property.title}
                        </h3>
                        <p className="text-secondary-600 dark:text-secondary-300 mb-4">{property.location}</p>
                        <div className="flex justify-between items-center text-sm text-secondary-500 dark:text-secondary-400">
                          <span>{property.bedrooms} beds</span>
                          <span>{property.bathrooms} baths</span>
                          <span>{property.sqft.toLocaleString()} sqft</span>
                        </div>
                        <Link
                          to={`/properties/${property.id}`}
                          className="mt-4 block w-full text-center bg-primary-600 dark:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-200"
                        >
                          View Details
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            </div>

            <style jsx>{`
              .featured-properties-slider {
                margin-bottom: 1rem;
                padding: 0.5rem;
              }

              .slick-slide {
                transition: opacity 0.3s ease;
                padding: 0.75rem;
              }

              .slick-list {
                margin: 0 -0.75rem;
              }
            `}</style>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white dark:bg-secondary-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience finding their perfect rental home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative p-8 rounded-2xl bg-secondary-50 dark:bg-secondary-800 hover:shadow-xl transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute top-0 right-0 -mt-4 mr-4 text-primary-500 dark:text-primary-400 opacity-20">
                  <svg
                    className="w-12 h-12 transform rotate-180"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436-.063.373-.255.766-.255 1.436 0 3.314-2 4-2 4h4c1.657 0 3-1.343 3-3 0-1.657-1.343-3-3-3-.796 0-1.557.156-2.255.436.063-.373.255-.766.255-1.436 0-3.314-2-4-2-4zm12 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436-.063.373-.255.766-.255 1.436 0 3.314-2 4-2 4h4c1.657 0 3-1.343 3-3 0-1.657-1.343-3-3-3-.796 0-1.557.156-2.255.436.063-.373.255-.766.255-1.436 0-3.314-2-4-2-4z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Quote */}
                  <p className="text-secondary-600 dark:text-secondary-300 mb-8 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-primary-500/20"
                    />
                    <div>
                      <h4 className="font-semibold text-secondary-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-secondary-500 dark:text-secondary-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 dark:bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-200"
            >
              Start Your Journey
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

          </motion.div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white">
                About Dream House Rentals
              </h2>
              <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                <p>
                  At Dream House Rentals, we're more than just a rental platform – we're your partner in finding the perfect place to call home. With years of experience in the real estate market, we understand that every home search is unique and personal.
                </p>
                <p>
                  Our mission is to simplify the rental process by connecting quality properties with qualified tenants, ensuring a seamless experience for both landlords and renters. We pride ourselves on our curated selection of properties and our commitment to transparency and exceptional service.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="text-center p-4 bg-secondary-50 dark:bg-secondary-800 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-500 mb-2">1000+</h3>
                  <p className="text-secondary-600 dark:text-secondary-400">Properties Listed</p>
                </div>
                <div className="text-center p-4 bg-secondary-50 dark:bg-secondary-800 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-500 mb-2">98%</h3>
                  <p className="text-secondary-600 dark:text-secondary-400">Customer Satisfaction</p>
                </div>
                <div className="text-center p-4 bg-secondary-50 dark:bg-secondary-800 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-500 mb-2">24/7</h3>
                  <p className="text-secondary-600 dark:text-secondary-400">Support Available</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                    alt="Modern Apartment Building"
                    className="object-cover w-full h-full rounded-lg shadow-xl"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-lg shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-secondary-900 dark:text-white">Quality Assured Properties</h4>
                      <p className="text-xs text-secondary-600 dark:text-secondary-400">Every property is verified for quality and safety standards</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-500 rounded-full opacity-20 blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Have questions about our properties or services? We're here to help you find your perfect home.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-secondary-900 rounded-lg shadow-lg p-8"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <div className="bg-white dark:bg-secondary-900 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-primary-600 dark:text-primary-500">📞</span>
                  <p className="text-secondary-600 dark:text-secondary-300">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-600 dark:text-primary-500">✉️</span>
                  <p className="text-secondary-600 dark:text-secondary-300">info@dreamhouse.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-600 dark:text-primary-500">📍</span>
                  <p className="text-secondary-600 dark:text-secondary-300">123 Business Street, New York</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-600 dark:text-primary-500">⏰</span>
                  <p className="text-secondary-600 dark:text-secondary-300">Mon-Fri 9am-6pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <div className="relative py-16">
        {/* Background Carousel */}
        {searchBackgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: searchImageIndex === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-blue-900/70"></div>
          </motion.div>
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Find Your Perfect Rental
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="City or State"
                  className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400"
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-secondary-700 dark:text-secondary-700 mb-1">
                  Price Range
                </label>
                <select
                  id="price"
                  className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                >
                  <option value="">Any Price</option>
                  <option value="0-1000">$0 - $1,000</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="2000-3000">$2,000 - $3,000</option>
                  <option value="3000+">$3,000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="bedrooms" className="block text-sm font-medium text-secondary-700 dark:text-secondary-700 mb-1">
                  Bedrooms
                </label>
                <select
                  id="bedrooms"
                  className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                >
                  <option value="">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Search
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
