webpackJsonp([1],{

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NewsFeedController = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(306);

	var _const = __webpack_require__(308);

	var _const2 = _interopRequireDefault(_const);

	var _articles = __webpack_require__(309);

	var _articles2 = _interopRequireDefault(_articles);

	var _articles3 = __webpack_require__(310);

	var _articles4 = _interopRequireDefault(_articles3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NewsFeedController = function () {
	    function NewsFeedController() {
	        var _this = this;

	        _classCallCheck(this, NewsFeedController);

	        this.articlesModel = new _articles2.default(_const2.default.MONGO_ARTICLES_SOURCE);
	        this.articlesView = new _articles4.default();

	        this.articlesModel.load().then(function () {
	            _this.articlesView.render(_this.articlesModel.articles);
	        });
	        this.init();
	    }

	    _createClass(NewsFeedController, [{
	        key: 'init',
	        value: function init() {
	            var _this2 = this;

	            this.articlesModel.load().then(function () {
	                return _this2.render();
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.articlesView.render(this.articlesModel.articles);
	        }
	    }]);

	    return NewsFeedController;
	}();

	exports.NewsFeedController = NewsFeedController;

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(307);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(303)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./news-feed.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./news-feed.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(302)();
	// imports


	// module
	exports.push([module.id, ".article {\n  margin: 48px 0;\n}\n.article__link {\n  display: inline-block;\n}\n.article__link:hover {\n  text-decoration: none;\n}\n.article__img {\n  display: block;\n  max-width: 500px;\n  max-height: 320px;\n  margin: 32px auto;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.article__desc {\n  text-decoration: none;\n  color: #333;\n}\n.article__info {\n  text-decoration: none;\n  color: #999;\n}\n.article__headline {\n  font-size: 32px;\n  margin: 16px 0 8px;\n  color: #000;\n}\n.article__headline:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 967px) {\n  .article {\n    margin: 0 0 32px;\n  }\n  .article__img {\n    max-width: 100%;\n  }\n}\n", ""]);

	// exports


/***/ },

/***/ 308:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NEWS_API_ARTICLES_SOURCE = 'newsapi';
	var MONGO_ARTICLES_SOURCE = 'mongo';

	var NEWS_API_ARTICLES_URL = 'https://newsapi.org/v1/articles';
	var API_KEY = '11296ec32b434bdbb5ddfe20030f1c13';

	var MONGO_ARTICLES_URL = '/api/articles';

	var Const = function () {
	    function Const() {
	        _classCallCheck(this, Const);
	    }

	    _createClass(Const, null, [{
	        key: 'NEWS_API_ARTICLES_URL',
	        get: function get() {
	            return NEWS_API_ARTICLES_URL;
	        }
	    }, {
	        key: 'NEWS_API_KEY',
	        get: function get() {
	            return NEWS_API_KEY;
	        }
	    }, {
	        key: 'MONGO_ARTICLES_URL',
	        get: function get() {
	            return MONGO_ARTICLES_URL;
	        }
	    }, {
	        key: 'NEWS_API_ARTICLES_SOURCE',
	        get: function get() {
	            return NEWS_API_ARTICLES_SOURCE;
	        }
	    }, {
	        key: 'MONGO_ARTICLES_SOURCE',
	        get: function get() {
	            return MONGO_ARTICLES_SOURCE;
	        }
	    }]);

	    return Const;
	}();

	exports.default = Const;

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _const = __webpack_require__(308);

	var _const2 = _interopRequireDefault(_const);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticlesModel = function () {
	    function ArticlesModel(articlesSource) {
	        _classCallCheck(this, ArticlesModel);

	        this._articles = [];
	        this.articlesSource = articlesSource;
	    }

	    _createClass(ArticlesModel, [{
	        key: 'load',
	        value: function load(source) {
	            var _this = this;

	            var self = this;

	            return new Promise(function (res, rej) {
	                fetch(self.getArticlesUrl()).then(function (response) {
	                    if (response.ok) {
	                        return response.json();
	                    } else {
	                        return rej(response);
	                    }
	                }).then(function (response) {
	                    _this._articles = response.articles;
	                    return res(response);
	                }).catch(function (error) {
	                    return console.log('Cannot get articles from server. ', error);
	                });
	            });
	        }
	    }, {
	        key: 'getArticlesUrl',
	        value: function getArticlesUrl(source) {
	            return this.articlesSource === _const2.default.NEWS_API_ARTICLES_SOURCE ? _const2.default.NEWS_API_ARTICLES_URL + '?source=' + source + '&apiKey=' + API_KEY : _const2.default.MONGO_ARTICLES_URL;
	        }
	    }, {
	        key: 'articles',
	        get: function get() {
	            return this._articles;
	        },
	        set: function set(data) {
	            this._articles = data;
	        }
	    }]);

	    return ArticlesModel;
	}();

	exports.default = ArticlesModel;

/***/ },

/***/ 310:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DATA_OPTIONS = {
	    weekday: 'long',
	    year: 'numeric',
	    month: 'long',
	    day: 'numeric'
	};

	var ArticlesView = function () {
	    function ArticlesView() {
	        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, ArticlesView);

	        var defaults = {
	            CONTAINER_EL_CLASSNAME: 'news-feed',
	            EL_CLASSNAME: 'articles'
	        };
	        this.options = Object.assign({}, defaults, options);

	        this.findElements();
	    }

	    _createClass(ArticlesView, [{
	        key: 'findElements',
	        value: function findElements() {
	            this.parentEl = document.getElementsByClassName(this.options.CONTAINER_EL_CLASSNAME)[0];
	            this.el = this.parentEl.getElementsByClassName(this.options.EL_CLASSNAME)[0];
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var articles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	            this.el.innerHTML = this.getHtml(articles);
	        }
	    }, {
	        key: 'getHtml',
	        value: function getHtml() {
	            var articles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	            var html = [];

	            html = articles.map(function (article) {
	                var date = ArticlesView.getFormattedDate(article.publishedAt);

	                return '\n                <article class=\'article\'>\n                    <a href=\'' + article.url + '\' target="_blank" class="article__link">\n                        <h1 class=\'article__headline\'>' + article.title + '</h2>\n                        <span class=\'article__info\'>' + date + (!!article.author ? ' | ' + article.author : '') + '</span>\n                        <img src=\'' + article.urlToImage + '\' class=\'article__img\'/>\n                        <p class=\'article__desc\'>' + article.description + '</p>\n                    </a>\n                </article>';
	            });

	            return html.join('');
	        }
	    }], [{
	        key: 'getFormattedDate',
	        value: function getFormattedDate() {
	            var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

	            return new Date(date).toLocaleString('en-US', DATA_OPTIONS);
	        }
	    }]);

	    return ArticlesView;
	}();

	exports.default = ArticlesView;

/***/ }

});