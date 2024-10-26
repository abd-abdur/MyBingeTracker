// tmdbApi.js
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchTMDb = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
