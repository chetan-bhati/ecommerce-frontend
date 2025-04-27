import React, { useState } from "react";
import { postapi } from "../services/Api";
import { useNavigate } from "react-router-dom";

const CreateCategory = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { name, slug };
      const response = await postapi("store/categories/", data);
      console.log("Category created:", response);
      alert("Category created successfully!");
      setName("");
      setSlug("");
      navigate("/category");
    } catch (error) {
      console.error("Error creating category:", error);
      alert("Failed to create category");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Category</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter category name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter category slug"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
