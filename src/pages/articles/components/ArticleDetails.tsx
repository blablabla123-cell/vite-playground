import { useEffect, useState } from 'react';
import type { Article } from '../../../types';
import { getArticles } from '../../../api/ArticlesApi';

interface ArticleDetailsProp {
  selectedArticleId: number | null;
}

export function ArticleDetails({ selectedArticleId }: ArticleDetailsProp) {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (!selectedArticleId) {
      return;
    }

    getArticles()
      .then(({ data }) => {
        const article = data.find((a) => a.id === selectedArticleId);

        if (article) {
          return setArticle(article);
        }
      })
      .catch((e) => console.error(e));
  }, [selectedArticleId]);

  return (
    <div
      style={{
        border: '1px solid cyan',
        padding: '12px',
      }}
    >
      <h2>Summary</h2>

      {!article && selectedArticleId && <h3>Loading ...</h3>}

      {selectedArticleId && article && selectedArticleId == article.id && (
        <>
          <hr />
          <p>{article?.summary}</p>
        </>
      )}
      {article && selectedArticleId && article.id !== selectedArticleId && (
        <p>Loading ... </p>
      )}
    </div>
  );
}
