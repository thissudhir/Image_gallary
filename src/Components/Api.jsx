import axios from "axios";
const accessKey = "xaEKHfnwOEDrjHi2YIMJ1PECCVW7d0cmv4GJGpjcuy0"; // Replace with your actual access key

// const apiUrl = `search/photos?query=${query}`;

const baseUrl = "https://api.unsplash.com"; // Define the base URL

export const FetchImage = async (query, page = 1) => {
  try {
    const response = await axios.get(`${baseUrl}/search`, {
      params: {
        query,
        page,
      },
      accessKey,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
