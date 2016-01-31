var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/users',function(err,db){
    if(err){
        console.log('Unable to connect with Db');
    }
    else{
        var scores=db.collection('scores');

        //----------find the scores where the score is less than 50 or greater than 90
        scores.find({$or:[{scores:{$gt:90}},{scores:{$lt:50}}]}).toArray(function(err,scores){
           if(err){
               console.log('Unable to get the scores');
           }
            else{
               if(scores){
                   console.log(scores);
               }
           }
        });

    }
});