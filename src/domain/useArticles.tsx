import { useState, useEffect } from 'react';
import { getArticles } from '../data/ArticlesApi';
import type { Article } from '../types';

export function useArticles() {
  const [articles, setArticles] = useState<Article[] | null>(null);

  useEffect(() => {
    getArticles()
      .then((result) => setArticles(result.data))
      .catch((e) => console.error(e));
  }, []);

  return articles;
}
