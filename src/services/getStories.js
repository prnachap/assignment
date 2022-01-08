import axios from "axios";

export const getStories = async (queryText) => {
  try {
    const result = await axios.get(
      `https://content.guardianapis.com/search?api-key=test&q=${queryText}&show-fields=thumbnail,headline&page=1&page-size=20`
    );
    return { result: result.data.response.results, status: result.status };
  } catch (error) {
    return { result: [], status: error.status, error: error.message };
  }
};
