import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, Users, ShoppingBag, DollarSign, Activity, Database } from 'lucide-react';
import { useState } from 'react';

const salesData = [
  { month: 'Jan', sales: 4000, orders: 240 },
  { month: 'Feb', sales: 3000, orders: 198 },
  { month: 'Mar', sales: 5000, orders: 300 },
  { month: 'Apr', sales: 4500, orders: 278 },
  { month: 'May', sales: 6000, orders: 389 },
  { month: 'Jun', sales: 5500, orders: 349 }
];

const categoryData = [
  { name: 'Electronics', value: 35, color: '#3B82F6' },
  { name: 'Fashion', value: 28, color: '#8B5CF6' },
  { name: 'Home', value: 20, color: '#10B981' },
  { name: 'Sports', value: 17, color: '#F59E0B' }
];

const realtimeData = [
  { time: '12:00', visitors: 45 },
  { time: '12:05', visitors: 52 },
  { time: '12:10', visitors: 48 },
  { time: '12:15', visitors: 61 },
  { time: '12:20', visitors: 55 },
  { time: '12:25', visitors: 67 }
];

const StatCard = ({ icon: Icon, title, value, change, color, delay }) => (
  <motion.div
    className="stats-card"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ 
      scale: 1.05, 
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      y: -5
    }}
  >
    <div className="flex items-center justify-between mb-4">
      <motion.div 
        className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        <Icon size={24} className="text-white" />
      </motion.div>
      <div className={`text-sm font-semibold px-2 py-1 rounded-full ${change >= 0 ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'}`}>
        {change >= 0 ? '+' : ''}{change}%
      </div>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
    <p className="text-gray-600">{title}</p>
  </motion.div>
);

const DatabaseStatusCard = ({ title, status, count, delay }) => (
  <motion.div
    className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
    }}
  >
    <div className="flex items-center justify-between mb-3">
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <div className="flex items-center space-x-2">
        <motion.div 
          className={`w-3 h-3 rounded-full ${status === 'online' ? 'bg-green-500' : 'bg-red-500'} pulse-glow`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className={`text-sm font-medium ${status === 'online' ? 'text-green-600' : 'text-red-600'}`}>
          {status === 'online' ? 'Online' : 'Offline'}
        </span>
      </div>
    </div>
    <motion.div 
      className="text-2xl font-bold text-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: delay + 0.3 }}
    >
      {count.toLocaleString()}
    </motion.div>
  </motion.div>
);

