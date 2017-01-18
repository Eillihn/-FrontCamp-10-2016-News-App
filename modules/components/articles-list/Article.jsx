import React from 'react';

const DATA_OPTIONS = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

export default class Article extends React.Component {

    static getFormattedDate(date = Date.now()) {
        return new Date(date).toLocaleString('en-US', DATA_OPTIONS);
    }

    render() {
        let article = this.props.model,
            date = Article.getFormattedDate(article.publishedAt);

        return (
            <article className='article'>
                <a href={article.url} target="_blank" className="article__link">
                    <h1 className='article__headline'>{article.title}</h1>
                    <span className='article__info'>{date}{!!article.author
                            ? ' | ' + article.author
                            : ''}</span>
                    <img src={article.urlToImage} className='article__img'/>
                    <p className='article__desc'>{article.description}</p>
                </a>
            </article>
        );
    }
}
