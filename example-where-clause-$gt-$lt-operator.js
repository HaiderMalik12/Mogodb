var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/users', function (err, db) {

    if (!err) {
        var party = db.collection('party');
        console.log('Connection Established');

        party.find({credit: {$gte: 100}}).toArray(function (err, parties) {
            if (!err) {
                if(parties) {
                    console.log('Parties find whose credit is equal to and greater than 1000 ');
                    console.log(parties);
                }else{
                    console.log('No Party Found');
                }
            }
            else {
                console.log('Unable to find the parties' + err);
            }
        });
    }
    else {
        console.log('Unable to connect with Db')
    }
});