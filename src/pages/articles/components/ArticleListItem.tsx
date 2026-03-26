import type { Article } from '../../../types';

interface ArticleListItemProps {
  article: Article;
  isSelected: boolean;
  onArticleClick: () => void;
}

export function ArticleListItem({
  article,
  isSelected,
  onArticleClick,
}: ArticleListItemProps) {
  return (
    <li
      onClick={onArticleClick}
      style={{
        border: isSelected ? '1px solid green' : 'none',
      }}
    >
      <h5>{article.title}</h5>
    </li>
  );
}
