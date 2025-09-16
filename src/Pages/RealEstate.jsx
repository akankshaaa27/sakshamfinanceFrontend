// import { useState } from 'react';
// import { FiSearch, FiHeart, FiMapPin, FiHome, FiDollarSign, FiLayers } from 'react-icons/fi';

// const RealEstate = () => {
//   const [activeTab, setActiveTab] = useState('buy');
//   const [filters, setFilters] = useState({
//     propertyType: '',
//     minPrice: '',
//     maxPrice: '',
//     bedrooms: '',
//     bathrooms: '',
//     area: '',
//     location: ''
//   });

//   const propertyTypes = ['House', 'Apartment', 'Villa', 'Land', 'Commercial'];
//   const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami', 'Seattle'];
//   const bedroomOptions = ['1', '2', '3', '4', '5+'];
//   const bathroomOptions = ['1', '2', '3', '4+'];

//   const properties = [
//     {
//       id: 1,
//       title: 'Modern Luxury Villa',
//       type: 'Villa',
//       price: 850000,
//       bedrooms: 4,
//       bathrooms: 3,
//       area: 3200,
//       location: 'Los Angeles',
//       image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//       featured: true
//     },
//     {
//       id: 2,
//       title: 'Downtown Apartment',
//       type: 'Apartment',
//       price: 450000,
//       bedrooms: 2,
//       bathrooms: 2,
//       area: 1200,
//       location: 'New York',
//       image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
//     },
//     {
//       id: 3,
//       title: 'Suburban Family Home',
//       type: 'House',
//       price: 320000,
//       bedrooms: 3,
//       bathrooms: 2,
//       area: 1800,
//       location: 'Chicago',
//       image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
//     },
//     {
//       id: 4,
//       title: 'Commercial Space',
//       type: 'Commercial',
//       price: 1200000,
//       bedrooms: 0,
//       bathrooms: 2,
//       area: 5000,
//       location: 'Houston',
//       image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
//     },
//     {
//       id: 5,
//       title: 'Beachfront Property',
//       type: 'Villa',
//       price: 2500000,
//       bedrooms: 5,
//       bathrooms: 4,
//       area: 4200,
//       location: 'Miami',
//       image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//       featured: true
//     },
//     {
//       id: 6,
//       title: 'Development Land',
//       type: 'Land',
//       price: 180000,
//       bedrooms: 0,
//       bathrooms: 0,
//       area: 10000,
//       location: 'Seattle',
//       image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
//     }
//   ];

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const filteredProperties = properties.filter(property => {
//     return (
//       (filters.propertyType === '' || property.type === filters.propertyType) &&
//       (filters.location === '' || property.location === filters.location) &&
//       (filters.bedrooms === '' || property.bedrooms >= parseInt(filters.bedrooms)) &&
//       (filters.bathrooms === '' || property.bathrooms >= parseInt(filters.bathrooms)) &&
//       (filters.minPrice === '' || property.price >= parseInt(filters.minPrice)) &&
//       (filters.maxPrice === '' || property.price <= parseInt(filters.maxPrice))
//     );
//   });

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       maximumFractionDigits: 0
//     }).format(price);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-4">Find Your Dream Property</h1>
//           <p className="text-xl mb-8">Discover the perfect home, land, or commercial space</p>
          
//           {/* Tabs */}
//           <div className="flex mb-8">
//             <button
//               onClick={() => setActiveTab('buy')}
//               className={`px-6 py-3 font-medium rounded-l-lg ${activeTab === 'buy' ? 'bg-white text-blue-800' : 'bg-blue-700 hover:bg-blue-600'}`}
//             >
//               Buy
//             </button>
//             <button
//               onClick={() => setActiveTab('rent')}
//               className={`px-6 py-3 font-medium ${activeTab === 'rent' ? 'bg-white text-blue-800' : 'bg-blue-700 hover:bg-blue-600'}`}
//             >
//               Rent
//             </button>
//             <button
//               onClick={() => setActiveTab('sell')}
//               className={`px-6 py-3 font-medium rounded-r-lg ${activeTab === 'sell' ? 'bg-white text-blue-800' : 'bg-blue-700 hover:bg-blue-600'}`}
//             >
//               Sell
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Filters Section */}
//       <div className="container mx-auto px-4 -mt-8">
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-8 mt-10">
//           <h2 className="text-xl font-semibold mb-4">Search Filters</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {/* Property Type */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
//               <select
//                 name="propertyType"
//                 value={filters.propertyType}
//                 onChange={handleFilterChange}
//                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="">All Types</option>
//                 {propertyTypes.map(type => (
//                   <option key={type} value={type}>{type}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Location */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
//               <select
//                 name="location"
//                 value={filters.location}
//                 onChange={handleFilterChange}
//                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="">All Locations</option>
//                 {locations.map(location => (
//                   <option key={location} value={location}>{location}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Bedrooms */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
//               <select
//                 name="bedrooms"
//                 value={filters.bedrooms}
//                 onChange={handleFilterChange}
//                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="">Any</option>
//                 {bedroomOptions.map(num => (
//                   <option key={num} value={num}>{num}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Bathrooms */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
//               <select
//                 name="bathrooms"
//                 value={filters.bathrooms}
//                 onChange={handleFilterChange}
//                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="">Any</option>
//                 {bathroomOptions.map(num => (
//                   <option key={num} value={num}>{num}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Price Range */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
//               <select
//                 name="minPrice"
//                 value={filters.minPrice}
//                 onChange={handleFilterChange}
//                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="">No Min</option>
//                 <option value="100000">$100,000</option>
//                 <option value="200000">$200,000</option>
//                 <option value="300000">$300,000</option>
//                 <option value="400000">$400,000</option>
//                 <option value="500000">$500,000</option>
//                 <option value="1000000">$1,000,000</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
//               <select
//                 name="maxPrice"
//                 value={filters.maxPrice}
//                 onChange={handleFilterChange}
//                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="">No Max</option>
//                 <option value="200000">$200,000</option>
//                 <option value="300000">$300,000</option>
//                 <option value="400000">$400,000</option>
//                 <option value="500000">$500,000</option>
//                 <option value="1000000">$1,000,000</option>
//                 <option value="2000000">$2,000,000</option>
//               </select>
//             </div>

//             {/* Search Button */}
//             <div className="md:col-span-2 flex items-end">
//               <button
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center"
//                 onClick={() => console.log('Search clicked')}
//               >
//                 <FiSearch className="mr-2" />
//                 Search Properties
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Properties Listing */}
//       <div className="container mx-auto px-4 pb-12">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800">
//             {activeTab === 'buy' ? 'Properties for Sale' : 
//              activeTab === 'rent' ? 'Properties for Rent' : 'Submit Your Property'}
//           </h2>
//           <div className="text-gray-600">
//             {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
//           </div>
//         </div>

