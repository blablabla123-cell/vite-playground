import { useArticle } from '../../../domain/useArticle';

type ArticleDetailsProp = {
  articleId: number | null;
};

export function ArticleDetails(props: ArticleDetailsProp) {
  const article = useArticle(props.articleId);

  return (
    <div
      style={{
        border: '1px solid cyan',
        padding: '12px',
      }}
    >
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
