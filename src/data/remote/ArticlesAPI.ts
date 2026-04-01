import type { ArticlesApiResponse } from '../types';

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getArticles(): Promise<ArticlesApiResponse> {
  return fetch(BASE_URL + '/news').then((response) => response.json());
}
