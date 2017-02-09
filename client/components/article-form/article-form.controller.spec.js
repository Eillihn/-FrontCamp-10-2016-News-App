const SAVE_ARTICLE_URL = '/api/article';

describe('controller: ArticleFormController', () => {
    let suite;

    angular.mock.module.sharedInjector();

    beforeAll(angular.mock.module('app'));
    beforeAll(angular.mock.module('components'));

    beforeEach(angular.mock.inject((_$componentController_, _articlesService_, _$httpBackend_) => {
        suite = {};
        suite.$componentController = _$componentController_;
        suite.article = {
            '_id': '588a0813e42a1b26ec34c238',
            'title': 'Helado Negro’s Songs Of Peace And Latinx Pride',
            'description': 'Roberto Lange\'s music is a necessary salve for an uneasy world'
        };
        suite.$httpBackend = _$httpBackend_;
        suite.articlesService = _articlesService_;
        suite.requestHandler = suite.$httpBackend.whenPOST(SAVE_ARTICLE_URL).respond(suite.article);
    }));

    afterEach(() => {
        suite.$httpBackend.verifyNoOutstandingExpectation();
        suite.$httpBackend.verifyNoOutstandingRequest();
        suite = null
    });

    describe('save', () => {

        it('should call articlesService.save', () => {
            let ctrl = suite.$componentController('articleForm', {
                articlesService: suite.articlesService
            }, {});

            spyOn(suite.articlesService, 'save');
            ctrl.save();

            expect(suite.articlesService.save).toHaveBeenCalled();
        });

        it('should set message', () => {
            let ctrl = suite.$componentController('articleForm', {
                articlesService: suite.articlesService
            }, {});

            ctrl.save(suite.article);
            suite.$httpBackend.expectPOST(SAVE_ARTICLE_URL);
            suite.$httpBackend.flush();

            expect(ctrl.message.length).toBeGreaterThan(0);
        });

        it('should clean error when article was returned', () => {
            let ctrl = suite.$componentController('articleForm', {
                articlesService: suite.articlesService
            }, {});

            ctrl.save(suite.article);
            suite.$httpBackend.expectPOST(SAVE_ARTICLE_URL);
            suite.$httpBackend.flush();

            expect(ctrl.error).toBeNull(null);
        });
    });
});
