import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProperty() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [operationLoading, setOperationLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingProperty, setEditingProperty] = useState(null);

  const navigate = useNavigate();

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

  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 5;

  const API_URL = "http://localhost:8080/api/requests";

  // =======================
  // FETCH PROPERTIES
  // =======================
  const fetchProperties = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`Failed to fetch properties: ${res.status}`);
      const data = await res.json();
      setProperties(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // =======================
  // PAGINATION
  // =======================
  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  const paginate = (page) => setCurrentPage(page);

  // =======================
  // ADD PROPERTY
  // =======================
  const handleAddProperty = async () => {
    setOperationLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to add property");

      const newProperty = await res.json();
      alert("✅ Property added successfully!");

      // Redirect to RealEstateAdmin page
      navigate("/realestateadmin");
    } catch (err) {
      alert(err.message);
    } finally {
      setOperationLoading(false);
    }
  };

  // =======================
  // DELETE PROPERTY
  // =======================
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this property?")) return;
    setOperationLoading(id);
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete property");
      setProperties(properties.filter((p) => p._id !== id));
      alert("Property deleted successfully!");
    } catch (err) {
      alert(err.message);
    } finally {
      setOperationLoading(false);
    }
  };

  // =======================
  // EDIT PROPERTY
  // =======================
  const openEditModal = (property) => {
    setEditingProperty(property._id);
    setFormData({
      title: property.title || "",
      location: property.location || "",
      price: property.price || "",
      type: property.type || "",
      clientName: property.clientName || "",
      contactNo: property.contactNo || "",
      propertyType: property.propertyType || "",
      minPrice: property.minPrice || "",
      maxPrice: property.maxPrice || "",
      bedrooms: property.bedrooms || "",
      bathrooms: property.bathrooms || "",
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    if (!editingProperty) return;
    setOperationLoading("update");
    try {
      const res = await fetch(`${API_URL}/${editingProperty}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to update property");
      const updated = await res.json();
      setProperties(properties.map((p) => (p._id === editingProperty ? updated : p)));
      setEditingProperty(null);
      alert("Property updated successfully!");
    } catch (err) {
      alert(err.message);
    } finally {
      setOperationLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 mt-10">
          <h1 className="text-4xl font-bold text-gray-800">Real Estate Admin</h1>
          <button
            onClick={fetchProperties}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-5 py-2.5 rounded-lg transition-colors"
          >
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        {/* Add/Edit Property Form */}
        <div className="bg-white shadow-xl rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">
            {editingProperty ? "Edit Property" : "Add New Property"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "title",
              "location",
              "price",
              "type",
              "clientName",
              "contactNo",
              "propertyType",
              "minPrice",
              "maxPrice",
              "bedrooms",
              "bathrooms",
            ].map((field) => (
              <input
                key={field}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleEditChange}
                className="border p-2 rounded w-full"
              />
            ))}
          </div>
          <button
            onClick={editingProperty ? handleUpdate : handleAddProperty}
            disabled={operationLoading}
            className={`mt-4 px-4 py-2 ${
              editingProperty ? "bg-blue-600" : "bg-green-600"
            } text-white rounded`}
          >
            {operationLoading
              ? "Processing..."
              : editingProperty
              ? "Update Property"
              : "Add Property"}
          </button>
        </div>

        {/* Properties Table */}
        {!loading && currentProperties.length > 0 ? (
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                  <tr>
                    {[
                      "#",
                      "Title",
                      "Location",
                      "Price",
                      "Type",
                      "Client Name",
                      "Contact No",
                      "Property Type",
                      "Min Price",
                      "Max Price",
                      "Bedrooms",
                      "Bathrooms",
                      "Actions",
                    ].map((header) => (
                      <th key={header} className="py-4 px-6">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentProperties.map((property, index) => (
                    <tr
                      key={property._id}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="py-4 px-6">{indexOfFirst + index + 1}</td>
                      <td className="py-4 px-6">{property.title}</td>
                      <td className="py-4 px-6">{property.location}</td>
                      <td className="py-4 px-6">{property.price}</td>
                      <td className="py-4 px-6">{property.type}</td>
                      <td className="py-4 px-6">{property.clientName}</td>
                      <td className="py-4 px-6">{property.contactNo}</td>
                      <td className="py-4 px-6">{property.propertyType}</td>
                      <td className="py-4 px-6">{property.minPrice}</td>
                      <td className="py-4 px-6">{property.maxPrice}</td>
                      <td className="py-4 px-6">{property.bedrooms}</td>
                      <td className="py-4 px-6">{property.bathrooms}</td>
                      <td className="py-4 px-6 flex gap-2">
                        <button
                          onClick={() => openEditModal(property)}
                          className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(property._id)}
                          disabled={operationLoading === property._id}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-4 gap-2 p-4">
              <button
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          !loading && <p>No properties found</p>
        )}
      </div>
    </div>
  );
}

export default AddProperty;
