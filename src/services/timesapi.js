const proxyurl = "https://cors-anywhere.herokuapp.com/"


export default class TimesApi {

  static fetchArticles(term){
  return fetch(`${proxyurl}https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=313a7aff00884b7f9c8f055e1c8266de&q=${term}`).then(res => res.json())
  }
}
