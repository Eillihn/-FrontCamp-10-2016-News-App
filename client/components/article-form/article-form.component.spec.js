describe('component: articleForm', () => {
    let suite;

    angular.mock.module.sharedInjector();

    beforeAll(angular.mock.module('app'));
    beforeAll(angular.mock.module('components'));
    beforeAll(angular.mock.inject((_$componentController_) => {
        suite = {};
        suite.$componentController = _$componentController_;
        suite.mockServices = {
            articlesService: {
                save: {}
            }
        };
        suite.article = {
            '_id': '588a0813e42a1b26ec34c238',
            'title': 'Helado Negro’s Songs Of Peace And Latinx Pride',
            'description': 'Roberto Lange\'s music is a necessary salve for an uneasy world'
        };
    }));

    afterAll(() => suite = null);

    it('should expose an `article` object', () => {
        let bindings = {
            article: suite.article
        };
        let ctrl = suite.$componentController('articleForm', suite.mockServices, bindings);

        expect(ctrl.article).toBeDefined();
    });

    it('should expose a `title` string', () => {
        let bindings = {
            title: 'Edit Article'
        };
        let ctrl = suite.$componentController('articleForm', suite.mockServices, bindings);

        expect(ctrl.title).toBeDefined();
    });
});
