var config = require('./config/config.js'),
    doc = require('./config/doc-config.js'),
    crudService = require('./scripts/crud-service.js'),
    usage = require('./scripts/usage.js');

var url = config.url,
    cmds = {
        view: 'view',
        insert: 'insert',
        delete: 'delete'
    },
    collectionNames = {
        users: 'users',
        posts: 'posts',
        events: 'events'
    },
    args = process.argv.slice(2);

//  Service calls to 'user-service'.
var db = {
    findAll: function(collection) {
        crudService.find(url, collection, {});
    },
    insert: function(collection) {
        crudService.insert(url, collection, doc.generateData());
    },
    insertMany: function(collection, n, data) {
        var bulkData = [];
        for(var i = 0; i < n; i++) {
            bulkData.push(doc.generateData());
        }
        crudService.insertMany(url, collection, bulkData);
    },
    delete: function(collection, query) {
        crudService.delete(url, collection, query);
    },
    deleteAll: function(collection) {
        crudService.deleteAll(url, collection);
    }
}

//  Run from the command line
if(!(args[1] in cmds)  || args.length < 2)
    console.log(usage.help);
else {
    var collection = args[0],
        command = args[1];
    if (command === cmds.view) {
        db.findAll(collection);
    } else if (command === cmds.insert) {
        if(!args[2])
            db.insert(collection);
        else if(isNaN(args[2]))
            console.log(`${usage.usage} ${usage.insert}`);
        else
            db.insertMany(collection, args[2]);
    } else if (command === cmds.delete) {
        if(!args[2])
            db.deleteAll(collection);
    }
}
