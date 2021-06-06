/* eslint-disable @typescript-eslint/naming-convention */
export interface ISerieApi {
  poster_path?: string;
  backdrop_path?: string;
  popularity?: string;
  overview?: string;
  first_air_date?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_name?: string;
  name?: string;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface IListaSeries {
  page: number;
  results: ISerieApi[];
  total_results: number;
  total_pages: number;
}
