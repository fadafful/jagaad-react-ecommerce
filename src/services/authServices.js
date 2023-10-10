import axios from "../config/axiosConfig";

export const login = async (login, pass) => {
  try {
    const response = await axios.post("/auth/login", {
      login,
      pass
    });
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const logout = async () => {
  try {
    const response = await axios.post("/auth/logout");
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
