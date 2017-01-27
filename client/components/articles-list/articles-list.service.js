function articlesListService($state) {
    'ngInject';
    let currentPage = 0;

    return {
        getLimit,
        getSkipCount,
        hasNextPage,
        toStartPage,
        prevBtnClick,
        nextBtnClick,
        getCurrentPage,
        setCurrentPage
    };

    function getLimit() {
        return 5;
    }

    function getCurrentPage() {
        return currentPage;
    }

    function setCurrentPage(page) {
        currentPage = page;
    }

    function getSkipCount() {
        return currentPage * getLimit();
    }

    function hasNextPage(articles) {
        return articles.length - (currentPage + 1) * getLimit() > 0;
    }

    function prevBtnClick() {
        currentPage = currentPage !== 0 ? currentPage - 1 : 0;
    }

    function nextBtnClick() {
        currentPage = currentPage + 1;
    }

    function toStartPage() {
        currentPage = 0;
    }
}

export default articlesListService;
