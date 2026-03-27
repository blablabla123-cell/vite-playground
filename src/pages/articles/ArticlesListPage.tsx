import { useState } from 'react';
import { ArticlesList } from './components/ArticlesList';

export function ArticlesPage() {
  const [articleId, setArticleId] = useState<number | null>(null);

  const onArticleSelect = (id: number): void => {
    setArticleId(articleId === id ? null : id);
  };

  return (
    <ArticlesList
      selectedArticleId={articleId}
      onArticleSelect={onArticleSelect}
    />
  );
}
