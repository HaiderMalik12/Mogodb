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

            var haiderMalik_exp2={
                name:'Haider Malik',
                city:'FSD',
                favt_song:'Illuminate',
                favt_colot:'White',
                eye_color:'brown'
            };
            var haiderMalik_exp3={
                name:'Haider',
                city:'LHR',
                favt_song:'Martin Garix Poison',
                favt_color:'Black',
                eye_color:'Blue',
                PhoneModel:'Moto X'
            }

         users.insert([haiderMalik1,haiderMalik_exp,haiderMalik_exp1,haiderMalik_exp2,haiderMalik_exp3],function(err,result){
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
            var jsonWith2Arrays={
                fruit:['Apple','peach','Mangor'],
                hobbies:['Coding','Learning New Technologies','Doing Software Developemnt']
            }
            var jsonWithArray3_d={
                fruit:['Oranges','Apple'],
                hobbies:['Listen SOng','Music','Coding','develpment'],
                repostory:['w3-school-javascript','w3school-angular']
            }
       jsonWithArray.insert([jsonWithArray_d,jsonWith2Arrays,jsonWithArray3_d],function(err,result){
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
             var customer1={
                 name:'Haider Malik',
                 address:{
                     city:'LHR',
                     state:'Palo Alto',
                     zipCode:38000,
                     street:'Park Road Chek Shehzad'
                 }
             };
        var customer2={
            name:'Ghayuur Abbaas',
            address:{
                city:'LHR',
                state:'Pakistan',
                zipCode:'37000',
                street:'Park ROad Check Shehzad'
            }
        }; subdcouments.insert([customer,customer1,customer2],function(err,result){
         
         if(err){
         	console.log('Unable to add subdcoument '+err);
         }else{
         	console.log('SubDocument is saved successfuly '+result);
         	  }
        });
         }

         //-----------------------------Calling FUnction -------------------
         //expandedUsersExample();
        //  subDocumentExamples();
       jsonWithArrayExample();

		//db.close();
	}
});