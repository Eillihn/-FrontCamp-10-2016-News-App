function RegisterController(articlesService, stateRouter) {
    'ngInject';
    let $ctrl = this;

    $ctrl.navigate = stateRouter.navigate;

    $ctrl.save = (article) => {
        articlesService.save(article, (user) => {
            if (!!user) {
                $ctrl.message = 'Article was saved.';
                $ctrl.error = null;
            } else {
                $ctrl.message = null;
                $ctrl.error = 'Article was not saved.';
            }
        });
    };
}

export default RegisterController;
