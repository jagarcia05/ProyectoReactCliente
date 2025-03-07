export interface Game {
    id: number;
    name: string;
    background_image: string;
    rating: number;
    released: string;
    description: string;
    platforms: { platform: { name: string } }[];
    genres: { name: string }[];
  }
  
  export interface ApiResponse {
    results: Game[];
  }