import { useState } from "react";
import { FiHeart, FiMapPin, FiHome, FiDollarSign, FiLayers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const RealEstate = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      type: "Villa",
      price: 850000,
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      location: "Los Angeles",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "Downtown Apartment",
      type: "Apartment",
      price: 450000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      location: "New York",
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Suburban Family Home",
      type: "House",
      price: 320000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      location: "Chicago",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Commercial Space for Business",
      type: "Commercial",
      price: 1200000,
      bedrooms: 0,
      bathrooms: 2,
      area: 5000,
      location: "Houston",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Beachfront Luxury Villa",
      type: "Villa",
      price: 2500000,
      bedrooms: 5,
      bathrooms: 4,
      area: 4200,
      location: "Miami",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: 6,
      title: "Development Land",
      type: "Land",
      price: 180000,
      bedrooms: 0,
      bathrooms: 0,
      area: 10000,
      location: "Seattle",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative  bg-gradient-to-br from-[#A5DD9B] to-[#C5EBAA] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Find Your Dream Property
          </h1>
          <p className="text-xl mb-8 drop-shadow-md">
            Discover the perfect home, land, or commercial space
          </p>

          {/* Tabs */}
          {/* <div className="flex justify-center mb-8 space-x-4">
            {["buy", "rent", "sell"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold rounded-lg transition-transform transform hover:scale-105 ${
                  activeTab === tab
                    ? "bg-white text-blue-800 shadow-lg"
                    : "bg-blue-700 hover:bg-blue-600 text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div> */}

          {/* Add Property Button */}
          <button
            onClick={() => navigate("/propertyform")}
            className="mt-4 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Properties Listing */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            {activeTab === "buy"
              ? "Properties for Sale"
              : activeTab === "rent"
              ? "Properties for Rent"
              : "Submit Your Property"}
          </h2>
          {activeTab !== "sell" && (
            <div className="text-gray-600 font-medium">{properties.length} properties found</div>
          )}
        </div>

        {activeTab !== "sell" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-56 object-cover"
                  />
                  {property.featured && (
                    <div className="absolute top-3 left-3 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Featured
                    </div>
                  )}
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full transition-all hover:scale-110 ${
                      favorites.includes(property.id)
                        ? "bg-red-500 text-white"
                        : "bg-white text-gray-700 hover:text-red-500"
                    }`}
                  >
                    <FiHeart />
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{property.title}</h3>
                    <span className="text-lg font-bold text-blue-600">{formatPrice(property.price)}</span>
                  </div>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <FiMapPin className="mr-1" size={16} /> {property.location}
                  </p>
                  <div className="flex justify-between text-sm text-gray-600 border-t pt-3">
                    <span className="flex items-center">
                      <FiHome className="mr-1" size={14} /> {property.type}
                    </span>
                    <span className="flex items-center">
                      <FiLayers className="mr-1" size={14} /> {property.area} sq.ft
                    </span>
                    <span className="flex items-center">
                      <FiDollarSign className="mr-1" size={14} /> {property.bedrooms} beds | {property.bathrooms} baths
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RealEstate;
