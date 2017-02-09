let suite;

describe('service: articlesListService', () => {

    angular.mock.module.sharedInjector();

    beforeAll(angular.mock.module('app'));
    beforeAll(angular.mock.module('components'));
    beforeAll(angular.mock.inject((_articlesListService_) => {
        suite = {};
        suite.articlesListService = _articlesListService_;
        suite.articles = [{
            '_id': '588a0813e42a1b26ec34c238',
            'title': 'Helado Negro’s Songs Of Peace And Latinx Pride',
            'description': 'Roberto Lange\'s music is a necessary salve for an uneasy world'
        }, {
            '_id': '588a07eee42a1b26ec34c237',
            'title': 'Mary Tyler Moore, TV Legend, Dead At 80',
            'description': 'The iconic TV actress who could turn the world on with her smile died on Wednesday, January 25'
        }];
    }));

    afterAll(() => suite = null);

    describe('hasNextPage', () => {

        it('should return false if has not next page', () => {
            suite.articlesListService.setCurrentPage(0);
            suite.articlesListService.setLimit(10);

            expect(suite.articlesListService.hasNextPage(suite.articles)).toBe(false);
        });

        it('should return true if has next page', () => {
            suite.articlesListService.setCurrentPage(0);
            suite.articlesListService.setLimit(1);

            expect(suite.articlesListService.hasNextPage(suite.articles)).toBe(true);
        });
    });

    describe('getSkipCount', () => {

        it('should return 0 if current page is the first page', () => {
            suite.articlesListService.setCurrentPage(0);

            expect(suite.articlesListService.getSkipCount()).toBe(0);
        });

        it('should return 5 if current page is the third page and limit is 5', () => {
            suite.articlesListService.setCurrentPage(2);
            suite.articlesListService.setLimit(5);

            expect(suite.articlesListService.getSkipCount()).toBe(10);
        });

        it('should return 5 if current page is the third page and limit is 5', () => {
            suite.articlesListService.setCurrentPage(2);
            suite.articlesListService.setLimit(5);

            expect(suite.articlesListService.getSkipCount()).toBe(10);
        });
    });

    describe('nextBtnClick', () => {

        it('should increase current page by 1', () => {
            suite.articlesListService.setCurrentPage(0);
            suite.articlesListService.nextBtnClick();

            expect(suite.articlesListService.getCurrentPage()).toBe(1);
        });

        it('should increase current page by 2', () => {
            suite.articlesListService.setCurrentPage(0);
            suite.articlesListService.nextBtnClick();
            suite.articlesListService.nextBtnClick();

            expect(suite.articlesListService.getCurrentPage()).toBe(2);
        });
    });

    describe('prevBtnClick', () => {

        it('should decrease current page by 1', () => {
            suite.articlesListService.setCurrentPage(3);
            suite.articlesListService.prevBtnClick();

            expect(suite.articlesListService.getCurrentPage()).toBe(2);
        });

        it('should decrease current page by 2', () => {
            suite.articlesListService.setCurrentPage(5);
            suite.articlesListService.prevBtnClick();
            suite.articlesListService.prevBtnClick();

            expect(suite.articlesListService.getCurrentPage()).toBe(3);
        });
    });
});
