import testCustomJsonLoader from './test.json';

class App {

    static run() {
        App.init();
        App.test();
    }

    static init() {
        let btnArray = document.getElementsByClassName('btn--show-news'),
            btn = btnArray.length ? btnArray[0] : '';

        if (!btn) {
            return;
        }

        btn.onclick = () => {
            require(['./news-feed/NewsFeed'], ({
                NewsFeed
            }) => {
                let newsFeed = new NewsFeed()

                newsFeed.init();

                btn.className += ' hidden';
            });
        };
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