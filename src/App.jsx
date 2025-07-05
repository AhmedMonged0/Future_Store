import { motion } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import Hero3D from './components/Hero3D';
import EnhancedProducts from './components/EnhancedProducts';
import StatsSection from './components/StatsSection';
import { ShoppingBag, Menu, Search, User, Heart } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="enhanced-layout">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Content Layer */}
      <div className="content-layer">
        {/* Enhanced Header */}
        <motion.header
          className="fixed top-0 left-0 right-0 z-50 glass-effect"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <ShoppingBag size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">FutureStore</span>
              </motion.div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <motion.a
                  href="#home"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Home
                </motion.a>
                <motion.a
                  href="#products"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Products
                </motion.a>
                <motion.a
                  href="#analytics"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Analytics
                </motion.a>
                <motion.a
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  About
                </motion.a>
              </nav>

              {/* Actions */}
              <div className="flex items-center space-x-4">
                <motion.button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Search size={20} className="text-gray-600" />
                </motion.button>
                <motion.button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart size={20} className="text-gray-600" />
                </motion.button>
                <motion.button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ShoppingBag size={20} className="text-gray-600" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </motion.button>
                <motion.button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <User size={20} className="text-gray-600" />
                </motion.button>
                <motion.button
                  className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Menu size={20} className="text-gray-600" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section id="home">
            <Hero3D />
          </section>

          {/* Products Section */}
          <section id="products">
            <EnhancedProducts />
          </section>

          {/* Analytics Section */}
          <section id="analytics">
            <StatsSection />
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-6">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                  Why Choose Us?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  نقدم لك تجربة تسوق استثنائية مع أفضل الخدمات والمنتجات
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Fast Delivery',
                    description: 'توصيل سريع خلال 24 ساعة',
                    icon: '🚚',
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    title: 'Secure Payment',
                    description: 'دفع آمن ومضمون 100%',
                    icon: '🔒',
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    title: '24/7 Support',
                    description: 'دعم فني على مدار الساعة',
                    icon: '💬',
                    color: 'from-purple-500 to-pink-500'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center text-2xl`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
            <div className="container mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Stay Updated
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  اشترك في نشرتنا الإخبارية للحصول على أحدث العروض والمنتجات
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <motion.button
                    className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <ShoppingBag size={24} className="text-white" />
                  </div>
                  <span className="text-2xl font-bold">FutureStore</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Your ultimate destination for premium products and exceptional shopping experience.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Fashion</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Home & Garden</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Sports</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>📧 ahmdmnjd806@gmail.com</li>
                  <li>📞 +20 1003061972</li>
                  <li>📍 Bani Suef , EGYPT</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 FutureStore. All rights reserved. Built with Ahmed Monged ❤️.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

