function RegisterController(signupFormService) {
    'ngInject';
    let $ctrl = this;

    Object.assign($ctrl, signupFormService);
}

export default RegisterController;
