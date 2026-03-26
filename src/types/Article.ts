export type ArticlesApiResponse = {
  status: string;
  statusCode: number;
  version: string;
  lastModified: string;
  total: number;
  limit: number;
  offset: number;
  access: string;
  data: Article[];
};

export type ArticleApiResponse = {
  status: string;
  statusCode: number;
  version: string;
  lastModified: string;
  total: number;
  limit: number;
  offset: number;
  access: string;
  data: Article;
};

export type Article = {
  id: number;
  title: string;
  summary: string;
  link: string;
  published: string;
};
