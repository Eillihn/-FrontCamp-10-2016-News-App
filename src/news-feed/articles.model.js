const ARTICLES_URL = 'https://newsapi.org/v1/articles';
const API_KEY = '11296ec32b434bdbb5ddfe20030f1c13';

export default class ArticlesModel {

    constructor() {
        this._articles = [];
    }

    get articles() {
        return this._articles;
    }

    set articles(data) {
        this._articles = data;
    }

    load(source) {
        return new Promise((res, rej) => {
            fetch(`${ARTICLES_URL}?source=${source}&apiKey=${API_KEY}`)
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
}