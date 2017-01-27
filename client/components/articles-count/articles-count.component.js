import angular from 'angular';
import './articles-count.less';
import template from './articles-count.html';

let articlesCount = {
    template,
    bindings: {
        articles: '<'
    }
};

export default articlesCount;
