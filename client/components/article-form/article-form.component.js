import angular from 'angular';
import './article-form.less';
import template from './article-form.html';
import controller from './article-form.controller';

let articleForm = {
    template,
    controller,
    bindings: {
        article: '<',
        title: '@'
    }
};

export default articleForm;
