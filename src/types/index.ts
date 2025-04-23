export interface Car {
  id: string;
  name: string;
  brand: string;
  image: string;
  fuelType: 'Petrol' | 'Diesel' | 'Electric';
  pricePerDay: number;
  seats: number;
  transmission: 'Automatic' | 'Manual';
}

export interface BookingFormData {
  carId: string;
  pickupDate: string;
  returnDate: string;
  name: string;
  email: string;
  phone: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}