function signupFormService($http, userService, $state) {
    'ngInject';

    return {
        signup
    };

    function signup(user, $ctrl) {
        return $http.post('/signup', user)
            .then((response) => {
                let msg = response.data.error;

                if (!msg) {
                    userService.setUser(response.data.user);
                    $state.go('admin');
                }

                $ctrl.error = msg;
            })
            .catch((error) => console.log('Cannot signup. ', error));
    }
}

export default signupFormService;
