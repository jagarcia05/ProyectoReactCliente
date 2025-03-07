export interface Platform {
  id: number;
  name: string;
  image_background: string;
  games_count: number;
}

export interface ApiResponse {
  results: Platform[];
}