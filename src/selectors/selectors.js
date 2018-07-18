import { _ } from 'lodash';

export function selectArticle(state, url) {
  const { articles } = state;

  _.forEach(articles, article => {
    if (article.web_url === url) {
      return article;
    }
  });

  return {};
}
