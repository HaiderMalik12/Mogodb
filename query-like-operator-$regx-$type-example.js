var MongoClient=require('mongodb').MongoClient;
var party;
MongoClient.connect('mongodb://localhost:27017/users',function(err,db){
   if(err){
       console.log('Unable to connect with db');
   }
   else{
       console.log('Connection Established');
       party=db.collection('party');

       //-----------------find like name--------------------------
       //---start with H
       party.find({name:{$regex:"^H"}}).toArray(function(err,parties){
          if(err){
              console.log('Unable to find the parties');
          }
           else{
              if(parties){
                  console.log(parties);
              }
          }
       });

       //---ends with k
       party.find({name:{$regex:"k$"}}).toArray(function(err,parties){
           if(err){
               console.log('Unable to find the parties');
           }
           else{
               if(parties){
                   console.log(parties);
               }
           }
       });

       //---data type  of name is string
       party.find({name:{$type:2}}).toArray(function(err,parties){
           if(err){
               console.log('Unable to find the parties');
           }
           else{
               if(parties){
                   console.log(parties);
               }
           }
       });
      //-- find those parties whose object property has profession
       //attribute name is profession
       party.find({profession:{$exists:true}}).toArray(function(err,parties){

           if(err){
               console.log('Unable to find the parties');
           }
           else{
               console.log(parties);
           }
       });

   }
});
