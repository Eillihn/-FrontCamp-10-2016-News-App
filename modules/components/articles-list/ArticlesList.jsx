import React from 'react';
if (process.env.BROWSER) {
    require('./articles-list.less');
}

import Const from './Const';
import Message from '../Message';
import ArticlesModel from './ArticlesModel';
import Article from './Article';

export default class ArticlesList extends React.Component {

    constructor(props) {
        super(props);

        this.articlesModel = new ArticlesModel(Const.MONGO_ARTICLES_SOURCE);
        this.state = {
            isShowNewsHidden: false,
            articlesReceived: false
        };
    }

    render() {
        let showNewsBtnClass = this.state.isShowNewsHidden
            ? 'hidden'
            : '';

        return (
            <div className="container">
                <div className="show-news-wrapper">
                    <button className={`btn btn--show-news ${showNewsBtnClass}`} onClick={this.handleShowNewsBtnClick.bind(this)}>Show news</button>
                </div>
                <div className="article-list section">
                    <Message title={this.props.message}></Message>
                    {this.state.articlesReceived
                        ? this.articlesModel.articles.map(article => <Article model={article}/>)
                        : ''}
                </div>
            </div>
        );
    }

    handleShowNewsBtnClick() {
        this.setState({isShowNewsHidden: true});

        this.articlesModel.load().then(() => {
            this.setState({articlesReceived: true});
        });
    }
}
