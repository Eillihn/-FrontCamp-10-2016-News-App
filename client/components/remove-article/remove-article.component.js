import './remove-article.less';

import angular from 'angular';
import template from './remove-article.html';
import controller from './remove-article.controller';

let removeArticle = {
    template,
    controller,
    bindings: {
        article: '<'
    }
};

export default removeArticle;
