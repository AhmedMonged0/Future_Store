import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Zap, Star } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg opacity-20"
          animate={{
            y: [0, 40, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-600 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Future Store
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            كل ما تحتاجه في مكان واحد – تسوّق بسهولة وبأفضل الأسعار.


          </motion.p>

          {/* Feature Icons */}
          <motion.div
            className="flex justify-center space-x-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.div
              className="feature-icon floating-animation"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <ShoppingBag size={24} />
            </motion.div>
            <motion.div
              className="feature-icon floating-animation"
              style={{ animationDelay: '1s' }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles size={24} />
            </motion.div>
            <motion.div
              className="feature-icon floating-animation"
              style={{ animationDelay: '2s' }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Zap size={24} />
            </motion.div>
            <motion.div
              className="feature-icon floating-animation"
              style={{ animationDelay: '3s' }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Star size={24} />
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              className="enhanced-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              استكشف المنتجات
            </motion.button>
            <motion.button
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              شاهد العرض التوضيحي
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold gradient-text"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                1000+
              </motion.div>
              <div className="text-gray-600">منتج</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold gradient-text"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                50K+
              </motion.div>
              <div className="text-gray-600">عميل</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold gradient-text"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                99%
              </motion.div>
              <div className="text-gray-600">رضا العملاء</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero3D;

