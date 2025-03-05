const API_KEY = '236c519bed714a588c3f1aee662a2c2d';
const BASE_URL = 'https://api.rawg.io/api';

// Función para obtener la lista de juegos con paginación
export const fetchGames = async (page: number = 1, pageSize: number = 10, search: string = '') => {
  const url = `${BASE_URL}/games?key=${API_KEY}&page=${page}&page_size=${pageSize}${search ? `&search=${search}` : ''}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching games: ${response.status}`);
    }

    const data = await response.json();

    return {
      games: data.results, // Lista de juegos
      nextPage: data.next ? page + 1 : null, // Si hay una página siguiente
      prevPage: data.previous ? page - 1 : null, // Si hay una página anterior
      count: data.count, // Total de juegos encontrados
    };
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};

// Función para obtener los detalles de un juego específico
export const fetchGameDetails = async (id: string) => {
  const url = `${BASE_URL}/games/${id}?key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching game details: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching game details:', error);
    throw error;
  }
};
