import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', path: '/' },
      { name: 'Properties', path: '/properties' },
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    'Contact Info': [
      { name: '1234 Rental Ave, NY 10001', path: '#' },
      { name: 'info@usarentals.com', path: 'mailto:info@usarentals.com' },
      { name: '+1 (555) 123-4567', path: 'tel:+15551234567' },
    ],
    'Social Media': [
      { name: 'Facebook', path: 'https://facebook.com' },
      { name: 'Instagram', path: 'https://instagram.com' },
      { name: 'LinkedIn', path: 'https://linkedin.com' },
    ],
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.path.startsWith('http') || link.path.startsWith('mailto') || link.path.startsWith('tel') ? (
                      <a
                        href={link.path}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.path} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {currentYear} USA Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
