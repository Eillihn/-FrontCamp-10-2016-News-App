function articlesService($resource) {
    'ngInject';
    return $resource('/api/article/:id');
}

export default articlesService;
