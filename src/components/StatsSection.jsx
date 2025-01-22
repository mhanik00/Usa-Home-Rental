import { motion } from 'framer-motion';
import CountUpAnimation from './CountUpAnimation';

export default function StatsSection({ stats }) {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold text-white mb-3">
                <CountUpAnimation value={stat.value} />
              </div>
              <motion.div 
                className="text-blue-100 font-medium text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
