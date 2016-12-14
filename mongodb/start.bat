mkdir db0 db1 db2

start mongod --port 27017 --dbpath db0 --replSet rs0
start mongod --port 27018 --dbpath db1 --replSet rs0
start mongod --port 27019 --dbpath db2 --replSet rs0