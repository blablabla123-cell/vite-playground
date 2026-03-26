import { useState } from 'react';
import { type Article } from '../../types';
import { ArticlesList } from './components/ArticlesList';

export function ArticlesPage() {
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(
    null,
  );

  return (
    <ArticlesList
      selectedArticleId={selectedArticleId}
      onArticleClick={(a: Article) => {
        if (selectedArticleId === a.id) {
          return setSelectedArticleId(null);
        }
        return setSelectedArticleId(a.id);
      }}
    />
  );
}
