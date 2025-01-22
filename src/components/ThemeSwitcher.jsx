import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {theme === 'dark' ? (
        <SunIcon className="w-6 h-6 text-yellow-500" />
      ) : (
        <MoonIcon className="w-6 h-6 text-blue-600" />
      )}
    </motion.button>
  );
}
