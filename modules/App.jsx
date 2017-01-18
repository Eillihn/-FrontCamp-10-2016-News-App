import React from 'react';

import Nav from './components/Nav';
import Header from './components/Header';
import ArticlesList from './components/articles-list/ArticlesList';
import Message from './components/Message';

export default class App extends React.Component {

    render() {

        return (
            <div>
                <Nav user={this.props.user}/>
                <Message title={this.props.message}/>
                <Header user={this.props.user}/>
                <ArticlesList/>
            </div>
        );
    }
}
