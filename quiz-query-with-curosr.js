var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/users',function(err,db){
    if(err){
        console.log('Unable to connect with db');
        
    }
    else{
        console.log('Connection Established');
        var scores=db.collection('scores');
        
       //Write q wuery that retrives exam documents,store in decending order ,skipping the first 50 and showing only the next 20
        
        var cursor=scores.find();
        cursor.sort({
            scores:-1
        }).limit(10).skip(5);
        cursor.each(function(err,scores){
            if(scores!=null){
                console.log(scores);
            }
        })
    }
});