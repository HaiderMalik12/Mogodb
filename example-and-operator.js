var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/users', function (err, db) {
    if (err) {
        console.log('Unable to connect with Database');
    }
    else {
        console.log('Connection Established');
        var party = db.collection('party');

        //query with $and operator

        party.find({
            $and: [
                {
                id: 1
               },
                {
               name:'Haider Malik'
            }
            ]
        }).toArray(function(err,parties){
           if(err){
               console.log('Unable to find the Parties');
           }
            else{

               if(parties.length){
                   console.log(parties);
               }
               else{
                   console.log('No Party found');
               }
           }
        });
    }
});