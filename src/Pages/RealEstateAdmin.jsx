import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation

function RealEstateAdmin() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [operationLoading, setOperationLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingProperty, setEditingProperty] = useState(null);
  const [editData, setEditData] = useState({});
  const navigate = useNavigate(); // navigation hook

  const API_URL = "http://localhost:8080/api/requests";

  // Fetch all properties
  const fetchProperties = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch properties");
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

  // Delete property
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this property?")) return;
    setOperationLoading(id);
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete property");
      setProperties((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert(err.message);
    } finally {
      setOperationLoading(false);
    }
  };

  // Edit property
  const openEditModal = (property) => {
    setEditingProperty(property._id);
    setEditData({ ...property });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    if (!editingProperty) return;
    setOperationLoading("update");
    try {
      const res = await fetch(`${API_URL}/${editingProperty}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      });
      if (!res.ok) throw new Error("Failed to update property");
      const updatedProperty = await res.json();
      setProperties((prev) =>
        prev.map((p) => (p._id === editingProperty ? updatedProperty : p))
      );
      setEditingProperty(null);
    } catch (err) {
      alert(err.message);
    } finally {
      setOperationLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="flex items-center justify-between mt-12 mb-6">
        <h1 className="text-3xl font-bold">Real Estate Admin</h1>
        <div className="flex gap-2">
          <button
            onClick={() => navigate("/add-property")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Property
          </button>
          <button
            onClick={fetchProperties}
            disabled={loading}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-green-400"
          >
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              {[
                "#", "Title", "Location", "Price", "Type", "Client Name",
                "Contact No", "Property Type", "Min Price", "Max Price",
                "Bedrooms", "Bathrooms", "Actions"
              ].map((header) => (
                <th key={header} className="px-4 py-2 text-left">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {properties.map((property, index) => (
              <tr key={property._id}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{property.title}</td>
                <td className="px-4 py-2">{property.location}</td>
                <td className="px-4 py-2">{property.price}</td>
                <td className="px-4 py-2">{property.type}</td>
                <td className="px-4 py-2">{property.clientName}</td>
                <td className="px-4 py-2">{property.contactNo}</td>
                <td className="px-4 py-2">{property.propertyType}</td>
                <td className="px-4 py-2">{property.minPrice}</td>
                <td className="px-4 py-2">{property.maxPrice}</td>
                <td className="px-4 py-2">{property.bedrooms}</td>
                <td className="px-4 py-2">{property.bathrooms}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => openEditModal(property)}
                    className="bg-yellow-400 px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(property._id)}
                    disabled={operationLoading === property._id}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    {operationLoading === property._id ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editingProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-lg p-6">
            <h2 className="text-xl font-bold mb-4">Edit Property</h2>
            <div className="space-y-3 max-h-[60vh] overflow-y-auto">
              {Object.keys(editData).map((field) => (
                <div key={field}>
                  <label className="block mb-1 capitalize">{field}</label>
                  <input
                    name={field}
                    value={editData[field]}
                    onChange={handleEditChange}
                    className="border p-2 w-full rounded"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <button onClick={() => setEditingProperty(null)} className="px-4 py-2 border rounded">Cancel</button>
              <button
                onClick={handleUpdate}
                disabled={operationLoading === "update"}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                {operationLoading === "update" ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RealEstateAdmin;
