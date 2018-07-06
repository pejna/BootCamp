export default (fetchNews = async callback => {
  try {
    const response = await fetch(
      'https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&api-key=718c5c8e6f1e4af3afcc4611eb5d690c'
    );
    const responseJson = await response.json();

    if (responseJson.status === 'OK') {
      callback(responseJson.response.docs);
    }
  } catch (error) {
    // intentionally empty
  }
});
