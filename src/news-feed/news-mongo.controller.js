import './news-feed.less';

import Const from './const';
import ArticlesModel from './articles.model';
import ArticlesView from './articles.view';

class NewsFeedController {

    constructor() {
        this.articlesModel = new ArticlesModel(Const.MONGO_ARTICLES_SOURCE);
        this.articlesView = new ArticlesView();

        this.articlesModel.load().then(() => {
            this.articlesView.render(this.articlesModel.articles);
        });
        this.init();
    }

    init() {
        this.articlesModel.load().then(() => this.render());
    }

    render() {
        this.articlesView.render(this.articlesModel.articles);
    }
}

export {
    NewsFeedController
};
