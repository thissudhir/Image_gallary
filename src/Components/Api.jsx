import axios from "axios";
const accessKey = "fXB2QNPr41GtxA1-ETBW8jcvVht0B8mupZOcMX8f9f0";

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
export const FetchRandomImage = async (count) => {
  try {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: accessKey,
        count: count,
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