//         {activeTab !== 'sell' ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProperties.map(property => (
//               <div key={property.id} className={`bg-white rounded-lg shadow-md overflow-hidden ${property.featured ? 'border-2 border-blue-500' : ''}`}>
//                 <div className="relative">
//                   <img 
//                     src={property.image} 
//                     alt={property.title} 
//                     className="w-full h-48 object-cover"
//                   />
//                   {property.featured && (
//                     <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
//                       Featured
//                     </div>
//                   )}
//                   <button className="absolute top-2 right-2 bg-white p-2 rounded-full text-gray-700 hover:text-red-500">
//                     <FiHeart />
//                   </button>
//                 </div>
//                 <div className="p-4">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-lg font-semibold text-gray-800">{property.title}</h3>
//                     <span className="text-lg font-bold text-blue-600">{formatPrice(property.price)}</span>
//                   </div>
//                   <p className="text-gray-600 mb-4 flex items-center">
//                     <FiMapPin className="mr-1" size={14} />
//                     {property.location}
//                   </p>
//                   <div className="flex justify-between text-sm text-gray-600 border-t pt-3">
//                     <span className="flex items-center">
//                       <FiHome className="mr-1" size={14} />
//                       {property.type}
//                     </span>
//                     <span className="flex items-center">
//                       <FiLayers className="mr-1" size={14} />
//                       {property.area} sq.ft
//                     </span>
//                     <span className="flex items-center">
//                       <FiDollarSign className="mr-1" size={14} />
//                       {property.bedrooms} {property.bedrooms === 1 ? 'bed' : 'beds'} | {property.bathrooms} {property.bathrooms === 1 ? 'bath' : 'baths'}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="bg-white rounded-lg shadow-md p-8 text-center">
//             <h3 className="text-xl font-semibold mb-4">Ready to sell your property?</h3>
//             <p className="text-gray-600 mb-6">List your property with us and reach thousands of potential buyers.</p>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md">
//               List Your Property
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RealEstate;



