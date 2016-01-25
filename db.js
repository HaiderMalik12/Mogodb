var mongodb=require('mongodb');

//we need to work with MongoClient interface in order to connect to a mongodb server
var MongoClient=mongodb.MongoClient;

//Connection URL
var url="mongodb://localhost:27017/users";

MongoClient.connect(url,function(err,db){

	if(err){
		console.log('Unable to connect to the Mongodb Server Error'+err);	
	}
	else{
		console.log('Connection established to '+url);

        //--------------documents----------------------
        var users=db.collection('users');
        var jsonWithArray=db.collection('jsonWithArray');
        var subdcouments=db.collection('customers');




 //----------------------------------Expanded Users -------------------
         //without expanded users
        function expandedUsersExample(){
        	var haiderMalik1=({
        	name:'Haider Malik',
        	city:'FSD'
        });

        //Afrter expanded Users
        var haiderMalik_exp=({
        	name:'Haider Malik',
        	city:'FSD',
        	favt_song:'Like Home'
        });

        //After Expandeed Users
        var haiderMalik_exp1=({
          name:'Haider Malik',
          city:'FSD',
          favt_song:'illuminate',
          favt_color:'White,Blue,Black'
        });

         users.insert([haiderMalik1,haiderMalik_exp,haiderMalik_exp1],function(err,result){
         	if(err){
         		console.log('Unable to save the users '+err);
         	}
         	else{
         		console.log('user saved to document: '+result);
         	}
         });
        }
      
      //----------------jsonWithArray-----------------------------
        function jsonWithArrayExample(){
        	 var jsonWithArray_d={
         fuits:['Apple','Peach','Mango','Banans','Squash']
       };
       jsonWithArray.insert(jsonWithArray_d,function(err,result){
       	if(err)
       	{
       		console.log('Unable to sabe jsonWithArray '+err);
       	}
       	else{
       		console.log('Data saved successfuly in jsonWithArray '+result);
       	}
       });

        }
       //------------------subdcouments ---------------------
        
         function subDocumentExamples(){
         	  var customer={
         
         name:'Haider Malik',
         address:{
         city:'Palo Alto',
         state:'California',
         zipCode:94305,
         street:'23 Elm Drive'
     }
        };
        subdcouments.insert(customer,function(err,result){
         
         if(err){
         	console.log('Unable to add subdcoument '+err);
         }else{
         	console.log('SubDocument is saved successfuly '+result);
         	  }
        });
         }

         //-----------------------------Calling FUnction -------------------
          subDocumentExamples();


		//db.close();
	}
});