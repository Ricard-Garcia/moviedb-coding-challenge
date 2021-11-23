import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Routes
import { API } from "../constants/routes";

// Environment variables
const { REACT_APP_API_KEY } = process.env;

// Create connection
const axiosConfig: AxiosRequestConfig = {
  baseURL: `${API.MAIN}/movie`,
};

export function makeMovieApi(): AxiosInstance {
  return axios.create(axiosConfig);
}

// Get popular movies
export async function getPopularMovies(
  page: number = 1,
  api: any = makeMovieApi()
) {
  return api.get(`/popular?page=${page}&api_key=${REACT_APP_API_KEY}`);
}

// Get popular movies
export async function getMovieById(
  id: string | null,
  api: any = makeMovieApi()
) {
  return api.get(`/${id}?api_key=${REACT_APP_API_KEY}`);
}
