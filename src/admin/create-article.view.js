export default class CreateArticleView {

    constructor(options = {}) {
        const defaults = {
            BTN_SAVE_ARTICLES_CLASSNAME: 'btn--save-articles',
            FORM_CLASSNAME: 'form--create-article'
        };
        this.options = Object.assign({}, defaults, options);

        this.findElements();
        this.init();
    }

    findElements() {
        this.formEl = document.getElementsByClassName(this.options.FORM_CLASSNAME)[0];
        this.saveEl = document.getElementsByClassName(this.options.BTN_SAVE_ARTICLES_CLASSNAME)[0];
        this.formInputElArray = this.formEl.querySelectorAll('input, textarea');
    }

    init() {
        this.saveEl.onclick = (e) => {
            e.preventDefault();

            fetch('/api/article/create', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: this.getFormData()
                })
                .then((response) => {
                    window.location.reload();
                    return response.json();
                })
                .catch((error) => console.log('Cannot save article on server. ', error));
        };
    }

    getFormData() {
        let formData = {};

        this.formInputElArray.forEach((el) => formData[el.name] = el.value);

        return JSON.stringify(formData);
    }

}