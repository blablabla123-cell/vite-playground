import { useArticle } from '../../../domain/useArticle';
import styles from './ArticleDetails.module.css';

type ArticleDetailsProp = {
  articleId: number | null;
};

export function ArticleDetails(props: Readonly<ArticleDetailsProp>) {
  const article = useArticle(props.articleId);

  return (
    <div className={styles.articleDetails}>
      <h2>Summary</h2>

      {!article && props.articleId && <h3>Loading ...</h3>}

      {props.articleId && article && props.articleId == article.id && (
        <>
          <hr />
          <p>{article?.summary}</p>
        </>
      )}
      {article && props.articleId && article.id !== props.articleId && (
        <p>Loading ... </p>
      )}
    </div>
  );
}
