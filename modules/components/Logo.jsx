import React from 'react';

export default class Logo extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <span>Powered by:
                    </span>
                    <a href="https://newsapi.org/" target="_blank">NewsAPI.org</a>
                </div>
                <h1 className="logo">News</h1>
            </div>
        );
    }
}
