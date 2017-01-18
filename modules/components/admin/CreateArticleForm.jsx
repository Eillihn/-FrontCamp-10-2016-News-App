import React from 'react';

const FORM_KEYS = [
    'title',
    'description',
    'author',
    'url',
    'urlToImage'
];
export default class CreateArticleForm extends React.Component {

    constructor(props) {
        super(props);

        this.formValues = {};
        FORM_KEYS.forEach((key) => this.formValues[key] = '');
    }

    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <h3>Create Article</h3>
                <br/>
                <form className="form--create-article" onSubmit={this.handleCreateClick.bind(this)}>
                    <div className="form__group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" ref={(input) => this.formValues.title = input}/>
                    </div>
                    <div className="form__group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" ref={(textarea) => this.formValues.description = textarea}></textarea>
                    </div>
                    <div className="form__group">
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" ref={(input) => this.formValues.author = input}/>
                    </div>
                    <div className="form__group">
                        <label htmlFor="url">Url</label>
                        <input type="text" id="url" ref={(input) => this.formValues.url = input}/>
                    </div>
                    <div className="form__group">
                        <label htmlFor="urlToImage">Url To Image</label>
                        <input type="text" id="urlToImage" ref={(input) => this.formValues.urlToImage = input}/>
                    </div>
                    <div className="form__group">
                        <button type="submit" className="btn">Save</button>
                    </div>
                </form>
            </div>
        );
    }

    handleCreateClick(e) {
        e.preventDefault();

        fetch('/api/article/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: this.getFormData()
        }).then((response) => {
            window.location.reload();
            return response.json();
        }).catch((error) => console.log('Cannot save article on server. ', error));
    }

    getFormData() {
        let formData = {};

        FORM_KEYS.forEach((key) => formData[key] = this.formValues[key].value);
        return JSON.stringify(formData);
    }
}
