var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/users',function(err,db){
    
    if(err){
        console.log('Unable to connect with db'+err);
    }
    else{
        console.log('Connection Established');
        var persons=db.collection('jsonWithArray');
        //querying fruits collection which is inside the jsonWithArray Collection
        persons.find({
          fruits:'Apple'
        }).toArray(function(err,fruits){
           if(err){
               console.log('Unable to Find the Fruits'+err);
           } 
            else{
                if(fruits.length){
                    console.log(fruits);
                }else{
                    console.log('No Fruit Found');
                }
            }
        });
    }
});