import angular from 'angular';
import stateRouter from './services/state-router.service';
import minLength from './directives/min-length.directive.js';

angular
    .module('common', [])
    .service('stateRouter', stateRouter)
    .directive('minLength', minLength);

export default 'common';
