import { useState } from "react";

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    type: "",
    clientName: "",
    contactNo: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const propertyTypes = ["House", "Apartment", "Villa", "Land", "Commercial"];
  const locations = [
    "Mumbai", "Pune", "Delhi", "Bangalore", "Hyderabad",
    "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Surat",
    "Nagpur", "Indore", "Lucknow", "Bhopal", "Chandigarh",
  ];

  const bedroomOptions = ["1", "2", "3", "4", "5+"];
  const bathroomOptions = ["1", "2", "3", "4+"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:8080/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit request");

      const data = await res.json();
      setSuccess(`Thanks ${data.clientName}, your property request has been saved!`);
      setFormData({
        title: "",
        location: "",
        price: "",
        type: "",
        clientName: "",
        contactNo: "",
        propertyType: "",
        minPrice: "",
        maxPrice: "",
        bedrooms: "",
        bathrooms: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Client Property Request</h2>

        {success && <p className="text-green-600 mb-4">{success}</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Property Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Property Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter property title"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter property price"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Property Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Type</option>
              {propertyTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Client Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Client Name</label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter client name"
            />
          </div>

          {/* Contact No */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              maxLength={10}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter 10-digit number"
            />
          </div>

          {/* Preferred Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Location</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Location</option>
              {locations.map((loc) => <option key={loc} value={loc}>{loc}</option>)}
            </select>
          </div>

          {/* Min & Max Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Min Price (₹)</label>
              <input
                type="number"
                name="minPrice"
                value={formData.minPrice}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="e.g. 500000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Max Price (₹)</label>
              <input
                type="number"
                name="maxPrice"
                value={formData.maxPrice}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="e.g. 2000000"
              />
            </div>
          </div>

          {/* Bedrooms & Bathrooms */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
              <select
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Any</option>
                {bedroomOptions.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
              <select
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Any</option>
                {bathroomOptions.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyForm;
