const proxyurl = 'https://cors-anywhere.herokuapp.com/';

export default class TimesApi {
  static fetchArticles(term) {
    return fetch(
      `${proxyurl}https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=DRqMCud16AA3jLbutiPVfScnHGvycRub&q=${term}`
    ).then(res => res.json());
  }
}
