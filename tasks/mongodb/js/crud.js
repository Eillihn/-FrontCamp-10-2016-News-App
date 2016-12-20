use posts

db.articles.find({"author": "BBC News"}, {_id: 0, urlToImage: 0, description: 0}).limit(1).pretty()
db.authors.insert({"name": "Vasya", "email": "vasya@gmail.com"})
db.comments.updateMany({author: "Test User"}, { $set: {author: "Sam"}})
db.tags.remove({"name": "Test Tag"})