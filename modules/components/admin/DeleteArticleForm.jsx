import React from 'react';

import Const from '../articles-list/Const';
import ArticlesModel from '../articles-list/ArticlesModel';

export default class DeleteArticleForm extends React.Component {

    constructor(props) {
        super(props);

        this.articlesModel = new ArticlesModel(Const.MONGO_ARTICLES_SOURCE);

        let hasArticlesProp = !!props.articles && props.articles.length > 0;
        if (hasArticlesProp) {
            this.articlesModel.articles = props.articles;
        } else {
            this.articlesModel.load().then(() => {
                this.setState({articlesReceived: true});
            });
        }
        this.state = {
            articlesReceived: hasArticlesProp
        };

    }

    render() {

        return (
            <div className="container">
                <table className="table table--delete-articles">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getArticles()}
                    </tbody>
                </table>
            </div>
        );
    }

    getArticles() {
        if (!this.state.articlesReceived) {
            return;
        }

        return this.articlesModel.articles.map((article) => {
            return (
                <tr>
                    <td>{article.title}</td>
                    <td>
                        <a href="/article/delete" className="btn btn--danger"
                            onClick={this.handleDeleteClick.bind(this, article.title)}>Delete</a>
                    </td>
                </tr>
            );
        });
    }

    handleDeleteClick(title, e) {
        e.preventDefault();

        if (!title) {
            return;
        }

        fetch('/api/article/delete', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title})
        }).then((response) => {
            window.location.reload();
            return response.json();
        }).catch((error) => console.log('Cannot delete article on server. ', error));
    }
}
