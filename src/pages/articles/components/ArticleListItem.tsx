import type { Article } from '../../../types';
import styles from './ArticleListItem.module.css';
import clsx from 'clsx';

type ArticleListItemProps = {
   article: Article;
   isSelected: boolean;
   onArticleSelect: (articleId: number) => void;
};

export function ArticleListItem(props: Readonly<ArticleListItemProps>) {
  const onArticleSelect = (): void => {
    props.onArticleSelect(props.article.id);
  };

  const classNames = clsx({
    [styles.articlesListItem]: true,
    [styles.selected]: props.isSelected,
  });

  return (
    <li onClick={onArticleSelect} className={classNames}>
      <h5>{props.article.title}</h5>
    </li>
  );
}
