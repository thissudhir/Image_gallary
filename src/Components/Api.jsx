import axios from "axios";
const accessKey = "xaEKHfnwOEDrjHi2YIMJ1PECCVW7d0cmv4GJGpjcuy0";

const baseUrl = "https://api.unsplash.com";

export const FetchImage = async (query) => {
  try {
    const response = await axios.get(
      `${baseUrl}/search/photos?page=1&query=${query}&client_id=${accessKey}`,
      {
        params: {
          query,
        },
      }
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
