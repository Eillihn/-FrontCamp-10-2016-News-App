import angular from 'angular';
import template from './header.html';
import controller from './header.controller';

let header = {
    template,
    controller,
    bindings: {
        hideLogin: '<'
    }
};

export default header;
