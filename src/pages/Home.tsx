import { Award, Car as CarIcon, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';

const Home = () => {
  return (
    <div>
      {/* Hero Section and hero Image section*/}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/car.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Journey Begins Here
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover our premium fleet of vehicles for your perfect ride
            </p>
            <Link
              to="/cars"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Your Ride Now
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl  font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CarIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Fleet</h3>
              <p className="text-gray-600">Latest models with premium features for your comfort</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Fully insured vehicles with 24/7 roadside assistance</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Rental</h3>
              <p className="text-gray-600">Choose your pickup and return time that suits you</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Rates</h3>
              <p className="text-gray-600">Competitive prices with no hidden charges</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Cars Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars.slice(0, 5).map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-4">{car.fuelType} • {car.transmission}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">₹{car.pricePerDay}/week</span>
                    <Link
                      to="/cars"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;