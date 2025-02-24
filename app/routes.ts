import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Ruta principal (Home)
  index("routes/home.tsx"),

  // Ruta para los detalles del juego (ejemplo: /game/123)
  route("game/:id", "routes/GameDetails.tsx"), // Corrige el nombre del archivo aquí

  // Ruta para los resultados de búsqueda (ejemplo: /search?query=valorant)
  route("search", "routes/SearchResult.tsx"),
] satisfies RouteConfig;
