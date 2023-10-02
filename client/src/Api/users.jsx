import api from "./api";

export const getCurrentUser = async () => {
  try {
    const response = await api.get("/me");
    setUser(response.data);
    setIsUserValid(true);
  } catch (err) {
    setIsUserValid(true);
  }
};
