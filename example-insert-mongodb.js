var mongodb=require('mongodb');

var MongoClient=mongodb.MongoClient;

var url="mongodb://localhost:27017/test";

MongoClient.connect(url,function(err,db){
   if(err){
       console.log('Unable to connect with db '+err);
   }else{
       var fruits=db.collection('fruit');
       var orange={
            name:'Apple',
            color:'red',
            shape:'round'

       };

       //fruits.insert(orange,function(err,orange){
       //    if(orange){
       //        console.log('Fruit is saved sucessfully');
       //    }else{
       //        console.log('unable to save the fruit '+err);
       //    }
       //});

       fruits.insert(orange).then(function(orange){
           console.log('Fruit is saved successfully ');
       },function(err){
           console.log('Unable to save the Orange');
       });

   }
});
