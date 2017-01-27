import './default.less';

import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import common from './common/common.module';
import components from './components/components.module';
import config from './app.config';

angular.module('app', [
        common,
        ngSanitize,
        uiRouter,
        ngResource,
        components
    ])
    .config(config);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});
