function stateRouter($state) {
    this.navigate = function(state, params, options) {
        $state.go(state, params, options);
    };
}

export default stateRouter;
