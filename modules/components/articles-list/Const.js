const NEWS_API_ARTICLES_SOURCE = 'newsapi';
const MONGO_ARTICLES_SOURCE = 'mongo';

const NEWS_API_ARTICLES_URL = 'https://newsapi.org/v1/articles';
const API_KEY = '11296ec32b434bdbb5ddfe20030f1c13';

const MONGO_ARTICLES_URL = '/api/articles';

export default class Const {

    static get NEWS_API_ARTICLES_URL() {
        return NEWS_API_ARTICLES_URL;
    }

    static get NEWS_API_KEY() {
        return NEWS_API_KEY;
    }

    static get MONGO_ARTICLES_URL() {
        return MONGO_ARTICLES_URL;
    }

    static get NEWS_API_ARTICLES_SOURCE() {
        return NEWS_API_ARTICLES_SOURCE;
    }

    static get MONGO_ARTICLES_SOURCE() {
        return MONGO_ARTICLES_SOURCE;
    }
}