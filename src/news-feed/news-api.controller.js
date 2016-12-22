import './news-feed.less';

import Const from './const';
import SourcesModel from './sources.model';
import SourcesView from './sources.view';
import ArticlesModel from './articles.model';
import ArticlesView from './articles.view';

import EventManager from './event-manager';

class NewsFeedController {

    constructor() {
        this.sourcesModel = new SourcesModel();
        this.sourcesView = new SourcesView();

        this.articlesModel = new ArticlesModel(Const.NEWS_API_ARTICLES_SOURCE);
        this.articlesView = new ArticlesView();

        this.eventManager = EventManager.getInstance();

        this.eventManager.subscribe('update', source => {
            this.articlesModel.load(source).then(() => {
                this.articlesView.render(this.articlesModel.articles);
            });
        });
        this.init();
    }

    init() {
        this.sourcesModel.load().then(() => {
            let source = this.sourcesModel.getFirstSourceId();

            this.articlesModel.load(source).then(() => this.render());
        });
    }

    render() {
        this.sourcesView.render(this.sourcesModel.sources);
        this.articlesView.render(this.articlesModel.articles);
    }
}

export {
    NewsFeedController
};
