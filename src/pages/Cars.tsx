import { useState } from 'react';
import BookingModal from '../components/BookingModal';
import { cars } from '../data/cars';
import { Car } from '../types';

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [filters, setFilters] = useState({
    fuelType: '',
    brand: '',
  });

  const uniqueBrands = Array.from(new Set(cars.map(car => car.brand)));
  const fuelTypes = ['Petrol', 'Diesel', 'Electric'];

  const filteredCars = cars.filter(car => {
    if (filters.fuelType && car.fuelType !== filters.fuelType) return false;
    if (filters.brand && car.brand !== filters.brand) return false;
    return true;
  });

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Available Super Cars</h1>
        

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <select
            value={filters.fuelType}
            onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">All Fuel Types</option>
            {fuelTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <select
            value={filters.brand}
            onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">All Brands</option>
            {uniqueBrands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">Brand: {car.brand}</p>
                  <p className="text-gray-600">Fuel: {car.fuelType}</p>
                  <p className="text-gray-600">Transmission: {car.transmission}</p>
                  <p className="text-gray-600">Seats: {car.seats}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">₹{car.pricePerDay}/Week</span>
                  <button
                    onClick={() => setSelectedCar(car)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Modal */}
        {selectedCar && (
          <BookingModal
            car={selectedCar}
            onClose={() => setSelectedCar(null)}
          />
        )}
      </div>
    </div>
    
  );
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Available Super Cars</h1>
        </div>
        </div>



  );

};

export default Cars;