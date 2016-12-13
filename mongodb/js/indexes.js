use posts

db.articles.createIndex({title: 1})
db.authors.createIndex({name: 1})
db.comments.createIndex({author: 1})
db.tags.createIndex({name: 1})