import { useState, useEffect } from "react";
import axios from "axios";
import {
  FiSearch,
  FiHeart,
  FiMapPin,
  FiHome,
  FiDollarSign,
  FiLayers,
} from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RealEstate = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [filters, setFilters] = useState({
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    location: "",
  });
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:8080/api/properties";

  const propertyTypes = ["House", "Apartment", "Villa", "Land", "Commercial"];
  const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami", "Seattle"];

  const bedroomOptions = ["1", "2", "3", "4", "5+"];
  const bathroomOptions = ["1", "2", "3", "4+"];

  /** =======================
   * FETCH ALL PROPERTIES
   * ======================= */
  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setProperties(response.data);
      toast.success("Properties loaded successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch properties");
    } finally {
      setLoading(false);
    }
  };

  /** =======================
   * ADD A NEW PROPERTY
   * ======================= */
  const addProperty = async (newProperty) => {
    try {
      const response = await axios.post(API_URL, newProperty);
      setProperties([...properties, response.data]);
      toast.success("Property added successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add property");
    }
  };

  /** =======================
   * UPDATE A PROPERTY
   * ======================= */
  const updateProperty = async (id, updatedProperty) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedProperty);
      setProperties(properties.map((prop) => (prop.id === id ? response.data : prop)));
      toast.success("Property updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update property");
    }
  };

  /** =======================
   * DELETE A PROPERTY
   * ======================= */
  const deleteProperty = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProperties(properties.filter((prop) => prop.id !== id));
      toast.success("Property deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete property");
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  /** =======================
   * FILTER LOGIC
   * ======================= */
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredProperties = properties.filter((property) => {
    return (
      (filters.propertyType === "" || property.type === filters.propertyType) &&
      (filters.location === "" || property.location === filters.location) &&
      (filters.bedrooms === "" || property.bedrooms >= parseInt(filters.bedrooms)) &&
      (filters.bathrooms === "" || property.bathrooms >= parseInt(filters.bathrooms)) &&
      (filters.minPrice === "" || property.price >= parseInt(filters.minPrice)) &&
      (filters.maxPrice === "" || property.price <= parseInt(filters.maxPrice))
    );
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Property</h1>
          <p className="text-xl mb-8">Discover the perfect home, land, or commercial space</p>

          {/* Tabs */}
          <div className="flex mb-8">
            <button
              onClick={() => setActiveTab("buy")}
              className={`px-6 py-3 font-medium rounded-l-lg ${
                activeTab === "buy" ? "bg-white text-blue-800" : "bg-blue-700 hover:bg-blue-600"
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setActiveTab("rent")}
              className={`px-6 py-3 font-medium ${
                activeTab === "rent" ? "bg-white text-blue-800" : "bg-blue-700 hover:bg-blue-600"
              }`}
            >
              Rent
            </button>
            <button
              onClick={() => setActiveTab("sell")}
              className={`px-6 py-3 font-medium rounded-r-lg ${
                activeTab === "sell" ? "bg-white text-blue-800" : "bg-blue-700 hover:bg-blue-600"
              }`}
            >
              Sell
            </button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 mt-10">
          <h2 className="text-xl font-semibold mb-4">Search Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
              <select
                name="propertyType"
                value={filters.propertyType}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Types</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Listing */}
      <div className="container mx-auto px-4 pb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {activeTab === "buy"
              ? "Properties for Sale"
              : activeTab === "rent"
              ? "Properties for Rent"
              : "Submit Your Property"}
          </h2>
          <div className="text-gray-600">
            {filteredProperties.length}{" "}
            {filteredProperties.length === 1 ? "property" : "properties"} found
          </div>
        </div>

        {loading ? (
          <div className="text-center text-gray-600">Loading properties...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden ${
                  property.featured ? "border-2 border-blue-500" : ""
                }`}
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  {property.featured && (
                    <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </div>
                  )}
                  <button
                    onClick={() => deleteProperty(property.id)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-700"
                  >
                    🗑
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{property.title}</h3>
                    <span className="text-lg font-bold text-blue-600">
                      {formatPrice(property.price)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <FiMapPin className="mr-1" size={14} />
                    {property.location}
                  </p>
                  <div className="flex justify-between text-sm text-gray-600 border-t pt-3">
                    <span className="flex items-center">
                      <FiHome className="mr-1" size={14} />
                      {property.type}
                    </span>
                    <span className="flex items-center">
                      <FiLayers className="mr-1" size={14} />
                      {property.area} sq.ft
                    </span>
                    <span className="flex items-center">
                      <FiDollarSign className="mr-1" size={14} />
                      {property.bedrooms} beds | {property.bathrooms} baths
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
