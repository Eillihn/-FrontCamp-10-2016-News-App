let mongoose = require('../lib/mongoose');
let Schema = mongoose.Schema;

let Article = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    publishedAt: {
        type: String,
        default: new Date().toISOString()
    },
    url: {
        type: String,
        required: false
    },
    urlToImage: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Article', Article);
