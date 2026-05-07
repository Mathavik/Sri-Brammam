const API_URL = "https://pcstech.in/pcs_api/brammam/public/api";

const api = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    return response.json();
  },
};

export default api;