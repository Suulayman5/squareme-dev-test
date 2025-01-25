import axios from 'axios';

// Create Axios instance with default settings
const api = axios.create({
  baseURL: 'https://demo-squareme.onrender.com/',
  timeout: 10000,  // Request timeout (optional)
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Add Authorization token if available (e.g., from async storage)
    const token = '';  // Retrieve from storage if available
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
