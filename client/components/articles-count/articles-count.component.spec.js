describe('component: articlesCount', () => {
    let suite;

    angular.mock.module.sharedInjector();

    beforeAll(angular.mock.module('app'));
    beforeAll(angular.mock.module('components'));
    beforeAll(inject((_$componentController_) => {
        suite = {};
        suite.$componentController = _$componentController_;
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

    it('should expose an `articles` object', () => {
        let bindings = {
            articles: suite.articles
        };
        let ctrl = suite.$componentController('articlesCount', null, bindings);

        expect(ctrl.articles).toBeDefined();
        expect(ctrl.articles.length).toBe(2);
    });
});
