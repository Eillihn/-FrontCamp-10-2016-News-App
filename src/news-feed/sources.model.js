const SOURCES_URL = 'https://newsapi.org/v1/sources?language=en';

export default class SourcesModel {

    constructor() {
        this._sources = [];
    }

    get sources() {
        return this._sources;
    }

    set sources(data) {
        this._sources = data;
    }

    getFirstSourceId() {
        return this.sources.length ? this.sources[0].id : '';
    }

    load() {
        return new Promise((res, rej) => {
            fetch(SOURCES_URL)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return rej(response);
                    }
                })
                .then((response) => {
                    this.sources = response.sources;
                    return res(response);
                })
                .catch((error) => console.log('Cannot get sources from server. ', error));
        });
    }
}