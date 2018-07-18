export default async function fetchNews(page = 0) {
  try {
    const responseJson = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&api-key=718c5c8e6f1e4af3afcc4611eb5d690c&page=${page}`
    )
      .then(response => response.json())
      .catch(e => console.error(e));

    if (responseJson.status === 'OK') {
      return responseJson.response.docs;
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}
