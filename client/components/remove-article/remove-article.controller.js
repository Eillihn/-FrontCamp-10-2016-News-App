function RemoveArticleController(stateRouter, articlesService) {
    'ngInject';
    let $ctrl = this;

    $ctrl.navigate = stateRouter.navigate;

    $ctrl.remove = (id) => {
        articlesService.delete({
            id: id
        }, (res) => {
            if (!!res.message) {
                $ctrl.message = res.message;
                $ctrl.error = null;
            } else {
                $ctrl.message = null;
                $ctrl.error = res.error || 'Article was not deleted.';
            }
        });
    };
}

export default RemoveArticleController;
