import { _ } from 'lodash';

export function selectArticle(articles, url) {
  _.forEach(articles, article => {
    if (article.web_url === url) {
      return article;
    }
  });

  return {};
}
