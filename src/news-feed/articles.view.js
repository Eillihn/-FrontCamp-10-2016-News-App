const DATA_OPTIONS = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

export default class ArticlesView {

    constructor(options = {}) {
        const defaults = {
            CONTAINER_EL_CLASSNAME: 'news-feed',
            EL_CLASSNAME: 'articles'
        };
        this.options = Object.assign({}, defaults, options);

        this.findElements();
    }

    static getFormattedDate(date = Date.now()) {
        return new Date(date).toLocaleString('en-US', DATA_OPTIONS);
    }

    findElements() {
        this.parentEl = document.getElementsByClassName(this.options.CONTAINER_EL_CLASSNAME)[0];
        this.el = this.parentEl.getElementsByClassName(this.options.EL_CLASSNAME)[0];
    }

    render(articles = []) {
        this.el.innerHTML = this.getHtml(articles);
    }

    getHtml(articles = []) {
        let html = [];

        html = articles.map(article => {
            let date = ArticlesView.getFormattedDate(article.publishedAt);

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
}