import { Fragment, useEffect, useState } from 'react';
import type { Article } from '../../../types';
import { ArticleListItem } from './ArticleListItem';
import { getArticles } from '../../../api/ArticlesApi';
import { ArticleDetails } from './ArticleDetails';

interface ArticlesListProps {
  selectedArticleId: number | null;
  onArticleClick: (article: Article) => void;
}

export function ArticlesList({
  selectedArticleId,
  onArticleClick,
}: ArticlesListProps) {
  const [articles, setArticles] = useState<Article[] | null>(null);

  useEffect(() => {
    getArticles()
      .then(({ data }) => setArticles(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      {!articles && <h4>Loading...</h4>}

      {articles && !articles.length && (
        <span>No articles yet. Try later...</span>
      )}

      {articles && (
        <>
          <h1>Articles</h1>
          <ul
            style={{
              listStyle: 'none',
            }}
          >
            {...articles.map((article) => (
              <Fragment key={article.id}>
                <ArticleListItem
                  article={article}
                  isSelected={selectedArticleId === article.id}
                  onArticleClick={() => onArticleClick(article)}
                />
                {selectedArticleId && selectedArticleId == article.id && (
                  <ArticleDetails selectedArticleId={selectedArticleId} />
                )}
              </Fragment>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
