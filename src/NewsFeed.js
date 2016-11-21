const DATA_OPTIONS = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

const SOURCES_URL = 'https://newsapi.org/v1/sources?language=en';
const ARTICLES_URL = 'https://newsapi.org/v1/articles';
const API_KEY = '11296ec32b434bdbb5ddfe20030f1c13';

class NewsFeed {

    constructor(options = {}) {
        const defaults = {
            EL_CLASSNAME: 'news-feed',
            ARTICLES_CLASSNAME: 'articles',
            SOURCES_CLASSNAME: 'sources',
            INITIAL_SOURCE: 'bbc-news'
        };
        this.options = Object.assign({}, defaults, options);

        this.findElements();
        this.attachEvents();
    }

    static getFormattedDate(date = Date.now()) {
        return new Date(date).toLocaleString('en-US', DATA_OPTIONS);
    }

    findElements() {
        this.el = document.getElementsByClassName(this.options.EL_CLASSNAME)[0];
        this.articlesEl = this.el.getElementsByClassName(this.options.ARTICLES_CLASSNAME)[0];
        this.sourceEl = this.el.getElementsByClassName(this.options.SOURCES_CLASSNAME)[0];
    }

    attachEvents() {
        this.sourceEl.addEventListener('change', (e) => {
            this.source = e.target.value;
            this.update();
        });
    }

    update(source = this.source) {
        fetch(`${ARTICLES_URL}?source=${source}&apiKey=${API_KEY}`)
            .then((response) => {
                return response.json();
            })
            .then(this.display.bind(this))
            .catch(error => {
                console.log(error);
            });
    }

    display(data = {}) {
        this.articlesEl.innerHTML = this.createArticlesHtml(data.articles);
    }

    createArticlesHtml(articles = []) {
        let html = [];

        html = articles.map(article => {
            let date = NewsFeed.getFormattedDate(article.publishedAt);

            return `
                <article class='article'>
                    <a href='${article.url}' target="_blank" class="article__link">
                        <h1 class='article__headline'>${article.title}</h2>
                        <span class='article__info'>${date}${!!article.author ? ' | ' + article.author : ''}</span>
                        <img src='${article.urlToImage}' class='article__img'/>
                        <p class='article__desc'>${article.description}</p>
                    </a>
                </article>`;
        });

        return html.join('');
    }

    init() {
        fetch(SOURCES_URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.createSources(data);
                this.update(this.options.INITIAL_SOURCE);
            })
            .catch(error => console.log(error));
    }

    createSources(data = {}) {
        this.sourceEl.innerHTML = this.createSourcesHtml(data.sources);
    }

    createSourcesHtml(sources = []) {
        return sources.map(source => {
            return `<option value='${source.id}'
                ${source.id === this.options.INITIAL_SOURCE ? 'selected=\"true\"' : ''}>${source.name}</option>`;
        }).join();
    }

}

module.exports = NewsFeed;