import { Link, useLocation } from 'react-router';

const Navigation = () => {
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Features', icon: '⚡' },
    { path: '/home', label: 'How It Works', icon: '🔄' },
    { path: '/contact', label: 'Contact Us', icon: '📞' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
          >
            <div className="w-10 h-10 bg-web-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
              P
            </div>
            <span className="text-neutral-900 font-bold text-xl">
              PayWise
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-web-green-600 text-white shadow-lg transform scale-105'
                    : 'text-neutral-700 hover:text-web-green-600 hover:bg-web-green-50 hover:scale-105'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="flex items-center space-x-4">
            <button className="bg-web-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-web-green-700 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;