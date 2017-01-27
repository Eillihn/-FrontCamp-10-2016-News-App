function LogoutController(userService, logoutService) {
    'ngInject';
    let $ctrl = this;

    Object.assign($ctrl, logoutService);
    Object.assign($ctrl, userService);
}

export default LogoutController;
