var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/users',function(err,db){
   
    if(err){
        console.log('Unable to connect with db');
    }
    else{
        console.log('Connection Estabilsihed');
        var items=db.collection('item');
        
        var cursor=items.find();
        //cursor.limit(5);
      //  cursor.skip(1);
        cursor.sort({name:1}).limit(5).skip(1);
        cursor.each(function(err,doc){
            if(doc!=null){
                console.log(doc);
            }
            
        })
        
    }
});

//Write q wuery that retrives exam documents,store in decending order ,skipping the first 50 and showing only the next 20