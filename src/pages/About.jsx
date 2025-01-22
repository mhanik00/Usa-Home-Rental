import { motion } from 'framer-motion';
import StatsSection from '../components/StatsSection';

function About() {
  const stats = [
    { label: 'Years of Experience', value: 15 },
    { label: 'Properties Listed', value: 1000 },
    { label: 'Happy Tenants', value: 5000 },
    { label: 'Cities Covered', value: 50 },
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Michael Brown',
      role: 'Lead Property Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 bg-white dark:bg-gray-900"
    >
      {/* Hero Section */}
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              About USA Rentals
            </h1>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
              Your trusted partner in finding the perfect rental property.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Mission Section */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
              We strive to revolutionize the rental experience by providing exceptional service, 
              transparent processes, and a wide selection of quality properties to help you find 
              your perfect home.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-300">
              The dedicated professionals behind USA Rentals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <motion.div
                key={member.name}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We conduct our business with the highest standards of professional behavior and ethics.',
              },
              {
                title: 'Excellence',
                description: 'We strive to exceed expectations and deliver outstanding results in everything we do.',
              },
              {
                title: 'Customer Focus',
                description: 'We put our customers first and work tirelessly to ensure their complete satisfaction.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
