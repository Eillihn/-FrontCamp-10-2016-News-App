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
}