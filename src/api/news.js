export default async function fetchNews(page = 0) {
  return fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&api-key=718c5c8e6f1e4af3afcc4611eb5d690c&page=${page}`
  ).then(response => response.json().response.docs);
}
