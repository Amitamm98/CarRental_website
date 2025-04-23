import { Award, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About CarRental</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in providing premium car rental services . We're committed to making your journey comfortable and memorable.
          </p>
        </div>

        {/* Mission and Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide exceptional car rental services that exceed customer expectations through quality vehicles and superior service.
            </p>
          </div>
          <div className="text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading car rental service provider, known for reliability, transparency, and customer satisfaction.
            </p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Integrity, excellence, and customer-first approach guide everything we do.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Founded in 2025 through our official partner viti comapany , CarRental began with a simple mission: to make quality car rentals accessible to everyone. What started with a small fleet of Eleven super cars has grown into a comprehensive selection of premium vehicles.
            </p>
            <p className="mb-4">
              Over the years, we've served thousands of satisfied customers, from business travelers to families on vacation. Our commitment to quality and customer service has earned us numerous industry awards and, more importantly, the trust of our clients.
            </p>
            <p>
              Today, we continue to innovate and improve our services, investing in new vehicles and technologies to provide you with the best possible rental experience.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/biscuit.png"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Rohit Negi</h3>
              <p className="text-gray-600">CEO & Founder of Viti Company</p>
            </div>
            <div className="text-center">
              <img
                src="/vishal.png"
                alt="COO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Vishal Kuriyal</h3>
              <p className="text-gray-600">Manager of Techquilla Company</p>
            </div>
            <div className="text-center">
              <img
                src="/bagz.png"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Abhishek Bahuguna</h3>
              <p className="text-gray-600">Developer and Singer(Bugzz)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;