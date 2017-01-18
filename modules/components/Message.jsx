import React from 'react';

export default class Message extends React.Component {

    render() {

        let message = '',
            className = (this.props.type || 'error') + ' message-block',
            title = this.props.title || '',
            subtitle = this.props.subtitle || '',
            description = this.props.description || '';

        if (title.length || subtitle.length || description.length) {
            message = <div className={className}>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
                <pre>{this.props.description}</pre>
            </div>;
        }

        return (
            <div className="container">{message}</div>
        );
    }
}
