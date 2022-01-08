import axios from "axios";

export const getKeywords = async (queryText) => {
  try {
    const result = await axios.get(
      `https://content.guardianapis.com/tags?show-references=all&api-key=test&q=${queryText}`
    );
    return { result: result.data.response.results, status: result.status };
  } catch (error) {
    return { result: [], status: error.status, error: error.message };
  }
};
