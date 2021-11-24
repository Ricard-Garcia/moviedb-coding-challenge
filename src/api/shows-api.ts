import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Routes
import { API } from "../constants/routes";

// Environment variables
const { REACT_APP_API_KEY } = process.env;

// Create connection
const axiosConfig: AxiosRequestConfig = {
  baseURL: `${API.MAIN}/tv`,
};

export function makeShowApi(): AxiosInstance {
  return axios.create(axiosConfig);
}

// Get popular shows
export async function getPopularShows(
  page: number = 1,
  api: any = makeShowApi()
) {
  return api.get(`/popular?page=${page}&api_key=${REACT_APP_API_KEY}`);
}

// Get popular shows
export async function getShowById(id: string, api: any = makeShowApi()) {
  return api.get(
    `/${id}?api_key=${REACT_APP_API_KEY}&append_to_response=${API.GENRES},${API.SIMILAR},${API.CREDITS},${API.KEYWORDS},${API.REVIEWS}`
  );
}
