:: Posts DB collections
mongoimport --db posts  --collection authors  --file json/authors.json
mongoimport --db posts  --collection articles --file json/articles.json
mongoimport --db posts  --collection comments --file json/comments.json
mongoimport --db posts  --collection tags     --file json/tags.json

:: Univer DB: Grades collection
mongoimport --db univer --collection grades --file json/grades.json