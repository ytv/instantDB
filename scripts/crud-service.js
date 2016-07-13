var mongo = require('mongodb').MongoClient;

module.exports = {
    find: function(url, collectionName, query) {
        mongo.connect(url, function(err, db) {
            if(err) throw "ERROR connecting to DB - " + err;
            db.collection(collectionName).find(query).toArray(function(err, docs) {
                if(err)
                    throw "ERROR finding documents - " + err;
                console.log(docs);
                db.close();
            });
        });
    },

    insert: function(url, collectionName, data) {
        mongo.connect(url, function(err, db) {
            if(err) throw "ERROR connecting to DB - " + err;
            db.collection(collectionName).insert(data, function(err, data) {
                if(err)
                    throw "ERROR inserting document - " + err;
                console.log('Document successfully inserted to \'' + collectionName + '\'');
                db.close();
            });
        })
    },

    insertMany: function(url, collectionName, bulkData) {
        mongo.connect(url, function(err, db) {
            if(err) throw "ERROR connecting to DB - " + err;
            db.collection(collectionName).insertMany(bulkData, function(err, data) {
                if(err)
                    throw "ERROR inserting documents - " + err;
                console.log(bulkData.length + ' documents successfully inserted to \'' + collectionName + '\'');
                db.close();
            });
        })
    },

    replace: function(url, collectionName, query, replacement) {
        mongo.connect(url, function(err, db) {
            if(err) throw "ERROR connecting to DB - " + err;
            db.collection(collectionName).update(query, replacement, function(err, data) {
                if(err)
                    throw "ERROR replacing document - " + err;
                console.log('Document successfully replaced in \'' + collectionName + '\'');
                db.close();
            });
        });
    },

    update: function(url, collectionName, query, updatedData) {
        mongo.connect(url, function(err, db) {
            if(err) throw "ERROR connecting to DB - " + err;
            db.collection(collectionName).update(query, {$set: updatedData}, function(err, data) {
                if(err)
                    throw "ERROR updating document - " + err;
                console.log('Document successfully updated in \'' + collectionName + '\'');
                db.close();
            });
        });
    },

    delete: function(url, collectionName, query) {
        mongo.connect(url, function(err, db) {
            if(err) throw "ERROR connecting to DB - " + err;
            db.collection(collectionName).remove(query, function(err, data) {
                if(err)
                    throw "ERROR deleting document - " + err;
                console.log('Document successfully deleted in \'' + collectionName + '\'');
                db.close();
            })
        });
    },

    deleteAll: function(url, collectionName) {
        mongo.connect(url, function(err, db) {
            if(err) throw "ERROR connecting to DB - " + err;
            db.collection(collectionName).deleteMany({}, function(err, data) {
                if(err)
                    throw "ERROR deleting all documents - " + err;
                console.log('All documents successfully deleted in \'' + collectionName + '\'');
                db.close();
            });
        });
        }
}
