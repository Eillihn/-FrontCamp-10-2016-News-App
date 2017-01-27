function LoginController(loginService) {
    'ngInject';
    let $ctrl = this;

    Object.assign($ctrl, loginService);
}

export default LoginController;
