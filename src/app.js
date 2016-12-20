import './app.less';
import testCustomJsonLoader from './test.json';

class App {

    static run() {
        App.init();
        App.test();
    }

    static init() {
        let btnSNArray = document.getElementsByClassName('btn--show-news'),
            btnShowNews = btnSNArray.length ? btnSNArray[0] : '',
            btnSAArray = document.getElementsByClassName('btn--save-articles'),
            btnSaveArticles = btnSAArray.length ? btnSAArray[0] : '';

        if (!!btnShowNews) {
            btnShowNews.onclick = () => {
                require(['./news-feed/news-mongo.controller'], ({
                    NewsFeedController
                }) => {
                    let newsFeed = new NewsFeedController()
                });
            };
        }

        if (!!btnSaveArticles) {
            require(['./admin/admin.controller'], ({
                AdminController
            }) => {
                let admin = new AdminController()
            });
        }
    }

    static test() {
        // babel-plugin-compare-value-type test
        console.log('test1: 0 == \'\'' + (0 == ''));
        console.log('test2: 0 == \'0\'' + (0 == '0'));
        console.log('test3: 0 == []' + (0 == []));
        console.log('test4: 1 != 2' + (1 != 2));

        console.log(testCustomJsonLoader);
    }
}

document.addEventListener('DOMContentLoaded', () => App.run());