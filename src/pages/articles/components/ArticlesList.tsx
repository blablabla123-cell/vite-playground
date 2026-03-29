import { Fragment } from 'react';
import { ArticleListItem } from './ArticleListItem';
import { ArticleDetails } from './ArticleDetails';
import { useArticles } from '../../../domain/useArticles';
import styles from './ArticlesList.module.css';

type ArticlesListProps = {
  selectedArticleId: number | null;
  onArticleSelect: (id: number) => void;
};

export function ArticlesList(props: Readonly<ArticlesListProps>) {
  const articles = useArticles();

  const onArticleSelected = (articleId: number): void => {
    props.onArticleSelect(articleId);
  };

  return (
    <>
      {!articles && <h4>Loading...</h4>}

      {articles && !articles.length && (
        <span>No articles yet. Try later...</span>
      )}

      {articles && (
        <>
          <h1>Articles</h1>
          <ul className={styles.articlesList}>
            {...articles.map((article) => (
              <Fragment key={article.id}>
                <ArticleListItem
                  article={article}
                  isSelected={props.selectedArticleId === article.id}
                  onArticleSelect={onArticleSelected}
                />
                {props.selectedArticleId &&
                  props.selectedArticleId == article.id && (
                    <ArticleDetails articleId={props.selectedArticleId} />
                  )}
              </Fragment>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
