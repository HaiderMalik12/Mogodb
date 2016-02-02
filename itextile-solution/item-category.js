var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/users',function(err,db){
    if(err){
        console.log('Unable to connect with db');
        
    }
    else{
        console.log('Connection Established');
        var bunchOfItemCategories=db.collection('itemCategory');
        
        //----------------insert itemCategory-------------------
        
      bunchOfItemCategories.insert({
          name:'Grey'
        
      },function(err,result){
          if(err){
              console.log('Unable to insert the ItemCategory');
          }
          else{
              console.log('ItemCategory Inserted '+result);
          }
      });
        
        //-------------------Query by Name -------------------------    
        bunchOfItemCategories.find({
            name:'Yarn'
        }).toArray(function(err,itemCategories){
           if(err){
               console.log('Unable to find ItemCategories');
           } 
            else{
                
                if(itemCategories.length){
                    console.log(itemCategories);
                }
            }
        });
    //----------------------Query ItemCategory Name start with Y-
      
     bunchOfItemCategories.find({
         name:{
             $regex: "^Y"
            
         }
     }).toArray(function(err,itemCategories){
        
         if(err){
             console.log('Unable to find ItemCategroies');
         }
         else{
             if(itemCategories.length){
                   console.log('--------ItemCategory starts with Y---------------');
                 console.log(itemCategories);
             }else{
                 console.log('No ItemCategory Found');
             }
         }
     });
        
    //---------------Find ItemCategory ends with n------------
         bunchOfItemCategories.find({
         name:{
             $regex: "n$"
            
         }
     }).toArray(function(err,itemCategories){
        
         if(err){
             console.log('Unable to find ItemCategroies');
         }
         else{
             if(itemCategories.length){
                   console.log('--------ItemCategory ends with n ---------------');
                 console.log(itemCategories);
             }else{
                 console.log('No ItemCategory Found');
             }
         }
     });
        
    //-------------find itemCategories that name is Yarn or ends with n
        
      bunchOfItemCategories.find({
        $or:[
            {name:{$regex:'^Y'}},{name:{$regex:'n$'}}
        ] 
     }).toArray(function(err,itemCategories){
        
         if(err){
             console.log('Unable to find ItemCategroies');
         }
         else{
             if(itemCategories.length){
                   console.log('--------ItemCategory starts with Y or ends with n ---------------');
                 console.log(itemCategories);
             }else{
                 console.log('No ItemCategory Found');
             }
         }
     });    
        
    //----------------Find ItemCategories of Yarn and Grey and Dye using $in    
          bunchOfItemCategories.find({
         name: 
              {
                  $in:['Yarn','Grey'
            
        ] }
     }).toArray(function(err,itemCategories){
        
         if(err){
             console.log('Unable to find ItemCategroies');
         }
         else{
             if(itemCategories.length){
                   console.log('--------ItemCategory Yarn and Grey  ---------------');
                 console.log(itemCategories);
             }else{
                 console.log('No ItemCategory Found');
             }
         }
     });  
        

    //--------------Find ItemCategories of Yarn with combination attributes
       bunchOfItemCategories.find({
         name: 
              {
                  $all:['Grey'
            
        ] }
     }).toArray(function(err,itemCategories){
        
         if(err){
             console.log('Unable to find ItemCategroies');
         }
         else{
             if(itemCategories.length){
                   console.log('--------ItemCategory $all Yarn and Grey---------------');
                 console.log(itemCategories);
             }else{
                 console.log('No ItemCategory Found');
             }
         }
     });  
        
        
    }
})