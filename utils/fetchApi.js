import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "d4d6f1355dmsh9b7381b0fe436efp1c3870jsn83e5b533b71b",
    },
  });

  return data;
};
