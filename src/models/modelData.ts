export interface TGenre {
  id: number;
  name: string;
}

export interface TVideo {
  id: number;
  artist: string;
  title: string;
  release_year: number;
  genre_id: number;
  image_url: string;
}

export interface TDataListResponse {
  genres: TGenre[];
  videos: TVideo[];
}
