function ArticlesListController(stateRouter, articlesListService) {
    'ngInject';
    let $ctrl = this;

    $ctrl.navigate = stateRouter.navigate;

    Object.assign($ctrl, articlesListService);
}

export default ArticlesListController;
