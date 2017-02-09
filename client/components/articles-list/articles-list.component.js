import './articles-list.less';

import angular from 'angular';
import defaultTemplate from './articles-list-default.html';
import adminTemplate from './articles-list-admin.html';
import controller from './articles-list.controller';

let articlesList = {
    template: ($element, $attrs) => {
        return $attrs.template === 'admin' ? adminTemplate : defaultTemplate;
    },
    controller,
    bindings: {
        articles: '<',
        template: '@'
    }
};

export default articlesList;
