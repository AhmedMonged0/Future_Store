import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Eye, Star, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Premium Leather Jacket',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 124,
    badge: 'Best Seller',
    colors: ['#8B4513', '#000000', '#654321'],
    description: 'Handcrafted premium leather jacket with modern design',
    features: ['Genuine Leather', 'Water Resistant', 'Premium Zippers']
  },
  {
    id: 2,
    name: 'Minimal Sneakers',
    price: 159,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 89,
    badge: 'New',
    colors: ['#FFFFFF', '#000000', '#FF6B6B'],
    description: 'Comfortable minimalist sneakers for everyday wear',
    features: ['Breathable Mesh', 'Memory Foam', 'Anti-Slip Sole']
  },
  {
    id: 3,
    name: 'Casual T-Shirt',
    price: 49,
    originalPrice: 69,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 67,
    badge: 'Sale',
    colors: ['#4A90E2', '#FFFFFF', '#2ECC71'],
    description: 'Soft cotton t-shirt with perfect fit',
    features: ['100% Cotton', 'Pre-Shrunk', 'Machine Washable']
  },
  {
    id: 4,
    name: 'Smart Watch Pro',
    price: 399,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 203,
    badge: 'Premium',
    colors: ['#000000', '#C0C0C0', '#FFD700'],
    description: 'Advanced smartwatch with health monitoring',
    features: ['Heart Rate Monitor', 'GPS Tracking', '7-Day Battery']
  },
  {
    id: 5,
    name: 'Wireless Headphones',
    price: 199,
    originalPrice: 249,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 156,
    badge: 'Popular',
    colors: ['#000000', '#FFFFFF', '#FF6B6B'],
    description: 'Premium wireless headphones with noise cancellation',
    features: ['Active Noise Cancelling', '30H Battery', 'Quick Charge']
  },
  {
    id: 6,
    name: 'Designer Backpack',
    price: 129,
    originalPrice: 179,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 92,
    badge: 'Eco-Friendly',
    colors: ['#8B4513', '#000000', '#2ECC71'],
    description: 'Sustainable backpack made from recycled materials',
    features: ['Recycled Materials', 'Laptop Compartment', 'Water Resistant']
  }
];

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Best Seller': return 'bg-red-500';
      case 'New': return 'bg-green-500';
      case 'Sale': return 'bg-orange-500';
      case 'Premium': return 'bg-purple-500';
      case 'Popular': return 'bg-blue-500';
      case 'Eco-Friendly': return 'bg-emerald-500';
      default: return 'bg-gray-500';
    }
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsAddingToCart(false);
  };

  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden product-card-enhanced hover-3d"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
      }}
    >
      {/* Animated Badge */}
      <motion.div 
        className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-white text-xs font-semibold ${getBadgeColor(product.badge)}`}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        whileHover={{ scale: 1.1 }}
      >
        {product.badge}
      </motion.div>

      {/* Enhanced Wishlist Button */}
      <motion.button
        className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isLiked ? 'bg-red-500 text-white' : 'bg-white/80 backdrop-blur-sm text-gray-600'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsLiked(!isLiked)}
      >
        <motion.div
          animate={{ scale: isLiked ? [1, 1.3, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Heart size={18} className={isLiked ? 'fill-current' : ''} />
        </motion.div>
      </motion.button>

      {/* Product Image with Enhanced Effects */}
      <div className="relative overflow-hidden h-64">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Enhanced Overlay Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center space-x-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, backgroundColor: '#F3F4F6' }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowQuickView(true)}
              >
                <Eye size={20} className="text-gray-700" />
              </motion.button>
              <motion.button
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, backgroundColor: '#2563EB' }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAddToCart}
              >
                {isAddingToCart ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={20} className="text-white" />
                  </motion.div>
                ) : (
                  <ShoppingCart size={20} className="text-white" />
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full"
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2
          }}
        />
        <motion.div
          className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full"
          animate={{
            y: [0, -8, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.3
          }}
        />
      </div>

      {/* Enhanced Product Info */}
      <div className="p-6">
        {/* Rating with Animation */}
        <motion.div 
          className="flex items-center space-x-2 mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
        >
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.1 + 0.5 + i * 0.1 }}
              >
                <Star
                  size={14}
                  className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                />
              </motion.div>
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </motion.div>

        {/* Product Name with Hover Effect */}
        <motion.h3 
          className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer"
          whileHover={{ x: 5 }}
        >
          {product.name}
        </motion.h3>

        {/* Enhanced Color Options */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-sm text-gray-600">Colors:</span>
          <div className="flex space-x-1">
            {product.colors.map((color, colorIndex) => (
              <motion.button
                key={colorIndex}
                className={`w-6 h-6 rounded-full border-2 relative ${selectedColor === colorIndex ? 'border-blue-500' : 'border-gray-300'}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(colorIndex)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {selectedColor === colorIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Features List (shown on hover) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-sm text-gray-600 space-y-1">
                {product.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: featureIndex * 0.1 }}
                  >
                    <Zap size={12} className="text-blue-500" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Price Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <motion.span 
              className="text-2xl font-bold text-gray-900"
              whileHover={{ scale: 1.05 }}
            >
              ${product.price}
            </motion.span>
            {product.originalPrice && (
              <motion.span 
                className="text-lg text-gray-500 line-through"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ${product.originalPrice}
              </motion.span>
            )}
          </div>
          <motion.div 
            className="text-sm text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </motion.div>
        </div>

        {/* Enhanced Add to Cart Button */}
        <motion.button
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          disabled={isAddingToCart}
        >
          {isAddingToCart ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={18} />
              </motion.div>
              <span>Adding...</span>
            </>
          ) : (
            <>
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </>
          )}
        </motion.button>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {showQuickView && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQuickView(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-md mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="space-y-2">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Zap size={14} className="text-blue-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <button
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setShowQuickView(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const EnhancedProducts = () => {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold gradient-text mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Featured Products
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            اكتشف مجموعتنا المختارة بعناية من أفضل المنتجات بأحدث التقنيات
          </motion.p>
          
          {/* Interactive Elements */}
          <motion.div
            className="flex justify-center space-x-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="w-2 h-2 bg-blue-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-2 h-2 bg-purple-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* Enhanced View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="enhanced-button group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Products</span>
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedProducts;

