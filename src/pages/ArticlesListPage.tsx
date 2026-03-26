import { useState, useEffect } from 'react';
import { type Article } from '../types';
import { getArticles } from '../api/ArticlesApi';

export function ArticlesPage() {
  const [articles, setArticles] = useState<Article[] | null>(null);

  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(
    null,
  );
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    getArticles()
      .then(({ data }) => setArticles(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles && !articles.length && (
        <span>No articles yet. Try later...</span>
      )}
      {articles && articles.length > 0 && (
        <button
          onClick={() => {
            setSelectedArticleId(null);
            setSelectedArticle(null);
          }}
        >
          Reset selection
        </button>
      )}

      {!articles && <span>Loading...</span>}
      <div
        style={{
          display: 'flex',
          gap: '12px',
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            padding: '8px',
          }}
        >
          {articles?.map((article) => (
            <li
              key={article.id}
              onClick={function () {
                setSelectedArticleId(article.id);
                setTimeout(() => {
                  setSelectedArticle(article);
                }, 2 * 1000);
              }}
              style={{
                border:
                  selectedArticleId === article.id ? '1px solid green' : 'none',
                borderRadius: '12px',
                marginTop: '8px',
              }}
            >
              <h5>{article.title}</h5>
            </li>
          ))}
        </ul>
        <div>
          <h3>Details</h3>
          {!selectedArticle && !selectedArticleId && (
            <p>No article selected. Select one</p>
          )}

          {!selectedArticle && selectedArticleId && <p>Loading ...</p>}
          {selectedArticle && (
            <div>
              <h4>{selectedArticle?.title}</h4>
              <p>{selectedArticle?.summary}</p>
              <hr />
            </div>
          )}
          {selectedArticle &&
            selectedArticleId &&
            selectedArticle.id !== selectedArticleId && <p>Loading ... </p>}
        </div>
      </div>
    </div>
  );
}
