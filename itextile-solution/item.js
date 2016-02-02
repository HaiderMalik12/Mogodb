var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/users',function(err,db){
   if(err){
       console.log('Unable to connect woth Db');
   } 
    else{
        console.log('Connect Establisted');
        var bunchOfItems=db.collection('item');
        
        //----------------query dot notation---------------
        //Act as a join
        //query those items that itemCategory =yarn or itemCategoryid=1
        bunchOfItems.find(
            
            {$or:[{"itemCategory.name":'Grey'},
                  {"itemCategory.id":1}
                 ]}
        ).toArray(function(err,items){
            if(err){
                console.log('Unable to Find Items');
            }
            else{
                if(items.length){
                    console.log(items);
                }
                else{
                    console.log('No Item Found');
                }
                
            }
        });
        
        
    }
});