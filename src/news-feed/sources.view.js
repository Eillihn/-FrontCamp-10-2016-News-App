import EventManager from './event-manager';

export default class SourcesView {

    constructor(options = {}) {
        const defaults = {
            CONTAINER_EL_CLASSNAME: 'news-feed',
            SOURCES_CLASSNAME: 'sources',
            SOURCES_WRAPPER_CLASSNAME: 'choose-source-wrrapper'
        };
        this.options = Object.assign({}, defaults, options);
        this.eventManager = EventManager.getInstance();

        this.findElements();
        this.attachEvents();
    }

    findElements() {
        this.parentEl = document.getElementsByClassName(this.options.CONTAINER_EL_CLASSNAME)[0];
        this.el = this.parentEl.getElementsByClassName(this.options.SOURCES_CLASSNAME)[0];
        this.wrapper = document.getElementsByClassName(this.options.SOURCES_WRAPPER_CLASSNAME)[0];
    }

    attachEvents() {
        this.el.addEventListener('change', (e) => {
            this.eventManager.publish('update', e.target.value);
        });
    }

    render(sources = {}) {
        this.el.innerHTML = this.getHtml(sources);
        this.wrapper.className = this.wrapper.className.replace('hidden', '');
    }

    getHtml(sources = []) {
        return sources.map(source => {
            return `<option value='${source.id}'>${source.name}</option>`;
        }).join('');
    }
}