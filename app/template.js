export default ({
    body,
    initialState
}) => {

    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>[FrontCamp]Introduction to ECMAScript 2015 v2 by Eillihn</title>
                <link rel="stylesheet" href="/bundle.css"/>
                <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
            </head>
            <body>
                <div id="app">${body}</div>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `;
};
