webpackJsonp([2],{

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AdminController = undefined;

	var _createArticle = __webpack_require__(312);

	var _createArticle2 = _interopRequireDefault(_createArticle);

	var _deleteArticle = __webpack_require__(313);

	var _deleteArticle2 = _interopRequireDefault(_deleteArticle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AdminController = function AdminController() {
	    _classCallCheck(this, AdminController);

	    this.createArticleView = new _createArticle2.default();
	    this.deleteArticleView = new _deleteArticle2.default();
	};

	exports.AdminController = AdminController;

/***/ },

/***/ 312:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreateArticleView = function () {
	    function CreateArticleView() {
	        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, CreateArticleView);

	        var defaults = {
	            BTN_SAVE_ARTICLES_CLASSNAME: 'btn--save-articles',
	            FORM_CLASSNAME: 'form--create-article'
	        };
	        this.options = Object.assign({}, defaults, options);

	        this.findElements();
	        this.init();
	    }

	    _createClass(CreateArticleView, [{
	        key: 'findElements',
	        value: function findElements() {
	            this.formEl = document.getElementsByClassName(this.options.FORM_CLASSNAME)[0];
	            this.saveEl = document.getElementsByClassName(this.options.BTN_SAVE_ARTICLES_CLASSNAME)[0];
	            this.formInputElArray = this.formEl.querySelectorAll('input, textarea');
	        }
	    }, {
	        key: 'init',
	        value: function init() {
	            var _this = this;

	            this.saveEl.onclick = function (e) {
	                e.preventDefault();

	                fetch('/api/article/create', {
	                    method: 'POST',
	                    headers: {
	                        'Accept': 'application/json',
	                        'Content-Type': 'application/json'
	                    },
	                    body: _this.getFormData()
	                }).then(function (response) {
	                    window.location.reload();
	                    return response.json();
	                }).catch(function (error) {
	                    return console.log('Cannot save article on server. ', error);
	                });
	            };
	        }
	    }, {
	        key: 'getFormData',
	        value: function getFormData() {
	            var formData = {};

	            this.formInputElArray.forEach(function (el) {
	                return formData[el.name] = el.value;
	            });

	            return JSON.stringify(formData);
	        }
	    }]);

	    return CreateArticleView;
	}();

	exports.default = CreateArticleView;

/***/ },

/***/ 313:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DeleteArticleView = function () {
	    function DeleteArticleView() {
	        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, DeleteArticleView);

	        var defaults = {
	            BTN_DELETE_ARTICLE_CLASSNAME: 'btn--delete-article',
	            DELETE_PARENT_EL_CLASSNAME: 'table--delete-articles'
	        };
	        this.options = Object.assign({}, defaults, options);

	        this.findElements();
	        this.init();
	    }

	    _createClass(DeleteArticleView, [{
	        key: 'findElements',
	        value: function findElements() {
	            this.deleteElParent = document.getElementsByClassName(this.options.DELETE_PARENT_EL_CLASSNAME)[0];
	        }
	    }, {
	        key: 'init',
	        value: function init() {
	            var _this = this;

	            this.deleteElParent.addEventListener('click', function (e) {
	                if (e.target && e.target.className.indexOf(_this.options.BTN_DELETE_ARTICLE_CLASSNAME) > -1) {
	                    e.preventDefault();
	                    var title = e.target.dataset['title'];

	                    fetch('/api/article/delete', {
	                        method: 'DELETE',
	                        headers: {
	                            'Accept': 'application/json',
	                            'Content-Type': 'application/json'
	                        },
	                        body: JSON.stringify({ title: title })
	                    }).then(function (response) {
	                        window.location.reload();
	                        return response.json();
	                    }).catch(function (error) {
	                        return console.log('Cannot delete article on server. ', error);
	                    });
	                }
	            });
	        }
	    }]);

	    return DeleteArticleView;
	}();

	exports.default = DeleteArticleView;

/***/ }

});