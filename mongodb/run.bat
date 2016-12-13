(
:: 1. Create a dump of DB as a archive in .gz format.
mongo < js/drop-collections.js;
import.bat;
mongodump --archive=posts.gz --gzip --db posts;

:: 2. Design: Create a Posts DB with instances: authors/articles/comments/tags and others. Try to practice CRUD operation.
mongo < js/crud.js;

:: 3.  Make your DB as faster as need but not more (create Indexes).
mongo < js/indexes.js;

:: 4. There are documents for each student (student_id) across a variety of classes (class_id).
:: Your task is to calculate the class with the best average student performance. 
:: This involves calculating an average for each student in each class of all non-quiz assessments 
:: and then averaging those numbers to get a class average.
mongo < js/aggregate.js
)