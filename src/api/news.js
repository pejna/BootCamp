export default async function fetchNews(page = 0) {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&api-key=718c5c8e6f1e4af3afcc4611eb5d690c&page=${page}`
    );

    const responseJson = await response.json();

    return responseJson.response.docs;
  } catch (error) {
    return error;
  }
}
