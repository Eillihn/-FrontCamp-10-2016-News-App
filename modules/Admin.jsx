import React from 'react';

import Nav from './components/Nav';
import Header from './components/Header';
import CreateArticleForm from './components/admin/CreateArticleForm';
import DeleteArticleForm from './components/admin/DeleteArticleForm';
import Message from './components/Message';

export default class Admin extends React.Component {

    render() {

        return (
            <div>
                <Nav user={this.props.user}/>
                <Message title={this.props.message}/>
                <Header user={this.props.user}/>
                <CreateArticleForm/>
                <DeleteArticleForm articles={this.props.articles}/>
            </div>
        );
    }
}
