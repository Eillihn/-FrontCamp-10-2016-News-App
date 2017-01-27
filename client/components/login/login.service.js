function loginService($http, userService) {
    'ngInject';

    return {
        login
    };

    function login(user, $ctrl) {
        return $http.post('/login', user)
            .then((response) => {
                let msg = response.data.error;

                if (!msg) {
                    userService.setUser(response.data.user);
                }

                $ctrl.error = msg;
            })
            .catch((error) => console.log('Cannot login. ', error));
    }
}

export default loginService;
