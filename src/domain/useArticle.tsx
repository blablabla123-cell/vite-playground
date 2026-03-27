import { useState, useEffect } from 'react';
import { getArticles } from '../data/ArticlesApi';
import type { Article } from '../types';

export function useArticle(id: number | null) {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    getArticles()
      .then((result) => {
        const article = result.data.find((article) => article.id === id);

        setArticle(article ?? null);
      })
      .catch((e) => console.error(e));
  }, [id]);

  return article;
}
