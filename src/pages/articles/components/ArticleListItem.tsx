import type { Article } from '../../../types';

type ArticleListItemProps = {
  article: Article;
  isSelected: boolean;
  onArticleSelect: (articleId: number) => void;
};

export function ArticleListItem(props: ArticleListItemProps) {
  const onArticleSelect = (): void => {
    props.onArticleSelect(props.article.id);
  };

  return (
    <li
      onClick={onArticleSelect}
      style={{
        border: props.isSelected ? '1px solid green' : 'none',
      }}
    >
      <h5>{props.article.title}</h5>
    </li>
  );
}
