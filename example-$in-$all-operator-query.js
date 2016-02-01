var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/users',function(err,db){
    
    if(err){
        console.log('Unable to connect with db'+err);
    }
    else{
        console.log('Connection Established');
        var persons=db.collection('jsonWithArray');
        //find all the combination of peach using $all operator
        persons.find({
            fruits:{
                $all:['Peach']
            }
        }).toArray(function(err,persons){
           if(err){
               console.log('Unable to find the persons'+err);
           }
            else{
               if(persons.length){
                   console.log(persons);
               }
           }
        });

       //find the Apple and Peach jsut only
        persons.find({
            fruits:{
                $in:['Peach','Apple','Oranges']
            }
        }).toArray(function(err,persons){
            if(err){
                console.log('Unable to find the persons'+err);
            }
            else{
                if(persons.length){
                    console.log(persons);
                }
            }
        });
    }
});