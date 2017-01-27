function userService() {
    'ngInject';
    let user = getUser();

    return {
        getUser,
        setUser,
        removeUser
    };

    function getUser() {
        return user;
    }

    function setUser(newUser) {
        user = newUser;
    }

    function removeUser() {
        user = {};
    }
}

export default userService;
