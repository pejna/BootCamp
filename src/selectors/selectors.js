import { _ } from 'lodash';

export function selectArticle(articles, url) {
  let selectedArticle = {};
  _.forEach(articles, article => {
    if (article.web_url === url) {
      selectedArticle = article;
    }
  });

  return selectedArticle;
}
