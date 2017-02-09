function articlesListService($state) {
    'ngInject';
    let currentPage = 0;
    let limit = 5;

    return {
        getLimit,
        setLimit,
        getSkipCount,
        hasNextPage,
        toStartPage,
        prevBtnClick,
        nextBtnClick,
        getCurrentPage,
        setCurrentPage
    };

    function getLimit() {
        return limit;
    }

    function setLimit(newLimit) {
        limit = newLimit;
    }

    function getCurrentPage() {
        return currentPage;
    }

    function setCurrentPage(page) {
        currentPage = page;
    }

    function getSkipCount() {
        return currentPage * limit;
    }

    function hasNextPage(articles) {
        return articles.length - (currentPage + 1) * limit > 0;
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
