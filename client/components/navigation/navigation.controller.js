function NavigationController(userService) {
    'ngInject';
    let $ctrl = this;

    Object.assign($ctrl, userService);
}

export default NavigationController;
