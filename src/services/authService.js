import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/auth/login/";

export const login = async (identifier, password) => {
  try {
    const response = await axios.post(API_URL, { identifier, password });
    if (response.data.access) {
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
    }
    return response.data;
  } catch (error) {
    console.error("Error en el login:", error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export const getAccessToken = () => localStorage.getItem("accessToken");
