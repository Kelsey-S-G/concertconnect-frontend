import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import concertConnectLogo from "../images/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const LoginForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative">
        <button 
          onClick={() => setShowLoginModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Log In</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );

  const SignUpForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative">
        <button 
          onClick={() => setShowSignUpModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            />
          </div>
          <div>
            <label htmlFor="signup-email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="signup-email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            />
          </div>
          <div>
            <label htmlFor="signup-password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="signup-password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={concertConnectLogo}
                alt="ConcertConnect Logo"
                className="h-16 sm:h-20 w-auto"
              />
              <span className="text-xl font-bold text-blue-800">ConcertConnect</span>
            </Link>

            <div className="hidden md:flex items-center space-x-4">
              <Link to="/concerts" className="text-blue-700 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors">Concerts</Link>
              <Link to="/favorites" className="text-blue-700 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors">Favorites</Link>
              <Link to="/cart" className="text-blue-700 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors">Cart</Link>
              <Link to="/about" className="text-blue-700 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors">About</Link>
              <button
                type="button"
                onClick={() => setShowSignUpModal(true)}
                className="px-4 py-2 text-blue-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={() => setShowLoginModal(true)}
                className="px-4 py-2 text-blue-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                Log in
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden rounded-lg p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-800"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <nav
        className={`bg-blue-800 ${isMobileMenuOpen ? "block" : "hidden md:block"}`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-center md:items-center">
            <Link to="/concerts" className="text-white font-medium px-4 py-3 md:py-4 hover:bg-blue-700 transition-colors duration-200 text-center">Concerts</Link>
            <Link to="/favorites" className="text-white font-medium px-4 py-3 md:py-4 hover:bg-blue-700 transition-colors duration-200 text-center">Favorites</Link>
            <Link to="/cart" className="text-white font-medium px-4 py-3 md:py-4 hover:bg-blue-700 transition-colors duration-200 text-center">Cart</Link>
            <Link to="/about" className="text-white font-medium px-4 py-3 md:py-4 hover:bg-blue-700 transition-colors duration-200 text-center">About</Link>
          </div>
        </div>
      </nav>

      {showLoginModal && <LoginForm />}
      {showSignUpModal && <SignUpForm />}
    </header>
  );
};

export default Navbar;