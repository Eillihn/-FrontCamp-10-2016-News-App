import angular from 'angular';

import app from './app/app.component';
import navigation from './navigation/navigation.component';
import header from './header/header.component';
import logo from './logo/logo.component';

import userService from './user/user.service';
import logoutService from './logout/logout.service';
import logout from './logout/logout.component';
import loginService from './login/login.service';
import login from './login/login.component';
import signupFormService from './signup-form/signup-form.service';
import signupForm from './signup-form/signup-form.component';

import articlesService from './app/articles.service.js';
import articlesList from './articles-list/articles-list.component';
import articlesListService from './articles-list/articles-list.service';
import articleForm from './article-form/article-form.component';
import articlesCount from './articles-count/articles-count.component';
import createArticle from './create-article/create-article.component';
import removeArticle from './remove-article/remove-article.component';

angular.module('components', [])
    .component('app', app)

    .component('header', header)
    .component('navigation', navigation)
    .component('logo', logo)

    .factory('userService', userService)
    .service('logoutService', logoutService)
    .component('logout', logout)
    .service('loginService', loginService)
    .component('login', login)
    .service('signupFormService', signupFormService)
    .component('signupForm', signupForm)

    .factory('articlesService', articlesService)
    .component('articlesList', articlesList)
    .service('articlesListService', articlesListService)
    .component('articleForm', articleForm)
    .component('articlesCount', articlesCount)
    .component('createArticle', createArticle)
    .component('removeArticle', removeArticle);

export default 'components';