// Custom Tooltip for Bar Chart
const CustomBarTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <motion.div
        className="bg-white p-4 rounded-lg shadow-xl border border-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <p className="font-semibold text-gray-900 mb-2">{`Month: ${label}`}</p>
        <p className="text-blue-600 font-medium">{`Sales: $${payload[0].value.toLocaleString()}`}</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(payload[0].value / 6000) * 100}%` }}
          />
        </div>
      </motion.div>
    );
  }
  return null;
};

// Custom Tooltip for Pie Chart
const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <motion.div
        className="bg-white p-4 rounded-lg shadow-xl border border-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <p className="font-semibold text-gray-900 mb-2">{payload[0].name}</p>
        <div className="flex items-center space-x-2">
          <div 
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: payload[0].payload.color }}
          />
          <p className="text-gray-700 font-medium">{`${payload[0].value}%`}</p>
        </div>
      </motion.div>
    );
  }
  return null;
};

// Custom Tooltip for Line Chart
const CustomLineTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <motion.div
        className="bg-white p-4 rounded-lg shadow-xl border border-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <p className="font-semibold text-gray-900 mb-2">{`Time: ${label}`}</p>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <p className="text-green-600 font-medium">{`${payload[0].value} visitors`}</p>
        </div>
      </motion.div>
    );
  }
  return null;
};

// Custom Bar Component with hover effects
const CustomBar = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.rect
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        fill: isHovered ? 'url(#hoverGradient)' : 'url(#salesGradient)',
        scale: isHovered ? 1.05 : 1
      }}
      transition={{ duration: 0.2 }}
    />
  );
};

const StatsSection = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Analytics Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            تتبع أداء متجرك في الوقت الفعلي مع تحليلات شاملة ومفصلة
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={DollarSign}
            title="Total Revenue"
            value="$124,563"
            change={12.5}
            color="bg-gradient-to-br from-green-500 to-emerald-600"
            delay={0.1}
          />
          <StatCard
            icon={ShoppingBag}
            title="Total Orders"
            value="1,847"
            change={8.2}
            color="bg-gradient-to-br from-blue-500 to-indigo-600"
            delay={0.2}
          />
          <StatCard
            icon={Users}
            title="Active Users"
            value="12,459"
            change={-2.1}
            color="bg-gradient-to-br from-purple-500 to-pink-600"
            delay={0.3}
          />
          <StatCard
            icon={TrendingUp}
            title="Conversion Rate"
            value="3.24%"
            change={5.7}
            color="bg-gradient-to-br from-orange-500 to-red-600"
            delay={0.4}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Enhanced Sales Chart */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
              scale: 1.02
            }}
            onMouseEnter={() => setHoveredStat('sales')}
            onMouseLeave={() => setHoveredStat(null)}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Monthly Sales</h3>
              <motion.div
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                animate={{ 
                  scale: hoveredStat === 'sales' ? 1.1 : 1,
                  backgroundColor: hoveredStat === 'sales' ? '#3B82F6' : '#DBEAFE',
                  color: hoveredStat === 'sales' ? '#FFFFFF' : '#2563EB'
                }}
              >
                Interactive
              </motion.div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient id="hoverGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="month" 
                  stroke="#6B7280"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#6B7280"
                  fontSize={12}
                />
                <Tooltip content={<CustomBarTooltip />} />
                <Bar 
                  dataKey="sales" 
                  fill="url(#salesGradient)" 
                  radius={[4, 4, 0, 0]}
                  shape={<CustomBar />}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Enhanced Category Distribution */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
              scale: 1.02
            }}
            onMouseEnter={() => setHoveredStat('category')}
            onMouseLeave={() => setHoveredStat(null)}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Sales by Category</h3>
              <motion.div
                className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
                animate={{ 
                  scale: hoveredStat === 'category' ? 1.1 : 1,
                  backgroundColor: hoveredStat === 'category' ? '#8B5CF6' : '#F3E8FF',
                  color: hoveredStat === 'category' ? '#FFFFFF' : '#7C3AED'
                }}
              >
                Hover to explore
              </motion.div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                  labelLine={false}
                >
                  {categoryData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color}
                      stroke={entry.color}
                      strokeWidth={hoveredStat === 'category' ? 3 : 0}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomPieTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Database Status & Real-time Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Database Status */}
          <motion.div
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Database size={24} className="text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900">Database Status</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <DatabaseStatusCard
                title="Customers"
                status="online"
                count={15420}
                delay={0.8}
              />
              <DatabaseStatusCard
                title="Products"
                status="online"
                count={2847}
                delay={0.9}
              />
              <DatabaseStatusCard
                title="Orders"
                status="online"
                count={8934}
                delay={1.0}
              />
            </div>
          </motion.div>

          {/* Enhanced Real-time Visitors */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
              scale: 1.02
            }}
            onMouseEnter={() => setHoveredStat('realtime')}
            onMouseLeave={() => setHoveredStat(null)}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Activity size={24} className="text-green-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900">Real-time Visitors</h3>
              </div>
              <motion.div
                className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium"
                animate={{ 
                  scale: hoveredStat === 'realtime' ? 1.1 : 1,
                  backgroundColor: hoveredStat === 'realtime' ? '#10B981' : '#D1FAE5',
                  color: hoveredStat === 'realtime' ? '#FFFFFF' : '#059669'
                }}
              >
                Live
              </motion.div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={realtimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="time" 
                  stroke="#6B7280"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#6B7280"
                  fontSize={12}
                />
                <Tooltip content={<CustomLineTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="visitors" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ 
                    fill: '#10B981', 
                    strokeWidth: 2, 
                    r: 4,
                    className: 'hover:r-6 transition-all duration-200'
                  }}
                  activeDot={{ 
                    r: 8, 
                    fill: '#059669',
                    stroke: '#FFFFFF',
                    strokeWidth: 2
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

