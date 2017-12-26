WE ARE USING MONGODB!!

Our first mongo commands:
mongod : starts the mongo daemon.
1) mongo - opens up the mongo shell
2)help : gives us a list of some of the basic features of mongo.
3)show dbs : it will show dataBase names
4)use: to use an existng database
5)insert: 
6)update: if you just update, it will replace all values for that field with the new value you give.
          to change a specific value, use " $set ". for example: db.dogs.update({name: "rusty"}, {$set: {name: "Tater", isCute: true}}),
          here the name will change from rusty to tater. and add isCute: true to the db. (remember this example from the database lecture)
7)remove
          
          
What is mongoose?

Mongoose is an ODM( object data mapper), which helps us to interact with the database in our JS file.
Its an elegant object modelling for node js.
its a package that we install with npm that helps us interact with mongodb using JS files.
