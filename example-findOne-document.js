var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var url="mongodb://localhost:27017/users";
MongoClient.connect(url,function(err,db){
 if(err){
 	console.log('Unable to connect the Db');
 }
 else{
 	var users=db.collection('users');

    //where name=Haider Malik
    //projection name,city
 	users.findOne({name:"Haider Malik"},{name:true,city:true,favt_song:true}).then(function(user){
     console.log(user);
 	},function(err){
     console.log('Unable to find the user'+err);
 	});
 }

});