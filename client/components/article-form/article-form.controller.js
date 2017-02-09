function ArticleFormController(articlesService, stateRouter) {
    'ngInject';
    let $ctrl = this;

    $ctrl.navigate = stateRouter.navigate;

    $ctrl.save = (article) => {
        articlesService.save(article, (sArticle) => {
            if (!!sArticle) {
                $ctrl.message = 'Article was saved.';
                $ctrl.error = null;
            } else {
                $ctrl.message = null;
                $ctrl.error = 'Article was not saved.';
            }
        });
    };
}

export default ArticleFormController;
