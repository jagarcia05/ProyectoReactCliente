const API_KEY = '236c519bed714a588c3f1aee662a2c2d';
const BASE_URL = 'https://api.rawg.io/api';

export const fetchGames = async (page: number = 1, pageSize: number = 12, search: string = '') => {
  let url = `${BASE_URL}/games?key=${API_KEY}`;

  if (search) {
    url += `&search=${encodeURIComponent(search)}`;
  } else {
    url += `&page=${page}&page_size=${pageSize}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching games: ${response.status}`);
    }

    const data = await response.json();

    return {
      games: Array.isArray(data.results) ? data.results : [],
      nextPage: !search && data.next ? page + 1 : null,
      prevPage: !search && data.previous ? page - 1 : null,
      count: data.count,
    };

  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};

export const fetchGameDetails = async (id: string) => {
  const url = new URL(`${BASE_URL}/games/${id}`);
  url.searchParams.append('key', API_KEY);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('Error fetching game details');
  }
  return response.json();
};

export const fetchPlatforms = async () => {
  const url = new URL(`${BASE_URL}/platforms`);
  url.searchParams.append('key', API_KEY);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('Error fetching platforms');
  }
  return response.json();
};

export const fetchGenres = async () => {
  const url = new URL(`${BASE_URL}/genres`);
  url.searchParams.append('key', API_KEY);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('Error fetching genres');
  }
  return response.json();
};