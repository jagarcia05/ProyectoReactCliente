import {
    type RouteConfig,
    layout,
    index,
    route
  
  } from "@react-router/dev/routes";
  
  
  export default [
    layout("routes/Layout.tsx", [
      index("routes/Games.tsx"), 
      route("game/:id", "routes/GameDetails.tsx"),
      route("platforms", "routes/Platforms.tsx"),
      route("genres", "routes/Genres.tsx")
    ]),
  ] satisfies RouteConfig;