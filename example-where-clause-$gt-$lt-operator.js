var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/users', function (err, db) {

    if (!err) {
        var party = db.collection('party');
        console.log('Connection Established');

        party.find({credit: {$gte: 100},debit:{$gt:0}}).toArray(function (err, parties) {
            if (!err) {
                if (parties) {
                    console.log('Parties find whose credit is equal to and greater than 1000 ');
                    console.log(parties);
                } else {
                    console.log('No Party Found');
                }
            }
            else {
                console.log('Unable to find the parties' + err);
            }
        });

        //-----------------------------strings inequalities---------------------------
         console.log('----------------------Add String Equalities--------------------------------------------');
        party.find({name:{$gt:"H"}}).toArray(function(err,parties){

            if(err){
                console.log('Unable to find the Parties');
            }
            else{
                if(parties){
                    console.log(parties);
                }
            }

        });
    }
    else {
        console.log('Unable to connect with Db')
    }
});