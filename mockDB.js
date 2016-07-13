var config = require('./config.js'),
    crudService = require('./scripts/crud-service.js'),
    doc = require('./scripts/doc-config.js'),
    usage = require('./scripts/usage.js');

var url = config.db.url,
    cmds = [
        'view',
        // 'find',
        'insert',
        'delete',
        // 'replace',
        // 'update'
    ],
    collectionNames = [
        'users',
        'posts'
    ],
    args = process.argv.slice(2);

/*  Service calls to 'user-service'.  Note that
    parameters userData, query, replacement, and updatedData
    should be in JSON format */
var db = {

    find: function(collection, query) {
        crudService.find(url, collection, query);
    },

    findAll: function(collection) {
        crudService.find(url, collection, {});
    },

    insert: function(collection) {
        crudService.insert(url, collection, getData());
    },

    insertMany: function(collection, n, data) {
        var bulkData = [];
        for(var i = 0; i < n; i++) {
            bulkData.push(getData());
        }
        crudService.insertMany(url, collection, bulkData);
    },

    delete: function(collection, query) {
        crudService.delete(url, collection, query);
    },

    deleteAll: function(collection) {
        crudService.deleteAll(url, collection);
    },

    replaceDoc: function(collection, query, replacement) {
        crudService.replace(url, collection, query, replacement);
    },

    updateDoc: function(collection, query, updatedData) {
        crudService.update(url, collection, query, updatedData);
    }

}

// Run from the command line
if (cmds.indexOf(args[1]) < 0 || args.length < 2)
    console.log(usage.help);
else if(collectionNames.indexOf(args[0]) < 0)
    console.log(`\n${usage.collectionNames}\n`);
else {
    var collection = args[0],
        command = args[1];

    var getData = function() {
        return (collection === 'users') ? doc.generateUser() : doc.generatePost();
    }

    if (command === 'view') {
        db.findAll(collection);
    }
    else if (command === 'insert') {
        if(!args[2])
            db.insert(collection, getData());
        else if(isNaN(args[2]))
            console.log(`${usage.usage} ${usage.insert}`);
        else {
            db.insertMany(collection, args[2], getData());
        }
    }
    else if (command === 'delete') {
        if(!args[2])
            db.deleteAll(collection);
        else
            db.delete(collection, args[2]);
    }

}

// db.delete(collection, {state: 'SD'});
// db.find(collection, {name: 'Mary Poppins'});
// db.deleteAll(collection);
// db.replaceDoc(collection, {state: 'KY'}, {username: 'test'});
// db.replaceDoc(collection, {name: 'Kenyatta Kirlin'}, {name: 'Boxy'});
// db.updateDoc(collection, {name: 'Marjory Collins'}, {name: 'Mary Poppins'});
