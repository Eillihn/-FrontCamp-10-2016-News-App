import CreateArticleView from './create-article.view';
import DeleteArticleView from './delete-article.view';

class AdminController {

    constructor() {
        this.createArticleView = new CreateArticleView();
        this.deleteArticleView = new DeleteArticleView();
    }
}

export {
    AdminController
};
