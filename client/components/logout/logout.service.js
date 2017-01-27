function logoutService($http, userService, $state) {
    'ngInject';

    return {
        logout
    };

    function logout() {
        return $http.post('/logout')
            .then((response) => {
                userService.removeUser();
                $state.go('home');
            })
            .catch((error) => console.log('Cannot logout. ', error));
    }
}

export default logoutService;
