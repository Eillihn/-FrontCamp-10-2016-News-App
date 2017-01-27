export default function($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: `<header></header>
                       <articles-list articles='$resolve.articles'></articles-list>`,
            resolve: {
                articles: function(articlesService) {
                    return articlesService.query().$promise;
                }
            }
        })
        .state('signup', {
            url: '/signup',
            template: `<header hide-login='true'></header>
                       <signup-form></signup-form>`
        })
        .state('admin', {
            url: '/admin',
            template: `<header></header>
                       <div ui-view>
                           <div class="clear-float">
                               <articles-count articles='$resolve.articles' class='pull-left'></articles-count>
                               <create-article class='pull-right'></create-article>
                           </div>
                           <articles-list template='admin' articles='$resolve.articles'></articles-list>
                       </div>
                        `,
            resolve: {
                articles: function(articlesService) {
                    return articlesService.query().$promise;
                }
            }
        })
        .state('admin.addArticle', {
            url: '/article/add',
            template: `<article-form title='Create Article'></article-form>`
        })
        .state('admin.editArticle', {
            url: '/article/:id/edit',
            template: `<article-form article='$resolve.article' title='Edit Article'></article-form>`,
            resolve: {
                article: function(articlesService, $stateParams) {
                    return articlesService.get({
                        id: $stateParams['id']
                    }).$promise;
                }
            }
        })
        .state('admin.deleteArticle', {
            url: '/article/:id/delete',
            template: `<remove-article article='$resolve.article'></remove-article>`,
            resolve: {
                article: function(articlesService, $stateParams) {
                    return articlesService.get({
                        id: $stateParams['id']
                    }).$promise;
                }
            }
        });
};
