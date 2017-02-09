describe('directive: minLength', () => {
    let suite;

    angular.mock.module.sharedInjector();
    
    beforeAll(angular.mock.module('app'));
    beforeAll(angular.mock.module('common'));
    beforeAll(angular.mock.inject((_$compile_, _$rootScope_) => {
        let element = angular.element(
            `<form name='form'>
                <input type='text' name='title' ng-model='title' min-length='20'/>
            </form>`
        );

        suite = {};
        suite.$scope = _$rootScope_;
        suite.$scope.title = '';

        _$compile_(element)(suite.$scope);
    }));

    afterAll(() => suite = null);

    it('validation should not pass if length is less than 20', () => {
        suite.$scope.form.title.$setViewValue('Sample text');
        suite.$scope.$digest();
        expect(suite.$scope.form.title.$valid).toBe(false);
    });

    it('validation should pass if length is equal or greater than 20', () => {
        suite.$scope.form.title.$setViewValue('Sample long long long text');
        suite.$scope.$digest();
        expect(suite.$scope.form.title.$valid).toBe(true);
    });
});
