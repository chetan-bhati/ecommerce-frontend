// src/services/api.js
import axios from "axios";
import { BASE_URL } from "./Base";

export const getapi = async (endpoint, params = {}) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`, { params });
        
        console.log('----------------------', response);
        return response.data;
  } catch (error) {
    console.error("GET error:", error);
    throw error;
  }
};

export const postapi = async (endpoint, data) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error("POST error:", error);
    throw error;
  }
};

// Add put, delete as needed
