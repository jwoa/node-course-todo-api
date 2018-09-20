// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log("Unable to connect MongoDB server.");
    } else {
        console.log('Connected to MongoDB server.');
    }

    // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ba3e938da6544c8c6d2af05')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5ba3fb9410fd87ad6d6cd8fb")
    }, {
        $set: {
            name: 'Michael Agyekum'
        },
        $inc: {
            age: 1
        }
        },
    {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    // db.close();
});
