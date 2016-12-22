export default class DeleteArticleView {

    constructor(options = {}) {
        const defaults = {
            BTN_DELETE_ARTICLE_CLASSNAME: 'btn--delete-article',
            DELETE_PARENT_EL_CLASSNAME: 'table--delete-articles'
        };
        this.options = Object.assign({}, defaults, options);

        this.findElements();
        this.init();
    }

    findElements() {
        this.deleteElParent = document.getElementsByClassName(this.options.DELETE_PARENT_EL_CLASSNAME)[0];
    }

    init() {
        this.deleteElParent.addEventListener('click', (e) => {
            if (e.target && e.target.className.indexOf(this.options.BTN_DELETE_ARTICLE_CLASSNAME) > -1) {
                e.preventDefault();
                let title = e.target.dataset['title'];

                fetch('/api/article/delete', {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            title
                        })
                    })
                    .then((response) => {
                        window.location.reload();
                        return response.json();
                    })
                    .catch((error) => console.log('Cannot delete article on server. ', error));
            }
        });
    }
}
