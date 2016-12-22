import Const from './const';

export default class ArticlesModel {

    constructor(articlesSource) {
        this._articles = [];
        this.articlesSource = articlesSource;
    }

    get articles() {
        return this._articles;
    }

    set articles(data) {
        this._articles = data;
    }

    load(source) {
        let self = this;

        return new Promise((res, rej) => {
            fetch(self.getArticlesUrl())
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return rej(response);
                    }
                })
                .then((response) => {
                    this._articles = response.articles;
                    return res(response);
                })
                .catch((error) => console.log('Cannot get articles from server. ', error));
        });
    }

    getArticlesUrl(source) {
        return this.articlesSource === Const.NEWS_API_ARTICLES_SOURCE ?
            `${Const.NEWS_API_ARTICLES_URL}?source=${source}&apiKey=${API_KEY}` : Const.MONGO_ARTICLES_URL;
    }
}
