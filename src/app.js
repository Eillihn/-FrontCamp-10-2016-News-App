let NewsFeed = require('./NewsFeed');

documentReady();

function documentReady(fn) {
    if (document.readyState != 'loading') {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }
}

function init() {
    let newsFeed = new NewsFeed();
    newsFeed.init();

    // babel-plugin-compare-value-type test
    console.log('test1: 0 == \'\'' + (0 == ''));
    console.log('test2: 0 == \'0\'' + (0 == '0'));
    console.log('test3: 0 == []' + (0 == []));
    console.log('test4: 1 != 2' + (1 != 2));
}