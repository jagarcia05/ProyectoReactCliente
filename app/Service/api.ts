const API_KEY = '236c519bed714a588c3f1aee662a2c2d';
const BASE_URL = 'https://api.rawg.io/api';

// Función para obtener la lista de juegos
export const fetchGames = async (page: number = 1, search: string = '') => {
  const url = new URL(`${BASE_URL}/games`);
  url.searchParams.append('key', API_KEY);
  url.searchParams.append('page', page.toString());
  if (search) {
    url.searchParams.append('search', search);
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('Error fetching games');
  }
  return response.json();
};

// Función para obtener los detalles de un juego específico
export const fetchGameDetails = async (id: string) => {
  const url = new URL(`${BASE_URL}/games/${id}`);
  url.searchParams.append('key', API_KEY);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('Error fetching game details');
  }
  return response.json();
};