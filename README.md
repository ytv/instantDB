#instantDB
###a tool to instantly populate a database with node.js, all from the command-line interface!


###Usage
1. After downloading instantDB, find your way to the folder using the CLI.   
2. Type in the following:
```
node instantDB.js <collectionName> <command>
```
where `<command>` is one of the following supported services:
```
   view        ex) node instantDB.js <collectionName> view

   insert      ex) node instantDB.js <collectionName> insert [n]

   delete      ex) node instantDB.js <collectionName> delete
```

###Notes
```
1. <collectionName> is just a name.  It could be an old collection you want to
   reuse or the name of a new collection you wish to create.
2. [n] is a positive integer, used to dictate the number of documents to create.
   If this is left out, only 1 document will be inserted into the collection.
```
